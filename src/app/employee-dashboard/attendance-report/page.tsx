"use client";

import React, { useState } from "react";
import { BottomNav } from "../components/bottom-nav";
import { ComponentHeader } from "./components/header";
import { MonthFilter } from "./components/month-filter";
import { StatsCards } from "./components/stats-cards";
import { AttendanceHistory } from "./components/attendance-history";

import { useLanguage } from "@/lib/context/language-context";

export default function AttendanceReportPage() {
    // Default to current date
    const [currentDate, setCurrentDate] = useState(new Date());
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-white dark:bg-[#101922] text-slate-900 dark:text-slate-100 font-sans pb-[100px]">
            <div className="max-w-md mx-auto relative bg-white dark:bg-[#101922] min-h-screen overflow-x-hidden shadow-2xl">

                <ComponentHeader />

                <main className="flex-1 overflow-y-auto hide-scrollbar">
                    <div className="px-4 pt-6 pb-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                {t.attendanceReports.employee.resume}
                            </h3>
                            <MonthFilter
                                date={currentDate}
                                onDateChange={setCurrentDate}
                            />
                        </div>
                    </div>

                    <StatsCards />

                    <AttendanceHistory />
                </main>

                <BottomNav />

            </div>
        </div>
    );
}
