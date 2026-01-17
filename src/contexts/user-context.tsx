"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type UserRole = "employee" | "supervisor";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    isSupervisor: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock users - in production, this would come from authentication
const MOCK_USERS: User[] = [
    {
        id: "emp-001",
        name: "Ahmad Wijaya",
        email: "ahmad.wijaya@perusahaan.com",
        role: "employee",
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        id: "sup-001",
        name: "Dr. Siti Nurhaliza",
        email: "siti.nurhaliza@perusahaan.com",
        role: "supervisor",
        avatar: "https://i.pravatar.cc/150?img=5"
    }
];

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUserState] = useState<User | null>(null);

    useEffect(() => {
        // Load user from localStorage or set default
        const savedUser = localStorage.getItem("currentUser");
        if (savedUser) {
            setUserState(JSON.parse(savedUser));
        } else {
            // Default to supervisor for demonstration
            // Change to MOCK_USERS[0] for employee view
            const defaultUser = MOCK_USERS[1]; // Supervisor
            setUserState(defaultUser);
            localStorage.setItem("currentUser", JSON.stringify(defaultUser));
        }
    }, []);

    const setUser = (newUser: User | null) => {
        setUserState(newUser);
        if (newUser) {
            localStorage.setItem("currentUser", JSON.stringify(newUser));
        } else {
            localStorage.removeItem("currentUser");
        }
    };

    const isSupervisor = user?.role === "supervisor";

    return (
        <UserContext.Provider value={{ user, setUser, isSupervisor }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}

// Helper function to switch between users (for testing)
export function getMockUsers() {
    return MOCK_USERS;
}
