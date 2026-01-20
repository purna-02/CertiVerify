import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="max-w-xs">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">CertiVerify</span>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Secure, instant, and tamper-proof certificate verification for modern education and events.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900">Product</h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link to="/verify" className="text-sm text-slate-500 hover:text-primary-600">Verification</Link></li>
                                <li><Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Issuance</Link></li>
                                <li><Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Pricing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link to="#" className="text-sm text-slate-500 hover:text-primary-600">About</Link></li>
                                <li><Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Blog</Link></li>
                                <li><Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Privacy</Link></li>
                                <li><Link to="#" className="text-sm text-slate-500 hover:text-primary-600">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8 text-center">
                    <p className="text-sm text-slate-400">© 2024 CertiVerify. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
