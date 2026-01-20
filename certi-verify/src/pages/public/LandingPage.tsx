import { Link } from 'react-router-dom';
import { CheckCircle2, Globe, Server, Users, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';

export function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 font-sans">
            <Navbar />

            <main className="flex-1">
                {/* Enterprise Hero Section */}
                <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
                    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700 mb-6">
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-primary-600 mr-2"></span>
                                    The Global Standard for Digital Trust
                                </div>

                                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
                                    Secure Credentialing for the <span className="text-primary-700">Modern Enterprise</span>
                                </h1>

                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    CertiVerify provides bank-grade digital credential issuance and verification infrastructure.
                                    Protect your institution's reputation with tamper-proof, blockchain-anchored certificates.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/verify">
                                        <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary-900/10">
                                            Verify a Certificate
                                        </Button>
                                    </Link>
                                    <Link to="/login">
                                        <Button variant="outline" size="lg" className="h-14 px-8 text-base bg-white">
                                            Partner Login
                                        </Button>
                                    </Link>
                                </div>

                                <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-600" /> SOC2 Compliant
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-600" /> 99.99% Uptime
                                    </div>
                                </div>
                            </div>

                            {/* Abstract Visual / UI Mockup */}
                            <div className="relative lg:h-[600px] w-full flex items-center justify-center bg-slate-100 rounded-3xl border border-slate-200 p-8 shadow-xl shadow-slate-200/50">
                                <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                                <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
                                    <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                                        </div>
                                        <div className="mx-auto text-xs font-mono text-slate-400">certiverify.io/verify</div>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <CheckCircle2 className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-emerald-700">Verified Authentic</div>
                                                <div className="text-xs text-slate-400">Issued via CertiVerify Trust Network</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                                            <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                                        </div>
                                        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                            <div className="text-xs text-slate-400">ID: CERT-8X92-MM</div>
                                            <div className="h-8 w-20 bg-slate-900 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats / Trust Section */}
                <section className="bg-slate-900 py-16 text-white border-y border-slate-800">
                    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: 'Certificates Issued', value: '2M+' },
                                { label: 'Partner Institutions', value: '500+' },
                                { label: 'Verification API Calls', value: '50M+' },
                                { label: 'Countries Served', value: '30+' }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="text-4xl font-bold tracking-tight text-white">{stat.value}</div>
                                    <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid (Bento Style) */}
                <section className="py-24 bg-slate-50">
                    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                        <div className="mb-16 max-w-3xl">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Enterprise-Grade Infrastructure</h2>
                            <p className="text-lg text-slate-600">
                                Built for scale, security, and seamless integration. CertiVerify fits perfectly into your existing LMS and HR tech stack.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="md:col-span-2 bg-white p-8">
                                <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Global Verification Network</h3>
                                <p className="text-slate-600 max-w-2xl">
                                    Our decentralized verification nodes ensure that certificates can be verified from anywhere in the world with zero latency, even if the primary institution's servers are down.
                                </p>
                            </Card>
                            <Card className="bg-white p-8">
                                <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                                    <Lock className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Tamper-Proof Security</h3>
                                <p className="text-slate-600">
                                    Cryptographically signed credentials that are impossible to forge.
                                </p>
                            </Card>
                            <Card className="bg-white p-8">
                                <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                                    <Server className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">API-First Design</h3>
                                <p className="text-slate-600">
                                    RESTful APIs and Webhooks to automate issuance directly from your LMS.
                                </p>
                            </Card>
                            <Card className="md:col-span-2 bg-white p-8">
                                <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-6">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Role-Based Access Control</h3>
                                <p className="text-slate-600 max-w-2xl">
                                    Granular permissions for issuers, admins, and auditors. Track every action with our immutable audit logs.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-white border-t border-slate-200">
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to upgrade your credentialing?</h2>
                        <p className="text-lg text-slate-600 mb-10">
                            Join leading universities and corporations trusting CertiVerify.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/signup">
                                <Button size="lg" className="h-12 px-8">Start Free Trial</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg" className="h-12 px-8">Contact Sales</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
