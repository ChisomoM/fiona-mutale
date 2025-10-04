import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface AdminLayoutProps {
    children: ReactNode;
    title?: string;
}

export const AdminLayout = ({ children, title = "Admin Panel" }: AdminLayoutProps) => {
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link 
                                to="/secret-section" 
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back
                            </Link>
                            <div className="h-6 w-px bg-border flex items-stretch justify-between" />
                             <Link 
                                to="/" 
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {/* <ArrowLeft className="w-4 h-4" /> */}
                                Main site
                            </Link>
                            <div className="h-6 w-px bg-border flex items-stretch justify-between" />
                            <h1 className="text-xl font-bold text-foreground">{title}</h1>
                             
                        </div>
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    );
};
