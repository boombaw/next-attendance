"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const ComponentHeader = () => {
    const router = useRouter();

    return (
        <header className="sticky top-0 z-20 w-full bg-[#137fec] dark:bg-[#101922] border-none rounded-none shadow-none">
            <div className="flex items-center px-4 py-4 justify-between h-[72px]">
                {/* Tombol Back */}
                <button
                    onClick={() => router.back()}
                    className="flex size-10 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-80 rounded-none"
                >
                    <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
                </button>

                {/* Judul Tengah */}
                <h1 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
                    Laporan Presensi
                </h1>
            </div>
        </header>


    );
};

