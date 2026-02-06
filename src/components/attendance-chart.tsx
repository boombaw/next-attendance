"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/context/language-context";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ScriptableContext
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useRef, useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export function AttendanceChart() {
    const { t } = useLanguage();
    const chartRef = useRef<any>(null);
    const [chartData, setChartData] = useState<any>({
        datasets: [],
    });

    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const values = [142, 145, 148, 140, 135, 50, 15];

    useEffect(() => {
        const chart = chartRef.current;

        if (!chart) {
            return;
        }

        const createGradient = (ctx: CanvasRenderingContext2D) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)'); // Start color
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)'); // End color
            return gradient;
        };

        setChartData({
            labels,
            datasets: [
                {
                    fill: 'start', // Boundary fill
                    label: 'Employees',
                    data: values,
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: (context: ScriptableContext<"line">) => {
                        const ctx = context.chart.ctx;
                        return createGradient(ctx);
                    },
                    tension: 0.4, // Smooth curve
                    pointRadius: 6,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: 'rgb(59, 130, 246)',
                    pointBorderWidth: 3,
                    pointHoverRadius: 8,
                },
            ],
        });
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: 'rgb(15, 23, 42)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                padding: 10,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: function (context: any) {
                        return `${context.parsed.y} Employees`;
                    }
                }
            }
        },
        scales: {
            y: {
                min: 0,
                max: 160, // Slightly above max value
                ticks: {
                    stepSize: 40,
                    callback: function (value: any) {
                        return ((value / 160) * 100) + '%'; // Convert to percentage roughly
                    },
                    color: '#94a3b8',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    color: '#e2e8f0',
                    borderDash: [5, 5],
                    drawBorder: false,
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#94a3b8',
                    font: {
                        size: 11,
                        weight: 'bold' as const
                    }
                }
            }
        }
    };

    return (
        <div className="lg:col-span-3 bg-white dark:bg-card p-6 sm:p-10 rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-blue-900/10 border border-gray-100 dark:border-gray-700/50 transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 sm:gap-0">
                <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Ringkasan Absensi Mingguan</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">Monitoring kehadiran karyawan 23 - 29 Okt</p>
                </div>
                <Button className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 h-auto">
                    <span>Lihat Laporan</span> <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>

            <div className="w-full relative h-80 sm:h-96 select-none">
                <div className="w-full h-full relative z-10">
                    <Line ref={chartRef} options={options} data={chartData} />
                </div>
            </div>
        </div>
    );
}