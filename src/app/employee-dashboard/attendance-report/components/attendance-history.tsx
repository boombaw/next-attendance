import React from "react";
import { cn } from "@/lib/utils";

const HistoryItem = ({
    day,
    date,
    status,
    timeIn,
    timeOut,
    statusText,
    icon,
    iconBg,
    iconColor
}: {
    day: string;
    date: string;
    status: "ontime" | "late" | "sick" | "absent" | "holiday";
    timeIn?: string;
    timeOut?: string;
    statusText?: string;
    icon: string;
    iconBg: string; // Tailwind class
    iconColor: string; // Tailwind class
}) => {

    const getBadgeStyle = () => {
        switch (status) {
            case "ontime": return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
            case "late": return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400";
            case "sick": return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400";
            case "absent": return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400";
            case "holiday": return "bg-gray-100 dark:bg-gray-800 text-gray-500";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    const getStatusLabel = () => {
        switch (status) {
            case "ontime": return "Tepat Waktu";
            case "late": return "Terlambat";
            case "sick": return "Sakit";
            case "absent": return "Tanpa Ket.";
            case "holiday": return "Libur";
            default: return "-";
        }
    };

    return (
        <div className={cn(
            "group relative flex gap-4 px-4 py-5 border-b border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors",
            status === "holiday" && "opacity-50"
        )}>
            <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", iconBg, iconColor)}>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div className="flex flex-1 flex-col justify-center">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">{day}, {date}</p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5 flex items-center gap-1">
                            {timeIn ? (
                                <>
                                    <span className="material-symbols-outlined text-[14px]">login</span>
                                    <span className={status === "late" ? "text-orange-600 dark:text-orange-400 font-medium" : ""}>{timeIn}</span>
                                    &nbsp;
                                    <span className="material-symbols-outlined text-[14px]">logout</span> {timeOut}
                                </>
                            ) : (
                                statusText
                            )}
                        </p>
                    </div>
                    <div className="shrink-0">
                        <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", getBadgeStyle())}>
                            {getStatusLabel()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const AttendanceHistory = () => {
    return (
        <>
            <div className="h-2 bg-slate-50 dark:bg-[#0c1219]"></div>
            <div className="flex flex-col pb-24">
                <div className="px-4 py-4">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Riwayat Presensi</h3>
                </div>

                <HistoryItem
                    day="Senin" date="12 Jan" status="ontime" timeIn="07:55" timeOut="17:05"
                    icon="calendar_today" iconBg="bg-green-50 dark:bg-green-900/20" iconColor="text-green-600 dark:text-green-400"
                />

                <HistoryItem
                    day="Selasa" date="13 Jan" status="late" timeIn="08:15" timeOut="17:10"
                    icon="running_with_errors" iconBg="bg-orange-50 dark:bg-orange-900/20" iconColor="text-orange-600 dark:text-orange-400"
                />

                <HistoryItem
                    day="Rabu" date="14 Jan" status="ontime" timeIn="07:45" timeOut="17:00"
                    icon="calendar_today" iconBg="bg-green-50 dark:bg-green-900/20" iconColor="text-green-600 dark:text-green-400"
                />

                <HistoryItem
                    day="Kamis" date="15 Jan" status="sick" statusText="Surat Dokter"
                    icon="medication" iconBg="bg-blue-50 dark:bg-blue-900/20" iconColor="text-blue-600 dark:text-blue-400"
                />

                <HistoryItem
                    day="Jumat" date="16 Jan" status="absent" statusText="-"
                    icon="block" iconBg="bg-red-50 dark:bg-red-900/20" iconColor="text-red-600 dark:text-red-400"
                />

                <HistoryItem
                    day="Sabtu" date="17 Jan" status="holiday" statusText="Libur Akhir Pekan"
                    icon="weekend" iconBg="bg-gray-100 dark:bg-gray-800" iconColor="text-gray-400"
                />
            </div>
        </>
    );
};
