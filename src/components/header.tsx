import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MobileNav } from "@/components/mobile-nav";
import Link from "next/link";
import { LanguageSelector } from "@/components/language-selector";

interface BreadcrumbItem {
    label: string;
    href: string;
    active?: boolean;
}

interface HeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function Header({ breadcrumbs }: HeaderProps) {
    return (
        <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-white backdrop-blur-md border-b border-sidebar-border h-16">
            <div className="flex items-center gap-4">
                <div className="md:hidden">
                    <MobileNav />
                </div>

                {breadcrumbs ? (
                    <nav aria-label="Breadcrumb" className="flex">
                        <ol className="flex items-center space-x-2">
                            {breadcrumbs.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    {index > 0 && (
                                        <span className="text-muted-foreground text-sm mx-2">/</span>
                                    )}
                                    <Link
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors ${item.active
                                            ? "text-primary dark:text-blue-400"
                                            : "text-muted-foreground hover:text-primary dark:hover:text-blue-400"
                                            }`}
                                        aria-current={item.active ? "page" : undefined}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>
                ) : (
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Dashboard Overview</h2>
                        <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4">
                <LanguageSelector />
                <button className="relative p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
                </button>

                <div className="hidden md:flex items-center gap-3 pl-4 md:border-l md:border-border">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-foreground">Sarah Admin</p>
                        <p className="text-xs text-muted-foreground">HR Manager</p>
                    </div>
                    <Avatar className="h-9 w-9 border border-border">
                        <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCajyl_vk8bWId4JosS-rsaFFvPho1D69prvG80Tmt-L5S3mHQBsqHgfESz9acYuiqLt0EUXRuSpv40k1RKU1Jc51pB7TAjLcQCDKaeKzvs9qFeTDgTx3Fa-hXcuqzLuAJu315jCK4e7C-9CllvKJox5_jv2qhUb-v_oAuf0z9fS_AhsCSFy50TAi8i9mWhIrZAgO96Fop_Dk0aRnzM5k4TWBlMk_pnNWa6glznr2YieX6lZ7UxZPn2pLZJCfdgutybE3QtylAq5L96" alt="Sarah Admin" />
                        <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
