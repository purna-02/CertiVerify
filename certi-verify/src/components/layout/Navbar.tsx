import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">CertiVerify</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        to="/"
                        className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive('/') ? 'text-primary-600' : 'text-slate-600'}`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/verify"
                        className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive('/verify') ? 'text-primary-600' : 'text-slate-600'}`}
                    >
                        Verify
                    </Link>
                    <Link
                        to="/about"
                        className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive('/about') ? 'text-primary-600' : 'text-slate-600'}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive('/contact') ? 'text-primary-600' : 'text-slate-600'}`}
                    >
                        Contact
                    </Link>
                    <div className="flex items-center gap-2 ml-4">
                        <Link to="/login">
                            <Button variant="ghost" size="sm">Log In</Button>
                        </Link>
                        <Link to="/signup">
                            <Button size="sm">Get Started</Button>
                        </Link>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
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
