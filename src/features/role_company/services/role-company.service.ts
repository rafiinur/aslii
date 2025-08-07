export type RoleCompany = {
  id: number;
  name: string;
  description?: string;
  is_system: boolean; // true = system, false = company
};

const ALL_ROLE_COMPANY: RoleCompany[] = [
  { id: 1, name: "Admin", description: "Akses penuh", is_system: true },
  { id: 2, name: "Manager", description: "Kelola tim", is_system: false },
  { id: 3, name: "Staff", description: "Akses standar", is_system: false },
  { id: 4, name: "Superuser", description: "Role sistem", is_system: true },
];

export async function getAllRoleCompany() {
  await new Promise((r) => setTimeout(r, 300));
  return ALL_ROLE_COMPANY;
}