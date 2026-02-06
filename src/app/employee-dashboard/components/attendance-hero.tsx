"use client";

import React, { useSyncExternalStore } from "react";
import { motion } from "framer-motion";

import { LogIn, LogOut } from "lucide-react";

// Store for time updates
let currentTimeValue = new Date();
const listeners = new Set<() => void>();

const subscribe = (callback: () => void) => {
    listeners.add(callback);
    const interval = setInterval(() => {
        currentTimeValue = new Date();
        listeners.forEach((listener) => listener());
    }, 1000);
    return () => {
        listeners.delete(callback);
        clearInterval(interval);
    };
};

const getSnapshot = () => currentTimeValue;
const getServerSnapshot = () => null as Date | null;

import { useLanguage } from "@/lib/context/language-context";

export const AttendanceHero = () => {
    const { t, language } = useLanguage();
    const currentTime = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const locale = language === "ID" ? "id-ID" : language === "JP" ? "ja-JP" : language === "FR" ? "fr-FR" : "en-US";


    const dateFormatter = new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const timeFormatter = new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full rounded-3xl overflow-hidden shadow-xl relative group h-[240px] mx-auto transform transition-transform"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#137fec]/90 to-blue-700/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-xs font-medium opacity-90 tracking-widest uppercase">
                            {currentTime ? dateFormatter.format(currentTime) : t.common.loading}
                        </span>
                        <span className="text-4xl font-bold tracking-tight mt-1 font-mono">
                            {currentTime ? timeFormatter.format(currentTime) : "--:--:--"}
                        </span>
                    </div> 
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                    {/* Check In Box */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex flex-col gap-1 hover:bg-white/20 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                            <LogIn className="text-[20px] text-green-300" />
                            <span className="text-xs font-semibold opacity-90">{t.dashboard.hero.checkIn}</span>
                        </div>
                        <span className="text-xl font-bold">08:05</span>
                    </div>

                    {/* Check Out Box */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1"> 
                             <LogOut className="text-[20px] text-orange-200" />
                            <span className="text-xs font-semibold opacity-80">{t.dashboard.hero.checkOut}</span>
                        </div>
                        <span className="text-xl font-bold opacity-60">--:--</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};