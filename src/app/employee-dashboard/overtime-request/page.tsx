"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { RippleButton } from "@/components/ui/ripple-button";
import { BottomNav } from "../components/bottom-nav";

export default function OvertimeRequestPage() {
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
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Ajukan Lembur</h2>
                <RippleButton
                    onClick={() => router.push("/employee-dashboard/overtime-history")}
                    className="text-slate-500 hover:text-[#137fec] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors bg-transparent shadow-none"
                    aria-label="Riwayat Lembur"
                >
                    <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>history</span>
                </RippleButton>
            </header>

            <main className="px-4 py-6 flex-1 overflow-y-auto pb-48">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Tanggal Lembur</label>
                        <div className="relative group cursor-pointer">
                            <input
                                className="peer form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a2632] focus:border-[#137fec] h-12 placeholder:text-slate-400 p-[15px] pr-12 text-base font-normal leading-normal transition-all"
                                type="date"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 peer-focus:text-[#137fec] pointer-events-none transition-colors">
                                <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>calendar_today</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-2 flex-1">
                            <label className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Waktu Mulai</label>
                            <div className="relative">
                                <input
                                    className="peer form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a2632] focus:border-[#137fec] h-12 placeholder:text-slate-400 p-[15px] pr-10 text-base font-normal leading-normal transition-all"
                                    type="time"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 peer-focus:text-[#137fec] pointer-events-none transition-colors">
                                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>schedule</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Waktu Selesai</label>
                            <div className="relative">
                                <input
                                    className="peer form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a2632] focus:border-[#137fec] h-12 placeholder:text-slate-400 p-[15px] pr-10 text-base font-normal leading-normal transition-all"
                                    type="time"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 peer-focus:text-[#137fec] pointer-events-none transition-colors">
                                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>schedule</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-900 dark:text-slate-100 text-sm font-medium leading-normal">Tugas/Pekerjaan</label>
                        <textarea
                            className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#137fec]/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a2632] focus:border-[#137fec] min-h-[140px] placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal transition-all"
                            placeholder="Deskripsikan pekerjaan yang akan dilakukan..."
                        ></textarea>
                    </div>
                </motion.div>
            </main>

            <div className="fixed bottom-[84px] left-0 right-0 mx-auto max-w-md z-40">
                <div className="px-4 pb-2 bg-gradient-to-t from-[#f6f7f8] via-[#f6f7f8] to-transparent dark:from-[#101922] dark:via-[#101922] pt-4 pointer-events-none">
                    <div className="pointer-events-auto">
                        <RippleButton className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#137fec] hover:bg-blue-600 active:bg-blue-700 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-[#137fec]/20">
                            <span className="truncate">KIRIM PENGAJUAN</span>
                        </RippleButton>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
}
