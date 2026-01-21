"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

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
    isHydrated: boolean;
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

// User store for external sync
const USER_STORAGE_KEY = "currentUser";
const userListeners = new Set<() => void>();

// Cache to prevent returning new object references on each call
let cachedUser: User | null = null;
let cachedUserJson: string | null = null;

const getUserFromStorage = (): User | null => {
    if (typeof window === "undefined") return null;

    const savedUserJson = localStorage.getItem(USER_STORAGE_KEY);

    // Return cached value if JSON hasn't changed
    if (savedUserJson === cachedUserJson) {
        return cachedUser;
    }

    if (savedUserJson) {
        cachedUserJson = savedUserJson;
        cachedUser = JSON.parse(savedUserJson);
        return cachedUser;
    }

    // Set default if not exists
    const defaultUser = MOCK_USERS[1]; // Supervisor
    const defaultUserJson = JSON.stringify(defaultUser);
    localStorage.setItem(USER_STORAGE_KEY, defaultUserJson);
    cachedUserJson = defaultUserJson;
    cachedUser = defaultUser;
    return defaultUser;
};

const subscribeUser = (callback: () => void) => {
    userListeners.add(callback);
    return () => userListeners.delete(callback);
};

const notifyUserListeners = () => {
    // Invalidate cache before notifying
    cachedUserJson = null;
    userListeners.forEach((listener) => listener());
};

export function UserProvider({ children }: { children: React.ReactNode }) {
    const user = useSyncExternalStore(
        subscribeUser,
        getUserFromStorage,
        () => null // Server snapshot
    );

    const isHydrated = typeof window !== "undefined";

    const setUser = (newUser: User | null) => {
        if (newUser) {
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
        } else {
            localStorage.removeItem(USER_STORAGE_KEY);
        }
        notifyUserListeners();
    };

    const isSupervisor = user?.role === "supervisor";

    return (
        <UserContext.Provider value={{ user, setUser, isSupervisor, isHydrated }}>
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
