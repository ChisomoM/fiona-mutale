import { useState, useEffect } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Save, X } from 'lucide-react';
import { getSiteMetadata, updateSiteMetadata } from '../../lib/adminService';

export const MetadataAdmin = () => {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState<{
        id?: string;
        name: string;
        title: string;
        initials: string;
        email: string;
        phone: string;
        location: string;
        cvPath: string;
        profile: string;
        certifications: string[];
        social: {
            linkedin: string;
            email: string;
        };
    }>({
        name: '',
        title: '',
        initials: '',
        email: '',
        phone: '',
        location: '',
        cvPath: '',
        profile: '',
        certifications: [],
        social: {
            linkedin: '',
            email: ''
        }
    });

    useEffect(() => {
        loadMetadata();
    }, []);

    const loadMetadata = async () => {
        try {
            setLoading(true);
            const data = await getSiteMetadata();
            if (data) {
                setFormData(data);
            }
        } catch (error) {
            console.error('Error loading metadata:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            await updateSiteMetadata(formData);
            alert('Metadata updated successfully!');
        } catch (error) {
            console.error('Error saving metadata:', error);
            alert('Error saving metadata. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const updateFormField = (field: string, value: string | string[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const updateSocialField = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            social: { ...prev.social, [field]: value }
        }));
    };

    const handleCertificationChange = (index: number, value: string) => {
        const newCerts = [...(formData.certifications || [])];
        newCerts[index] = value;
        updateFormField('certifications', newCerts);
    };

    const addCertification = () => {
        updateFormField('certifications', [...(formData.certifications || []), '']);
    };

    const removeCertification = (index: number) => {
        const newCerts = (formData.certifications || []).filter((_cert: string, i: number) => i !== index);
        updateFormField('certifications', newCerts);
    };

    if (loading) {
        return (
            <AdminLayout title="Manage Site Metadata">
                <div className="text-center py-8">Loading...</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout title="Manage Site Metadata">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-foreground">Site Metadata</h2>
                    <Button onClick={handleSave} disabled={saving}>
                        <Save className="w-4 h-4 mr-2" />
                        {saving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>

                <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                value={formData.name || ''}
                                onChange={(e) => updateFormField('name', e.target.value)}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Title</label>
                            <input
                                type="text"
                                value={formData.title || ''}
                                onChange={(e) => updateFormField('title', e.target.value)}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Initials</label>
                                <input
                                    type="text"
                                    value={formData.initials || ''}
                                    onChange={(e) => updateFormField('initials', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email || ''}
                                    onChange={(e) => updateFormField('email', e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    value={formData.phone || ''}
                                    onChange={(e) => updateFormField('phone', e.target.value)}
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
                            <label className="block text-sm font-medium mb-2">CV Path</label>
                            <input
                                type="text"
                                value={formData.cvPath || ''}
                                onChange={(e) => updateFormField('cvPath', e.target.value)}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Profile / Bio</label>
                            <textarea
                                value={formData.profile || ''}
                                onChange={(e) => updateFormField('profile', e.target.value)}
                                rows={6}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
                            <input
                                type="url"
                                value={formData.social?.linkedin || ''}
                                onChange={(e) => updateSocialField('linkedin', e.target.value)}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Contact Email</label>
                            <input
                                type="email"
                                value={formData.social?.email || ''}
                                onChange={(e) => updateSocialField('email', e.target.value)}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Certifications</h3>
                        <button
                            onClick={addCertification}
                            className="text-sm text-primary hover:underline"
                        >
                            + Add Certification
                        </button>
                    </div>
                    <div className="space-y-2">
                        {(formData.certifications || []).map((cert: string, index: number) => (
                            <div key={index} className="flex gap-2">
                                <input
                                    type="text"
                                    value={cert}
                                    onChange={(e) => handleCertificationChange(index, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    onClick={() => removeCertification(index)}
                                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </AdminLayout>
    );
};
