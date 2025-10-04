import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { 
    Briefcase, 
    GraduationCap, 
    Lightbulb, 
    Wrench, 
    Settings 
} from 'lucide-react';

interface Section {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    path: string;
}

const sections: Section[] = [
    {
        id: 'services',
        name: 'Services',
        description: 'Manage service offerings',
        icon: <Wrench className="w-6 h-6" />,
        path: '/secret-section/services'
    },
    {
        id: 'experience',
        name: 'Experience',
        description: 'Manage work experience entries',
        icon: <Briefcase className="w-6 h-6" />,
        path: '/secret-section/experience'
    },
    {
        id: 'education',
        name: 'Education',
        description: 'Manage education entries',
        icon: <GraduationCap className="w-6 h-6" />,
        path: '/secret-section/education'
    },
    {
        id: 'skills',
        name: 'Skills',
        description: 'Manage skill categories',
        icon: <Lightbulb className="w-6 h-6" />,
        path: '/secret-section/skills'
    },
    {
        id: 'metadata',
        name: 'Site Metadata',
        description: 'Manage site information and social links',
        icon: <Settings className="w-6 h-6" />,
        path: '/secret-section/metadata'
    }
];

export const SectionList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
                <Link key={section.id} to={section.path}>
                    <Card className="p-6 hover:border-primary transition-all cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {section.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground mb-1">
                                    {section.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};
