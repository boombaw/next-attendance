"use client";

import React from "react";
import Link from "next/link";
import { BottomNav } from "../components/bottom-nav";

export default function UserProfilePage() {
    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-[#f6f7f8] dark:bg-[#101922] border-x border-slate-200 dark:border-slate-800">
            {/* TopAppBar */}
            <div className="sticky top-0 z-20 w-full bg-[#137fec] dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 rounded-none shadow-none">
                <div className="flex items-center px-4 py-4 justify-between h-[72px]">
                    {/* Tombol Back - Disamakan posisi dan ukurannya */}
                    <Link
                        href="/employee-dashboard"
                        className="text-white dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer rounded-none transition-opacity hover:opacity-80"
                    >
                        <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
                    </Link>

                    {/* Judul Tengah - Menggunakan pr-10 untuk mengimbangi size-10 tombol back */}
                    <h2 className="text-white dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
                        Akun
                    </h2>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
                {/* ProfileHeader */}
                <div className="flex p-6 bg-white dark:bg-slate-900 mb-2">
                    <div className="flex w-full flex-col gap-4 items-center">
                        <div className="flex gap-4 flex-col items-center">
                            <div className="relative">
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-28 w-28 border-4 border-[#137fec]/10"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVwpIwHp6TMC8IvxOERqchMKwy7Hgbzn1m3vraLHZ7OoeVSR_17aBRIcemRfFhGx96Lg2aYHhPcJB0Ofpai9jPXw2Xk8LHZj7R4QQYweMx5r9jtDJBNW315u8yZCGcUH1_34A1LH4ysIHRIIXFGTE1s69eMSA8BZd_q9p2ZuO7WvCh9v8bAmr4msDtZ-CY8Xiws0hu_Fksv44z-aO7qVNVbm4dvQce3fWJlMZAgk7ZgwT72kdza7JY2JcAooucPb6eAXGreGyzRqFk")' }}
                                >
                                </div>
                                <div className="absolute bottom-1 right-1 bg-[#137fec] text-white p-1.5 rounded-full border-2 border-white dark:border-slate-900 shadow-sm flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[16px]">edit</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-tight text-center">Budi Santoso</p>
                                <p className="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal text-center mt-0.5">ID: EMP-2023001</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu List Group */}
                <div className="px-4 py-2 mt-4 space-y-1">
                    <p className="px-2 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Pengaturan Profil</p>

                    {/* ListItem: Personal Information */}
                    <Link href="/employee-dashboard/profile/personal-info">
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl justify-between cursor-pointer active:bg-slate-50 dark:active:bg-slate-800 transition-colors mb-2">
                            <div className="flex items-center gap-4">
                                <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <p className="text-[#0d141b] dark:text-slate-100 text-[15px] font-medium leading-normal flex-1 truncate">Informasi Personal</p>
                            </div>
                            <div className="shrink-0">
                                <div className="text-slate-400 flex size-6 items-center justify-center">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* ListItem: Change Password */}
                    <Link href="/employee-dashboard/profile/change-password">
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl justify-between cursor-pointer active:bg-slate-50 dark:active:bg-slate-800 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10">
                                    <span className="material-symbols-outlined">lock</span>
                                </div>
                                <p className="text-[#0d141b] dark:text-slate-100 text-[15px] font-medium leading-normal flex-1 truncate">Ubah Password</p>
                            </div>
                            <div className="shrink-0">
                                <div className="text-slate-400 flex size-6 items-center justify-center">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="px-4 py-2 mt-4 space-y-1">
                    <p className="px-2 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Dukungan</p>

                    {/* ListItem: Help Center */}
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl justify-between cursor-pointer active:bg-slate-50 dark:active:bg-slate-800 transition-colors mb-2">
                        <div className="flex items-center gap-4">
                            <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10">
                                <span className="material-symbols-outlined">help_center</span>
                            </div>
                            <p className="text-[#0d141b] dark:text-slate-100 text-[15px] font-medium leading-normal flex-1 truncate">Pusat Bantuan</p>
                        </div>
                        <div className="shrink-0">
                            <div className="text-slate-400 flex size-6 items-center justify-center">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    </div>

                    {/* ListItem: Privacy Policy */}
                    <div className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl justify-between cursor-pointer active:bg-slate-50 dark:active:bg-slate-800 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10">
                                <span className="material-symbols-outlined">policy</span>
                            </div>
                            <p className="text-[#0d141b] dark:text-slate-100 text-[15px] font-medium leading-normal flex-1 truncate">Kebijakan Privasi</p>
                        </div>
                        <div className="shrink-0">
                            <div className="text-slate-400 flex size-6 items-center justify-center">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logout Button Section */}
                <div className="px-4 mt-10 mb-6">
                    <button className="w-full flex items-center justify-center gap-2 py-4 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 font-semibold rounded-xl active:scale-[0.98] transition-all">
                        <span className="material-symbols-outlined">logout</span>
                        <span>Keluar</span>
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-6 font-medium uppercase tracking-widest">Version 2.4.0</p>
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNav />

            {/* Bottom Safe Area Spacer - handled by BottomNav padding but kept for safety if needed */}
            <div className="h-6 w-full bg-white dark:bg-slate-900 hidden"></div>
        </div>
    );
}
