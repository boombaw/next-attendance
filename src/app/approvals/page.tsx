import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import {
    Filter,
    Download,
    Hourglass,
    CheckCircle2,
    AlertTriangle,
    Check,
    X,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ApprovalsPage() {
    const approvals = [
        {
            name: "Budi Santoso",
            role: "Head of Sales",
            type: "Annual Leave",
            date: "Oct 12 - Oct 14",
            duration: "3 Days",
            reason: "Family emergency requiring urgent travel out of town.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoTn-LJDLgyeDI7zlbhdZB_gNYuNgY-8hbWTdUTMd3i16074HNDj8qFurLQEFX-Y1aii2vEJJW_9km4-56O0hjHOpxz0WcIS8KqA75l6gRO1p84VlRB2xve62SrW5RqSk5JhtPm3f3OamHTdbdmUEIc0pnU62W6nm7wwVs3bQKtHdrxJw0Ma_Uf_2ilzqX32NVVD-11VM5bU0q9jDzD3ugXfUx_8LXlMYnqyT823jG_c_PgiXX_W7EG2fY-dkaFuYU8q6ddf8cvWz5",
            typeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800",
        },
        {
            name: "Siti Aminah",
            role: "Tech Lead",
            type: "Overtime",
            date: "Oct 10",
            duration: "4 Hours (18:00 - 22:00)",
            reason: "Critical server migration maintenance during off-peak hours.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_uSExVzlbIGFOaQyBfWPmbrdmdpEJm7svlYtY4O3N4rknFzxEgqgInywRWBJKFYVjgUe-xq9S0g2R9_VL1op5cLSo7JwFpKdoC4sYYyczglVFI1-0goJmls_JYyns688e8ajHCvuxoz1f5YJxr73wqwbEPc7wf1dL-wwZHUzuRj41_Aa1sLrqkJLoeD3LQ5GYkrTLIEs2ZPEIYGXudReC_k9Xr_OcqHaMKiG_fpLnSEAbrHHFNvnkspAAY4tfSUMExMhUYfem1HwW",
            typeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800",
        },
        {
            name: "Andi Wijaya",
            role: "VP of Marketing",
            type: "Sick Leave",
            date: "Oct 11",
            duration: "1 Day",
            reason: "Medical appointment and rest as prescribed by doctor.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0P7IyRSJMKK_dACs2m3MDYGOCRk6Vu4_iIcSsmLuHEWV_5kmwz0bLiswPuXlptvfYQutMCHJKbrUKOgcD9gB7n8Z09ecuWyLqlAC0W1yjR5kReyDxN57AyVhUJz_uzGj6ITG4fQdshIA3kyHifUBOKzXGu3J3qSP69ZoMXwuZjmgvV0cq5dVAkMWAVPQ7Qp59KPx3LOywK9jqKIdld676d96VXtafOqTgD3qzvF2sAnH_tdddwxreICgjH1VXOOsLNOTEaYwfRUbA",
            typeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800",
        },
        {
            name: "Diana Putri",
            role: "HR Manager",
            type: "Remote Work",
            date: "Oct 15 - Oct 16",
            duration: "2 Days",
            reason: "Working from client site in Jakarta for recruitment event.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYH0dGXbqkctDBSN6CaDBEoaf-6WLxnZz6tP6FaXnXg7bjPMo7tllKhwk_6BhM_vSeD4EPbTq9QjYwG2Cgd3OAsWB5rY0fh2junyOT_PG4fO7pNOBN2FOXBqFWZuByg0Y0XnXgKqvZ4GEd0q72GYSSOunOs6B7V53c_YpU2UdapmtUhubSocnvsfj_GrElbEiBmAKCxwXLwA1hYcL-FbLelYY8iw9v9yLnexjOpMym63eYjyHdfVhxngzrHMDiRfVJhQuMh-Vh2ssp",
            typeColor: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200 dark:border-teal-800",
        },
        {
            name: "Reza Rahardian",
            role: "Finance Director",
            type: "Annual Leave",
            date: "Dec 20 - Dec 31",
            duration: "11 Days (Year End)",
            reason: "Year end holiday with family.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-6w-l6mQFD8bcxERaQ8rwEVVjSkeh3h2XCSseL0dkjl92zD0QxoFXXY_914jONNsTkuItOgQPXqwreYJXUxGepNx1xY_gqLT7HEPO4a_htoIeiJ1gg2SyrdLz5HU32-CTDuhjpOsjFyNqLS-a6R5L9JLyZNx0Q59FUL9A5jmIG2yTSRY1tMUJn-pzysWzw4zjrfaw44CxLGcPYNTCEV7PIKXt3JWkjk1CFjT2cIRFBRySCCzlmgjgvMIcePWPSYcfx_CfVmX2s8I2",
            typeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800",
        },
    ];

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#f6f6f8] dark:bg-[#111621] text-gray-900 dark:text-gray-100 font-display">
            {/* Sidebar - Desktop */}
            <Sidebar className="hidden md:flex w-64 shrink-0 transition-all duration-300" />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                {/* Header */}
                <Header
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Approvals", href: "/approvals", active: true }
                    ]}
                />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto bg-[#f6f6f8] dark:bg-[#111621] p-6 sm:p-8">
                    <div className="max-w-7xl mx-auto space-y-6">

                        {/* Page Heading */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Final Approvals</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Manage requests from team leads and executives</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white dark:bg-[#1a202c] rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col gap-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending Requests</span>
                                    <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <Hourglass className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">12</span>
                                    <span className="text-sm font-medium text-emerald-600 mb-1">+2 new</span>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1a202c] rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col gap-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Approved Today</span>
                                    <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">45</span>
                                    <span className="text-sm font-medium text-emerald-600 mb-1">+15% vs yesterday</span>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1a202c] rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col gap-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Urgent Attention</span>
                                    <div className="p-1.5 rounded-lg bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">3</span>
                                    <span className="text-sm font-medium text-gray-500 mb-1">Overdue &gt; 24h</span>
                                </div>
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col">
                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Request List</h3>
                                <div className="flex gap-2">
                                    <Button variant="outline" className="h-9 bg-gray-100 dark:bg-gray-800 border-none hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 gap-1.5">
                                        <Filter className="w-4 h-4" />
                                        Filter
                                    </Button>
                                    <Button variant="outline" className="h-9 bg-gray-100 dark:bg-gray-800 border-none hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 gap-1.5">
                                        <Download className="w-4 h-4" />
                                        Export
                                    </Button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800 hover:bg-transparent">
                                            <TableHead className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Employee</TableHead>
                                            <TableHead className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Request Type</TableHead>
                                            <TableHead className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date / Duration</TableHead>
                                            <TableHead className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Reason</TableHead>
                                            <TableHead className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody className="divide-y divide-gray-200 dark:divide-gray-800">
                                        {approvals.map((item, index) => (
                                            <TableRow key={index} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-none text-base">
                                                <TableCell className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-10 w-10 border border-gray-200 dark:border-gray-700">
                                                            <AvatarImage src={item.image} alt={item.name} className="object-cover" />
                                                            <AvatarFallback>{item.name.substring(0, 2)}</AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.name}</p>
                                                            <div className="flex items-center gap-1 text-xs text-primary font-medium">
                                                                <span>{item.role}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${item.typeColor}`}>
                                                        {item.type}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="px-6 py-4">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{item.date}</p>
                                                    <p className="text-xs text-gray-500">{item.duration}</p>
                                                </TableCell>
                                                <TableCell className="px-6 py-4 max-w-xs">
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate" title={item.reason}>{item.reason}</p>
                                                </TableCell>
                                                <TableCell className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        <Button size="icon" className="h-9 w-9 bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 dark:text-green-400 border border-green-200 dark:border-green-800 shadow-none">
                                                            <Check className="w-5 h-5" />
                                                        </Button>
                                                        <Button size="icon" className="h-9 w-9 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 border border-red-200 dark:border-red-800 shadow-none">
                                                            <X className="w-5 h-5" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Pagination */}
                            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Showing <span className="font-medium text-gray-900 dark:text-white">1</span> to <span className="font-medium text-gray-900 dark:text-white">5</span> of <span className="font-medium text-gray-900 dark:text-white">12</span> results
                                </p>
                                <nav className="flex items-center gap-1">
                                    <Button variant="ghost" size="icon" disabled className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <ChevronLeft className="w-5 h-5" />
                                    </Button>
                                    <Button className="h-9 w-9 bg-primary text-white hover:bg-primary/90">1</Button>
                                    <Button variant="ghost" className="h-9 w-9 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">2</Button>
                                    <Button variant="ghost" className="h-9 w-9 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">3</Button>
                                    <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                                        <ChevronRight className="w-5 h-5" />
                                    </Button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
