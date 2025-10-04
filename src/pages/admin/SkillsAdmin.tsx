import { useState, useEffect } from 'react';

import { AdminLayout } from '../../components/admin/AdminLayout';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { getSkillCategories, addSkillCategory, updateSkillCategory, deleteSkillCategory } from '../../lib/adminService';
import type { SkillCategory } from '../../lib/types';

interface SkillCategoryWithId extends SkillCategory {
    id?: string;
}

export const SkillsAdmin = () => {

    const [categories, setCategories] = useState<SkillCategoryWithId[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<Partial<SkillCategoryWithId>>({
        name: '',
        skills: [],
        order: 0
    });

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            setLoading(true);
            const data = await getSkillCategories();
            setCategories(data as SkillCategoryWithId[]);
        } catch (error) {
            console.error('Error loading skill categories:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (category: SkillCategoryWithId) => {
        setEditingId(category.id || null);
        setFormData(category);
        setIsAdding(false);
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingId(null);
        setFormData({
            name: '',
            skills: [],
            order: categories.length
        });
    };

    const handleCancel = () => {
        setEditingId(null);
        setIsAdding(false);
        setFormData({
            name: '',
            skills: [],
            order: 0
        });
    };

    const handleSave = async () => {
        try {
            if (isAdding) {
                await addSkillCategory(formData as Omit<SkillCategory, 'createdAt' | 'updatedAt'>);
            } else if (editingId) {
                await updateSkillCategory(editingId, formData);
            }
            await loadCategories();
            handleCancel();
        } catch (error) {
            console.error('Error saving skill category:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this skill category?')) {
            try {
                await deleteSkillCategory(id);
                await loadCategories();
            } catch (error) {
                console.error('Error deleting skill category:', error);
            }
        }
    };

    const updateFormField = (field: keyof SkillCategoryWithId, value: string | number | string[]) => {
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
            <AdminLayout title="Manage Skills">
                <div className="text-center py-8">Loading...</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout title="Manage Skills">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                
                    <h2 className="text-2xl font-bold text-foreground">Skill Categories</h2>
                    {!isAdding && !editingId && (
                        <Button onClick={handleAdd}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Categories
                        </Button>
                    )}
                </div>

                {(isAdding || editingId) && (
                    <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            {isAdding ? 'Add New Skill Category' : 'Edit Skill Category'}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Category Name</label>
                                <input
                                    type="text"
                                    value={formData.name || ''}
                                    onChange={(e) => updateFormField('name', e.target.value)}
                                    placeholder="e.g., Core Skills, Technical Skills"
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
                    {categories.map((category) => (
                        <Card key={category.id} className="p-6">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">
                                        {category.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-3">Order: {category.order}</p>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <button
                                        onClick={() => handleEdit(category)}
                                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => category.id && handleDelete(category.id)}
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
