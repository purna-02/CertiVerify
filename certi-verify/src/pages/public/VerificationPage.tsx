import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QrCode, Search, CheckCircle, XCircle, AlertTriangle, Download, Share2, Calendar, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

// Mock Data
const MOCK_CERTIFICATE = {
    id: 'CERT-123456',
    candidateName: 'Alex Johnson',
    courseName: 'Advanced React Patterns & Performance',
    issuer: 'TechEd Institute',
    issueDate: '2023-11-15',
    expiryDate: null,
    status: 'valid', // valid, revoked, expired
};

export function VerificationPage() {
    const [searchParams] = useSearchParams();
    const certIdParam = searchParams.get('id');

    const [certId, setCertId] = useState(certIdParam || '');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<typeof MOCK_CERTIFICATE | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleVerify = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!certId) return;

        setIsLoading(true);
        setError(null);
        setResult(null);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            if (certId === 'VALID123') {
                setResult(MOCK_CERTIFICATE);
            } else if (certId === 'REVOKED123') {
                setResult({ ...MOCK_CERTIFICATE, status: 'revoked' });
            } else if (certId === 'EXPIRED123') {
                setResult({ ...MOCK_CERTIFICATE, status: 'expired' });
            } else {
                setError('Certificate not found. Please check the ID and try again.');
            }
        }, 1500);
    };

    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Verify Certificate</h1>
                        <p className="mt-4 text-lg text-slate-600">
                            Enter the certificate ID or scan the QR code to verify authenticity.
                        </p>
                    </div>

                    <Card className="mb-8 shadow-md">
                        <CardContent className="p-8">
                            <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-4">
                                <Input
                                    placeholder="Enter Certificate ID (Try: VALID123, REVOKED123)"
                                    className="h-12 text-lg"
                                    value={certId}
                                    onChange={(e) => setCertId(e.target.value)}
                                />
                                <Button type="submit" size="lg" className="h-12 w-full sm:w-auto" isLoading={isLoading}>
                                    <Search className="mr-2 h-5 w-5" />
                                    Verify
                                </Button>
                            </form>

                            <div className="mt-8 flex flex-col items-center justify-center border-t border-dashed border-slate-200 pt-8">
                                <p className="text-sm text-slate-500 mb-4">Or scan QR code</p>
                                <Button variant="outline" className="h-32 w-32 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 hover:border-primary-400 group transition-all">
                                    <QrCode className="h-10 w-10 text-slate-400 group-hover:text-primary-600" />
                                    <span className="text-xs text-slate-500 font-medium">Click to Scan</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Verification Result */}
                    {isLoading && (
                        <div className="space-y-4 animate-pulse">
                            <div className="h-64 bg-slate-200 rounded-xl w-full"></div>
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center animate-in fade-in slide-in-from-bottom-2">
                            <XCircle className="h-12 w-12 text-red-500 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-red-800">Invalid Certificate</h3>
                            <p className="text-red-600 mt-1">{error}</p>
                        </div>
                    )}

                    {result && (
                        <Card className="overflow-hidden border-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className={cn(
                                "px-6 py-4 flex items-center justify-between border-b",
                                result.status === 'valid' ? "bg-emerald-50 border-emerald-100" :
                                    result.status === 'revoked' ? "bg-red-50 border-red-100" : "bg-amber-50 border-amber-100"
                            )}>
                                <div className="flex items-center gap-3">
                                    {result.status === 'valid' && <CheckCircle className="h-6 w-6 text-emerald-600" />}
                                    {result.status === 'revoked' && <XCircle className="h-6 w-6 text-red-600" />}
                                    {result.status === 'expired' && <AlertTriangle className="h-6 w-6 text-amber-600" />}

                                    <div>
                                        <h2 className="text-lg font-bold text-slate-900">
                                            {result.status === 'valid' ? 'Verified Authentic' :
                                                result.status === 'revoked' ? 'Certificate Revoked' : 'Certificate Expired'}
                                        </h2>
                                        <p className="text-sm text-slate-500">
                                            Sample verification timestamp: {new Date().toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                <Badge variant={result.status === 'valid' ? 'success' : result.status === 'revoked' ? 'error' : 'warning'} className="text-sm px-3 py-1">
                                    {result.status.toUpperCase()}
                                </Badge>
                            </div>

                            <CardContent className="p-0">
                                <div className="p-8">
                                    <div className="border-l-4 border-primary-500 pl-6 py-2 mb-8">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{result.courseName}</h3>
                                        <p className="text-lg text-slate-600">Awarded to <span className="font-semibold text-slate-900">{result.candidateName}</span></p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-slate-100 rounded-lg"><Building className="h-5 w-5 text-slate-500" /></div>
                                            <div>
                                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Issued By</p>
                                                <p className="font-semibold text-slate-900">{result.issuer}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-slate-100 rounded-lg"><Calendar className="h-5 w-5 text-slate-500" /></div>
                                            <div>
                                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Issue Date</p>
                                                <p className="font-semibold text-slate-900">{result.issueDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-slate-100 rounded-lg"><User className="h-5 w-5 text-slate-500" /></div>
                                            <div>
                                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Certificate ID</p>
                                                <p className="font-family-mono font-medium text-slate-700">{result.id}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                                    <Button variant="outline" className="w-full sm:w-auto">
                                        <Share2 className="mr-2 h-4 w-4" /> Share Link
                                    </Button>
                                    {result.status === 'valid' && (
                                        <Button className="w-full sm:w-auto">
                                            <Download className="mr-2 h-4 w-4" /> Download PDF
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
