import { useState } from 'react';
import { Download, Eye, Ban, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { DataTable } from '@/components/ui/DataTable';

interface Certificate {
    id: string;
    name: string;
    title: string;
    date: string;
    status: 'valid' | 'revoked' | 'expired';
}

export function CertificatesPage() {
    const [data] = useState<Certificate[]>([
        { id: 'CERT-001', name: 'Alex Johnson', title: 'React Performance', date: '2023-11-15', status: 'valid' },
        { id: 'CERT-002', name: 'Maria Garcia', title: 'Advanced UX Design', date: '2023-11-12', status: 'valid' },
        { id: 'CERT-003', name: 'James Smith', title: 'Web Accessibility', date: '2023-11-10', status: 'revoked' },
        { id: 'CERT-004', name: 'Sarah Lee', title: 'Frontend Architecture', date: '2023-11-05', status: 'valid' },
        { id: 'CERT-005', name: 'Mike Chen', title: 'React Performance', date: '2023-10-28', status: 'expired' },
        { id: 'CERT-006', name: 'Emma Wilson', title: 'Data Visualization', date: '2023-10-25', status: 'valid' },
        { id: 'CERT-007', name: 'David Brown', title: 'Cloud Infrastructure', date: '2023-10-20', status: 'valid' },
    ]);

    const columns = [
        {
            header: 'Certificate ID',
            accessorKey: 'id' as keyof Certificate,
            className: 'font-mono text-slate-500'
        },
        {
            header: 'Recipient',
            accessorKey: 'name' as keyof Certificate,
            className: 'font-semibold text-slate-900'
        },
        { header: 'Title', accessorKey: 'title' as keyof Certificate },
        { header: 'Issue Date', accessorKey: 'date' as keyof Certificate },
        {
            header: 'Status',
            cell: (row: Certificate) => (
                <Badge variant={row.status === 'valid' ? 'success' : row.status === 'revoked' ? 'error' : 'warning'}>
                    {row.status.toUpperCase()}
                </Badge>
            )
        },
        {
            header: 'Actions',
            className: 'text-right',
            cell: (row: Certificate) => (
                <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="View Details">
                        <Eye className="h-4 w-4 text-slate-500" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Download PDF">
                        <Download className="h-4 w-4 text-slate-500" />
                    </Button>
                    {row.status === 'valid' && (
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600" title="Revoke">
                            <Ban className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            )
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Certificate Management</h1>
                    <p className="text-slate-500">View and manage all issued credentials.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">Export CSV</Button>
                    <Button>Issue New</Button>
                </div>
            </div>

            <DataTable
                data={data}
                columns={columns}
                action={
                    <div className="flex gap-2">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                            <Input placeholder="Search..." className="pl-9 w-[200px] h-9" />
                        </div>
                        <Button variant="outline" size="sm" className="h-9">
                            <Filter className="mr-2 h-4 w-4" /> Filter
                        </Button>
                    </div>
                }
            />
        </div>
    );
}
