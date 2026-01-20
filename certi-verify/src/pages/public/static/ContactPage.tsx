import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { MapPin, Mail, Phone } from 'lucide-react';

export function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 font-sans">
            <Navbar />
            <main className="flex-1 py-12 lg:py-24">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in touch</h1>
                            <p className="text-lg text-slate-600 mb-12">
                                Have questions about our enterprise solutions? Our team is ready to help you implement secure credentialing.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Headquarters</h3>
                                        <p className="text-slate-600">100 Innovation Drive,<br />Tech Valley, CA 94025</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Email</h3>
                                        <p className="text-slate-600">enterprise@certiverify.io</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary-600 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Phone</h3>
                                        <p className="text-slate-600">+1 (800) 555-0123</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card>
                            <CardContent className="p-8">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="First Name" />
                                        <Input label="Last Name" />
                                    </div>
                                    <Input label="Work Email" type="email" />
                                    <Input label="Organization" />
                                    <div>
                                        <label className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
                                        <textarea className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 min-h-[150px]"></textarea>
                                    </div>
                                    <Button className="w-full" size="lg">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
