export type Language = "ID" | "EN" | "FR" | "JP";

export const translations = {
    "ID": {
        "common": {
            "loading": "Memuat...",
            "viewAll": "Lihat Semua",
            "onTime": "Tepat Waktu",
            "lastMonth": "Bulan Lalu",
            "yesterday": "Kemarin",
            "export": "Ekspor",
            "exportToExcel": "Ekspor ke Excel",
            "exportToPDF": "Ekspor ke PDF",
            "pagination": {
                "next": "Selanjutnya",
                "prev": "Sebelumnya",
                "showing": "Menampilkan",
                "to": "ke",
                "of": "dari"
            },
            "dialog": {
                "titleConfirmDelete": "Konfirmasi Hapus",
                "titleConfirmUpdate": "Konfirmasi Ubah",
                "titleConfirmAdd": "Konfirmasi Tambah",
                "titleConfirmCancel": "Konfirmasi Batal",
                "titleConfirmSubmit": "Konfirmasi Kirim",
                "titleConfirmFilter": "Konfirmasi Saring",
                "descriptionConfirmDelete": "Apakah Anda yakin ingin menghapus data ini?",
                "descriptionConfirmUpdate": "Apakah Anda yakin ingin mengubah data ini?",
                "descriptionConfirmAdd": "Apakah Anda yakin ingin menambahkan data ini?",
                "descriptionConfirmCancel": "Apakah Anda yakin ingin membatalkan data ini?",
                "descriptionConfirmSubmit": "Apakah Anda yakin ingin mengirim data ini?",
                "descriptionConfirmFilter": "Apakah Anda yakin ingin menyaring data ini?"
            },
            "state": "Status",
            "actions": "Aksi",
            "add": "Tambah",
            "update": "Ubah",
            "delete": "Hapus",
            "confirm": "Konfirmasi",
            "cancel": "Batal",
            "save": "Simpan",
            "close": "Tutup",
            "submit": "Kirim",
            "filter": "Saring",
            "yes": "Ya",
            "information": "Informasi"
        },
        "dashboard": {
            "greeting": {
                "morning": "Selamat pagi",
                "afternoon": "Selamat siang",
                "evening": "Selamat sore",
                "night": "Selamat malam"
            },
            "welcome": "Selamat datang kembali",
            "overview": "Ringkasan Dashboard",
            "hero": {
                "checkIn": "Masuk",
                "checkOut": "Pulang",
                "checkInSuccess": "Check In Berhasil",
                "checkOutSuccess": "Check Out Berhasil"
            },
            "services": {
                "title": "Layanan HR",
                "permission": "Izin",
                "overtime": "Lembur",
                "report": "Laporan",
                "leave": "Cuti",
                "approval": "Persetujuan"
            },
            "stats": {
                "present": "Hadir",
                "late": "Terlambat",
                "leave": "Cuti",
                "pending": "Menunggu",
                "actionNeeded": "Perlu Tindakan",
                "approved": "Permintaan Disetujui",
                "requiresApproval": "Menunggu Persetujuan",
                "trend": "dari kemarin"
            },
            "history": {
                "title": "Riwayat"
            },
            "chart": {
                "title": "Ringkasan Absensi Mingguan",
                "viewReport": "Lihat Laporan"
            },
            "recentApprovals": {
                "title": "Persetujuan Terbaru",
                "pending": "Menunggu",
                "approve": "Setujui",
                "reject": "Tolak"
            },
            "activity": {
                "title": "Aktivitas Terbaru",
                "entered": "masuk kantor",
                "submitted": "mengirim laporan",
                "systemReport": "Laporan harian sistem"
            }
        },
        "employee": {
            "title": "Karyawan",
            "admin": {
                "title": "Manajemen Karyawan",
                "description": "Kelola data karyawan",
                "addEmployee": "Tambah Karyawan Baru",
                "updateEmployee": "Ubah Data Karyawan",
                "form": {
                    "description": "Masukkan detail karyawan baru.",
                    "name": "Nama Karyawan",
                    "email": "Email",
                    "department": "Departemen",
                    "position": "Posisi"
                },
                "filter": {
                    "search": "Cari berdasarkan nama, email..."
                },
                "table": {
                    "name": "Nama Karyawan",
                    "dept": "Departemen",
                    "position": "Posisi"
                }
            }
        },
        "department": {
            "title": "Departemen",
            "admin": {
                "title": "Manajemen Departemen",
                "description": "Kelola data departemen",
                "addDepartment": "Tambah Departemen Baru",
                "updateDepartment": "Ubah Data Departemen",
                "form": {
                    "description": "Masukkan detail departemen.",
                    "name": "Nama Departemen",
                    "head": "Kepala Departemen",
                    "employeesCount": "Jumlah Karyawan",
                    "location": "Lokasi"
                },
                "filter": {
                    "search": "Cari Departemen..."
                },
                "table": {
                    "name": "Nama Departemen",
                    "head": "Kepala Departemen",
                    "sumOfEmployees": "Jumlah Karyawan",
                    "location": "Lokasi"
                }
            }
        },
        "approvals": {
            "title": "Persetujuan",
            "admin": {
                "title": "Manajemen Persetujuan",
                "description": "Mengelola permintaan dari pimpinan tim dan eksekutif.",
                "stats": {
                    "pending": "Permintaan Menunggu",
                    "approved": "Permintaan Disetujui",
                    "rejected": "Permintaan Ditolak"
                },
                "filter": {
                    "search": "Cari Persetujuan..."
                },
                "table": {
                    "caption": "Daftar Permintaan",
                    "employee": "Karyawan",
                    "type": "Jenis Permintaan",
                    "range": "Tanggal / Rentang Waktu",
                    "reason": "Alasan"
                }
            }
        },
        "attendanceReports": {
            "title": "Laporan Absensi",
            "note": "Catatan",
            "admin": {
                "title": "Manajemen Laporan Absensi",
                "description": "Lihat dan ekspor catatan kehadiran terperinci untuk tim Anda.",
                "stats": {
                    "totalWorkHours": "Total Jam Kerja",
                    "totalBreakHours": "Total Jam Istirahat",
                    "totalOvertimeHours": "Total Jam Lembur",
                    "totalLateHours": "Total Jam Terlambat",
                    "avgAttendance": "Rata-rata Kehadiran"
                },
                "filter": {
                    "range": "Rentang Waktu",
                    "department": "Departemen",
                    "apply": "Terapkan"
                },
                "table": {
                    "caption": "Catatan Detail",
                    "name": "Karyawan",
                    "department": "Departemen",
                    "date": "Tanggal",
                    "clockIn": "Jam Masuk",
                    "clockOut": "Jam Pulang",
                    "workHours": "Jam Kerja",
                    "breakHours": "Jam Istirahat",
                    "overtimeHours": "Jam Lembur",
                    "lateHours": "Jam Terlambat"
                }
            },
            "employee": {
                "resume": "Ringkasan Bulan Ini",
                "stats": {
                    "alpha": "Tanpa Ket.",
                    "present": "Hadir",
                    "late": "Terlambat",
                    "leave": "Cuti",
                    "pending": "Menunggu",
                    "actionNeeded": "Perlu Tindakan",
                    "approved": "Permintaan Disetujui",
                    "rejected": "Permintaan Ditolak",
                    "requiresApproval": "Menunggu Persetujuan",
                    "trend": "dari kemarin"
                },
                "history": {
                    "title": "Riwayat Kehadiran",
                    "ontime": "Tepat Waktu",
                    "late": "Terlambat",
                    "sick": "Sakit",
                    "absent": "Tanpa Ket.",
                    "holiday": "Libur"
                }
            },
        },
        "settings": {
            "title": "Pengaturan",
            "admin": {
                "title": "Pengaturan Sistem",
                "description": "Kelola konfigurasi operasional untuk shift dan pelacakan lokasi.",
                "shift": {
                    "title": "Manajemen Shift",
                    "description": "Atur jadwal kerja untuk tim Anda.",
                    "addShift": "Tambah Shift Baru",
                    "filter": {
                        "search": "Cari Shift..."
                    },
                    "table": {
                        "name": "Nama Shift",
                        "startTime": "Waktu Mulai",
                        "endTime": "Waktu Selesai"
                    }
                },
                "location": {
                    "title": "Konfigurasi Lokasi",
                    "description": "Atur lokasi kerja untuk tim Anda.",
                    "officeAddress": "Alamat Kantor",
                    "fullAddress": "Alamat Lengkap",
                    "latitude": "Latitude",
                    "longitude": "Longitude",
                    "radius": "Radius (meter)",
                    "info": "Karyawan harus berada di dalam lingkaran biru agar dapat melakukan absensi masuk atau keluar dengan sukses."
                }
            },
            "password": {
                "title": "Ubah Kata Sandi",
                "description": "Ubah kata sandi akun Anda.",
                "currentPassword": "Kata Sandi Saat Ini",
                "newPassword": "Kata Sandi Baru",
                "confirmPassword": "Konfirmasi Kata Sandi",
                "placeholder": {
                    "currentPassword": "Masukkan password lama",
                    "newPassword": "Masukkan password baru",
                    "confirmPassword": "Masukkan password baru"
                }
            }
        },
        "nav": {
            "logout": "Keluar",
            "login": "Masuk",
            "profile": "Profil",
            "home": "Beranda",
            "report": "Laporan",
            "attendance": "Absen",
            "info": "Info",
            "dashboard": "Dashboard",
            "employees": "Karyawan",
            "departments": "Departemen",
            "approvals": "Persetujuan",
            "settings": "Pengaturan",
            "attendanceReports": "Laporan Absensi"
        },
        "status": {
            "present": "Hadir",
            "absent": "Tidak Hadir",
            "late": "Terlambat",
            "leave": "Cuti"
        },
        "profile": {
            "title": "Profil",
            "personal": {
                "title": "Informasi Personal",
                "detail": {
                    "title": "Detail Pekerjaan",
                    "position": "Jabatan",
                    "department": "Departemen",
                    "employeeId": "ID Karyawan",
                    "status": "Status",
                    "address": "Alamat"
                },
                "name": "Nama",
                "email": "Email",
                "phone": "Telepon",
                "address": "Alamat",
                "city": "Kota",
                "province": "Provinsi",
                "country": "Negara",
                "postalCode": "Kode Pos",
                "save": "Simpan",
                "cancel": "Batal",
                "note": "Beberapa informasi dikunci oleh admin HR. Silakan informasikan kepada admin HR jika ingin mengubah data permanen."
            },
            "setting": "Pengaturan Profil",
            "personalInfo": "Informasi Personal",
            "changePassword": "Ubah Password",
            "support": "Dukungan",
            "helpCenter": "Pusat Bantuan",
            "privacyPolicy": "Kebijakan Privasi"
        }
    },
    "EN": {
        "common": {
            "loading": "Loading...",
            "viewAll": "View All",
            "onTime": "On Time",
            "lastMonth": "Last Month",
            "yesterday": "Yesterday",
            "export": "Export",
            "exportToExcel": "Export to Excel",
            "exportToPDF": "Export to PDF",
            "pagination": {
                "next": "Next",
                "prev": "Previous",
                "showing": "Showing",
                "to": "to",
                "of": "of"
            },
            "dialog": {
                "titleConfirmDelete": "Delete Confirmation",
                "titleConfirmUpdate": "Update Confirmation",
                "titleConfirmAdd": "Add Confirmation",
                "titleConfirmCancel": "Cancel Confirmation",
                "titleConfirmSubmit": "Submit Confirmation",
                "titleConfirmFilter": "Filter Confirmation",
                "descriptionConfirmDelete": "Are you sure you want to delete this data?",
                "descriptionConfirmUpdate": "Are you sure you want to update this data?",
                "descriptionConfirmAdd": "Are you sure you want to add this data?",
                "descriptionConfirmCancel": "Are you sure you want to cancel this data?",
                "descriptionConfirmSubmit": "Are you sure you want to submit this data?",
                "descriptionConfirmFilter": "Are you sure you want to filter this data?"
            },
            "state": "Status",
            "actions": "Actions",
            "add": "Add",
            "update": "Update",
            "delete": "Delete",
            "confirm": "Confirm",
            "cancel": "Cancel",
            "save": "Save",
            "close": "Close",
            "submit": "Submit",
            "filter": "Filter",
            "yes": "Yes",
            "information": "Information"
        },
        "dashboard": {
            "greeting": {
                "morning": "Good Morning",
                "afternoon": "Good Afternoon",
                "evening": "Good Evening",
                "night": "Good Night"
            },
            "welcome": "Welcome back",
            "overview": "Dashboard Overview",
            "hero": {
                "checkIn": "Check In",
                "checkOut": "Check Out",
                "checkInSuccess": "Check In Successful",
                "checkOutSuccess": "Check Out Successful"
            },
            "services": {
                "title": "HR Services",
                "permission": "Permission",
                "overtime": "Overtime",
                "report": "Report",
                "leave": "Leave",
                "approval": "Approval"
            },
            "stats": {
                "present": "Present",
                "late": "Late",
                "leave": "Leave",
                "pending": "Pending",
                "actionNeeded": "Action Needed",
                "approved": "Request Approved",
                "requiresApproval": "Awaiting Approval",
                "trend": "from yesterday"
            },
            "history": {
                "title": "History"
            },
            "chart": {
                "title": "Weekly Attendance Summary",
                "viewReport": "View Report"
            },
            "recentApprovals": {
                "title": "Recent Approvals",
                "pending": "Pending",
                "approve": "Approve",
                "reject": "Reject"
            },
            "activity": {
                "title": "Recent Activities",
                "entered": "entered the office",
                "submitted": "submitted a report",
                "systemReport": "System daily report"
            }
        },
        "employee": {
            "title": "Employee",
            "admin": {
                "title": "Employee Management",
                "description": "Manage employee data",
                "addEmployee": "Add New Employee",
                "updateEmployee": "Update Employee Data",
                "form": {
                    "description": "Enter new employee details.",
                    "name": "Employee Name",
                    "email": "Email",
                    "department": "Department",
                    "position": "Position"
                },
                "filter": {
                    "search": "Search by name, email..."
                },
                "table": {
                    "name": "Employee Name",
                    "dept": "Department",
                    "position": "Position"
                }
            }
        },
        "department": {
            "title": "Department",
            "admin": {
                "title": "Department Management",
                "description": "Manage department data",
                "addDepartment": "Add New Department",
                "updateDepartment": "Update Department Data",
                "form": {
                    "description": "Enter department details.",
                    "name": "Department Name",
                    "head": "Department Head",
                    "employeesCount": "Number of Employees",
                    "location": "Location"
                },
                "filter": {
                    "search": "Search Department..."
                },
                "table": {
                    "name": "Department Name",
                    "head": "Department Head",
                    "sumOfEmployees": "Number of Employees",
                    "location": "Location"
                }
            }
        },
        "approvals": {
            "title": "Approvals",
            "admin": {
                "title": "Approval Management",
                "description": "Manage requests from team leads and executives.",
                "stats": {
                    "pending": "Pending Requests",
                    "approved": "Approved Requests",
                    "rejected": "Rejected Requests"
                },
                "filter": {
                    "search": "Search Approvals..."
                },
                "table": {
                    "caption": "Request List",
                    "employee": "Employee",
                    "type": "Request Type",
                    "range": "Date / Time Range",
                    "reason": "Reason"
                }
            }
        },
        "attendanceReports": {
            "title": "Attendance Reports",
            "note": "Note",
            "admin": {
                "title": "Attendance Report Management",
                "description": "View and export detailed attendance records for your team.",
                "stats": {
                    "totalWorkHours": "Total Work Hours",
                    "totalBreakHours": "Total Break Hours",
                    "totalOvertimeHours": "Total Overtime Hours",
                    "totalLateHours": "Total Late Hours",
                    "avgAttendance": "Average Attendance"
                },
                "filter": {
                    "range": "Time Range",
                    "department": "Department",
                    "apply": "Apply"
                },
                "table": {
                    "caption": "Detailed Records",
                    "name": "Employee",
                    "department": "Department",
                    "date": "Date",
                    "clockIn": "Clock In",
                    "clockOut": "Clock Out",
                    "workHours": "Work Hours",
                    "breakHours": "Break Hours",
                    "overtimeHours": "Overtime Hours",
                    "lateHours": "Late Hours"
                }
            },
            "employee": {
                "resume": "This Month Summary",
                "stats": {
                    "alpha": "Absent Without Notice",
                    "present": "Present",
                    "late": "Late",
                    "leave": "Leave",
                    "pending": "Pending",
                    "actionNeeded": "Action Needed",
                    "approved": "Request Approved",
                    "rejected": "Request Rejected",
                    "requiresApproval": "Awaiting Approval",
                    "trend": "from yesterday"
                },
                "history": {
                    "title": "Attendance History",
                    "ontime": "On Time",
                    "late": "Late",
                    "sick": "Sick",
                    "absent": "Absent Without Notice",
                    "holiday": "Holiday"
                }
            }
        },
        "settings": {
            "title": "Settings",
            "admin": {
                "title": "System Settings",
                "description": "Manage operational configurations for shifts and location tracking.",
                "shift": {
                    "title": "Shift Management",
                    "description": "Set work schedules for your team.",
                    "addShift": "Add New Shift",
                    "filter": {
                        "search": "Search Shift..."
                    },
                    "table": {
                        "name": "Shift Name",
                        "startTime": "Start Time",
                        "endTime": "End Time"
                    }
                },
                "location": {
                    "title": "Location Configuration",
                    "description": "Set work locations for your team.",
                    "officeAddress": "Office Address",
                    "fullAddress": "Full Address",
                    "latitude": "Latitude",
                    "longitude": "Longitude",
                    "radius": "Radius (meters)",
                    "info": "Employees must be within the blue circle to successfully check in or out."
                }
            },
            "password": {
                "title": "Change Password",
                "description": "Change your account password.",
                "currentPassword": "Current Password",
                "newPassword": "New Password",
                "confirmPassword": "Confirm Password",
                "placeholder": {
                    "currentPassword": "Enter current password",
                    "newPassword": "Enter new password",
                    "confirmPassword": "Enter new password again"
                }
            }
        },
        "nav": {
            "logout": "Logout",
            "login": "Login",
            "profile": "Profile",
            "home": "Home",
            "report": "Report",
            "attendance": "Attendance",
            "info": "Info",
            "dashboard": "Dashboard",
            "employees": "Employees",
            "departments": "Departments",
            "approvals": "Approvals",
            "settings": "Settings",
            "attendanceReports": "Attendance Reports"
        },
        "status": {
            "present": "Present",
            "absent": "Absent",
            "late": "Late",
            "leave": "Leave"
        },
        "profile": {
            "title": "Profile",
            "personal": {
                "title": "Personal Information",
                "detail": {
                    "title": "Job Details",
                    "position": "Position",
                    "department": "Department",
                    "employeeId": "Employee ID",
                    "status": "Status",
                    "address": "Address"
                },
                "name": "Name",
                "email": "Email",
                "phone": "Phone",
                "address": "Address",
                "city": "City",
                "province": "Province",
                "country": "Country",
                "postalCode": "Postal Code",
                "save": "Save",
                "cancel": "Cancel",
                "note": "Some information is locked by the HR admin. Please contact HR if you wish to change permanent data."
            },
            "setting": "Profile Settings",
            "personalInfo": "Personal Information",
            "changePassword": "Change Password",
            "support": "Support",
            "helpCenter": "Help Center",
            "privacyPolicy": "Privacy Policy"
        }
    },
    "FR": {
        "common": {
            "loading": "Chargement...",
            "viewAll": "Voir tout",
            "onTime": "À l'heure",
            "lastMonth": "Mois dernier",
            "yesterday": "Hier",
            "export": "Exporter",
            "exportToExcel": "Exporter vers Excel",
            "exportToPDF": "Exporter vers PDF",
            "pagination": {
                "next": "Suivant",
                "prev": "Précédent",
                "showing": "Affichage de",
                "to": "à",
                "of": "sur"
            },
            "dialog": {
                "titleConfirmDelete": "Confirmation de suppression",
                "titleConfirmUpdate": "Confirmation de mise à jour",
                "titleConfirmAdd": "Confirmation d'ajout",
                "titleConfirmCancel": "Confirmation d'annulation",
                "titleConfirmSubmit": "Confirmation d'envoi",
                "titleConfirmFilter": "Confirmation de filtrage",
                "descriptionConfirmDelete": "Êtes-vous sûr de vouloir supprimer ces données ?",
                "descriptionConfirmUpdate": "Êtes-vous sûr de vouloir mettre à jour ces données ?",
                "descriptionConfirmAdd": "Êtes-vous sûr de vouloir ajouter ces données ?",
                "descriptionConfirmCancel": "Êtes-vous sûr de vouloir annuler ces données ?",
                "descriptionConfirmSubmit": "Êtes-vous sûr de vouloir envoyer ces données ?",
                "descriptionConfirmFilter": "Êtes-vous sûr de vouloir filtrer ces données ?"
            },
            "state": "Statut",
            "actions": "Actions",
            "add": "Ajouter",
            "update": "Mettre à jour",
            "delete": "Supprimer",
            "confirm": "Confirmer",
            "cancel": "Annuler",
            "save": "Enregistrer",
            "close": "Fermer",
            "submit": "Envoyer",
            "filter": "Filtrer",
            "yes": "Oui",
            "information": "Information"
        },
        "dashboard": {
            "greeting": {
                "morning": "Bon matin",
                "afternoon": "Bon après-midi",
                "evening": "Bonsoir",
                "night": "Bonne nuit"
            },
            "welcome": "Bon retour",
            "overview": "Aperçu du tableau de bord",
            "hero": {
                "checkIn": "Pointer (Entrée)",
                "checkOut": "Pointer (Sortie)",
                "checkInSuccess": "Pointage d'entrée réussi",
                "checkOutSuccess": "Pointage de sortie réussi"
            },
            "services": {
                "title": "Services RH",
                "permission": "Permission",
                "overtime": "Heures supplémentaires",
                "report": "Rapport",
                "leave": "Congés",
                "approval": "Approbation"
            },
            "stats": {
                "present": "Présents",
                "late": "En retard",
                "leave": "En congé",
                "pending": "En attente",
                "actionNeeded": "Action requise",
                "approved": "Demande approuvée",
                "requiresApproval": "En attente d'approbation",
                "trend": "par rapport à hier"
            },
            "history": {
                "title": "Historique"
            },
            "chart": {
                "title": "Résumé hebdomadaire des présences",
                "viewReport": "Voir le rapport"
            },
            "recentApprovals": {
                "title": "Approbations récentes",
                "pending": "En attente",
                "approve": "Approuver",
                "reject": "Rejeter"
            },
            "activity": {
                "title": "Activités récentes",
                "entered": "est entré au bureau",
                "submitted": "a soumis un rapport",
                "systemReport": "Rapport quotidien du système"
            }
        },
        "employee": {
            "title": "Employé",
            "admin": {
                "title": "Gestion des employés",
                "description": "Gérer les données des employés",
                "addEmployee": "Ajouter un nouvel employé",
                "updateEmployee": "Mettre à jour les données de l'employé",
                "form": {
                    "description": "Saisissez les détails du nouvel employé.",
                    "name": "Nom de l'employé",
                    "email": "Email",
                    "department": "Département",
                    "position": "Poste"
                },
                "filter": {
                    "search": "Rechercher par nom, email..."
                },
                "table": {
                    "name": "Nom de l'employé",
                    "dept": "Département",
                    "position": "Poste"
                }
            }
        },
        "department": {
            "title": "Département",
            "admin": {
                "title": "Gestion des départements",
                "description": "Gérer les données des départements",
                "addDepartment": "Ajouter un nouveau département",
                "updateDepartment": "Mettre à jour les données du département",
                "form": {
                    "description": "Saisissez les détails du département.",
                    "name": "Nom du département",
                    "head": "Chef de département",
                    "employeesCount": "Nombre d'employés",
                    "location": "Lieu"
                },
                "filter": {
                    "search": "Rechercher un département..."
                },
                "table": {
                    "name": "Nom du département",
                    "head": "Chef de département",
                    "sumOfEmployees": "Nombre d'employés",
                    "location": "Lieu"
                }
            }
        },
        "approvals": {
            "title": "Approbations",
            "admin": {
                "title": "Gestion des approbations",
                "description": "Gérer les demandes des chefs d'équipe et des cadres.",
                "stats": {
                    "pending": "Demandes en attente",
                    "approved": "Demandes approuvées",
                    "rejected": "Demandes rejetées"
                },
                "filter": {
                    "search": "Rechercher des approbations..."
                },
                "table": {
                    "caption": "Liste des demandes",
                    "employee": "Employé",
                    "type": "Type de demande",
                    "range": "Période Date / Heure",
                    "reason": "Motif"
                }
            }
        },
        "attendanceReports": {
            "title": "Rapports de présence",
            "note": "Note",
            "admin": {
                "title": "Gestion des rapports de présence",
                "description": "Consultez et exportez les relevés de présence détaillés de votre équipe.",
                "stats": {
                    "totalWorkHours": "Total Heures de travail",
                    "totalBreakHours": "Total Heures de pause",
                    "totalOvertimeHours": "Total Heures supplémentaires",
                    "totalLateHours": "Total Heures de retard",
                    "avgAttendance": "Moyenne de présence"
                },
                "filter": {
                    "range": "Plage horaire",
                    "department": "Département",
                    "apply": "Appliquer"
                },
                "table": {
                    "caption": "Relevés détaillés",
                    "name": "Employé",
                    "department": "Département",
                    "date": "Date",
                    "clockIn": "Heure d'entrée",
                    "clockOut": "Heure de sortie",
                    "workHours": "Heures de travail",
                    "breakHours": "Heures de pause",
                    "overtimeHours": "Heures suppl.",
                    "lateHours": "Heures de retard"
                }
            },
            "employee": {
                "resume": "Résumé du mois",
                "stats": {
                    "alpha": "Absence non justifiée",
                    "present": "Présent",
                    "late": "En retard",
                    "leave": "En congé",
                    "pending": "En attente",
                    "actionNeeded": "Action requise",
                    "approved": "Demande approuvée",
                    "rejected": "Demande rejetée",
                    "requiresApproval": "En attente d'approbation",
                    "trend": "par rapport à hier"
                },
                "history": {
                    "title": "Historique des présences",
                    "ontime": "À l'heure",
                    "late": "En retard",
                    "sick": "Malade",
                    "absent": "Absence non justifiée",
                    "holiday": "Jour férié"
                }
            }
        },
        "settings": {
            "title": "Paramètres",
            "admin": {
                "title": "Paramètres du système",
                "description": "Gérer les configurations opérationnelles pour les rotations et la géolocalisation.",
                "shift": {
                    "title": "Gestion des rotations (Shifts)",
                    "description": "Définissez les horaires de travail de votre équipe.",
                    "addShift": "Ajouter une rotation",
                    "filter": {
                        "search": "Rechercher une rotation..."
                    },
                    "table": {
                        "name": "Nom de la rotation",
                        "startTime": "Heure de début",
                        "endTime": "Heure de fin"
                    }
                },
                "location": {
                    "title": "Configuration du lieu",
                    "description": "Définissez les lieux de travail de votre équipe.",
                    "officeAddress": "Adresse du bureau",
                    "fullAddress": "Adresse complète",
                    "latitude": "Latitude",
                    "longitude": "Longitude",
                    "radius": "Rayon (mètres)",
                    "info": "Les employés doivent être à l'intérieur du cercle bleu untuk pointer l'entrée ou la sortie avec succès."
                }
            },
            "password": {
                "title": "Changer le mot de passe",
                "description": "Modifiez le mot de passe de votre compte.",
                "currentPassword": "Mot de passe actuel",
                "newPassword": "Nouveau mot de passe",
                "confirmPassword": "Confirmer le mot de passe",
                "placeholder": {
                    "currentPassword": "Entrez le mot de passe actuel",
                    "newPassword": "Entrez le nouveau mot de passe",
                    "confirmPassword": "Confirmez le nouveau mot de passe"
                }
            }
        },
        "nav": {
            "logout": "Déconnexion",
            "login": "Connexion",
            "profile": "Profil",
            "home": "Accueil",
            "report": "Rapport",
            "attendance": "Présence",
            "info": "Info",
            "dashboard": "Tableau de bord",
            "employees": "Employés",
            "departments": "Départements",
            "approvals": "Approbations",
            "settings": "Paramètres",
            "attendanceReports": "Rapports de présence"
        },
        "status": {
            "present": "Présent",
            "absent": "Absent",
            "late": "En retard",
            "leave": "En congé"
        },
        "profile": {
            "title": "Profil",
            "personal": {
                "title": "Informations personnelles",
                "detail": {
                    "title": "Détails du poste",
                    "position": "Poste",
                    "department": "Département",
                    "employeeId": "ID Employé",
                    "status": "Statut",
                    "address": "Adresse"
                },
                "name": "Nom",
                "email": "Email",
                "phone": "Téléphone",
                "address": "Adresse",
                "city": "Ville",
                "province": "Province/Région",
                "country": "Pays",
                "postalCode": "Code postal",
                "save": "Enregistrer",
                "cancel": "Annuler",
                "note": "Certaines informations sont verrouillées par l'administrateur RH. Veuillez contacter les RH pour modifier des données permanentes."
            },
            "setting": "Paramètres du profil",
            "personalInfo": "Informations personnelles",
            "changePassword": "Changer le mot de passe",
            "support": "Support",
            "helpCenter": "Centre d'aide",
            "privacyPolicy": "Politique de confidentialité"
        }
    },
    "JP": {
        "common": {
            "loading": "読み込み中...",
            "viewAll": "すべて表示",
            "onTime": "定刻",
            "lastMonth": "先月",
            "yesterday": "昨日",
            "export": "エクスポート",
            "exportToExcel": "Excelへ出力",
            "exportToPDF": "PDFへ出力",
            "pagination": {
                "next": "次へ",
                "prev": "前へ",
                "showing": "表示中:",
                "to": "〜",
                "of": "/"
            },
            "dialog": {
                "titleConfirmDelete": "削除の確認",
                "titleConfirmUpdate": "更新の確認",
                "titleConfirmAdd": "追加の確認",
                "titleConfirmCancel": "キャンセルの確認",
                "titleConfirmSubmit": "送信の確認",
                "titleConfirmFilter": "フィルターの確認",
                "descriptionConfirmDelete": "このデータを削除してもよろしいですか？",
                "descriptionConfirmUpdate": "このデータを更新してもよろしいですか？",
                "descriptionConfirmAdd": "このデータを追加してもよろしいですか？",
                "descriptionConfirmCancel": "このデータをキャンセルしてもよろしいですか？",
                "descriptionConfirmSubmit": "このデータを送信してもよろしいですか？",
                "descriptionConfirmFilter": "この条件でフィルターをかけてもよろしいですか？"
            },
            "state": "ステータス",
            "actions": "操作",
            "add": "追加",
            "update": "更新",
            "delete": "削除",
            "confirm": "確認",
            "cancel": "キャンセル",
            "save": "保存",
            "close": "閉じる",
            "submit": "送信",
            "filter": "フィルター",
            "yes": "はい",
            "information": "情報"
        },
        "dashboard": {
            "greeting": {
                "morning": "おはようございます",
                "afternoon": "こんにちは",
                "evening": "こんばんは",
                "night": "おやすみなさい"
            },
            "welcome": "お帰りなさい",
            "overview": "ダッシュボード概要",
            "hero": {
                "checkIn": "出勤打刻",
                "checkOut": "退勤打刻",
                "checkInSuccess": "出勤打刻が完了しました",
                "checkOutSuccess": "退勤打刻が完了しました"
            },
            "services": {
                "title": "人事サービス",
                "permission": "外出・早退許可",
                "overtime": "残業申請",
                "report": "報告書",
                "leave": "休暇申請",
                "approval": "承認"
            },
            "stats": {
                "present": "出勤",
                "late": "遅刻",
                "leave": "休暇",
                "pending": "保留中",
                "actionNeeded": "要対応",
                "approved": "承認済み",
                "requiresApproval": "承認待ち",
                "trend": "昨日比"
            },
            "history": {
                "title": "履歴"
            },
            "chart": {
                "title": "週間勤怠サマリー",
                "viewReport": "レポートを表示"
            },
            "recentApprovals": {
                "title": "最近の承認状況",
                "pending": "保留",
                "approve": "承認",
                "reject": "却下"
            },
            "activity": {
                "title": "最近のアクティビティ",
                "entered": "が出勤しました",
                "submitted": "が報告書を提出しました",
                "systemReport": "システム日次レポート"
            }
        },
        "employee": {
            "title": "従業員",
            "admin": {
                "title": "従業員管理",
                "description": "従業員データの管理",
                "addEmployee": "新規従業員追加",
                "updateEmployee": "従業員データ更新",
                "form": {
                    "description": "新しい従業員の詳細を入力してください。",
                    "name": "氏名",
                    "email": "メールアドレス",
                    "department": "部署",
                    "position": "役職"
                },
                "filter": {
                    "search": "名前、メールで検索..."
                },
                "table": {
                    "name": "氏名",
                    "dept": "部署",
                    "position": "役職"
                }
            }
        },
        "department": {
            "title": "部署",
            "admin": {
                "title": "部署管理",
                "description": "部署データの管理",
                "addDepartment": "新規部署追加",
                "updateDepartment": "部署データ更新",
                "form": {
                    "description": "部署の詳細を入力してください。",
                    "name": "部署名",
                    "head": "部署責任者",
                    "employeesCount": "従業員数",
                    "location": "所在地"
                },
                "filter": {
                    "search": "部署を検索..."
                },
                "table": {
                    "name": "部署名",
                    "head": "責任者",
                    "sumOfEmployees": "従業員数",
                    "location": "所在地"
                }
            }
        },
        "approvals": {
            "title": "承認",
            "admin": {
                "title": "承認管理",
                "description": "チームリーダーおよび役員からの申請を管理します。",
                "stats": {
                    "pending": "保留中の申請",
                    "approved": "承認済みの申請",
                    "rejected": "却下済みの申請"
                },
                "filter": {
                    "search": "承認を検索..."
                },
                "table": {
                    "caption": "申請一覧",
                    "employee": "従業員",
                    "type": "申請種別",
                    "range": "期間 / 日時",
                    "reason": "理由"
                }
            }
        },
        "attendanceReports": {
            "title": "勤怠レポート",
            "note": "備考",
            "admin": {
                "title": "勤怠レポート管理",
                "description": "チームの詳細な勤怠記録の表示とエクスポート。",
                "stats": {
                    "totalWorkHours": "総労働時間",
                    "totalBreakHours": "総休憩時間",
                    "totalOvertimeHours": "総残業時間",
                    "totalLateHours": "総遅刻時間",
                    "avgAttendance": "平均出勤率"
                },
                "filter": {
                    "range": "期間選択",
                    "department": "部署",
                    "apply": "適用"
                },
                "table": {
                    "caption": "詳細記録",
                    "name": "従業員名",
                    "department": "部署",
                    "date": "日付",
                    "clockIn": "出勤時間",
                    "clockOut": "退勤時間",
                    "workHours": "労働時間",
                    "breakHours": "休憩時間",
                    "overtimeHours": "残業時間",
                    "lateHours": "遅刻時間"
                }
            },
            "employee": {
                "resume": "今月のサマリー",
                "stats": {
                    "alpha": "無断欠勤",
                    "present": "出勤",
                    "late": "遅刻",
                    "leave": "休暇",
                    "pending": "保留中",
                    "actionNeeded": "要対応",
                    "approved": "承認済み",
                    "rejected": "却下済み",
                    "requiresApproval": "承認待ち",
                    "trend": "昨日比"
                },
                "history": {
                    "title": "出退勤履歴",
                    "ontime": "定刻",
                    "late": "遅刻",
                    "sick": "病欠",
                    "absent": "無断欠勤",
                    "holiday": "休日"
                }
            }
        },
        "settings": {
            "title": "設定",
            "admin": {
                "title": "システム設定",
                "description": "シフトや位置情報追跡の運用設定を管理します。",
                "shift": {
                    "title": "シフト管理",
                    "description": "チームの勤務スケジュールを設定します。",
                    "addShift": "新規シフト追加",
                    "filter": {
                        "search": "シフトを検索..."
                    },
                    "table": {
                        "name": "シフト名",
                        "startTime": "開始時間",
                        "endTime": "終了時間"
                    }
                },
                "location": {
                    "title": "位置情報設定",
                    "description": "チームの勤務場所を設定します。",
                    "officeAddress": "オフィス住所",
                    "fullAddress": "詳細住所",
                    "latitude": "緯度",
                    "longitude": "経度",
                    "radius": "半径 (メートル)",
                    "info": "従業員が正常に出退勤打刻を行うには、青い円の範囲内にいる必要があります。"
                }
            },
            "password": {
                "title": "パスワード変更",
                "description": "アカウントのパスワードを変更します。",
                "currentPassword": "現在のパスワード",
                "newPassword": "新しいパスワード",
                "confirmPassword": "パスワードの確認",
                "placeholder": {
                    "currentPassword": "現在のパスワードを入力してください",
                    "newPassword": "新しいパスワードを入力してください",
                    "confirmPassword": "新しいパスワードを再入力してください"
                }
            }
        },
        "nav": {
            "logout": "ログアウト",
            "login": "ログイン",
            "profile": "プロフィール",
            "home": "ホーム",
            "report": "レポート",
            "attendance": "勤怠",
            "info": "情報",
            "dashboard": "ダッシュボード",
            "employees": "従業員",
            "departments": "部署",
            "approvals": "承認",
            "settings": "設定",
            "attendanceReports": "勤怠レポート"
        },
        "status": {
            "present": "出勤",
            "absent": "欠勤",
            "late": "遅刻",
            "leave": "休暇"
        },
        "profile": {
            "title": "プロフィール",
            "personal": {
                "title": "個人情報",
                "detail": {
                    "title": "勤務詳細",
                    "position": "役職",
                    "department": "部署",
                    "employeeId": "従業員ID",
                    "status": "ステータス",
                    "address": "住所"
                },
                "name": "氏名",
                "email": "メールアドレス",
                "phone": "電話番号",
                "address": "住所",
                "city": "市区町村",
                "province": "都道府県",
                "country": "国",
                "postalCode": "郵便番号",
                "save": "保存",
                "cancel": "キャンセル",
                "note": "一部の情報は人事管理者によってロックされています。恒久的なデータの変更を希望する場合は、人事部までご連絡ください。"
            },
            "setting": "プロフィール設定",
            "personalInfo": "個人情報",
            "changePassword": "パスワード変更",
            "support": "サポート",
            "helpCenter": "ヘルプセンター",
            "privacyPolicy": "プライバシーポリシー"
        }
    }

};
