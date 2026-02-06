"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { RippleButton } from "@/components/ui/ripple-button";
import { useUser } from "@/contexts/user-context";
import { useLanguage } from "@/lib/context/language-context";

export const ServicesGrid = () => {
    const { t } = useLanguage();
    const router = useRouter();
    const { isSupervisor, isHydrated } = useUser();

    const baseServices = [
        { icon: "event_busy", label: t.dashboard.services.permission, delay: 0.5, href: "/employee-dashboard/permission" },
        { icon: "history_toggle_off", label: t.dashboard.services.overtime, delay: 0.6, href: "/employee-dashboard/overtime-request" },
        { icon: "calendar_month", label: t.dashboard.services.report, delay: 0.7, href: "/employee-dashboard/attendance-report" },
        { icon: "beach_access", label: t.dashboard.services.leave, delay: 0.8, href: "/employee-dashboard/leave" },
    ];

    // Add approval service for supervisors only after hydration to prevent mismatch
    const services = isHydrated && isSupervisor
        ? [...baseServices, { icon: "task_alt", label: t.dashboard.services.approval, delay: 0.9, href: "/employee-dashboard/approvals" }]
        : baseServices;

    const handleNavigation = (href: string) => {
        if (href && href !== "#") {
            router.push(href);
        }
    };

    return (
        <section>
            <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold">{t.dashboard.services.title}</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {services.map((service) => (
                    <motion.div
                        key={service.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: service.delay }}
                        className="flex flex-col items-center gap-2"
                    >
                        <RippleButton
                            onClick={() => handleNavigation(service.href)}
                            className="w-[3.75rem] h-[3.75rem] rounded-2xl bg-white dark:bg-[#1c2732] shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-[#137fec] hover:scale-105 transition-transform duration-200"
                        >
                            <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                        </RippleButton>
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{service.label}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
