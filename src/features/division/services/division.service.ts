// Dummy data
const AllDivisions = [
  { id: 1, name: "HR",  code: "HR01" },
  { id: 2, name: "Finance", code: "FIN01" },
  { id: 3, name: "IT", code: "IT01" },
  { id: 4, name: "Marketing", code: "MKT01" },
];

// Simulasi divisi yang dipakai perusahaan
let DivisionCompany = [1, 3]; // id divisi yang dipilih

export async function getAllDivisions() {
  // Simulasi delay
  await new Promise((r) => setTimeout(r, 300));
  return AllDivisions;
}

export async function getCompanyDivisions() {
  // Simulasi delay
  await new Promise((r) => setTimeout(r, 300));
  return AllDivisions.filter((d) => DivisionCompany.includes(d.id));
}

export async function updateCompanyDivisions(selectedIds: number[]) {
  // Simulasi delay dan update
  await new Promise((r) => setTimeout(r, 300));
  DivisionCompany = selectedIds;
  return { success: true };
}