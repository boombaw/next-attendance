"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/context/language-context";

export function AttendanceChart() {
    const { t } = useLanguage();
    const data = [
        { day: "Mon", value: 118, height: "85%", fullHeight: "60%" },
        { day: "Tue", value: 122, height: "92%", fullHeight: "75%" },
        { day: "Wed", value: 125, height: "96%", fullHeight: "80%" },
        { day: "Thu", value: 115, height: "88%", fullHeight: "65%" },
        { day: "Fri", value: 110, height: "75%", fullHeight: "70%" },
        { day: "Sat", value: 45, height: "30%", fullHeight: "40%", isWeekend: true },
        { day: "Sun", value: 12, height: "10%", fullHeight: "30%", isWeekend: true },
    ];

    return (
        <div className="lg:col-span-3 bg-card p-6 rounded-xl shadow-sm border border-border">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground">{t.dashboard.chart.title}</h3>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-medium decoration-0">
                    {t.dashboard.chart.viewReport} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            <div className="w-full h-[240px] flex items-end justify-between gap-2 sm:gap-4 px-2">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                        <div
                            className="w-full max-w-[40px] bg-primary/20 group-hover:bg-primary/30 rounded-t-sm relative transition-all"
                            style={{ height: item.fullHeight }}
                        >
                            <div
                                className={`absolute bottom-0 left-0 w-full rounded-t-sm transition-all group-hover:h-[calc(100%+3%)] ${item.isWeekend ? "bg-primary/50" : "bg-primary"}`}
                                style={{ height: item.height }}
                            ></div>
                            {/* Tooltip */}
                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity whitespace-nowrap z-10">
                                {item.value}
                            </div>
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
