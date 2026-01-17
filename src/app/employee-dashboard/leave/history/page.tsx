"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { BottomNav } from "../../components/bottom-nav";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function LeaveHistoryPage() {
    const router = useRouter();

    const currentYear = new Date().getFullYear();

    const years = useMemo(() => {
        return Array.from({ length: 5 }, (_, i) => (currentYear - i).toString());
    }, [currentYear]);

    const [month, setMonth] = useState("januari");
    const [year, setYear] = useState(currentYear.toString());
    const months = [
        { value: "januari", label: "Januari" },
        { value: "februari", label: "Februari" },
        { value: "maret", label: "Maret" },
        { value: "april", label: "April" },
        { value: "mei", label: "Mei" },
        { value: "juni", label: "Juni" },
        { value: "juli", label: "Juli" },
        { value: "agustus", label: "Agustus" },
        { value: "september", label: "September" },
        { value: "oktober", label: "Oktober" },
        { value: "november", label: "November" },
        { value: "desember", label: "Desember" },
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#f6f7f8] dark:bg-[#101922] shadow-xl overflow-hidden pb-[100px]">
            <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-[#101922]/80 backdrop-blur-md p-4 border-b border-slate-200 dark:border-slate-800">
                <button
                    onClick={() => router.back()}
                    className="text-[#0d141b] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer"
                >
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <h2 className="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Riwayat Cuti</h2>
            </header>

            <main className="flex-1 pb-24">
                <div className="bg-blue-50/50 dark:bg-blue-900/10 py-4 border-b border-blue-100 dark:border-blue-900/30">
                    <div className="px-4 mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Sisa Cuti (Balance)</span>
                        <span className="material-symbols-outlined text-sm text-[#137fec]">info</span>
                    </div>
                    <div className="flex gap-3 overflow-x-auto px-4 no-scrollbar">
                        <div className="flex-none w-32 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase mb-1">Tahunan</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold text-[#137fec]">8</span>
                                <span className="text-xs text-slate-400">Hari</span>
                            </div>
                        </div>
                        <div className="flex-none w-32 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase mb-1">Bersama</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg font-bold text-slate-700 dark:text-slate-200">2</span>
                                <span className="text-xs text-slate-400">Hari</span>
                            </div>
                        </div>
                        <div className="flex-none w-32 bg-[#137fec] p-3 rounded-xl shadow-md border border-[#137fec]/20">
                            <p className="text-[10px] text-blue-100 font-medium uppercase mb-1">Total</p>
                            <div className="flex items-baseline gap-1 text-white">
                                <span className="text-lg font-bold">10</span>
                                <span className="text-xs opacity-80">Hari</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-3">
                    <label className="flex flex-col min-w-40 h-11 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                            <div className="text-[#4c739a] flex border-none bg-white dark:bg-slate-800 items-center justify-center pl-4 rounded-l-xl">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white focus:outline-0 focus:ring-0 h-full placeholder:text-[#4c739a] px-4 rounded-r-xl pl-2 text-sm font-normal" placeholder="Cari riwayat cuti..." />
                        </div>
                    </label>
                </div>

                <div className="px-4 mb-4 mt-4">
                    <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Periode</span>
                    </div>

                    <div className="flex gap-2 p-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        {/* Select Bulan */}
                        <Select value={month} onValueChange={setMonth}>
                            <SelectTrigger className="flex-1 h-10 border-none bg-[#137fec]/10 text-[#137fec] font-bold focus:ring-0 focus:ring-offset-0">
                                <SelectValue placeholder="Bulan" />
                            </SelectTrigger>
                            <SelectContent>
                                {months.map((m) => (
                                    <SelectItem key={m.value} value={m.value}>
                                        {m.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Select Tahun (Dinamis 5 Tahun Terakhir) */}
                        <Select value={year} onValueChange={setYear}>
                            <SelectTrigger className="flex-1 h-10 border-none bg-[#137fec]/10 text-[#137fec] font-bold focus:ring-0 focus:ring-offset-0">
                                <SelectValue placeholder="Tahun" />
                            </SelectTrigger>
                            <SelectContent>
                                {years.map((y) => (
                                    <SelectItem key={y} value={y}>
                                        {y}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="px-4 space-y-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">Hasil Pencarian</div>

                    <div className="flex flex-col rounded-xl shadow-sm bg-white dark:bg-slate-800 overflow-hidden border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center p-4 gap-4">
                            <div className="size-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                <span className="material-symbols-outlined">event_available</span>
                            </div>
                            <div className="flex flex-col grow">
                                <div className="flex justify-between items-start">
                                    <p className="text-[#0d141b] dark:text-white text-base font-bold">Cuti Tahunan</p>
                                    <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">Disetujui</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                                    <p className="text-sm font-normal">15 - 18 Jan 2026</p>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 italic">"Liburan keluarga"</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-xl shadow-sm bg-white dark:bg-slate-800 overflow-hidden border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center p-4 gap-4">
                            <div className="size-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                                <span className="material-symbols-outlined">pending_actions</span>
                            </div>
                            <div className="flex flex-col grow">
                                <div className="flex justify-between items-start">
                                    <p className="text-[#0d141b] dark:text-white text-base font-bold">Izin Sakit</p>
                                    <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">Menunggu</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                                    <p className="text-sm font-normal">02 Feb 2026</p>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 italic">"Demam"</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-xl shadow-sm bg-white dark:bg-slate-800 overflow-hidden border border-slate-100 dark:border-slate-700">
                        <div className="flex items-center p-4 gap-4">
                            <div className="size-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                                <span className="material-symbols-outlined">event_busy</span>
                            </div>
                            <div className="flex flex-col grow">
                                <div className="flex justify-between items-start">
                                    <p className="text-[#0d141b] dark:text-white text-base font-bold">Cuti Penting</p>
                                    <span className="px-2 py-1 rounded text-[10px] font-bold uppercase bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300">Ditolak</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                                    <p className="text-sm font-normal">10 Dec 2025</p>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 italic">"Acara keluarga"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <BottomNav />
        </div>
    );
}
