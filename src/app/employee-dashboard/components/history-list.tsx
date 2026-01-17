"use client";

import React from "react";
import { motion } from "framer-motion";

export const HistoryList = () => {
    return (
        <section>
            <div className="flex items-center justify-between mb-4 px-1 mt-2">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold">Riwayat</h3>
                <a className="text-sm text-[#137fec] font-semibold hover:underline" href="#">Lihat Semua</a>
            </div>

            <div className="flex flex-col gap-3">
                {/* Check In Item */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-white dark:bg-[#1c2732] rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <span className="material-symbols-outlined text-[20px]">check_circle</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Check In Berhasil</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Kantor Pusat • On time</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">08:05</span>
                        <span className="text-[10px] text-slate-400 font-bold">WIB</span>
                    </div>
                </motion.div>

                {/* Check Out Item (Inactive/Past) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    className="bg-white dark:bg-[#1c2732] rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between opacity-60"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                            <span className="material-symbols-outlined text-[20px]">logout</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Check Out</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">12 Jan • Kemarin</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">17:02</span>
                        <span className="text-[10px] text-slate-400 font-bold">WIB</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
