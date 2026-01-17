"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    CheckCircle,
    FileText,
    Settings,
    LogOut,
    ClipboardCheck,
    Building2,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    onNavigate?: () => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
    const pathname = usePathname();

    const navItems = [
        { icon: Users, label: "Employees", href: "/employees" },
        { icon: Building2, label: "Departments", href: "/departments" },
        { icon: CheckCircle, label: "Approvals", href: "/approvals" },
        { icon: FileText, label: "Attendance Reports", href: "/reports" },
        { icon: Settings, label: "Settings", href: "/settings" },
    ];

    return (
        <div className={cn("flex min-h-screen flex-col bg-white dark:bg-[#1a202c] border-r border-sidebar-border", className)}>
            <div className="flex flex-col gap-6 p-6 h-full">
                {/* Logo */}
                <div className="flex items-center gap-3 px-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <ClipboardCheck className="h-5 w-5" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-sidebar-foreground">
                        AbsenYuk!
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-1 mt-2 flex-1">
                    <Link
                        href="/"
                        className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-semibold text-sm",
                            pathname === "/"
                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                        onClick={onNavigate}
                    >
                        <LayoutDashboard className="h-5 w-5" />
                        <span>Dashboard</span>
                    </Link>

                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-all",
                                pathname === item.href
                                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 font-bold"
                                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground font-medium"
                            )}
                            onClick={onNavigate}
                        >
                            <item.icon className="h-5 w-5" />
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Logout */}
            <div className="p-6 border-t border-sidebar-border mt-auto">
                <button
                    onClick={() => {
                        localStorage.removeItem("userRole");
                        window.location.href = "/";
                    }}
                    className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-all text-left"
                >
                    <LogOut className="h-5 w-5" />
                    <span className="text-sm font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
}
