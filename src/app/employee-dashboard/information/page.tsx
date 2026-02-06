"use client";

import React from "react";
import { motion } from "framer-motion";
import { BottomNav } from "../components/bottom-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLanguage } from "@/lib/context/language-context";
import { ChevronLeft } from "lucide-react";

// Mock data for notifications
const notifications = [
    {
        id: 1,
        type: "Cuti",
        title: "Pengajuan Cuti Tahunan",
        status: "approved",
        date: "15 Jan 2026",
        time: "09:30",
        message: "Pengajuan cuti Anda untuk tanggal 20-22 Jan 2026 telah disetujui.",
        icon: "beach_access"
    },
    {
        id: 2,
        type: "Lembur",
        title: "Pengajuan Lembur",
        status: "rejected",
        date: "14 Jan 2026",
        time: "16:45",
        message: "Maaf, pengajuan lembur Anda untuk tanggal 14 Jan 2026 ditolak.",
        icon: "timer"
    },
    {
        id: 3,
        type: "Izin",
        title: "Izin Sakit",
        status: "pending",
        date: "12 Jan 2026",
        time: "08:15",
        message: "Pengajuan izin sakit Anda sedang diproses oleh atasan.",
        icon: "medication"
    },
    {
        id: 4,
        type: "Cuti",
        title: "Cuti Mendadak",
        status: "approved",
        date: "05 Jan 2026",
        time: "10:00",
        message: "Pengajuan cuti mendadak telah disetujui.",
        icon: "event_busy"
    }
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "approved":
            return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";
        case "rejected":
            return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
        case "pending":
            return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400";
        default:
            return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
    }
};

const getStatusLabel = (status: string) => {
    const { t } = useLanguage();
    switch (status) {
        case "approved":
            return t.attendanceReports.employee.stats.approved;
        case "rejected":
            return t.attendanceReports.employee.stats.rejected;
        case "pending":
            return t.attendanceReports.employee.stats.pending;
        default:
            return status;
    }
};

export default function InformationPage() {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-white dark:bg-[#101922] text-slate-900 dark:text-slate-100 font-sans pb-[100px]">
            <div className="max-w-md mx-auto relative bg-white dark:bg-[#101922] min-h-screen overflow-x-hidden ">
                {/* TopAppBar */}
                <div className="sticky top-0 z-20 w-full bg-[#137fec] dark:bg-slate-900 border-none rounded-none shadow-none">
                    <div className="flex items-center px-4 py-4 justify-between h-[72px]">
                        <Link
                            href="/employee-dashboard"
                            className="flex size-10 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-80 rounded-none"
                        >
                           <ChevronLeft className="text-[24px]" />
                        </Link>

                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
                            {t.common.information}
                        </h2>
                    </div>
                </div>

                <main className="flex flex-col gap-4 p-5">
                    {notifications.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="bg-white dark:bg-[#1c2732] rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center",
                                        getStatusColor(item.status)
                                    )}>
                                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.date} • {item.time}</p>
                                    </div>
                                </div>
                                <span className={cn(
                                    "px-2.5 py-1 rounded-full text-[10px] font-bold border",
                                    item.status === "approved" && "bg-green-50 border-green-200 text-green-600 dark:bg-green-900/20 dark:border-green-800",
                                    item.status === "rejected" && "bg-red-50 border-red-200 text-red-600 dark:bg-red-900/20 dark:border-red-800",
                                    item.status === "pending" && "bg-yellow-50 border-yellow-200 text-yellow-600 dark:bg-yellow-900/20 dark:border-yellow-800"
                                )}>
                                    {getStatusLabel(item.status)}
                                </span>
                            </div>

                            <div className="pl-[52px]">
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                                    {item.message}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </main>

                <BottomNav />
            </div>
        </div>
    );
}
