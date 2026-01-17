"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RippleButton } from "@/components/ui/ripple-button";
import { useUser } from "@/contexts/user-context";
import { cn } from "@/lib/utils";

export const BottomNav = () => {
    const pathname = usePathname();
    const { isSupervisor } = useUser();

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
                    <span className={cn(
                        "material-symbols-outlined text-[26px]",
                        isActive("/employee-dashboard") && "filled"
                    )}>
                        home
                    </span>
                    <span className="text-[10px] font-bold">Beranda</span>
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
                    <span className={cn(
                        "material-symbols-outlined text-[26px]",
                        isActive("/employee-dashboard/attendance-report") && "filled"
                    )}>
                        calendar_month
                    </span>
                    <span className="text-[10px] font-medium">Laporan</span>
                </Link>

                {/* Center Action Button (Fingerprint) */}
                <Link href="/employee-dashboard/attendance" className="relative flex flex-col items-center justify-end h-full">
                    <div className="relative -top-6">
                        <RippleButton className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#137fec] shadow-lg shadow-blue-500/40 flex items-center justify-center text-white border-[5px] border-[#f6f7f8] dark:border-[#101922]">
                            <span className="material-symbols-outlined text-[36px]">fingerprint</span>
                        </RippleButton>
                    </div>
                    <span className="text-[10px] font-bold text-[#137fec] absolute">Absen</span>
                </Link>

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
                        <span className={cn(
                            "material-symbols-outlined text-[26px]",
                            isActive("/employee-dashboard/information") && "filled"
                        )}>
                            notifications
                        </span>
                        {!isActive("/employee-dashboard/information") && (
                            <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#1c2732]"></span>
                        )}
                    </div>
                    <span className="text-[10px] font-medium">Info</span>
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
                        <span className="material-symbols-outlined text-[20px] relative top-[2px]">person</span>
                    </div>
                    <span className={cn(
                        "text-[10px] font-medium",
                        isActive("/employee-dashboard/profile") && "font-bold"
                    )}>Profil</span>
                </Link>
            </div>
        </nav>
    );
};
