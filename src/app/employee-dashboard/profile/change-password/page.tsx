"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ChangePasswordPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        router.back();
    };

    return (
        <div className="bg-white dark:bg-[#101922] min-h-screen">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white dark:bg-[#101922] shadow-xl relative overflow-x-hidden flex flex-col">
                {/* TopAppBar */}
                <div className="sticky top-0 z-20 w-full bg-[#137fec] dark:bg-slate-900 border-none rounded-none shadow-none">
                    <div className="flex items-center px-4 py-4 justify-between h-[72px]">
                        <Link
                            href="/employee-dashboard/profile"
                            className="flex size-10 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-80 rounded-none"
                        >
                            <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
                        </Link>

                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
                            Ubah Password
                        </h2>
                    </div>
                </div>

                <main className="flex-1 p-6">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-5">
                            {/* Current Password */}
                            <div className="space-y-1.5">
                                <label className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider ml-1">Password Saat Ini</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">lock</span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Masukkan password lama"
                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* New Password */}
                            <div className="space-y-1.5">
                                <label className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider ml-1">Password Baru</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">key</span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Masukkan password baru"
                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="space-y-1.5">
                                <label className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider ml-1">Konfirmasi Password</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Ulangi password baru"
                                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#137fec]/20 focus:border-[#137fec] transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#137fec] hover:bg-[#1170d2] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">save</span>
                                        <span>Simpan Perubahan</span>
                                    </>
                                )}
                            </button>
                            <p className="text-center text-slate-400 dark:text-slate-500 text-xs">
                                Pastikan password baru Anda kuat dan sulit ditebak.
                            </p>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}
