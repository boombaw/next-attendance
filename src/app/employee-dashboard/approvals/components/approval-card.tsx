"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RippleButton } from "@/components/ui/ripple-button";
import { ApprovalRequest } from "../data/mock-approvals";
import { cn } from "@/lib/utils";

interface ApprovalCardProps {
    request: ApprovalRequest;
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
}

const typeConfig = {
    leave: {
        label: "Cuti",
        bgColor: "bg-blue-100 dark:bg-blue-900/40",
        textColor: "text-blue-600 dark:text-blue-400"
    },
    permission: {
        label: "Izin",
        bgColor: "bg-purple-100 dark:bg-purple-900/40",
        textColor: "text-purple-600 dark:text-purple-400"
    },
    overtime: {
        label: "Lembur",
        bgColor: "bg-orange-100 dark:bg-orange-900/40",
        textColor: "text-orange-600 dark:text-orange-400"
    }
};

const statusConfig = {
    approved: {
        label: "Disetujui",
        bgColor: "bg-green-100 dark:bg-green-900/40",
        textColor: "text-green-600 dark:text-green-400"
    },
    rejected: {
        label: "Ditolak",
        bgColor: "bg-red-100 dark:bg-red-900/40",
        textColor: "text-red-600 dark:text-red-400"
    }
};

export const ApprovalCard = ({ request, onApprove, onReject }: ApprovalCardProps) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const typeStyle = typeConfig[request.type];
    const isPending = request.status === "pending";

    const handleApprove = async () => {
        if (isProcessing || !onApprove) return;
        setIsProcessing(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        onApprove(request.id);
        setIsProcessing(false);
    };

    const handleReject = async () => {
        if (isProcessing || !onReject) return;
        setIsProcessing(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        onReject(request.id);
        setIsProcessing(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-[#1c2732] rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden"
        >
            <div className="p-4">
                {/* Employee Info */}
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="h-12 w-12 rounded-full bg-cover bg-center border-2 border-[#137fec]/10"
                        style={{ backgroundImage: `url('${request.employeeAvatar}')` }}
                    />
                    <div className="flex-1">
                        <h3 className="text-slate-900 dark:text-white font-bold text-base leading-none">
                            {request.employeeName}
                        </h3>
                        <span className={cn(
                            "inline-block px-2 py-0.5 mt-1 text-xs font-semibold rounded",
                            typeStyle.bgColor,
                            typeStyle.textColor
                        )}>
                            {typeStyle.label}
                        </span>
                    </div>
                    {!isPending && request.status && (request.status === "approved" || request.status === "rejected") && (
                        <span className={cn(
                            "inline-block px-2 py-1 text-xs font-semibold rounded",
                            statusConfig[request.status].bgColor,
                            statusConfig[request.status].textColor
                        )}>
                            {statusConfig[request.status].label}
                        </span>
                    )}
                </div>

                {/* Request Details */}
                <div className="space-y-2 mb-4">
                    {/* Date/Time Info */}
                    <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                        <span className="material-symbols-outlined text-sm pt-0.5">
                            {request.type === "overtime" ? "schedule" : "calendar_month"}
                        </span>
                        <p className="text-sm font-medium">
                            {request.type === "leave" && request.endDate
                                ? `${request.startDate} - ${request.endDate} (${request.duration})`
                                : request.type === "overtime" || request.type === "permission"
                                    ? `${request.startDate} (${request.time})`
                                    : request.startDate
                            }
                        </p>
                    </div>

                    {/* Reason */}
                    <p className="text-sm">
                        {request.type === "overtime" ? (
                            <span className="italic">{"\""}{request.reason}{"\""}</span>
                        ) : (
                            `Alasan: ${request.reason}`
                        )}
                    </p>
                </div>

                {/* Action Buttons - Only show for pending requests */}
                {isPending && (
                    <div className="flex gap-3">
                        <RippleButton
                            onClick={handleApprove}
                            disabled={isProcessing}
                            className="flex-1 h-11 bg-[#22c55e] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#16a34a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            Terima
                        </RippleButton>
                        <RippleButton
                            onClick={handleReject}
                            disabled={isProcessing}
                            className="flex-1 h-11 bg-slate-100 dark:bg-slate-800 text-[#ef4444] rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined text-lg">cancel</span>
                            Tolak
                        </RippleButton>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
