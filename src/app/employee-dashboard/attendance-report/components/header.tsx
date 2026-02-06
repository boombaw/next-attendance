"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/context/language-context";
import { ChevronLeft } from 'lucide-react';

export const ComponentHeader = () => {
    const router = useRouter();
    const { t } = useLanguage();

    return (
        <header className="sticky top-0 z-20 w-full bg-[#137fec] dark:bg-[#101922] border-none rounded-none shadow-none">
            <div className="flex items-center px-4 py-4 justify-between h-[72px]">
                {/* Tombol Back */}
                <button
                    onClick={() => router.back()}
                    className="flex size-10 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-80 rounded-none"
                >
                    <ChevronLeft className="text-[24px]" />
                </button>

                {/* Judul Tengah */}
                <h1 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
                    {t.attendanceReports.title}
                </h1>
            </div>
        </header>


    );
};

