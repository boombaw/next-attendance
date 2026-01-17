import { ArrowUp, CheckCircle, Clock, Plane, MoreHorizontal, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ElementType;
    trend?: string;
    trendIcon?: React.ElementType;
    colorClass: string;
    bgClass: string;
    trendColorClass: string;
    actionRequired?: boolean;
}

function StatCard({ title, value, icon: Icon, trend, trendIcon: TrendIcon, colorClass, bgClass, trendColorClass, actionRequired }: StatCardProps) {
    return (
        <div className={cn(
            "bg-card p-6 rounded-xl shadow-sm border border-border flex flex-col justify-between h-32 group transition-all hover:border-primary/30",
            actionRequired && "hover:border-orange-200",
            title === "Leave" && "hover:border-purple-200",
            title === "Pending" && "hover:border-blue-200"
        )}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-muted-foreground text-sm font-medium">{title}</p>
                    <h3 className="text-3xl font-bold text-foreground mt-1">{value}</h3>
                </div>
                <div className={cn("size-10 rounded-lg flex items-center justify-center", bgClass, colorClass)}>
                    <Icon className="h-6 w-6" />
                </div>
            </div>
            <div className={cn("flex items-center gap-1 text-xs font-medium", trendColorClass)}>
                {TrendIcon && <TrendIcon className="h-4 w-4" />}
                <span>{trend}</span>
            </div>
        </div>
    );
}

export function DashboardStats() {
    const stats = [
        {
            title: "Present",
            value: "124",
            icon: CheckCircle,
            trend: "+4% from yesterday",
            trendIcon: ArrowUp,
            colorClass: "text-green-600",
            bgClass: "bg-green-50 dark:bg-green-900/20",
            trendColorClass: "text-green-600",
        },
        {
            title: "Late",
            value: "5",
            icon: Clock,
            trend: "Action needed",
            trendIcon: AlertTriangle,
            colorClass: "text-orange-600",
            bgClass: "bg-orange-50 dark:bg-orange-900/20",
            trendColorClass: "text-orange-600",
            actionRequired: true,
        },
        {
            title: "Leave",
            value: "3",
            icon: Plane,
            trend: "Approved requests",
            colorClass: "text-purple-600",
            bgClass: "bg-purple-50 dark:bg-purple-900/20",
            trendColorClass: "text-muted-foreground",
        },
        {
            title: "Pending",
            value: "2",
            icon: MoreHorizontal,
            trend: "Requires approval",
            colorClass: "text-primary",
            bgClass: "bg-blue-50 dark:bg-blue-900/20",
            trendColorClass: "text-primary",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
}
