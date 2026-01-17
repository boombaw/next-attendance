import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { DashboardStats } from "@/components/dashboard-stats";
import { AttendanceChart } from "@/components/attendance-chart";
import { RecentApprovals } from "@/components/recent-approvals";
import { ActivityFeed } from "@/components/activity-feed";

export default function Dashboard() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background text-foreground font-sans">
            {/* Sidebar - Desktop */}
            <Sidebar className="hidden md:flex w-64 flex-shrink-0 transition-all duration-300" />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-y-auto bg-background relative scroll-smooth">
                <Header
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Dashboard", href: "/admin-dashboard", active: true }
                    ]}
                />

                <div className="p-6 md:p-8 max-w-[1400px] w-full mx-auto flex flex-col gap-8 pb-20">
                    <DashboardStats />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <AttendanceChart />
                        <RecentApprovals />
                        <ActivityFeed />
                    </div>
                </div>
            </main>
        </div>
    );
}
