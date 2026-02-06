import React from "react";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/lib/context/language-context";



import { CheckCircle, Clock, Stethoscope, XCircle, LucideIcon } from "lucide-react";





const StatCard = ({
    Icon,
    iconColorClass,
    label,
    value,
    percent,
    progressBarColorClass
}: {
    Icon: LucideIcon;
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
                <Icon className={cn("w-10 h-10", iconColorClass)} />
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
    const { t } = useLanguage();
    return (
        <div className="p-4 grid grid-cols-2 gap-3">
            <StatCard
                Icon={CheckCircle}
                colorClass="text-primary"
                iconColorClass="text-[#137fec]"
                label={t.attendanceReports.employee.stats.present}
                value={20}
                percent={85}
                progressBarColorClass="bg-[#137fec]"
            />
            <StatCard
                Icon={Clock}
                colorClass="text-orange-500"
                iconColorClass="text-orange-500"
                label={t.attendanceReports.employee.stats.late}
                value={2}
                percent={15}
                progressBarColorClass="bg-orange-500"
            />
            <StatCard
                Icon={Stethoscope}
                colorClass="text-blue-400"
                iconColorClass="text-blue-400"
                label={t.attendanceReports.employee.stats.leave}
                value={1}
                percent={5}
                progressBarColorClass="bg-blue-400"
            />
            <StatCard
                Icon={XCircle}
                colorClass="text-red-500"
                iconColorClass="text-red-500"
                label={t.attendanceReports.employee.stats.alpha}
                value={0}
                percent={0}
                progressBarColorClass="bg-red-500"
            />
        </div>
    );
};
