"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Search, Briefcase, Download, Plus, Building2, Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Department {
    name: string;
    head: {
        name: string;
        image: string | null;
        initials: string;
    };
    employeesCount: number;
    status: string;
    location: string;
}

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch";
import { useState } from "react"
import { useLanguage } from "@/lib/context/language-context";

export default function DepartmentsPage() {
    const { t } = useLanguage();
    const initialDepartments: Department[] = [
        {
            name: "Engineering",
            head: {
                name: "Michael Foster",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwYlPA6kGaWvg6prqn6plEhSuYZr6BJYlNZ5Jj71MxEbcpTSFqGvNQLh4peCK7RmdoMKzgDp-Xpl9idlc-L6Hfia5HrWc6mKnBJVNQruuQFYLa7u4fi7j2Q0WGv7PLqf04107RdxKqJtDvkg4U2Bj9lAMbRyWjHMFMgn65J4kXisgb5tIPwwRGBOu45RWypPIx1Qm_ABTGEgGEpo83CbVb7e4PT6GsD3KtLkMaEQHrXlKeJONDET29kZUzM1XPfJzSBVXGcNsYFil4",
                initials: "MF"
            },
            employeesCount: 24,
            status: "Active",
            location: "Building A, Floor 3"
        },
        {
            name: "Human Resources",
            head: {
                name: "Lindsay Walton",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlMPPORWrEF_lQVojs9KOVCLRJD5ysgllQTuWWFv6q9kB0HE0iyjYOY7RCgTkq9KknK3yoth7WnBeJwhrAYLgyrCabB7kiUufF9j_ygRFRlCkHIU10Aa1BhfzZZy8amWER9_FBnHLYRslHKXtPiKNu9531kvAS73FvELuj2Oe8BK1NdxWAgJa8Cgc_nLTCbEffNHR7E9hYxjhfkGEHce1cnr_bogFi-DlES_4zwX_eCr5JYE4hABISYFuczabt6edNBlRDooANSwzz",
                initials: "LW"
            },
            employeesCount: 8,
            status: "Active",
            location: "Building A, Floor 2"
        },
        {
            name: "Design",
            head: {
                name: "Whitney Francis",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPl7gImt5a0dSDJhoVjnowMqtYRT52zxzsjWAFC0ddz-BBssiNWP4_3YYgsugTbHDL7OeXrZcKo1_X93Is96OqUVjSEjtMECVJbYuFakLNPXu7onSJV6ZBwKvAMBtCt_Cyw5E4fx7Yju9RlAvbPWS9B9TmWCT_ET6c9ft7a72Weke0eHqAAqVwsUcnhA24B6gQlAxVcdR8mMV2mEuHM4frQz5muPql8SXeEbiWf76bHp4560bww9xrmOPUUhHAnf1PcnwFmLs7TQTF",
                initials: "WF"
            },
            employeesCount: 12,
            status: "Active",
            location: "Building B, Floor 1"
        },
        {
            name: "Marketing",
            head: {
                name: "Leonard Krasner",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKysN3C5jUsjQ7GxwqXoSs0KYefegIvCEC2LEmo_bMFvgCoI6ESZeufPmVZdUPmvqo_3t0b5ZRDL8FOAHdJ_bewk0kK5NGaWqWgnO-O-NeDpABSGIQSMkl5CbPAo41Y9n6ZeYvy4qugVigLzKBwfhBDOBaYeK-v5BDxpU4_8w5GyyDiLb9mG48kjqwtGqRNu8xMoAlFpG_KvsSEQ1OyKPrwyhACTTv5AIJuE6Bc0mVWbqZH6-gw1ZIkxHl0LY8Uc9zb1yx8y1E6GnG",
                initials: "LK"
            },
            employeesCount: 15,
            status: "Active",
            location: "Building B, Floor 2"
        },
        {
            name: "Finance",
            head: {
                name: "Floyd Miles",
                image: null,
                initials: "FM"
            },
            employeesCount: 6,
            status: "Inactive",
            location: "Building A, Floor 1"
        }
    ];

    const [departments, setDepartments] = useState<Department[]>(initialDepartments);
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    // Confirmation Dialog States
    const [isConfirmAddOpen, setIsConfirmAddOpen] = useState(false);
    const [isConfirmUpdateOpen, setIsConfirmUpdateOpen] = useState(false);

    const [selectedDept, setSelectedDept] = useState<Department | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        headName: "",
        employeesCount: 0,
        status: "Active",
        location: ""
    });

    const handleAddOpen = () => {
        setFormData({ name: "", headName: "", employeesCount: 0, status: "Active", location: "" });
        setIsAddOpen(true);
    };

    const handleUpdateOpen = (dept: Department) => {
        setSelectedDept(dept);
        setFormData({
            name: dept.name,
            headName: dept.head.name,
            employeesCount: dept.employeesCount,
            status: dept.status,
            location: dept.location
        });
        setIsUpdateOpen(true);
    };

    const handleDeleteOpen = (dept: Department) => {
        setSelectedDept(dept);
        setIsDeleteOpen(true);
    };

    const handleAddSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAddOpen(false);
        setIsConfirmAddOpen(true);
    };

    const handleUpdateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsUpdateOpen(false);
        setIsConfirmUpdateOpen(true);
    };

    const confirmAdd = () => {
        const newDept = {
            name: formData.name,
            head: { name: formData.headName, initials: formData.headName.substring(0, 2).toUpperCase(), image: null },
            employeesCount: Number(formData.employeesCount) || 0,
            status: formData.status,
            location: formData.location
        };
        setDepartments([...departments, newDept]);
        setIsConfirmAddOpen(false);
    };

    const confirmUpdate = () => {
        if (!selectedDept) return;
        const updatedDepts = departments.map(d => d.name === selectedDept.name ? {
            ...d,
            name: formData.name,
            head: { ...d.head, name: formData.headName },
            employeesCount: Number(formData.employeesCount),
            status: formData.status,
            location: formData.location
        } : d);
        setDepartments(updatedDepts);
        setIsConfirmUpdateOpen(false);
    };

    const confirmDelete = () => {
        if (!selectedDept) return;
        const updatedDepts = departments.filter(d => d.name !== selectedDept.name);
        setDepartments(updatedDepts);
        setIsDeleteOpen(false);
    };


    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#f6f6f8] dark:bg-[#111621] text-gray-900 dark:text-gray-100 font-display">
            {/* Sidebar - Desktop */}
            <Sidebar className="hidden md:flex w-64 flex-shrink-0 transition-all duration-300" />

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                {/* Header / Top Bar */}
                <Header
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Departments", href: "/departments", active: true }
                    ]}
                />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto bg-[#f6f6f8] dark:bg-[#111621] p-6 sm:p-8">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {/* Page Heading & Main Action */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                                    {t.department.admin.title}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">
                                    {t.department.admin.description}
                                </p>
                            </div>
                            <Button
                                onClick={handleAddOpen}
                                className="h-12 px-6 rounded-lg bg-primary hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/20 gap-2 shrink-0"
                            >
                                <Plus className="w-5 h-5" />
                                <span>{t.department.admin.addDepartment}</span>
                            </Button>
                        </div>

                        {/* Filters & Search Toolbar */}
                        <div className="bg-white dark:bg-[#1a202c] p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
                            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4 flex-1">
                                {/* Search */}
                                <div className="relative w-full sm:max-w-xs">
                                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
                                        <Search className="w-4 h-4" />
                                    </span>
                                    <Input
                                        className="w-full pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 text-sm"
                                        placeholder={t.department.admin.filter.search}
                                        type="text"
                                    />
                                </div>

                                {/* Status Filter Dropdown */}
                                <div className="relative w-full sm:w-48">
                                    <Select>
                                        <SelectTrigger className="w-full h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-gray-400" />
                                                <SelectValue placeholder="All Status" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Status</SelectItem>
                                            <SelectItem value="active">Active</SelectItem>
                                            <SelectItem value="inactive">Inactive</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Additional Actions */}
                            <div className="flex gap-2 w-full md:w-auto justify-end">
                                <Button
                                    variant="outline"
                                    className="px-4 rounded-lg border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center gap-2 transition-colors"
                                >
                                    <Download className="w-5 h-5" />
                                    <span className="text-sm font-medium hidden sm:inline">
                                        {t.common.export}
                                    </span>
                                </Button>
                            </div>
                        </div>

                        {/* Data Table */}
                        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 hover:bg-transparent">
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 min-w-[200px] h-auto">
                                            {t.department.admin.table.name}
                                        </TableHead>
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 h-auto">
                                            {t.department.admin.table.head}
                                        </TableHead>
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 h-auto">
                                            {t.department.admin.table.sumOfEmployees}
                                        </TableHead>
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 h-auto">
                                            {t.department.admin.table.location}
                                        </TableHead>
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 h-auto">
                                            {t.common.state}
                                        </TableHead>
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right h-auto">
                                            {t.common.actions}
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {departments.map((dept, index) => (
                                        <TableRow
                                            key={index}
                                            className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-none"
                                        >
                                            <TableCell className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                                        <Building2 className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900 dark:text-white">
                                                            {dept.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="w-8 h-8 border border-gray-200 dark:border-gray-700">
                                                        {dept.head.image && <AvatarImage src={dept.head.image} />}
                                                        <AvatarFallback className="text-xs">{dept.head.initials}</AvatarFallback>
                                                    </Avatar>
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                                        {dept.head.name}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 px-6">
                                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                                    {dept.employeesCount} {t.employee.title}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 px-6">
                                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                                    {dept.location}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 px-6">
                                                <Badge
                                                    className={`
                            inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border-none
                            ${dept.status === "Active"
                                                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30"
                                                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        }
                          `}
                                                    variant="secondary"
                                                >
                                                    <span className={`w-1.5 h-1.5 rounded-full ${dept.status === "Active" ? "bg-green-500" : "bg-gray-500"}`}></span>
                                                    {dept.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="py-4 px-6 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Button
                                                        onClick={() => handleUpdateOpen(dept)}
                                                        variant="ghost"
                                                        size="icon"
                                                        className="bg-transparent hover:bg-blue-50 text-blue-600 dark:hover:bg-blue-900/20 dark:text-blue-400 transition-colors h-8 w-8"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleDeleteOpen(dept)}
                                                        variant="ghost"
                                                        size="icon"
                                                        className="bg-transparent hover:bg-red-50 text-red-600 dark:hover:bg-red-900/20 dark:text-red-400 transition-colors h-8 w-8"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

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
                                    {t.department.title}
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
            {/* Modal Dialogs Section */}

            {/* Add Department Dialog */}
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <DialogHeader>
                        <DialogTitle>{t.department.admin.addDepartment}</DialogTitle>
                        <DialogDescription>
                            {t.department.admin.form.description}
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleAddSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">{t.department.admin.form.name}</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g. Engineering"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="head">{t.department.admin.form.head}</Label>
                            <Input
                                id="head"
                                value={formData.headName}
                                onChange={(e) => setFormData({ ...formData, headName: e.target.value })}
                                placeholder="e.g. Michael Foster"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="employees">{t.department.admin.form.employeesCount}</Label>
                            <Input
                                id="employees"
                                type="number"
                                value={formData.employeesCount}
                                onChange={(e) =>
                                    setFormData({ ...formData, employeesCount: Number(e.target.value) })
                                }
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="location">{t.department.admin.form.location}</Label>
                            <Input
                                id="location"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                placeholder="e.g. Building A, Floor 3"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                                <Label htmlFor="status" className="text-sm font-medium">
                                    {t.common.state}
                                </Label>
                                <div className="text-[0.8rem] text-muted-foreground">
                                    {formData.status === "Active" ? "Aktif" : "Nonaktif"}
                                </div>
                            </div>
                            <Switch
                                id="status"
                                checked={formData.status === "Active"}
                                onCheckedChange={(checked) =>
                                    setFormData({ ...formData, status: checked ? "Active" : "Inactive" })
                                }
                            />
                        </div>

                        <DialogFooter className="pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setIsAddOpen(false)}
                            >
                                {t.common.cancel}
                            </Button>
                            <Button type="submit">{t.common.add}</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Update Department Dialog */}
            <Dialog open={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <DialogHeader>
                        <DialogTitle>{t.department.admin.updateDepartment}</DialogTitle>
                        <DialogDescription>
                            {t.department.admin.form.description} {selectedDept?.name}.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleUpdateSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="edit-name">{t.department.admin.form.name}</Label>
                            <Input id="edit-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="edit-head">{t.department.admin.form.head}</Label>
                            <Input id="edit-head" value={formData.headName} onChange={(e) => setFormData({ ...formData, headName: e.target.value })} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="edit-employees">{t.department.admin.form.employeesCount}</Label>
                            <Input id="edit-employees" type="number" value={formData.employeesCount} onChange={(e) => setFormData({ ...formData, employeesCount: Number(e.target.value) })} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="edit-location">{t.department.admin.form.location}</Label>
                            <Input id="edit-location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} required />
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                                <Label htmlFor="edit-status" className="text-sm font-medium">
                                    {t.common.state}
                                </Label>
                                <div className="text-[0.8rem] text-muted-foreground">
                                    {formData.status === "Active" ? "Aktif" : "Nonaktif"}
                                </div>
                            </div>
                            <Switch
                                id="edit-status"
                                checked={formData.status === "Active"}
                                onCheckedChange={(checked) =>
                                    setFormData({ ...formData, status: checked ? "Active" : "Inactive" })
                                }
                            />
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsUpdateOpen(false)}>{t.common.cancel}</Button>
                            <Button type="submit">{t.common.update}</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Confirmation Dialog - Add */}
            <AlertDialog open={isConfirmAddOpen} onOpenChange={setIsConfirmAddOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t.common.dialog.titleConfirmAdd}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {t.common.dialog.descriptionConfirmAdd}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>{t.common.cancel}</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmAdd}>{t.common.confirm}</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Confirmation Dialog - Update */}
            <AlertDialog open={isConfirmUpdateOpen} onOpenChange={setIsConfirmUpdateOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t.common.dialog.titleConfirmUpdate}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {t.common.dialog.descriptionConfirmUpdate}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>{t.common.cancel}</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmUpdate}>{t.common.confirm}</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Confirmation Dialog - Delete */}
            <AlertDialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t.common.dialog.titleConfirmDelete}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {t.common.dialog.descriptionConfirmDelete}
                            <strong> {selectedDept?.name}</strong>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>{t.common.cancel}</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">{t.common.delete}</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
