"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { RippleButton } from "@/components/ui/ripple-button";
import { useUser } from "@/contexts/user-context";
import { ApprovalCard } from "./components/approval-card";
import {
    MOCK_APPROVALS,
    getPendingApprovals,
    getCompletedApprovals,
    ApprovalRequest
} from "./data/mock-approvals";
import { cn } from "@/lib/utils";
import { BottomNav } from "../components/bottom-nav";
import Link from "next/link";

type TabType = "pending" | "completed";

export default function ApprovalsPage() {
    const router = useRouter();
    const { isSupervisor } = useUser();
    const [activeTab, setActiveTab] = useState<TabType>("pending");
    const [approvals, setApprovals] = useState<ApprovalRequest[]>(MOCK_APPROVALS);

    // Redirect if not supervisor
    useEffect(() => {
        if (!isSupervisor) {
            router.push("/employee-dashboard");
        }
    }, [isSupervisor, router]);

    const handleApprove = (id: string) => {
        setApprovals(prev =>
            prev.map(req =>
                req.id === id ? { ...req, status: "approved" as const } : req
            )
        );
    };

    const handleReject = (id: string) => {
        setApprovals(prev =>
            prev.map(req =>
                req.id === id ? { ...req, status: "rejected" as const } : req
            )
        );
    };

    const pendingRequests = approvals.filter(req => req.status === "pending");
    const completedRequests = approvals.filter(req => req.status === "approved" || req.status === "rejected");

    const displayedRequests = activeTab === "pending" ? pendingRequests : completedRequests;

    // Don't render if not supervisor
    if (!isSupervisor) {
        return null;
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#101922] text-slate-900 dark:text-slate-100 font-sans pb-[100px]">
            <div className="max-w-md mx-auto relative bg-white dark:bg-[#101922] min-h-screen overflow-x-hidden">

                {/* TopAppBar */}
                <div className="sticky top-0 z-20 w-full bg-[#137fec] dark:bg-slate-900 border-none rounded-none shadow-none">
                    <div className="flex items-center px-4 py-4 justify-between h-[72px]">
                        <Link
                            href="/employee-dashboard"
                            className="flex size-10 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-80 rounded-none"
                        >
                            <span className="material-symbols-outlined text-[24px]">arrow_back_ios</span>
                        </Link>

                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
                            Persetujuan Tim
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="px-4 bg-white dark:bg-[#101922]">
                        <div className="flex border-b border-slate-200 dark:border-slate-800 justify-between">
                            <button
                                onClick={() => setActiveTab("pending")}
                                className={cn(
                                    "flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 flex-1 transition-colors",
                                    activeTab === "pending"
                                        ? "border-[#137fec] text-[#137fec]"
                                        : "border-transparent text-slate-500 dark:text-slate-400"
                                )}
                            >
                                <p className="text-sm font-bold tracking-wide">
                                    Pending
                                    {pendingRequests.length > 0 && (
                                        <span className="ml-1.5 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs bg-[#137fec] text-white rounded-full">
                                            {pendingRequests.length}
                                        </span>
                                    )}
                                </p>
                            </button>
                            <button
                                onClick={() => setActiveTab("completed")}
                                className={cn(
                                    "flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 flex-1 transition-colors",
                                    activeTab === "completed"
                                        ? "border-[#137fec] text-[#137fec]"
                                        : "border-transparent text-slate-500 dark:text-slate-400"
                                )}
                            >
                                <p className="text-sm font-bold tracking-wide">Selesai</p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <main className="px-4 py-4 space-y-4">
                    {displayedRequests.length > 0 ? (
                        displayedRequests.map((request, index) => (
                            <motion.div
                                key={request.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ApprovalCard
                                    request={request}
                                    onApprove={activeTab === "pending" ? handleApprove : undefined}
                                    onReject={activeTab === "pending" ? handleReject : undefined}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">
                                {activeTab === "pending" ? "check_circle" : "history"}
                            </span>
                            <p className="text-slate-400 dark:text-slate-600 text-sm">
                                {activeTab === "pending"
                                    ? "Tidak ada pengajuan yang menunggu persetujuan"
                                    : "Belum ada pengajuan yang diselesaikan"
                                }
                            </p>
                        </div>
                    )}

                    {displayedRequests.length > 0 && (
                        <div className="text-center py-6">
                            <p className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-widest font-bold">
                                Semua pengajuan telah ditampilkan
                            </p>
                        </div>
                    )}
                </main>

                <BottomNav />
            </div>
        </div>
    );
}
