"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context/language-context";
import { CircleCheck, LogOut } from "lucide-react";

export const HistoryList = () => {
    const { t } = useLanguage();
    return (
        <section>
            <div className="flex items-center justify-between mb-4 px-1 mt-2">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold">{t.dashboard.history.title}</h3>
                <a className="text-sm text-[#137fec] font-semibold hover:underline" href="#">{t.common.viewAll}</a>
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
                            <CircleCheck className="text-[20px]" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.dashboard.hero.checkInSuccess}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Kantor Pusat • {t.common.onTime}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">08:05</span> 
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
                            <LogOut className="text-[20px]" />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.dashboard.hero.checkOut}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">12 Jan • {t.common.yesterday}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">17:02</span> 
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
