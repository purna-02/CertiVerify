import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Users, Target } from 'lucide-react';

export function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 font-sans">
            <Navbar />
            <main className="flex-1 bg-white">
                <div className="bg-slate-900 py-24 text-center text-white">
                    <h1 className="text-4xl font-bold mb-6">About CertiVerify</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        We are on a mission to restore trust in digital credentials through transparency and technology.
                    </p>
                </div>

                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="h-16 w-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700 mx-auto mb-6">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                            <p className="text-slate-600">To create a global standard where every achievement is verifiable, enforcing integrity in education and employment.</p>
                        </div>
                        <div>
                            <div className="h-16 w-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700 mx-auto mb-6">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Technology</h3>
                            <p className="text-slate-600">Utilizing cryptographically secure signatures and distributed ledger principles to ensure data immutability.</p>
                        </div>
                        <div>
                            <div className="h-16 w-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-700 mx-auto mb-6">
                                <Users className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Who We Serve</h3>
                            <p className="text-slate-600">From Ivy League universities to massive open online courses (MOOCs) and corporate training programs.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
