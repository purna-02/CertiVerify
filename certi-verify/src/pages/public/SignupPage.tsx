import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card';

export function SignupPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup
        setTimeout(() => {
            setIsLoading(false);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <Link to="/" className="inline-flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900">CertiVerify</span>
                    </Link>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                        Create an account
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Start issuing secure certificates today
                    </p>
                </div>

                <Card className="shadow-lg border-0 ring-1 ring-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">Sign Up</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSignup} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <Input label="First name" placeholder="John" required />
                                <Input label="Last name" placeholder="Doe" required />
                            </div>

                            <Input
                                id="email"
                                type="email"
                                label="Email address"
                                placeholder="admin@university.edu"
                                required
                            />

                            <Input
                                id="password"
                                type="password"
                                label="Password"
                                required
                            />

                            <Input
                                id="org"
                                type="text"
                                label="Organization Name"
                                placeholder="Tech University"
                                required
                            />

                            <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                                Create Account
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="justify-center border-t border-slate-100 py-6">
                        <p className="text-sm text-slate-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-500">
                                Sign in
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
