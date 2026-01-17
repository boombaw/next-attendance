"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { RippleButton } from "@/components/ui/ripple-button";
import { BottomNav } from "../components/bottom-nav";
import { cn } from "@/lib/utils";

const historyItems = [
    {
        title: "Disetujui",
        date: "10 Jan 2026",
        time: "18:00 - 21:00",
        duration: "3 Jam",
        description: "Menyelesaikan laporan akhir bulan dan rekap data penjualan Q4 untuk meeting management.",
        status: "approved"
    },
    {
        title: "Menunggu",
        date: "08 Jan 2026",
        time: "17:00 - 19:00",
        duration: "2 Jam",
        description: "Perbaikan urgent pada sistem database client A.",
        status: "pending"
    },
    {
        title: "Ditolak",
        date: "05 Jan 2026",
        time: "18:00 - 22:00",
        duration: "4 Jam",
        description: "Persiapan presentasi tahunan.",
        status: "rejected"
    },
    {
        title: "Disetujui",
        date: "02 Jan 2026",
        time: "18:00 - 21:00",
        duration: "3 Jam",
        description: "Stock opname gudang pusat.",
        status: "approved"
    },
];

const getStatusStyles = (status: string) => {
    switch (status) {
        case "approved":
            return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400";
        case "pending":
            return "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400";
        case "rejected":
            return "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400";
        default:
            return "bg-slate-100 text-slate-700";
    }
};

const getStatusLabel = (status: string) => {
    switch (status) {
        case "approved": return "Disetujui";
        case "pending": return "Menunggu";
        case "rejected": return "Ditolak";
        default: return status;
    }
};

export default function OvertimeHistoryPage() {
    const router = useRouter();

    return (
        <div className="relative min-h-screen w-full max-w-md mx-auto bg-[#f6f7f8] dark:bg-[#101922] shadow-2xl flex flex-col">
            <header className="sticky top-0 z-30 flex items-center bg-white dark:bg-[#1a2632] p-4 pb-4 border-b border-slate-200 dark:border-slate-800 shadow-sm flex-none">
                <RippleButton
                    onClick={() => router.back()}
                    className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors bg-transparent shadow-none"
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>arrow_back</span>
                </RippleButton>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Riwayat Lembur</h2>
            </header>

            <main className="px-4 py-6 flex-1 overflow-y-auto pb-32">
                <div className="space-y-8">
                    {/* Summary Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="bg-gradient-to-br from-[#137fec] to-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-[#137fec]/25 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <p className="text-blue-100 text-sm font-medium mb-1">Total Jam Lembur Bulan Ini</p>
                            <h3 className="text-3xl font-bold tracking-tight">12 Jam</h3>
                        </div>
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                    </motion.div>

                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold text-base mb-4 px-1">Januari 2026</h3>
                        <div className="space-y-3">
                            {historyItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    className="bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="material-symbols-outlined text-slate-400 text-[18px]">calendar_today</span>
                                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{item.date}</span>
                                            </div>
                                            <h4 className="font-bold text-slate-900 dark:text-white text-base">
                                                {item.time} <span className="font-normal text-slate-500 text-sm ml-1">• {item.duration}</span>
                                            </h4>
                                        </div>
                                        <span className={cn(
                                            "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                                            getStatusStyles(item.status)
                                        )}>
                                            {getStatusLabel(item.status)}
                                        </span>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                                        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <BottomNav />
        </div>
    );
}
