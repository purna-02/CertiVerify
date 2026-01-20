import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card';

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
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
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Sign in to your issuer dashboard
                    </p>
                </div>

                <Card className="shadow-lg border-0 ring-1 ring-slate-200">
                    <CardHeader>
                        <CardTitle className="text-lg">Sign In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-5">
                            <Input
                                id="email"
                                type="email"
                                label="Email address"
                                placeholder="admin@university.edu"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">Forgot password?</a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                                Sign In
                            </Button>
                        </form>

                        <div className="mt-6 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-slate-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <Button variant="outline" type="button" className="w-full">
                                Google
                            </Button>
                            <Button variant="outline" type="button" className="w-full">
                                Microsoft
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="justify-center border-t border-slate-100 py-6">
                        <p className="text-sm text-slate-600">
                            Don't have an account?{' '}
                            <Link to="/signup" className="font-semibold text-primary-600 hover:text-primary-500">
                                Sign up
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
