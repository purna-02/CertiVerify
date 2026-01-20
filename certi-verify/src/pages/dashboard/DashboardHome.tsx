import {
    CheckCircle2,
    XCircle,
    Clock,
    FileCheck,
    TrendingUp,
    ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export function DashboardHome() {
    const stats = [
        { name: 'Total Issued', value: '1,284', change: '+12%', icon: FileCheck, color: 'bg-blue-100 text-blue-600' },
        { name: 'Verified', value: '856', change: '+24%', icon: CheckCircle2, color: 'bg-emerald-100 text-emerald-600' },
        { name: 'Pending/Active', value: '412', change: '+8%', icon: Clock, color: 'bg-amber-100 text-amber-600' },
        { name: 'Invalid Attempts', value: '23', change: '-2%', icon: XCircle, color: 'bg-red-100 text-red-600' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, here's what's happening with your certificates.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.name} className="border-slate-200">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-slate-500">{stat.name}</span>
                                    <span className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</span>
                                </div>
                                <div className={cn("p-2 rounded-lg", stat.color)}>
                                    <stat.icon className="h-5 w-5" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-xs">
                                <span className={cn(
                                    "flex items-center font-medium",
                                    stat.change.startsWith('+') ? "text-emerald-600" : "text-red-600"
                                )}>
                                    <TrendingUp className="mr-1 h-3 w-3" />
                                    {stat.change}
                                </span>
                                <span className="text-slate-500 ml-2">from last month</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
                        <Button variant="ghost" size="sm" className="text-xs">
                            View All <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center">
                                            <FileCheck className="h-4 w-4 text-slate-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">Certificate Issued</p>
                                            <p className="text-xs text-slate-500">To: Alex Johnson • Web Dev Bootcamp</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-xs text-slate-400">
                                        2 mins ago
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle className="text-base font-medium">Verification Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { id: 'CERT-001', status: 'verified', time: '10:42 AM' },
                                { id: 'CERT-005', status: 'invalid', time: '09:15 AM' },
                                { id: 'CERT-008', status: 'verified', time: '08:30 AM' },
                                { id: 'CERT-002', status: 'verified', time: 'Yesterday' },
                            ].map((log, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className={cn(
                                            "h-2 w-2 rounded-full",
                                            log.status === 'verified' ? "bg-emerald-500" : "bg-red-500"
                                        )} />
                                        <span className="text-sm font-medium text-slate-700">{log.id}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Badge variant={log.status === 'verified' ? 'success' : 'error'} className="text-[10px] uppercase">
                                            {log.status}
                                        </Badge>
                                        <span className="text-xs text-slate-400">{log.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
