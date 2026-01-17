"use client";

import React, { useState, useEffect } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MonthFilterProps {
    date: Date;
    onDateChange: (date: Date) => void;
}

const MONTHS = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export const MonthFilter = ({ date, onDateChange }: MonthFilterProps) => {
    const [open, setOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState<number>(date.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState<number>(date.getMonth());

    // Sync state if prop updates
    useEffect(() => {
        setSelectedYear(date.getFullYear());
        setSelectedMonth(date.getMonth());
    }, [date]);

    // Generate years (e.g., current year - 5 to current year + 1)
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 26 }, (_, i) => currentYear - 5 + i);
    const handleApply = () => {
        const newDate = new Date(selectedYear, selectedMonth, 1);
        onDateChange(newDate);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 shadow-sm active:scale-95 transition-transform outline-none ring-offset-2 focus:ring-2 focus:ring-slate-400">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {MONTHS[date.getMonth()]} {date.getFullYear()}
                    </span>
                    <span className="material-symbols-outlined text-slate-400 text-[20px]">expand_more</span>
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4" align="end">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Pilih Periode</h4>
                        <p className="text-sm text-muted-foreground">
                            Tampilkan laporan berdasarkan bulan dan tahun.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-slate-500">Bulan</label>
                            <Select
                                value={selectedMonth.toString()}
                                onValueChange={(val) => setSelectedMonth(parseInt(val))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Bulan" />
                                </SelectTrigger>
                                <SelectContent className="max-h-[200px]">
                                    {MONTHS.map((month, index) => (
                                        <SelectItem key={index} value={index.toString()}>
                                            {month}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-slate-500">Tahun</label>
                            <Select
                                value={selectedYear.toString()}
                                onValueChange={(val) => setSelectedYear(parseInt(val))}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Tahun" />
                                </SelectTrigger>

                                {/* Tambahkan position="popper" dan max-h yang lebih kecil */}
                                <SelectContent
                                    position="popper"
                                    className="max-h-[200px] w-[var(--radix-select-trigger-width)]"
                                >
                                    {years.map((year) => (
                                        <SelectItem key={year} value={year.toString()}>
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button onClick={handleApply} className="w-full bg-[#137fec] hover:bg-[#137fec]/90">
                        Terapkan Filter
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};
