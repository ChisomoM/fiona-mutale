import { AdminLayout } from '../../components/admin/AdminLayout';
import { SectionList } from '../../components/admin/SectionList';

export const AdminDashboard = () => {
    return (
        <AdminLayout title="Admin Dashboard">
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Content Management</h2>
                    <p className="text-muted-foreground">
                        Select a section below to manage its content.
                    </p>
                </div>
                <SectionList />
            </div>
        </AdminLayout>
    );
};
