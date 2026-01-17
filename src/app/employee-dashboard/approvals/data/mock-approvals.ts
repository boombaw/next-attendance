export type ApprovalType = "leave" | "permission" | "overtime";
export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface ApprovalRequest {
    id: string;
    employeeId: string;
    employeeName: string;
    employeeAvatar: string;
    type: ApprovalType;
    status: ApprovalStatus;
    startDate?: string;
    endDate?: string;
    duration?: string;
    time?: string;
    reason: string;
    createdAt: string;
}

export const MOCK_APPROVALS: ApprovalRequest[] = [
    {
        id: "req-001",
        employeeId: "emp-001",
        employeeName: "Budi Santoso",
        employeeAvatar: "https://i.pravatar.cc/150?img=33",
        type: "leave",
        status: "pending",
        startDate: "15 Jan 2024",
        endDate: "18 Jan 2024",
        duration: "4 Hari",
        reason: "Liburan Keluarga",
        createdAt: "2024-01-10T08:00:00Z"
    },
    {
        id: "req-002",
        employeeId: "emp-002",
        employeeName: "Siti Aminah",
        employeeAvatar: "https://i.pravatar.cc/150?img=45",
        type: "overtime",
        status: "pending",
        startDate: "14 Jan 2024",
        time: "18:00 - 21:00",
        duration: "3 Jam",
        reason: "Deadline Project Launching",
        createdAt: "2024-01-12T14:30:00Z"
    },
    {
        id: "req-003",
        employeeId: "emp-003",
        employeeName: "Andi Kurniawan",
        employeeAvatar: "https://i.pravatar.cc/150?img=14",
        type: "permission",
        status: "pending",
        startDate: "16 Jan 2024",
        time: "09:00 - 12:00",
        duration: "3 Jam",
        reason: "Keperluan Keluarga Mendadak",
        createdAt: "2024-01-13T09:15:00Z"
    },
    {
        id: "req-004",
        employeeId: "emp-004",
        employeeName: "Dewi Sartika",
        employeeAvatar: "https://i.pravatar.cc/150?img=29",
        type: "leave",
        status: "approved",
        startDate: "08 Jan 2024",
        endDate: "10 Jan 2024",
        duration: "3 Hari",
        reason: "Cuti Tahunan",
        createdAt: "2024-01-05T10:00:00Z"
    },
    {
        id: "req-005",
        employeeId: "emp-005",
        employeeName: "Rudi Hermawan",
        employeeAvatar: "https://i.pravatar.cc/150?img=56",
        type: "overtime",
        status: "approved",
        startDate: "12 Jan 2024",
        time: "17:00 - 20:00",
        duration: "3 Jam",
        reason: "Penyelesaian laporan bulanan",
        createdAt: "2024-01-11T15:20:00Z"
    },
    {
        id: "req-006",
        employeeId: "emp-003",
        employeeName: "Andi Kurniawan",
        employeeAvatar: "https://i.pravatar.cc/150?img=14",
        type: "permission",
        status: "rejected",
        startDate: "09 Jan 2024",
        time: "13:00 - 15:00",
        duration: "2 Jam",
        reason: "Urusan pribadi",
        createdAt: "2024-01-08T11:00:00Z"
    }
];

export function getPendingApprovals(): ApprovalRequest[] {
    return MOCK_APPROVALS.filter(req => req.status === "pending");
}

export function getCompletedApprovals(): ApprovalRequest[] {
    return MOCK_APPROVALS.filter(req => req.status === "approved" || req.status === "rejected");
}

export function getApprovalById(id: string): ApprovalRequest | undefined {
    return MOCK_APPROVALS.find(req => req.id === id);
}
