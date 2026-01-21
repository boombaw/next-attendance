import React from "react";
import { cn } from "@/lib/utils";

const StatCard = ({
    icon, 
    iconColorClass,
    label,
    value,
    percent,
    progressBarColorClass
}: {
    icon: string;
    colorClass: string;
    iconColorClass: string;
    label: string;
    value: number;
    percent: number;
    progressBarColorClass: string;
}) => {
    return (
        <div className="flex flex-col gap-1 rounded-xl p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-3 opacity-10">
                <span className={cn("material-symbols-outlined text-4xl", iconColorClass)}>{icon}</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium truncate">{label}</p>
            <p className="text-slate-900 dark:text-white text-2xl font-bold">{value}</p>
            <div className="w-full bg-slate-100 dark:bg-slate-700 h-1 rounded-full mt-2 overflow-hidden">
                <div className={cn("h-full rounded-full", progressBarColorClass)} style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    );
};

export const StatsCards = () => {
    return (
        <div className="p-4 grid grid-cols-2 gap-3">
            <StatCard
                icon="check_circle"
                colorClass="text-primary"
                iconColorClass="text-[#137fec]"
                label="Hadir"
                value={20}
                percent={85}
                progressBarColorClass="bg-[#137fec]"
            />
            <StatCard
                icon="schedule"
                colorClass="text-orange-500"
                iconColorClass="text-orange-500"
                label="Terlambat"
                value={2}
                percent={15}
                progressBarColorClass="bg-orange-500"
            />
            <StatCard
                icon="sick"
                colorClass="text-blue-400"
                iconColorClass="text-blue-400"
                label="Izin/Sakit"
                value={1}
                percent={5}
                progressBarColorClass="bg-blue-400"
            />
            <StatCard
                icon="cancel"
                colorClass="text-red-500"
                iconColorClass="text-red-500"
                label="Tanpa Ket."
                value={0}
                percent={0}
                progressBarColorClass="bg-red-500"
            />
        </div>
    );
};
