"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const AttendanceHero = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update jam setiap detik
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Membersihkan interval saat komponen tidak lagi digunakan (unmount)
        return () => clearInterval(timer);
    }, []);

    // Formatter untuk Tanggal (Contoh: Selasa, 13 Jan)
    const dateFormatter = new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    // Formatter untuk Jam (Contoh: 08:00:00)
    const timeFormatter = new Intl.DateTimeFormat("id-ID", {
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
                            {dateFormatter.format(currentTime)}
                        </span>
                        <span className="text-4xl font-bold tracking-tight mt-1 font-mono">
                            {timeFormatter.format(currentTime)}
                        </span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        <span className="text-xs font-bold tracking-wide">WIB</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                    {/* Check In Box */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex flex-col gap-1 hover:bg-white/20 transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="material-symbols-outlined text-[20px] text-green-300">login</span>
                            <span className="text-xs font-semibold opacity-90">Masuk</span>
                        </div>
                        <span className="text-xl font-bold">08:05</span>
                    </div>

                    {/* Check Out Box */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="material-symbols-outlined text-[20px] text-orange-200">logout</span>
                            <span className="text-xs font-semibold opacity-80">Pulang</span>
                        </div>
                        <span className="text-xl font-bold opacity-60">--:--</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};