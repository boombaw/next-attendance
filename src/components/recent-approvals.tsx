"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/context/language-context";

export function RecentApprovals() {
    const { t } = useLanguage();
    const approvals = [
        {
            name: "Ahmad Fauzi",
            details: "Cuti (Annual Leave) • Oct 25 - Oct 27",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuN-1VqolIqUV9OeOZD3nV-R2nmhyEgZvwBzfIsj10O7FJma53aUnD9U9zXQ3JxqdelOz4SwFrwAvnVZgM9I0g6M8GWPv4V_E7OL6VD_-GJTwFpswncY8NDNdvjFybXMOGKIGddjEm33DXpUcs3CqGNdwqDbisEWqjxlJYQvmVixmqi88fLbW-oXX0IQHuzEUne5FrX1LZb7Q3gpqOuMNn4FqoxEZcg1qCA-QyADjw-5upa8oG5N3_5KeLLXs4q9MIRXa5drI_U3wi",
            initials: "AF",
        },
        {
            name: "Linda Sari",
            details: "Sick Leave • Today",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7V7_NMQf1jpNgeQrXNNl5RwEaK_r4D3YZ3ZdULGVpHK8LubdFmd_6VlNM9MJagzu6FVpmf4Gq6hE12j3TkPsJo5S15nCj_ZR2hnTO2XPmIZi_O6HnEAN6cO6d_KJ6uNZ8SuuhsSyg6cInXxY9AJfikxvc4mBIODlrkpU_EWW1CqBjvu7DjXeK5cf1sQBQYYKZmBobs8Q6Q9G2r9gPj8k6KqRoKel9Kgd7Ng950xRd5bmFLLggceJ6fkJSirTngtm1VN7OvFaU86f1",
            initials: "LS",
        },
    ];

    return (
        <div className="lg:col-span-2 bg-card rounded-xl shadow-sm border border-border flex flex-col">
            <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="text-lg font-bold text-foreground">{t.dashboard.recentApprovals.title}</h3>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-full dark:bg-blue-900/30 dark:text-blue-400">2 {t.dashboard.recentApprovals.pending}</span>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-4">
                {approvals.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border bg-slate-50/50 dark:bg-muted/30">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={item.image} alt={item.name} className="object-cover" />
                                <AvatarFallback>{item.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-bold text-foreground">{item.name}</p>
                                <p className="text-xs text-muted-foreground">{item.details}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button className="flex-1 sm:flex-none h-9 bg-primary hover:bg-primary/90 text-white font-medium shadow-sm shadow-primary/30">
                                {t.dashboard.recentApprovals.approve}
                            </Button>
                            <Button variant="outline" className="flex-1 sm:flex-none h-9 border-border text-muted-foreground hover:bg-muted hover:text-foreground">
                                {t.dashboard.recentApprovals.reject}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
