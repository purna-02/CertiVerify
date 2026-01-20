import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function TopBar() {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md">
            <div className="flex w-full max-w-md items-center gap-4">
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search certificates..."
                        className="pl-9 bg-slate-50 border-transparent focus:bg-white"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="relative h-10 w-10 rounded-full p-0">
                    <Bell className="h-5 w-5 text-slate-600" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </Button>

                <div className="h-8 w-px bg-slate-200" />

                <div className="flex items-center gap-3 pl-2">
                    <div className="hidden text-right sm:block">
                        <p className="text-sm font-medium text-slate-900">John Doe</p>
                        <p className="text-xs text-slate-500">Tech University</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                        <User className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </header>
    );
}
