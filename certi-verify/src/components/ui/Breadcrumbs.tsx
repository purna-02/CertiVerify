import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);

    return (
        <nav className="flex items-center text-sm text-slate-500 mb-6">
            <Link to="/dashboard" className="flex items-center hover:text-primary-600 transition-colors">
                <Home className="h-4 w-4" />
            </Link>
            {paths.map((path, index) => {
                const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
                const isLast = index === paths.length - 1;

                // Skip 'dashboard' in text if it's the root (visual preference)
                if (path === 'dashboard' && index === 0) return null;

                return (
                    <div key={path} className="flex items-center">
                        <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
                        {isLast ? (
                            <span className="font-medium text-slate-900 capitalize">
                                {path.replace('-', ' ')}
                            </span>
                        ) : (
                            <Link to={routeTo} className="hover:text-primary-600 transition-colors capitalize">
                                {path.replace('-', ' ')}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
