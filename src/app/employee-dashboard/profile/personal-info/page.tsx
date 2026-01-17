"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PersonalInfoPage() {
    const router = useRouter();

    return (
        <div className="bg-[#f6f7f8] dark:bg-[#101922] min-h-screen">
            <div className="max-w-[430px] mx-auto min-h-screen bg-[#f6f7f8] dark:bg-[#101922] shadow-xl relative overflow-x-hidden">
                {/* TopAppBar */}
                <header className="sticky top-0 z-50 w-full bg-[#137fec] dark:bg-[#101922] border-b border-slate-200 dark:border-slate-800 rounded-none shadow-none">
                    <div className="flex items-center px-4 py-4 justify-between h-[72px] relative">
                        <button
                            onClick={() => router.back()}
                            className="flex size-10 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-80 rounded-none z-10"
                        >
                            <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
                        </button>

                        <h2 className="absolute inset-0 flex items-center justify-center text-white dark:text-white text-lg font-bold leading-tight tracking-tight pointer-events-none">
                            Informasi Personal
                        </h2> 
                    </div>
                </header>

                <main className="pb-10">
                    {/* ProfileHeader */}
                    <div className="flex p-6 @container">
                        <div className="flex w-full flex-col gap-4 items-center">
                            <div className="flex gap-4 flex-col items-center">
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24 border-4 border-white dark:border-slate-800 shadow-sm"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVwpIwHp6TMC8IvxOERqchMKwy7Hgbzn1m3vraLHZ7OoeVSR_17aBRIcemRfFhGx96Lg2aYHhPcJB0Ofpai9jPXw2Xk8LHZj7R4QQYweMx5r9jtDJBNW315u8yZCGcUH1_34A1LH4ysIHRIIXFGTE1s69eMSA8BZd_q9p2ZuO7WvCh9v8bAmr4msDtZ-CY8Xiws0hu_Fksv44z-aO7qVNVbm4dvQce3fWJlMZAgk7ZgwT72kdza7JY2JcAooucPb6eAXGreGyzRqFk")' }}
                                >
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight text-center">Budi Santoso</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal text-center mt-1">ID: EMP-2023001</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Detail Pekerjaan */}
                    <div className="px-4">
                        <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider px-2 pb-2 pt-4 opacity-60">Detail Pekerjaan</h3>
                        <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 shadow-sm">
                            {/* Jabatan */}
                            <div className="flex items-center gap-4 px-4 min-h-[64px] py-2">
                                <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10">
                                    <span className="material-symbols-outlined">badge</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-none mb-1">Jabatan</p>
                                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">Senior Staff</p>
                                </div>
                            </div>
                            {/* Departemen */}
                            <div className="flex items-center gap-4 px-4 min-h-[64px] py-2">
                                <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10">
                                    <span className="material-symbols-outlined">account_tree</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-none mb-1">Departemen</p>
                                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">IT Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Kontak & Alamat */}
                    <div className="px-4 mt-6">
                        <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider px-2 pb-2 pt-4 opacity-60">Kontak &amp; Alamat</h3>
                        <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 shadow-sm">
                            {/* Email */}
                            <div className="flex items-center gap-4 px-4 min-h-[64px] py-2">
                                <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-none mb-1">Email</p>
                                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">budi.santoso@company.com</p>
                                </div>
                            </div>
                            {/* Nomor Telepon */}
                            <div className="flex items-center gap-4 px-4 min-h-[64px] py-2">
                                <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10">
                                    <span className="material-symbols-outlined">phone_iphone</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-none mb-1">Nomor Telepon</p>
                                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">0812-3456-7890</p>
                                </div>
                            </div>
                            {/* Alamat */}
                            <div className="flex items-start gap-4 px-4 min-h-[72px] py-3">
                                <div className="text-[#137fec] flex items-center justify-center rounded-lg bg-[#137fec]/10 shrink-0 size-10 mt-1">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-none mb-1">Alamat</p>
                                    <p className="text-slate-900 dark:text-white text-base font-semibold leading-snug">Jl. Merdeka No. 10, Jakarta Pusat, DKI Jakarta</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Detail Info */}
                    <div className="px-4 mt-8"> 
                        <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-4 px-8">
                            Beberapa informasi dikunci oleh admin HR. Silakan informasikan kepada admin HR jika ingin mengubah data permanen.
                        </p>
                    </div>
                </main>

                {/* Bottom Safe Area */}
                <div className="h-8 bg-[#f6f7f8] dark:bg-[#101922]"></div>
            </div>
        </div>
    );
}
