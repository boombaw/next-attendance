"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import {
    Calendar,
    Building2,
    Download,
    FileText,
    Clock,
    TrendingUp,
    MoreVertical,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/context/language-context";

export default function ReportsPage() {
    const {t} = useLanguage();
    // Mock Data
    const reportData = [
        {
            name: "Sarah Miller",
            id: "EMP-001",
            department: "Engineering",
            date: "Oct 24, 2023",
            clockIn: "08:55 AM",
            clockOut: "05:05 PM",
            totalHours: "8h 10m",
            status: "On Time",
            statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
            dotColor: "bg-emerald-500",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdz7lxRaPGNq06RRyRv3HPZDoEvpB4eNu7mpbpnF0Pa4uyvZJw7GF_0hqeBu16zMJvD9nn4sB6f34vNj-kpidEIxIL_Vrp2UJ23EjqIfRdC8hMbjttl4RxRwwh7Xr4Z4c77SVhAiZIE40MaV-quXjKhhF7zEDI6F-tedd4KnemGlnYZCLAfMGQbi-JecvfsIpdPt8dthHLe76mQWbKqWC1bmrNu3LAZajIwRFGjvzlLmHNcMxe-a9mtKBmy0vzYfEiaD-A4pT7OtXU"
        },
        {
            name: "Michael Chen",
            id: "EMP-042",
            department: "Marketing",
            date: "Oct 24, 2023",
            clockIn: "09:15 AM",
            clockOut: "06:00 PM",
            totalHours: "8h 45m",
            status: "Late",
            statusColor: "text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",
            dotColor: "bg-orange-500",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkMqpi-AczDXhH4mcR2jMJx09wgXCmK4bM8ROId6dGKO83h5hOBSGGf8acnZCQsEQjRuHcYmYfCmw-GVpNIuDXggf0gk-ZbIbDcQzsKSqXyYwP2FUBIr0knOnJ_vjpDFKjQ2mEbLanMc0RZFINnaHqNZrFOv_tEI10y-R5spQJJ9JVPaHlugi3qe1OqIAbi41pSMKPmVXhYiMMbbdINqtS0EZTnQCrARubdyf71vW9etpL9iT467fqKJl5eaPmoCPrbpYWsoAMr1of"
        },
        {
            name: "Emma Wilson",
            id: "EMP-089",
            department: "Sales",
            date: "Oct 24, 2023",
            clockIn: "08:30 AM",
            clockOut: "04:30 PM",
            totalHours: "8h 00m",
            status: "On Time",
            statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
            dotColor: "bg-emerald-500",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqFiaMth0eWRbJeZJY8-WzZItfPi69UA_rl6Cxtxn0NqTsC1P8GE2ZVAc0x_lspuKvjgyrOXa2yIHgSAPmFO_feqwZPT_wAK7h0_b6_l9G_EhWflXR3e1vkeMvRcaK0HhB9ls8cpXjBc0E4Svjo6_vE83RwiguEd9xB7Xvsy4mbbrQQ1fLrRXn1RR9tr8N4SuEFDs4xSdEnIBF60vDMTq_XpgfV5Wp1psbJ5v9Vu7dFOQRE5c5k-nV0rwEByCgHepzmqOU0CSQytI-"
        },
        {
            name: "David Lee",
            id: "EMP-102",
            department: "Engineering",
            date: "Oct 24, 2023",
            clockIn: "-",
            clockOut: "-",
            totalHours: "0h",
            status: "Absent",
            statusColor: "text-red-600 bg-red-50 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20",
            dotColor: "bg-red-500",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfrrdyLjhOy61StZ8XAYRGEyC2pp_CZ-dV7XbxLiykWSnMRN12ybQBq2NVt_uEnmVfbfui0yYLWnAB0MufdHI8X_dbghXcN9ZOrduGlQUfE7TKBO5VkCIt7vQAJV8KKEqLJOlq0tDnL8RWWrl9io6-lIffHNGjVS32rRnhiHlrOr8d7TfQ6qKbfrOUgbXktJYKMZW6VfYjfI9ZEj5CZ-EP7xmt-ef5cDN-EBkrGZIsU-6rk_EWSeNEP7G87jqiMA7kte0vVCXM6Sk_"
        },
        {
            name: "Linda Wong",
            id: "EMP-115",
            department: "Product",
            date: "Oct 24, 2023",
            clockIn: "08:45 AM",
            clockOut: "05:15 PM",
            totalHours: "8h 30m",
            status: "On Time",
            statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
            dotColor: "bg-emerald-500",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrkYHhOllSfGyvhvbdJGK3tmGcxF9rgvJAtUAjQpOWTGEh7nMX4CIng3dym0XJPuIFgzPHv-n6tfeDTPBO1aGYK0q-zYGEEWimUBIYSGwnGiTrww_k2-GV6BuWV1A_0HuFYNyOw14cuq1bTDBTfjyke5RHOqY-i3J8mpH-ghFiB-p7YdnebFyZ2g2Uvuu84zttiDO11qI8iy5qSxogX9SO3LTSDJ_is06uNB37rThtYu0KxokpfPwqJzHZJQTDHhXKU0DuG1OqV95S"
        },
    ];

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#f6f6f8] dark:bg-[#111621] text-gray-900 dark:text-gray-100 font-display">
            {/* Sidebar - Desktop */}
            <Sidebar className="hidden md:flex w-64 flex-shrink-0 transition-all duration-300" />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                {/* Header */}
                <Header
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Reports", href: "/reports", active: true }
                    ]}
                />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto bg-[#f6f6f8] dark:bg-[#111621] p-6 sm:p-8">
                    <div className="max-w-[1400px] mx-auto space-y-8">

                        {/* Page Header & Actions */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">{t.attendanceReports.title}</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-base">{t.attendanceReports.admin.description}</p>
                            </div>
                            <div className="flex gap-3">
                                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-sm gap-2">
                                    <FileText className="w-5 h-5" />
                                    <span>{t.common.exportToExcel}</span>
                                </Button>
                                <Button className="bg-primary hover:bg-blue-700 text-white font-bold shadow-sm gap-2">
                                    <Download className="w-5 h-5" />
                                    <span>{t.common.exportToPDF}</span>
                                </Button>
                            </div>
                        </div>

                        {/* Filters & Stats Container */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Filters Section */}
                            <div className="lg:col-span-2 bg-white dark:bg-[#1a202c] rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm">
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">{t.common.filter}</h3>
                                <div className="flex flex-col md:flex-row gap-4 items-end">
                                    <div className="flex flex-col w-full md:w-1/3 gap-1.5">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{t.attendanceReports.admin.filter.range}</span>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <Input
                                                className="pl-10  bg-white dark:bg-[#111621] border-gray-200 dark:border-gray-700 focus-visible:ring-primary"
                                                placeholder="Oct 01, 2023 - Oct 31, 2023"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full md:w-1/3 gap-1.5">
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{t.attendanceReports.admin.filter.department}</span>
                                        <div className="relative">
                                            <Select>
                                                <SelectTrigger className="pl-10 h-10 bg-white dark:bg-[#111621] border-gray-200 dark:border-gray-700 focus:ring-primary">
                                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                                    <SelectValue placeholder="All Departments" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Departments</SelectItem>
                                                    <SelectItem value="engineering">Engineering</SelectItem>
                                                    <SelectItem value="marketing">Marketing</SelectItem>
                                                    <SelectItem value="sales">Sales</SelectItem>
                                                    <SelectItem value="hr">Human Resources</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-auto">
                                        <Button className="w-full md:w-auto px-6 bg-[#111318] dark:bg-white text-white dark:text-[#111318] font-bold hover:opacity-90 transition-opacity">
                                            {t.attendanceReports.admin.filter.apply}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="lg:col-span-1 grid grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm flex flex-col justify-between">
                                    <div className="flex items-start justify-between">
                                        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{t.attendanceReports.admin.stats.totalWorkHours}</span>
                                        <div className="bg-primary/10 p-1 rounded-md text-primary">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white">1,240 <span className="text-sm font-normal text-gray-500">hrs</span></p>
                                        <p className="text-xs font-medium text-emerald-500 mt-1 flex items-center gap-0.5">
                                            <TrendingUp className="w-4 h-4" />
                                            +12% vs {t.common.lastMonth}
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-gray-200 dark:border-gray-800 p-5 shadow-sm flex flex-col justify-between">
                                    <div className="flex items-start justify-between">
                                        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Avg. Attendance</span>
                                        <div className="bg-emerald-500/10 p-1 rounded-md text-emerald-500">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold text-gray-900 dark:text-white">94%</p>
                                        <p className="text-xs font-medium text-emerald-500 mt-1 flex items-center gap-0.5">
                                            <TrendingUp className="w-4 h-4" />
                                            +2% vs {t.common.lastMonth}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Table */}
                        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">{t.attendanceReports.admin.table.caption}</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 border-gray-200 dark:border-gray-800">
                                            <TableHead className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{t.attendanceReports.admin.table.name}</TableHead>
                                            <TableHead className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{t.attendanceReports.admin.table.department}</TableHead>
                                            <TableHead className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{t.attendanceReports.admin.table.date}</TableHead>
                                            <TableHead className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{t.attendanceReports.admin.table.clockIn}</TableHead>
                                            <TableHead className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{t.attendanceReports.admin.table.clockOut}</TableHead>
                                            <TableHead className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{t.attendanceReports.admin.table.workHours}</TableHead>
                                            <TableHead className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">{t.common.state}</TableHead>
                                            <TableHead className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium text-right whitespace-nowrap">{t.common.actions}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody className="divide-y divide-gray-200 dark:divide-gray-800">
                                        {reportData.map((row, index) => (
                                            <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-gray-200 dark:border-gray-800">
                                                <TableCell className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-9 w-9">
                                                            <AvatarImage src={row.avatar} alt={row.name} className="object-cover" />
                                                            <AvatarFallback>{row.name.substring(0, 2)}</AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <p className="font-medium text-gray-900 dark:text-white">{row.name}</p>
                                                            <p className="text-xs text-gray-500">ID: #{row.id}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-300">{row.department}</TableCell>
                                                <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-300">{row.date}</TableCell>
                                                <TableCell className="px-6 py-4 text-gray-900 dark:text-white font-medium">{row.clockIn}</TableCell>
                                                <TableCell className="px-6 py-4 text-gray-900 dark:text-white font-medium">{row.clockOut}</TableCell>
                                                <TableCell className="px-6 py-4 text-gray-500 dark:text-gray-300">{row.totalHours}</TableCell>
                                                <TableCell className="px-6 py-4">
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${row.statusColor}`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full ${row.dotColor}`}></span>
                                                        {row.status}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="px-6 py-4 text-right">
                                                    <button className="text-gray-400 hover:text-primary transition-colors">
                                                        <MoreVertical className="w-5 h-5" />
                                                    </button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {t.common.pagination.showing}{" "}
                                    <span className="font-medium text-gray-900 dark:text-white">
                                        1
                                    </span>{" "}
                                    {t.common.pagination.to}{" "}
                                    <span className="font-medium text-gray-900 dark:text-white">
                                        5
                                    </span>{" "}
                                    {t.common.pagination.of}{" "}
                                    <span className="font-medium text-gray-900 dark:text-white">
                                        5
                                    </span>{" "}
                                    {t.attendanceReports.title}
                                </p>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50"
                                        disabled
                                    >
                                        {t.common.pagination.prev}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50"
                                        disabled
                                    >
                                        {t.common.pagination.next}
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
