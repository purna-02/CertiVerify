import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Column<T> {
    header: string;
    accessorKey?: keyof T;
    cell?: (row: T) => React.ReactNode;
    className?: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    title?: string;
    action?: React.ReactNode;
}

export function DataTable<T extends { id: string | number }>({ data, columns, title, action }: DataTableProps<T>) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5">
            {(title || action) && (
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                    {title && <h3 className="text-lg font-semibold text-slate-900">{title}</h3>}
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx} className={cn("px-6 py-4 font-medium text-slate-500 whitespace-nowrap", col.className)}>
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((row) => (
                            <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                                {columns.map((col, idx) => (
                                    <td key={idx} className={cn("px-6 py-4 text-slate-700", col.className)}>
                                        {col.cell ? col.cell(row) : (row[col.accessorKey as keyof T] as React.ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
                <p className="text-sm text-slate-500">Showing {data.length} results</p>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
