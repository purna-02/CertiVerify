import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-space-950/80 backdrop-blur-md transition-colors duration-500">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white shadow-lg shadow-primary-500/30">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">CertiVerify</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {['Home', 'Verify', 'About', 'Contact'].map((item) => {
                        const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                to={path}
                                className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${isActive(path) ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300'
                                    }`}
                            >
                                {item}
                            </Link>
                        );
                    })}
                    <div className="flex items-center gap-2 ml-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="mr-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-space-800"
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                        <Link to="/login">
                            <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-space-800">Log In</Button>
                        </Link>
                        <Link to="/signup">
                            <Button size="sm" className="bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/25 border-0">Get Started</Button>
                        </Link>
                    </div>
                </nav>

                <div className="flex items-center gap-4 md:hidden">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleTheme}
                        className="text-slate-600 dark:text-slate-300"
                    >
                        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <button
                        className="p-2 text-slate-600 dark:text-slate-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        <Link
                            to="/"
                            className="text-base font-medium text-slate-600 hover:text-primary-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/verify"
                            className="text-base font-medium text-slate-600 hover:text-primary-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Verify Certificate
                        </Link>
                        <div className="pt-4 flex flex-col gap-2">
                            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                                <Button variant="outline" className="w-full">Log In</Button>
                            </Link>
                            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                                <Button className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
