"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Search, Filter, Briefcase, Download, Plus, Check, ChevronsUpDown, Pencil, Trash2 } from "lucide-react";
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
import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { useLanguage } from "@/lib/context/language-context";

interface Employee {
    name: string;
    email: string;
    role: string;
    position: string;
    status: string;
    image: string | null;
    initials: string;
}

export default function EmployeesPage() {
    const { t } = useLanguage();

    const initialEmployees: Employee[] = [
        {
            name: "Michael Foster",
            email: "michael.foster@absenyuk.com",
            role: "Engineering",
            position: "Senior Developer",
            status: "Active",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwYlPA6kGaWvg6prqn6plEhSuYZr6BJYlNZ5Jj71MxEbcpTSFqGvNQLh4peCK7RmdoMKzgDp-Xpl9idlc-L6Hfia5HrWc6mKnBJVNQruuQFYLa7u4fi7j2Q0WGv7PLqf04107RdxKqJtDvkg4U2Bj9lAMbRyWjHMFMgn65J4kXisgb5tIPwwRGBOu45RWypPIx1Qm_ABTGEgGEpo83CbVb7e4PT6GsD3KtLkMaEQHrXlKeJONDET29kZUzM1XPfJzSBVXGcNsYFil4",
            initials: "MF",
        },
        {
            name: "Lindsay Walton",
            email: "lindsay.walton@absenyuk.com",
            role: "Human Resources",
            position: "HR Manager",
            status: "Active",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlMPPORWrEF_lQVojs9KOVCLRJD5ysgllQTuWWFv6q9kB0HE0iyjYOY7RCgTkq9KknK3yoth7WnBeJwhrAYLgyrCabB7kiUufF9j_ygRFRlCkHIU10Aa1BhfzZZy8amWER9_FBnHLYRslHKXtPiKNu9531kvAS73FvELuj2Oe8BK1NdxWAgJa8Cgc_nLTCbEffNHR7E9hYxjhfkGEHce1cnr_bogFi-DlES_4zwX_eCr5JYE4hABISYFuczabt6edNBlRDooANSwzz",
            initials: "LW",
        },
        {
            name: "Whitney Francis",
            email: "whitney.francis@absenyuk.com",
            role: "Design",
            position: "Product Designer",
            status: "Inactive",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPl7gImt5a0dSDJhoVjnowMqtYRT52zxzsjWAFC0ddz-BBssiNWP4_3YYgsugTbHDL7OeXrZcKo1_X93Is96OqUVjSEjtMECVJbYuFakLNPXu7onSJV6ZBwKvAMBtCt_Cyw5E4fx7Yju9RlAvbPWS9B9TmWCT_ET6c9ft7a72Weke0eHqAAqVwsUcnhA24B6gQlAxVcdR8mMV2mEuHM4frQz5muPql8SXeEbiWf76bHp4560bww9xrmOPYUhHAnf1PcnwFmLs7TQTF",
            initials: "WF",
        },
        {
            name: "Leonard Krasner",
            email: "leonard.krasner@absenyuk.com",
            role: "Marketing",
            position: "Marketing Specialist",
            status: "Active",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKysN3C5jUsjQ7GxwqXoSs0KYefegIvCEC2LEmo_bMFvgCoI6ESZeufPmVZdUPmvqo_3t0b5ZRDL8FOAHdJ_bewk0kK5NGaWqWgnO-O-NeDpABSGIQSMkl5CbPAo41Y9n6ZeYvy4qugVigLzKBwfhBDOBaYeK-v5BDxpU4_8w5GyyDiLb9mG48kjqwtGqRNu8xMoAlFpG_KvsSEQ1OyKPrwyhACTTv5AIJuE6Bc0mVWbqZH6-gw1ZIkxHl0LY8Uc9zb1yx8y1E6GnG",
            initials: "LK",
        },
        {
            name: "Floyd Miles",
            email: "floyd.miles@absenyuk.com",
            role: "Engineering",
            position: "Frontend Developer",
            status: "Active",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq0XggdGGIpLmxgErMkw_JTr9HkWqvHLDtvwOFAjfCMy9dtPKTzjziQtDJILIawpfCOOCORVv9_Os-FGyzBZY_T0cnnl39yO_rvIjsyuRO96tvEwehFgQvHS9HPpdJVgMdgl36wIXicMMwoFGxlpUQV6C7yYHr3JJLPR4iOOX9Wwf23QaWqbm9xA_JqIiB-Esiqml6Olj_B6NPTFNAV1pN48WwMh5ZwiUPZLsA6COc_3zvcBHE3V50zA6Qnouiqtljsx1DzynuC2Z9",
            initials: "FM",
        },
    ];

    const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

    const departments = [
        { label: "Engineering", value: "Engineering" },
        { label: "Human Resources", value: "Human Resources" },
        { label: "Design", value: "Design" },
        { label: "Marketing", value: "Marketing" },
        { label: "Finance", value: "Finance" },
    ]

    const [openCombobox, setOpenCombobox] = useState(false);
    const [openUpdateCombobox, setOpenUpdateCombobox] = useState(false);

    // Dialog States
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    // Confirmation Dialog States
    const [isConfirmAddOpen, setIsConfirmAddOpen] = useState(false);
    const [isConfirmUpdateOpen, setIsConfirmUpdateOpen] = useState(false);

    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        position: "",
        status: "Active",
    });

    const handleAddOpen = () => {
        setFormData({ name: "", email: "", role: "", position: "", status: "Active" });
        setIsAddOpen(true);
    };

    const handleUpdateOpen = (employee: Employee) => {
        setSelectedEmployee(employee);
        setFormData({
            name: employee.name,
            email: employee.email,
            role: employee.role,
            position: employee.position,
            status: employee.status,
        });
        setIsUpdateOpen(true);
    };

    const handleDeleteOpen = (employee: Employee) => {
        setSelectedEmployee(employee);
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
        const initials = formData.name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);

        const newEmployee: Employee = {
            ...formData,
            image: null,
            initials: initials,
        };

        setEmployees([...employees, newEmployee]);
        setIsConfirmAddOpen(false);
    };

    const confirmUpdate = () => {
        if (!selectedEmployee) return;

        const updatedEmployees = employees.map(emp => emp.email === selectedEmployee.email ? {
            ...emp,
            ...formData
        } : emp); // Using email as a simple unique identifier for now, in lack of IDs

        setEmployees(updatedEmployees);
        setIsConfirmUpdateOpen(false);
    };

    const confirmDelete = () => {
        if (!selectedEmployee) return;
        const updatedEmployees = employees.filter(emp => emp.email !== selectedEmployee.email);
        setEmployees(updatedEmployees);
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
                        { label: "Employees", href: "/employees", active: true }
                    ]}
                />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto bg-[#f6f6f8] dark:bg-[#111621] p-6 sm:p-8">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {/* Page Heading & Main Action */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                                    {t.employee.admin.title}
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 mt-1">
                                    {t.employee.admin.description}
                                </p>
                            </div>
                            <Button
                                onClick={handleAddOpen}
                                className="h-12 px-6 rounded-lg bg-primary hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/20 gap-2 shrink-0"
                            >
                                <Plus className="w-5 h-5" />
                                <span>{t.employee.admin.addEmployee}</span>
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
                                        placeholder={t.employee.admin.filter.search}
                                        type="text"
                                    />
                                </div>

                                {/* Filter Dropdown */}
                                <div className="relative w-full sm:w-48">
                                    <Select>
                                        <SelectTrigger className="w-full h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                                            <div className="flex items-center gap-2">
                                                <Filter className="w-4 h-4 text-gray-400" />
                                                <SelectValue placeholder="All Departments" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Departments</SelectItem>
                                            <SelectItem value="engineering">Engineering</SelectItem>
                                            <SelectItem value="marketing">Marketing</SelectItem>
                                            <SelectItem value="design">Design</SelectItem>
                                            <SelectItem value="hr">Human Resources</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 min-w-[250px] h-auto">
                                            {t.employee.admin.table.name}
                                        </TableHead>
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 h-auto">
                                            {t.employee.admin.table.dept}
                                        </TableHead>
                                        <TableHead className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 h-auto">
                                            {t.employee.admin.table.position}
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
                                    {employees.map((employee, index) => (
                                        <TableRow
                                            key={index}
                                            className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-none"
                                        >
                                            <TableCell className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="w-10 h-10 border border-gray-200 dark:border-gray-700">
                                                        <AvatarImage src={employee.image || undefined} />
                                                        <AvatarFallback>{employee.initials}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium text-gray-900 dark:text-white">
                                                            {employee.name}
                                                        </p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                                            {employee.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 px-6">
                                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                                    {employee.role}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 px-6">
                                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                                    {employee.position}
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 px-6">
                                                <Badge
                                                    className={`
                            inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border-none
                            ${employee.status === "Active"
                                                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30"
                                                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        }
                          `}
                                                    variant="secondary"
                                                >
                                                    <span className={`w-1.5 h-1.5 rounded-full ${employee.status === "Active" ? "bg-green-500" : "bg-gray-500"}`}></span>
                                                    {employee.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="py-4 px-6 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Button
                                                        onClick={() => handleUpdateOpen(employee)}
                                                        variant="ghost"
                                                        size="icon"
                                                        className="bg-transparent hover:bg-blue-50 text-blue-600 dark:hover:bg-blue-900/20 dark:text-blue-400 transition-colors h-8 w-8"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleDeleteOpen(employee)}
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
                                        50
                                    </span>{" "}
                                    {t.employee.title}
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
                                        className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
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

            {/* Add Employee Dialog */}
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <DialogHeader>
                        <DialogTitle>{t.employee.admin.addEmployee}</DialogTitle>
                        <DialogDescription>
                            {t.employee.admin.form.description}
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleAddSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">{t.employee.admin.form.name}</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g. John Doe"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">{t.employee.admin.form.email}</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="name@company.com"
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="role">{t.employee.admin.form.department}</Label>
                            <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openCombobox}
                                        // Pastikan w-full agar tombol memenuhi lebar grid
                                        className="w-full justify-between"
                                    >
                                        {formData.role
                                            ? departments.find((d) => d.value === formData.role)?.label
                                            : "Select Department..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>

                                {/* Trik utama: w-[--radix-popover-trigger-width] */}
                                <PopoverContent
                                    className="p-0"
                                    align="start"
                                    style={{ width: 'var(--radix-popover-trigger-width)' }}
                                >
                                    <Command className="w-full">
                                        <CommandInput className="h-9" placeholder="Search department..." />
                                        <CommandList>
                                            <CommandEmpty>No department found.</CommandEmpty>
                                            <CommandGroup>
                                                {departments.map((department) => (
                                                    <CommandItem
                                                        key={department.value}
                                                        value={department.value}
                                                        onSelect={(currentValue) => {
                                                            setFormData({ ...formData, role: currentValue });
                                                            setOpenCombobox(false);
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                formData.role === department.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        {department.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="position">{t.employee.admin.form.position}</Label>
                            <Input
                                id="position"
                                value={formData.position}
                                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                placeholder="e.g. Senior Developer"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                                <Label htmlFor="status" className="text-sm font-medium">
                                    {t.common.state}
                                </Label>
                                <div className="text-[0.8rem] text-muted-foreground">
                                    {formData.status}
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

            {/* Update Employee Dialog */}
            <Dialog open={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <DialogHeader>
                        <DialogTitle>{t.employee.admin.updateEmployee}</DialogTitle>
                        <DialogDescription>
                            {t.employee.admin.form.description}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleUpdateSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="edit-name">{t.employee.admin.form.name}</Label>
                            <Input id="edit-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="edit-email">{t.employee.admin.form.email}</Label>
                            <Input id="edit-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="edit-role">{t.employee.admin.form.department}</Label>
                            <Popover open={openUpdateCombobox} onOpenChange={setOpenUpdateCombobox}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openUpdateCombobox}
                                        className="w-full justify-between"
                                    >
                                        {formData.role
                                            ? departments.find((department) => department.value === formData.role)?.label
                                            : "Select Department..."}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="p-0"
                                    align="start"
                                    style={{ width: 'var(--radix-popover-trigger-width)' }}>
                                    <Command className="w-full">
                                        <CommandInput className="h-9" placeholder="Search department..." />
                                        <CommandList>
                                            <CommandEmpty>No department found.</CommandEmpty>
                                            <CommandGroup>
                                                {departments.map((department) => (
                                                    <CommandItem
                                                        key={department.value}
                                                        value={department.value}
                                                        onSelect={(currentValue) => {
                                                            setFormData({ ...formData, role: currentValue === formData.role ? "" : currentValue })
                                                            setOpenUpdateCombobox(false)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                formData.role === department.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        {department.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="edit-position">{t.employee.admin.form.position}</Label>
                            <Input id="edit-position" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} required />
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                                <Label htmlFor="edit-status" className="text-sm font-medium">
                                    {t.common.state}
                                </Label>
                                <div className="text-[0.8rem] text-muted-foreground">
                                    {formData.status}
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
                            <Button type="button" variant="outline" onClick={() => setIsUpdateOpen(false)}>Cancel</Button>
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
                        <AlertDialogAction onClick={confirmAdd}>{t.common.yes}</AlertDialogAction>
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
                        <AlertDialogAction onClick={confirmUpdate}>{t.common.yes}</AlertDialogAction>
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
                            <strong> {selectedEmployee?.name}</strong>
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
