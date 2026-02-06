"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/context/language-context";
import { Language } from "@/lib/i18n/translations";

interface LanguageSelectorProps {
    variant?: "default" | "glass";
}

export const LanguageSelector = ({ variant = "default" }: LanguageSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    const buttonStyles = variant === "glass"
        ? "bg-white/10 text-white hover:bg-white/20"
        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700";

    return (
        <div className="relative" ref={containerRef}>
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-colors border-2 border-transparent ${buttonStyles}`}
            >
                <span className="text-sm font-bold tracking-wide">{language}</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 min-w-[100px] bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-1 overflow-hidden z-50 origin-top-right"
                    >
                        {["ID", "EN", "FR", "JP"].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleSelect(lang as Language)}
                                className={`w-full text-center px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 block ${language === lang ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-200"
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
