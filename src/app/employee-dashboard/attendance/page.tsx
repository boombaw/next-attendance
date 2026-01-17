"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function AttendancePage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const router = useRouter();

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    };

    useEffect(() => {
        let isMounted = true;
        let localStream: MediaStream | null = null;

        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });

                if (!isMounted) {
                    // Component unmounted while we were waiting. Stop immediately.
                    stream.getTracks().forEach(track => track.stop());
                    return;
                }

                localStream = stream;
                streamRef.current = stream; // Update ref for global access (handleCheckIn)

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                setHasPermission(true);
            } catch (err) {
                if (!isMounted) return;
                console.error("Error accessing camera:", err);
                setHasPermission(false);
            }
        };

        startCamera();

        return () => {
            isMounted = false;
            // Stop the stream we know about locally
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
            }
            // Also ensure global ref is cleaned if it points to something
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
        };
    }, []);

    const handleCheckIn = () => {
        if (!hasPermission) return;

        setIsScanning(true);
        // Simulate scanning process
        setTimeout(() => {
            setIsScanning(false);
            setIsSuccess(true);
            stopCamera(); // Stop camera immediately upon success
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-white dark:bg-[#101922] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-5xl text-green-600 dark:text-green-400">check_circle</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Check-In Berhasil!</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8">
                    Absensi Anda telah tercatat pada {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}.
                </p>
                <Link
                    href="/employee-dashboard"
                    className="w-full max-w-xs bg-[#137fec] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101922] flex flex-col relative overflow-hidden">
            {/* Back Button */}
            <div className="absolute top-6 left-6 z-20">
                <Link href="/employee-dashboard" className="w-10 h-10 bg-white dark:bg-[#1a2632] rounded-full flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
            </div>

            {/* Header */}
            <header className="pt-8 pb-4 px-6 flex flex-col items-center z-10">
                <h1 className="text-gray-900 dark:text-white tracking-tight text-4xl font-bold leading-none text-center">
                    {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal pt-2 text-center">
                    {new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
            </header>

            {/* Location Card */}
            <div className="px-4 pb-4 w-full z-10 max-w-md mx-auto">
                <div className="bg-white dark:bg-[#1a2632] rounded-xl p-3 flex items-center gap-3 shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                        {/* Placeholder for map */}
                        <div className="absolute inset-0 bg-blue-100 dark:bg-slate-800 flex items-center justify-center">
                            <span className="material-symbols-outlined text-blue-500 text-3xl">map</span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-[#137fec] mb-1">
                            <span className="material-symbols-outlined text-lg">location_on</span>
                            <span className="text-xs font-bold uppercase tracking-wide">Lokasi Saat Ini</span>
                        </div>
                        <p className="text-gray-900 dark:text-white text-sm font-medium truncate">Jl. Sudirman No. 10</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs truncate">Jakarta Selatan, DKI Jakarta</p>
                    </div>
                </div>
            </div>

            {/* Camera Area */}
            <div className="flex-1 relative flex flex-col items-center justify-center w-full px-4 overflow-hidden max-w-md mx-auto">
                <div className="relative w-full aspect-square bg-black rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-800">
                    {hasPermission === false ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-slate-900 p-6 text-center">
                            <span className="material-symbols-outlined text-4xl mb-2 text-red-500">videocam_off</span>
                            <p>Akses kamera ditolak. Mohon izinkan akses kamera untuk melakukan absensi.</p>
                        </div>
                    ) : (
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_20%,rgba(0,0,0,0)_80%,rgba(0,0,0,0.6)_100%)]pointer-events-none"></div>

                    <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <div className="relative w-full h-full border border-[#137fec]/30 rounded-lg">
                            {(hasPermission && !isScanning) && (
                                <div className="w-full h-[2px] bg-[#137fec] shadow-[0_0_4px_#137fec] absolute top-0 left-0 z-10 animate-[scan_3s_infinite_linear]"></div>
                            )}
                            {isScanning && (
                                <div className="w-full h-[2px] bg-green-500 shadow-[0_0_8px_#22c55e] absolute top-0 left-0 z-10 animate-[scan_0.5s_infinite_linear]"></div>
                            )}

                            {/* Corner borders */}
                            <div className="absolute w-[40px] h-[40px] border-[#137fec] border-solid border-4 border-l-0 border-b-0 top-0 right-0 rounded-tr-lg"></div>
                            <div className="absolute w-[40px] h-[40px] border-[#137fec] border-solid border-4 border-r-0 border-b-0 top-0 left-0 rounded-tl-lg"></div>
                            <div className="absolute w-[40px] h-[40px] border-[#137fec] border-solid border-4 border-l-0 border-t-0 bottom-0 right-0 rounded-br-lg"></div>
                            <div className="absolute w-[40px] h-[40px] border-[#137fec] border-solid border-4 border-r-0 border-t-0 bottom-0 left-0 rounded-bl-lg"></div>
                        </div>
                    </div>

                    <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
                        <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                            <span className="material-symbols-outlined text-green-400 text-sm animate-pulse">face</span>
                            <span className="text-xs font-medium tracking-wide">Live Face Detected</span>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                        <p className="text-white/90 text-sm font-medium drop-shadow-md">Keep your face inside the frame</p>
                    </div>
                </div>
            </div>

            {/* Action Support */}
            <div className="px-6 py-6 w-full z-10 bg-[#f6f7f8] dark:bg-[#101922] max-w-md mx-auto">
                <button
                    onClick={handleCheckIn}
                    disabled={!hasPermission || isScanning}
                    className={cn(
                        "w-full bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-[#137fec]/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]",
                        isScanning && "opacity-80 cursor-wait",
                        !hasPermission && "opacity-50 cursor-not-allowed bg-gray-400 hover:bg-gray-400 shadow-none"
                    )}
                >
                    {isScanning ? (
                        <>
                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                            Scanning...
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined">center_focus_strong</span>
                            Check-In Now
                        </>
                    )}
                </button>
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3 flex items-center justify-center">
                    <span className="material-symbols-outlined align-middle text-sm mr-1">verified_user</span>
                    Secure location verification active
                </p>
            </div>

            <style jsx global>{`
                @keyframes scan {
                    0% { top: 10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 90%; opacity: 0; }
                }
            `}</style>
        </div>
    );
}
