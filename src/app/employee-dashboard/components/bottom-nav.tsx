"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RippleButton } from "@/components/ui/ripple-button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/context/language-context";
import { Home, CalendarDays, ScanFace, Bell, User } from "lucide-react";

export const BottomNav = () => {
    const { t } = useLanguage();
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-[#1c2732] border-t border-slate-200 dark:border-slate-800 pb-safe shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] z-50 rounded-t-3xl">
            <div className="flex justify-between items-end px-6 h-[80px] relative pb-3">
                {/* Home */}
                <Link
                    href="/employee-dashboard"
                    className={cn(
                        "flex flex-col items-center gap-1.5 w-[60px] transition-colors",
                        isActive("/employee-dashboard")
                            ? "text-[#137fec]"
                            : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                    )}
                >
                    <Home
                        className="w-[26px] h-[26px]"
                        strokeWidth={2}
                    />
                    <span className="text-[10px] font-bold">{t.nav.home}</span>
                </Link>

                {/* Jadwal / Laporan */}
                <Link
                    href="/employee-dashboard/attendance-report"
                    className={cn(
                        "flex flex-col items-center gap-1.5 w-[60px] transition-colors",
                        isActive("/employee-dashboard/attendance-report")
                            ? "text-[#137fec]"
                            : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                    )}
                >
                    <CalendarDays
                        className="w-[26px] h-[26px]"
                        strokeWidth={2}

                    />
                    <span className="text-[10px] font-medium">{t.nav.report}</span>
                </Link>

                {/* Center Action Button (Fingerprint) */}
                <Link href="/employee-dashboard/attendance" className="relative flex flex-col items-center justify-end h-full">
                    <div className="relative -top-6">
                        <RippleButton className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#137fec] shadow-lg shadow-blue-500/40 flex items-center justify-center text-white border-[5px] border-[#f6f7f8] dark:border-[#101922]">
                            <ScanFace className="w-[36px] h-[36px]" strokeWidth={2} />
                        </RippleButton>
                    </div>
                    <span className="text-[10px] font-bold text-[#137fec] absolute">{t.nav.attendance}</span>
                </Link>

                {/* Notifications */}
                <Link
                    href="/employee-dashboard/information"
                    className={cn(
                        "flex flex-col items-center gap-1.5 w-[60px] transition-colors",
                        isActive("/employee-dashboard/information")
                            ? "text-[#137fec]"
                            : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                    )}
                >
                    <div className="relative">
                        <Bell
                            className="w-[26px] h-[26px]"
                            strokeWidth={2}

                        />
                        {!isActive("/employee-dashboard/information") && (
                            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#1c2732]"></span>
                        )}
                    </div>
                    <span className="text-[10px] font-medium">{t.nav.info}</span>
                </Link>

                {/* Akun */}
                <Link
                    href="/employee-dashboard/profile"
                    className={cn(
                        "flex flex-col items-center gap-1.5 w-[60px] transition-colors",
                        isActive("/employee-dashboard/profile")
                            ? "text-[#137fec]"
                            : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                    )}
                >
                    <div className={cn(
                        "w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center overflow-hidden",
                        isActive("/employee-dashboard/profile")
                            ? "border-[#137fec] text-[#137fec]"
                            : "border-current"
                    )}>
                        <User className="w-[20px] h-[20px] relative top-[1px]" strokeWidth={isActive("/employee-dashboard/profile") ? 3 : 2.5} />
                    </div>
                    <span className={cn(
                        "text-[10px] font-medium",
                        isActive("/employee-dashboard/profile") && "font-bold"
                    )}>{t.nav.profile}</span>
                </Link>
            </div>
        </nav>
    );
};
