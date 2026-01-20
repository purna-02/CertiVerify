import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Files,
    Settings,
    LogOut,
    ShieldCheck,
    PlusCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Issue Certificate', href: '/dashboard/issue', icon: PlusCircle },
        { name: 'Certificates', href: '/dashboard/certificates', icon: Files },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="flex h-full w-64 flex-col border-r border-slate-200 bg-white shadow-sm hidden md:flex">
            <div className="flex h-16 items-center px-6 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">CertiVerify</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-3">
                <nav className="space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                                isActive(item.href)
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-slate-700 hover:bg-slate-100'
                            )}
                        >
                            <item.icon className={cn('h-5 w-5', isActive(item.href) ? 'text-primary-600' : 'text-slate-500')} />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="border-t border-slate-200 p-4">
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
}
