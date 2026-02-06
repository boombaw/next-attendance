"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Plus, Edit, Trash2, MapPin, Info, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { useLanguage } from "@/lib/context/language-context"

// Dynamically import MapPicker to avoid SSR issues with Leaflet
const MapPicker = dynamic(() => import("@/components/map-picker"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-100 dark:bg-slate-800 animate-pulse rounded-xl flex items-center justify-center text-slate-400">Loading Map...</div>
})

export default function SettingsPage() {

    const {t} = useLanguage();

    const [radius, setRadius] = useState([50])
    const [address, setAddress] = useState("123 Business Park, Jakarta, Indonesia")

    // Default center: Jakarta
    const center: [number, number] = [-6.2088, 106.8456]

    return (
        <div className="flex h-screen w-full overflow-hidden bg-surface-light dark:bg-surface-dark font-display">
            {/* Sidebar - Desktop */}
            <Sidebar className="hidden md:flex w-64 flex-shrink-0 transition-colors duration-300" />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                {/* Header */}
                <Header
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Settings", href: "/settings", active: true }
                    ]}
                />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
                    <div className="max-w-5xl mx-auto space-y-8 pb-20">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{t.settings.admin.title}</h1>
                            <p className="text-slate-500 dark:text-slate-400">{t.settings.admin.description}</p>
                        </div>

                        {/* Shift Management Section */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <div className="space-y-1">
                                    <CardTitle className="text-lg font-bold">{t.settings.admin.shift.title}</CardTitle>
                                    <CardDescription>{t.settings.admin.shift.description}</CardDescription>
                                </div>
                                <Button variant="outline" className="text-primary hover:text-primary hover:bg-primary/10 border-none bg-primary/5">
                                    <Plus className="mr-2 h-4 w-4" />
                                    {t.settings.admin.shift.addShift}
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow className="uppercase text-xs font-semibold tracking-wide text-slate-500 hover:bg-transparent">
                                            <TableHead>{t.settings.admin.shift.table.name}</TableHead>
                                            <TableHead>{t.settings.admin.shift.table.startTime}</TableHead>
                                            <TableHead>{t.settings.admin.shift.table.endTime}</TableHead>
                                            <TableHead>{t.common.state}</TableHead>
                                            <TableHead className="text-right">{t.common.actions}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {[
                                            { name: "Morning Shift", start: "08:00 AM", end: "05:00 PM", status: "Active" },
                                            { name: "Afternoon Shift", start: "01:00 PM", end: "10:00 PM", status: "Active" },
                                            { name: "Night Owl", start: "10:00 PM", end: "06:00 AM", status: "Inactive" },
                                        ].map((shift) => (
                                            <TableRow key={shift.name} className="group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                                <TableCell className="font-medium">{shift.name}</TableCell>
                                                <TableCell>{shift.start}</TableCell>
                                                <TableCell>{shift.end}</TableCell>
                                                <TableCell>
                                                    <Badge variant={shift.status === "Active" ? "default" : "secondary"} className={shift.status === "Active" ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-400"}>
                                                        {shift.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-primary hover:bg-primary/10">
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
                                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>

                        {/* Geofence Configuration Section */}
                        <Card>
                            <CardHeader className="border-b border-slate-100 dark:border-slate-700/50 pb-4 mb-4">
                                <CardTitle className="text-lg font-bold">{t.settings.admin.location.title}</CardTitle>
                                <CardDescription>{t.settings.admin.location.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 pt-0">
                                {/* Inputs */}
                                <div className="space-y-6 lg:col-span-1">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Office Address</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                            <Input
                                                className="pl-10"
                                                placeholder="Search location..."
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <p className="text-xs text-slate-500">{t.settings.admin.location.fullAddress}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t.settings.admin.location.radius}</label>
                                        <div className="flex items-center gap-3">
                                            <Input
                                                type="number"
                                                className="flex-1"
                                                value={radius[0]}
                                                onChange={(e) => setRadius([parseInt(e.target.value) || 0])}
                                                min={10}
                                                max={500}
                                            />
                                            <span className="text-sm text-slate-500 font-medium">meters</span>
                                        </div>
                                        <Slider
                                            value={radius}
                                            onValueChange={setRadius}
                                            min={10}
                                            max={500}
                                            step={10}
                                            className="[&_.range-thumb]:bg-primary"
                                        />
                                    </div>

                                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3 items-start">
                                        <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            {t.settings.admin.location.info}
                                        </p>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="lg:col-span-2 h-[350px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 relative z-0">
                                    <MapPicker center={center} radius={radius[0]} />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Floating Save Button */}
                    <div className="fixed bottom-0 left-0 w-full bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 p-4 shadow-lg lg:static lg:bg-transparent lg:border-none lg:shadow-none lg:pointer-events-none z-20">
                        <div className="max-w-5xl mx-auto flex justify-end lg:pointer-events-auto">
                            <Button className="px-8 py-6 bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-primary/30 rounded-lg gap-2 text-md">
                                <Save className="h-5 w-5" />
                                {t.common.save}
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
