import { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { getEducation, addEducation, updateEducation, deleteEducation } from '../../lib/adminService';
import type { Education } from '../../lib/types';

interface EducationWithId extends Education {
    id?: string;
}

export const EducationAdmin = () => {
    const [educations, setEducations] = useState<EducationWithId[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<Partial<EducationWithId>>({
        degree: '',
        field: '',
        institution: '',
        dates: '',
        order: 0
    });

    useEffect(() => {
        loadEducation();
    }, []);

    const loadEducation = async () => {
        try {
            setLoading(true);
            const data = await getEducation();
            setEducations(data as EducationWithId[]);
        } catch (error) {
            console.error('Error loading education:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (education: EducationWithId) => {
        setEditingId(education.id || null);
        setFormData(education);
        setIsAdding(false);
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingId(null);
        setFormData({
            degree: '',
            field: '',
            institution: '',
            dates: '',
            order: educations.length
        });
    };

    const handleCancel = () => {
        setEditingId(null);
        setIsAdding(false);
        setFormData({
            degree: '',
            field: '',
            institution: '',
            dates: '',
            order: 0
        });
    };

    const handleSave = async () => {
        try {
            if (isAdding) {
                await addEducation(formData as Omit<Education, 'createdAt' | 'updatedAt'>);
            } else if (editingId) {
                await updateEducation(editingId, formData);
            }
            await loadEducation();
            handleCancel();
        } catch (error) {
            console.error('Error saving education:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this education entry?')) {
            try {
                await deleteEducation(id);
                await loadEducation();
            } catch (error) {
                console.error('Error deleting education:', error);
            }
        }
    };

    const updateFormField = (field: keyof EducationWithId, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (loading) {
        return (
            <AdminLayout title="Manage Education">
                <div className="text-center py-8">Loading...</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout title="Manage Education">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-foreground">Education</h2>
                    {!isAdding && !editingId && (
                        <Button onClick={handleAdd}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Education
                        </Button>
                    )}
                </div>

                {(isAdding || editingId) && (
                    <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            {isAdding ? 'Add New Education' : 'Edit Education'}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Degree</label>
                                <input
                                    type="text"
                                    value={formData.degree || ''}
                                    onChange={(e) => updateFormField('degree', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Field of Study</label>
                                <input
                                    type="text"
                                    value={formData.field || ''}
                                    onChange={(e) => updateFormField('field', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Institution</label>
                                <input
                                    type="text"
                                    value={formData.institution || ''}
                                    onChange={(e) => updateFormField('institution', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Dates</label>
                                <input
                                    type="text"
                                    value={formData.dates || ''}
                                    onChange={(e) => updateFormField('dates', e.target.value)}
                                    placeholder="e.g., 2015 - 2019"
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Order</label>
                                <input
                                    type="number"
                                    value={formData.order || 0}
                                    onChange={(e) => updateFormField('order', parseInt(e.target.value))}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="flex gap-2 pt-4">
                                <Button onClick={handleSave}>
                                    <Save className="w-4 h-4 mr-2" />
                                    Save
                                </Button>
                                <Button onClick={handleCancel} variant="outline">
                                    <X className="w-4 h-4 mr-2" />
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </Card>
                )}

                <div className="grid gap-4">
                    {educations.map((education) => (
                        <Card key={education.id} className="p-6">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {education.degree}
                                    </h3>
                                    <p className="text-primary font-medium">{education.field}</p>
                                    <p className="text-muted-foreground">{education.institution}</p>
                                    {education.dates && (
                                        <p className="text-sm text-muted-foreground mt-1">{education.dates}</p>
                                    )}
                                    <p className="text-xs text-muted-foreground mt-2">Order: {education.order}</p>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <button
                                        onClick={() => handleEdit(education)}
                                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => education.id && handleDelete(education.id)}
                                        className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};
