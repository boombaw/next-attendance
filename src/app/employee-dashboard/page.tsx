"use client";

import React from "react";
import { EmployeeHeader } from "./components/employee-header";
import { AttendanceHero } from "./components/attendance-hero";
import { ServicesGrid } from "./components/services-grid";
import { HistoryList } from "./components/history-list";
import { BottomNav } from "./components/bottom-nav";

export default function EmployeeDashboardPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#101922] text-slate-900 dark:text-slate-100 font-sans pb-[100px]">
            <div className="max-w-md mx-auto relative bg-white dark:bg-[#101922] min-h-screen overflow-x-hidden">

                <EmployeeHeader />

                <main className="flex flex-col gap-6 p-5">
                    <AttendanceHero />
                    <ServicesGrid />
                    <HistoryList />
                </main>

                <BottomNav />

            </div>
        </div>
    );
}
