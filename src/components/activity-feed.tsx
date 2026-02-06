"use client";

import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/context/language-context";

export function ActivityFeed() {
    const { t } = useLanguage();
    const activities = [
        {
            name: "Budi Santoso",
            action: t.dashboard.activity.entered,
            time: "08:05 AM",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASosdi31YtP1Jy-oi4QZotL5hzlkukEdAkg6Vm_qa8vcVEra6CnuZKL4r5aoduihlQWhRVti7t40tc9L1pJeXZMMaksjpMCNPuAqNu3fKT3-Kc7WhWkjgUgoOnymYAWBSGVtvdNmnUJi73k6W7I4ex5N3nYr8Hws3IRy0e9rhtsGb4dtYBHk1fY2fc2I8dVlgdGl2hsxipY-brR1nZjIHR3iW1qNtYmakgluYgEPtNA9Lav3U61zZlyIoLaCxN6BcW79968L0I5JyB",
            initials: "BS",
        },
        {
            name: "Siti Aminah",
            action: t.dashboard.activity.entered,
            time: "08:10 AM",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPNSKKWDMDvwoTw__QSqp2YJxNh4sRIexfrl61H2Wr7bguO86o1ge0TvIXv9via08gYjCpCWO_6Qv_oNmBOJ2WtS9kPvkHNMsLhgDpcD4f9yu8Jja9FUJaMwNgzVXcjPUOhrHjpU-5tNpnJvTXKiSZvylXRN2DF5afYoTh5St0dxMzwVC7MI5jBXAv1NU4h2HPJwZ8R7Bkwo13jab631h_KVAnJaoob-z2HyscE8U_3GnXxTQViLzKTL8DDH2JOixZcQIi-jzzEwN9",
            initials: "SA",
        },
        {
            name: "Rudi Hermawan",
            action: t.dashboard.activity.submitted,
            time: "08:45 AM",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMJpUcBnXBMCzZC5Xxgr0OIh_gbgHE93r1EBi88Dg59KwpnCcGQW5snZMoFFmsglFprCR5__CYg8mRvveAzlez1oP6pvfaAzqfMT4Zbzw5H9a1QM68SFhmskAcHvOPFeTHhKVUGkS44uDlHvilTAFsggCTcpFn4R6A2OUF2LTXtEB4TX8csEzftNzJay8VR7jkTNZ9RPtZAQHN4lY95Rj0LMdqmuoP3cSTI8RNguUdExAmCrRc4H8uCsHUr8OMbahbVM4PSSHaYB9s",
            initials: "RH",
        },
        {
            name: null,
            text: t.dashboard.activity.systemReport,
            time: "09:00 AM",
            icon: Bell,
            isSystem: true
        }
    ];

    return (
        <div className="bg-card rounded-xl shadow-sm border border-border flex flex-col">
            <div className="p-6 border-b border-border">
                <h3 className="text-lg font-bold text-foreground">{t.dashboard.activity.title}</h3>
            </div>
            <div className="flex-1 p-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-10 top-6 bottom-6 w-0.5 bg-border"></div>
                <div className="flex flex-col gap-6 relative">
                    {activities.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            {item.isSystem ? (
                                <div className="size-8 rounded-full bg-blue-100 text-primary flex items-center justify-center border-2 border-background z-10 shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                                    {item.icon && <item.icon className="h-4 w-4" />}
                                </div>
                            ) : (
                                <Avatar className="h-8 w-8 border-2 border-background z-10 shrink-0">
                                    <AvatarImage src={item.image} className="object-cover" />
                                    <AvatarFallback>{item.initials}</AvatarFallback>
                                </Avatar>
                            )}
                            <div className="flex flex-col gap-0.5 pt-1">
                                <p className="text-sm text-foreground font-medium">
                                    {item.name ? (
                                        <>
                                            <span className="font-bold">{item.name}</span> {item.action}
                                        </>
                                    ) : (
                                        item.text
                                    )}
                                </p>
                                <span className="text-xs text-muted-foreground">{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
