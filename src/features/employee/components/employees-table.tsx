import { DataTable } from "@/components/data-table";
import { columns } from "./employees-column";
import type { Employee } from "@/features/employee/types";

const employees: Employee[] = [
  {
    nama: "John Doe",
    divisi: "Engineering",
    jabatan: "Software Engineer",
    email: "john@gmail.com",
  },
  {
    nama: "Jane Smith",
    divisi: "Product",
    jabatan: "Product Manager",
    email: "jane@gmail.com",
  },
  {
    nama: "Alice Johnson",
    divisi: "Design",
    jabatan: "UI/UX Designer",
    email: "alice@gmail.com",
  },
  {
    nama: "Bob Brown",
    divisi: "Marketing",
    jabatan: "Marketing Specialist",
    email: "bob@gmail.com",
  },
];

const EmployeesTable = () => {
  return <DataTable columns={columns} data={employees} />;
};

export default EmployeesTable;
