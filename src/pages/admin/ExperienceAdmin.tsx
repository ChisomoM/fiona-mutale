import { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { getExperience, addExperience, updateExperience, deleteExperience } from '../../lib/adminService';
import type { Experience } from '../../lib/types';

interface ExperienceWithId extends Experience {
    id?: string;
}

export const ExperienceAdmin = () => {
    const [experiences, setExperiences] = useState<ExperienceWithId[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<Partial<ExperienceWithId>>({
        role: '',
        company: '',
        companySubtitle: '',
        dates: '',
        duration: '',
        location: '',
        description: '',
        skills: [],
        order: 0,
        isActive: true
    });

    useEffect(() => {
        loadExperience();
    }, []);

    const loadExperience = async () => {
        try {
            setLoading(true);
            const data = await getExperience();
            setExperiences(data as ExperienceWithId[]);
        } catch (error) {
            console.error('Error loading experience:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (experience: ExperienceWithId) => {
        setEditingId(experience.id || null);
        setFormData(experience);
        setIsAdding(false);
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingId(null);
        setFormData({
            role: '',
            company: '',
            companySubtitle: '',
            dates: '',
            duration: '',
            location: '',
            description: '',
            skills: [],
            order: experiences.length,
            isActive: true
        });
    };

    const handleCancel = () => {
        setEditingId(null);
        setIsAdding(false);
        setFormData({
            role: '',
            company: '',
            companySubtitle: '',
            dates: '',
            duration: '',
            location: '',
            description: '',
            skills: [],
            order: 0,
            isActive: true
        });
    };

    const handleSave = async () => {
        try {
            if (isAdding) {
                await addExperience(formData as Omit<Experience, 'createdAt' | 'updatedAt'>);
            } else if (editingId) {
                await updateExperience(editingId, formData);
            }
            await loadExperience();
            handleCancel();
        } catch (error) {
            console.error('Error saving experience:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this experience?')) {
            try {
                await deleteExperience(id);
                await loadExperience();
            } catch (error) {
                console.error('Error deleting experience:', error);
            }
        }
    };

    const updateFormField = (field: keyof ExperienceWithId, value: string | number | string[] | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSkillChange = (index: number, value: string) => {
        const newSkills = [...(formData.skills || [])];
        newSkills[index] = value;
        updateFormField('skills', newSkills);
    };

    const addSkill = () => {
        updateFormField('skills', [...(formData.skills || []), '']);
    };

    const removeSkill = (index: number) => {
        const newSkills = (formData.skills || []).filter((_, i) => i !== index);
        updateFormField('skills', newSkills);
    };

    if (loading) {
        return (
            <AdminLayout title="Manage Experience">
                <div className="text-center py-8">Loading...</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout title="Manage Experience">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
                    {!isAdding && !editingId && (
                        <Button onClick={handleAdd}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Experience
                        </Button>
                    )}
                </div>

                {(isAdding || editingId) && (
                    <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            {isAdding ? 'Add New Experience' : 'Edit Experience'}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Role</label>
                                <input
                                    type="text"
                                    value={formData.role || ''}
                                    onChange={(e) => updateFormField('role', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Company</label>
                                <input
                                    type="text"
                                    value={formData.company || ''}
                                    onChange={(e) => updateFormField('company', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Company Subtitle</label>
                                <input
                                    type="text"
                                    value={formData.companySubtitle || ''}
                                    onChange={(e) => updateFormField('companySubtitle', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Dates</label>
                                    <input
                                        type="text"
                                        value={formData.dates || ''}
                                        onChange={(e) => updateFormField('dates', e.target.value)}
                                        placeholder="e.g., Jan 2020 - Present"
                                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Duration</label>
                                    <input
                                        type="text"
                                        value={formData.duration || ''}
                                        onChange={(e) => updateFormField('duration', e.target.value)}
                                        placeholder="e.g., 2 yrs 3 mos"
                                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Location</label>
                                <input
                                    type="text"
                                    value={formData.location || ''}
                                    onChange={(e) => updateFormField('location', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Description</label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => updateFormField('description', e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Order</label>
                                    <input
                                        type="number"
                                        value={formData.order || 0}
                                        onChange={(e) => updateFormField('order', parseInt(e.target.value))}
                                        className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div className="flex items-center pt-7">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.isActive || false}
                                            onChange={(e) => updateFormField('isActive', e.target.checked)}
                                            className="mr-2"
                                        />
                                        <span className="text-sm font-medium">Active</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-medium">Skills</label>
                                    <button
                                        onClick={addSkill}
                                        className="text-sm text-primary hover:underline"
                                    >
                                        + Add Skill
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {(formData.skills || []).map((skill, index) => (
                                        <div key={index} className="flex gap-2">
                                            <input
                                                type="text"
                                                value={skill}
                                                onChange={(e) => handleSkillChange(index, e.target.value)}
                                                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                            <button
                                                onClick={() => removeSkill(index)}
                                                className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
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
                    {experiences.map((experience) => (
                        <Card key={experience.id} className="p-6">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {experience.role}
                                    </h3>
                                    <p className="text-primary font-medium">{experience.company}</p>
                                    {experience.companySubtitle && (
                                        <p className="text-sm text-muted-foreground">{experience.companySubtitle}</p>
                                    )}
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {experience.dates} • {experience.duration} • {experience.location}
                                    </p>
                                    <p className="text-muted-foreground mt-2">{experience.description}</p>
                                    {experience.skills && experience.skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {experience.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Order: {experience.order} • {experience.isActive ? 'Active' : 'Inactive'}
                                    </p>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <button
                                        onClick={() => handleEdit(experience)}
                                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => experience.id && handleDelete(experience.id)}
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
