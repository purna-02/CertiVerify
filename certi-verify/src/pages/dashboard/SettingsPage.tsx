import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export function SettingsPage() {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">Settings</h1>
                <p className="text-slate-500">Manage your organization profile and security settings.</p>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Organization Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Organization Name" defaultValue="Tech University" />
                            <Input label="Website" defaultValue="https://tech.edu" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Contact Email" defaultValue="admin@tech.edu" />
                            <Input label="Phone Number" defaultValue="+1 (555) 000-0000" />
                        </div>
                        <div className="flex justify-end">
                            <Button>Save Changes</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Security & API</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <h4 className="font-medium text-slate-900">Two-Factor Authentication</h4>
                                <p className="text-sm text-slate-500">Add an extra layer of security to your account.</p>
                            </div>
                            <Button variant="outline">Enable 2FA</Button>
                        </div>
                        <div className="border-t border-slate-100 my-2"></div>
                        <div>
                            <h4 className="font-medium text-slate-900 mb-2">API Keys</h4>
                            <p className="text-sm text-slate-500 mb-4">Use these keys to integrate certificate issuance into your own apps.</p>
                            <div className="flex gap-2">
                                <Input value="pk_live_51M..." readOnly className="font-mono bg-slate-50" />
                                <Button variant="secondary">Copy</Button>
                                <Button variant="outline">Roll Key</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
