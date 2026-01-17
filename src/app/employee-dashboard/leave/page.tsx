"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BottomNav } from "../components/bottom-nav";

export default function LeaveRequestPage() {
    const router = useRouter();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-[#f6f7f8] dark:bg-[#101922] shadow-2xl">
            <header className="sticky top-0 z-20 flex items-center justify-between bg-white/80 dark:bg-[#1c2732]/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <button
                    onClick={() => router.back()}
                    className="flex size-10 items-center justify-center rounded-full active:bg-slate-100 dark:active:bg-slate-700 transition-colors text-[#137fec]"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white flex-1 text-center">
                    Ajukan Cuti
                </h2>
                <Link
                    href="/employee-dashboard/leave/history"
                    className="flex size-10 items-center justify-center rounded-full active:bg-slate-100 dark:active:bg-slate-700 transition-colors text-[#137fec]"
                >
                    <span className="material-symbols-outlined text-[24px]">history</span>
                </Link>
            </header>

            <main className="flex-1 overflow-y-auto no-scrollbar pb-32 p-4">
                <div className="mb-6 rounded-xl bg-gradient-to-r from-[#137fec] to-blue-500 p-5 text-white shadow-lg shadow-blue-500/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-blue-100 text-sm font-medium mb-1">Sisa Cuti Tahunan</p>
                            <h3 className="text-3xl font-bold">12 <span className="text-lg font-normal text-blue-100">Hari</span></h3>
                        </div>
                        <div className="size-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <span className="material-symbols-outlined text-white text-[28px]">calendar_month</span>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-blue-100">
                        <span className="material-symbols-outlined text-[16px]">info</span>
                        <span>Valid sampai 31 Des 2024</span>
                    </div>
                </div>

                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider px-1">Jenis Cuti</label>
                        <div className="relative">
                            <select className="w-full appearance-none rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2732] px-4 py-3.5 text-base font-medium text-slate-900 dark:text-white focus:border-[#137fec] focus:outline-none focus:ring-1 focus:ring-[#137fec]">
                                <option value="annual">Cuti Tahunan</option>
                                <option value="sick">Cuti Sakit</option>
                                <option value="unpaid">Cuti Tanpa Bayaran</option>
                                <option value="maternity">Cuti Melahirkan</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider px-1">Tanggal Mulai</label>
                            <div className="relative group">
                                <input
                                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2732] px-4 py-3.5 pl-11 text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#137fec] focus:outline-none focus:ring-1 focus:ring-[#137fec] transition-all"
                                    onBlur={(e) => (e.target.type = 'text')}
                                    onFocus={(e) => (e.target.type = 'date')}
                                    placeholder="DD/MM/YYYY"
                                    type="text"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#137fec]">
                                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider px-1">Tanggal Selesai</label>
                            <div className="relative group">
                                <input
                                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2732] px-4 py-3.5 pl-11 text-base font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#137fec] focus:outline-none focus:ring-1 focus:ring-[#137fec] transition-all"
                                    onBlur={(e) => (e.target.type = 'text')}
                                    onFocus={(e) => (e.target.type = 'date')}
                                    placeholder="DD/MM/YYYY"
                                    type="text"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#137fec]">
                                    <span className="material-symbols-outlined text-[20px]">event_available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider px-1">Alasan</label>
                        <textarea className="w-full min-h-[140px] resize-none rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1c2732] px-4 py-3.5 text-base text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#137fec] focus:outline-none focus:ring-1 focus:ring-[#137fec]" placeholder="Contoh: Liburan keluarga ke Bali..."></textarea>
                    </div>
                </form>
            </main>
            <div className="fixed bottom-[84px] left-0 right-0 w-full max-w-md mx-auto px-4 pb-2 z-10 bg-gradient-to-t from-[#f6f7f8] via-[#f6f7f8] to-transparent dark:from-[#101922] dark:via-[#101922] pt-8">
                <button className="flex w-full items-center justify-center rounded-xl bg-[#137fec] h-14 px-6 text-white text-base font-bold tracking-wide shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform hover:bg-blue-600">
                    KIRIM PERMOHONAN
                </button>
            </div>

            <BottomNav />
        </div>
    );
}

