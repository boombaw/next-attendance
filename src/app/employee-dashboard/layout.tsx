"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@/contexts/user-context";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function EmployeeDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <UserProvider>
            <div className={`${inter.variable} font-sans`}>
                {/* Material Symbols Outlined from Google Fonts */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />

                {children}
            </div>
        </UserProvider>
    );
}
