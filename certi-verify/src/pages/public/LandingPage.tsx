import { Link } from 'react-router-dom';
import { CheckCircle2, Globe, Server, Users, Lock, ChevronRight, Play, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';

export function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-mist-50 dark:bg-space-950 font-sans transition-colors duration-500 overflow-x-hidden">
            <Navbar />

            <main className="flex-1 relative">
                {/* Background Decor */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px] animate-pulse-glow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
                </div>

                {/* Anti-Gravity Hero Section */}
                <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="max-w-3xl space-y-8 animate-fade-in-up">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-md shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <span className="text-slate-700 dark:text-slate-300">The Future of Digital Trust</span>
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                                    <span className="text-slate-900 dark:text-white">Secure Credentialing</span>
                                    <br />
                                    <span className="text-gradient-hero">Defying Gravity.</span>
                                </h1>

                                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                                    Elevate your institution's reputation with weightless, blockchain-anchored verification.
                                    Issuance so fast, it feels like magic.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link to="/signup">
                                        <Button size="lg" className="h-14 px-8 text-base rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/25 border-0 hover:-translate-y-1 transition-transform duration-300">
                                            Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link to="/verify">
                                        <Button variant="outline" size="lg" className="h-14 px-8 text-base rounded-full border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10 hover:-translate-y-1 transition-transform duration-300">
                                            <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
                                        </Button>
                                    </Link>
                                </div>

                                <div className="pt-8 flex items-center gap-8 text-slate-500 dark:text-slate-500">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="h-10 w-10 rounded-full border-2 border-white dark:border-space-950 bg-slate-200 dark:bg-slate-800" />
                                        ))}
                                    </div>
                                    <div className="text-sm">
                                        <strong className="text-slate-900 dark:text-white">2,000+</strong> partners trust us
                                    </div>
                                </div>
                            </div>

                            {/* Floating 3D Element */}
                            <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
                                {/* Back Card */}
                                <div className="absolute top-10 right-10 w-full max-w-md aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md animate-float-delayed transform rotate-[-6deg] z-0"></div>

                                {/* Main Card */}
                                <div className="absolute top-0 right-0 w-full max-w-md aspect-[4/5] rounded-[2rem] glass-panel p-8 animate-float transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700 z-10 hover:z-20 group">
                                    <div className="h-full flex flex-col justify-between relative overflow-hidden rounded-2xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 pointer-events-none mix-blend-overlay"></div>

                                        <div className="space-y-6 relative z-10">
                                            <div className="flex justify-between items-start">
                                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                                    <Shield className="h-7 w-7" />
                                                </div>
                                                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                                                    Verified
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Certificate of Mastery</div>
                                                <div className="text-2xl font-bold text-slate-900 dark:text-white">Advanced Cryptography</div>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="h-2 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full w-2/3 bg-primary-500 rounded-full animate-pulse"></div>
                                                </div>
                                                <div className="h-2 w-1/3 bg-slate-100 dark:bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="relative z-10 pt-8 border-t border-slate-100 dark:border-white/10">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">JD</div>
                                                <div>
                                                    <div className="text-sm font-semibold text-slate-900 dark:text-white">John Doe</div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">ID: 8X92-MM-22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Front Floating Elements */}
                                <div className="absolute bottom-20 -left-10 p-4 rounded-xl glass-panel animate-float-slow z-30 shadow-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Blockchain Anchored</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Marquee Section */}
                <section className="py-10 border-y border-slate-200/60 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                    <div className="relative flex overflow-x-hidden group">
                        <div className="animate-scroll whitespace-nowrap flex gap-16 min-w-full items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 dark:invert">
                            {['Google', 'Microsoft', 'Amazon', 'Harvard', 'Stanford', 'MIT', 'Berkeley', 'Oxford'].map((partner, i) => (
                                <span key={i} className="text-2xl font-bold font-mono text-slate-400 dark:text-slate-500 mx-4">{partner}</span>
                            ))}
                            {['Google', 'Microsoft', 'Amazon', 'Harvard', 'Stanford', 'MIT', 'Berkeley', 'Oxford'].map((partner, i) => (
                                <span key={`dup-${i}`} className="text-2xl font-bold font-mono text-slate-400 dark:text-slate-500 mx-4">{partner}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Grid (Levitating Cards) */}
                <section className="py-32 relative">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">Defined by Physics. <br /> <span className="text-primary-600 dark:text-primary-400">Powered by Code.</span></h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Our infrastructure is built to withstand the heaviest enterprise workloads while maintaining a featherlight user experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Global Network', icon: Globe, desc: 'Decentralized verification nodes ensure 100% uptime and zero latency worldwide.' },
                                { title: 'Ironclad Security', icon: Lock, desc: 'Military-grade encryption with tamper-proof blockchain anchoring.' },
                                { title: 'API-First', icon: Server, desc: 'Seamlessly integrate with your existing LMS via our robust REST API.' },
                                { title: 'Role Control', icon: Users, desc: 'Granular permissions for granular control over issuance and auditing.' },
                                { title: 'Instant Verify', icon: CheckCircle2, desc: 'One-click verification for employers and third parties.' },
                                { title: 'Smart Analytics', icon: Shield, desc: 'Real-time insights into credential usage and sharing metrics.' }
                            ].map((feature, i) => (
                                <div key={i} className="group relative p-8 rounded-3xl bg-white dark:bg-space-900 border border-slate-200 dark:border-white/5 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10">
                                    <div className="h-12 w-12 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dynamic Stats Section */}
                <section className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent"></div>

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                            {[
                                { label: 'Certificates Issued', value: '2M+' },
                                { label: 'Partner Institutions', value: '500+' },
                                { label: 'Verification Rate', value: '99.9%' },
                                { label: 'Countries', value: '30+' }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter shimmer-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium text-primary-200 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Case Study / Portfolio Slider */}
                <section className="py-24 overflow-hidden">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Trusted by Industry Leaders</h2>
                    </div>

                    <div className="flex gap-8 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar">
                        {[
                            { title: 'Harvard University', category: 'Education', image: 'bg-gradient-to-br from-red-900 to-rose-800' },
                            { title: 'Microsoft Azure', category: 'Tech', image: 'bg-gradient-to-br from-blue-900 to-cyan-800' },
                            { title: 'Goldman Sachs', category: 'Finance', image: 'bg-gradient-to-br from-yellow-900 to-amber-800' },
                            { title: 'NHS Digital', category: 'Healthcare', image: 'bg-gradient-to-br from-blue-800 to-indigo-900' },
                        ].map((study, i) => (
                            <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center">
                                <div className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer">
                                    <div className={`absolute inset-0 ${study.image} opacity-80 transition-transform duration-700 group-hover:scale-110`}></div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                                    <div className="absolute bottom-0 left-0 p-8">
                                        <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2">{study.category}</div>
                                        <h3 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">{study.title}</h3>
                                    </div>

                                    <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="h-5 w-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-50 dark:bg-space-900/50 -skew-y-3 transform origin-top-left scale-110 z-0"></div>
                    <div className="mx-auto max-w-4xl px-4 relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">Ready for liftoff?</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
                            Join the world's leading institutions in the new era of digital credentialing.
                            Start your free 14-day trial today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link to="/signup">
                                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-slate-900 dark:bg-white text-white dark:text-space-950 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-xl shadow-slate-900/20 transition-all hover:scale-105">
                                    Get Started Now
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 dark:text-white">
                                    Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
