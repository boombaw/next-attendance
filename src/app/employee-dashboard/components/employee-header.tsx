"use client";

import { LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageSelector } from "@/components/language-selector";
import { useLanguage } from "@/lib/context/language-context";

export const EmployeeHeader = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { t } = useLanguage();
    const [greeting, setGreeting] = useState("");

    // Use effect to set greeting on client-side only to prevent hydration mismatch
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 11) setGreeting(t.dashboard.greeting.morning);
        else if (hour >= 11 && hour < 15) setGreeting(t.dashboard.greeting.afternoon);
        else if (hour >= 15 && hour < 18) setGreeting(t.dashboard.greeting.evening);
        else setGreeting(t.dashboard.greeting.night);
    }, [t]);

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        window.location.href = "/";
    };

    return (
        <header className="w-full px-6 pt-12 pb-6 flex items-center justify-between bg-[#137fec] dark:bg-[#1c2732] rounded-b-[2.5rem] shadow-sm z-50 sticky top-0 transition-colors duration-200">
            <div className="flex flex-col gap-1">
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white dark:text-slate-100 text-sm font-medium h-5"
                >
                    {greeting || t.dashboard.greeting.morning} {/* Fallback or skeleton spacer */}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-slate-50 dark:text-white leading-tight"
                >
                    Budi Santoso
                </motion.h1>
            </div>

            <div className="flex items-center gap-3">
                <LanguageSelector variant="glass" />
                <div className="relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="relative cursor-pointer"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <div
                            className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-md"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVwpIwHp6TMC8IvxOERqchMKwy7Hgbzn1m3vraLHZ7OoeVSR_17aBRIcemRfFhGx96Lg2aYHhPcJB0Ofpai9jPXw2Xk8LHZj7R4QQYweMx5r9jtDJBNW315u8yZCGcUH1_34A1LH4ysIHRIIXFGTE1s69eMSA8BZd_q9p2ZuO7WvCh9v8bAmr4msDtZ-CY8Xiws0hu_Fksv44z-aO7qVNVbm4dvQce3fWJlMZAgk7ZgwT72kdza7JY2JcAooucPb6eAXGreGyzRqFk')" }}
                        />
                        <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white dark:border-[#1c2732]"></div>
                    </motion.div>

                    {isProfileOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 z-50 origin-top-right">
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                {t.nav.logout}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};