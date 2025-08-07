// Dummy data
const AllModuleCompany = [
  {
    id: 1,
    name: "Manajemen Autentikasi",
    code: "AUTH_MANAGEMENT",
    description:
      "Modul untuk mengelola autentikasi pengguna, sesi, profil, dan keamanan akun termasuk 2FA",
    version: "1.0.0",
  },
  {
    id: 2,
    name: "Manajemen Kehadiran",
    code: "ATTEDANCE_MANAGEMENT",
    description:
      "Modul untuk mengelola autentikasi pengguna, sesi, profil, dan keamanan akun termasuk 2FA",
    version: "1.0.0",
  },
  {
    id: 3,
    name: "Manajemen Proyek",
    code: "PROJECT_MANAGEMENT",
    description:
      "Modul untuk mengelola autentikasi pengguna, sesi, profil, dan keamanan akun termasuk 2FA",
    version: "1.0.0",
  },
  {
    id: 4,
    name: "Manajemen Tugas",
    code: "TASK_MANAGEMENT",
    description:
      "Modul untuk mengelola autentikasi pengguna, sesi, profil, dan keamanan akun termasuk 2FA",
    version: "1.0.0",
  },
];

// Simulasi divisi yang dipakai perusahaan
let ModuleCompany = [1, 3]; // id divisi yang dipilih

export async function getAllModuleCompany() {
  // Simulasi delay
  await new Promise((r) => setTimeout(r, 300));
  return AllModuleCompany;
}

export async function getModuleCompany() {
  // Simulasi delay
  await new Promise((r) => setTimeout(r, 300));
  return AllModuleCompany.filter((d) => ModuleCompany.includes(d.id));
}

export async function updateModuleCompany(selectedIds: number[]) {
  // Simulasi delay dan update
  await new Promise((r) => setTimeout(r, 300));
  ModuleCompany = selectedIds;
  return { success: true };
}
