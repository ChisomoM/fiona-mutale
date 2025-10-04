import { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus, Edit2, Trash2, Save, X,  } from 'lucide-react';
import { getServices, addService, updateService, deleteService } from '../../lib/adminService';
import type { Service } from '../../lib/types';

interface ServiceWithId extends Service {
    id?: string;
}

export const ServicesAdmin = () => {
    const [services, setServices] = useState<ServiceWithId[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<Partial<ServiceWithId>>({
        title: '',
        description: '',
        icon: '',
        features: [],
        order: 0
    });

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        try {
            setLoading(true);
            const data = await getServices();
            setServices(data as ServiceWithId[]);
        } catch (error) {
            console.error('Error loading services:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (service: ServiceWithId) => {
        setEditingId(service.id || null);
        setFormData(service);
        setIsAdding(false);
    };

    const handleAdd = () => {
        setIsAdding(true);
        setEditingId(null);
        setFormData({
            title: '',
            description: '',
            icon: '',
            features: [],
            order: services.length
        });
    };

    const handleCancel = () => {
        setEditingId(null);
        setIsAdding(false);
        setFormData({
            title: '',
            description: '',
            icon: '',
            features: [],
            order: 0
        });
    };

    const handleSave = async () => {
        try {
            if (isAdding) {
                await addService(formData as Omit<Service, 'createdAt' | 'updatedAt'>);
            } else if (editingId) {
                await updateService(editingId, formData);
            }
            await loadServices();
            handleCancel();
        } catch (error) {
            console.error('Error saving service:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            try {
                await deleteService(id);
                await loadServices();
            } catch (error) {
                console.error('Error deleting service:', error);
            }
        }
    };

    const updateFormField = (field: keyof ServiceWithId, value: string | number | string[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFeatureChange = (index: number, value: string) => {
        const newFeatures = [...(formData.features || [])];
        newFeatures[index] = value;
        updateFormField('features', newFeatures);
    };

    const addFeature = () => {
        updateFormField('features', [...(formData.features || []), '']);
    };

    const removeFeature = (index: number) => {
        const newFeatures = (formData.features || []).filter((_, i) => i !== index);
        updateFormField('features', newFeatures);
    };

    if (loading) {
        return (
            <AdminLayout title="Manage Services">
                <div className="text-center py-8">Loading...</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout title="Manage Services">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-foreground">Services</h2>
                    {!isAdding && !editingId && (
                        <Button onClick={handleAdd}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Service
                        </Button>
                    )}
                </div>

                {(isAdding || editingId) && (
                    <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            {isAdding ? 'Add New Service' : 'Edit Service'}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Title</label>
                                <input
                                    type="text"
                                    value={formData.title || ''}
                                    onChange={(e) => updateFormField('title', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Description</label>
                                <textarea
                                    value={formData.description || ''}
                                    onChange={(e) => updateFormField('description', e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Icon</label>
                                <input
                                    type="text"
                                    value={formData.icon || ''}
                                    onChange={(e) => updateFormField('icon', e.target.value)}
                                    placeholder="Icon name or URL"
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
                                    <label className="block text-sm font-medium">Features</label>
                                    <button
                                        onClick={addFeature}
                                        className="text-sm text-primary hover:underline"
                                    >
                                        + Add Feature
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {(formData.features || []).map((feature, index) => (
                                        <div key={index} className="flex gap-2">
                                            <input
                                                type="text"
                                                value={feature}
                                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                                                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                            <button
                                                onClick={() => removeFeature(index)}
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
                    {services.map((service) => (
                        <Card key={service.id} className="p-6">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-3">{service.description}</p>
                                    {service.features && service.features.length > 0 && (
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                            {service.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <p className="text-xs text-muted-foreground mt-2">Order: {service.order}</p>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <button
                                        onClick={() => handleEdit(service)}
                                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => service.id && handleDelete(service.id)}
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
