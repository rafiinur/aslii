// import LeaveApplicationChart from "@/components/leave-application-chart";
import SummarizeCard from "@/components/summarize-card";
// import { ChevronsRight } from "lucide-react";
// import Link from "next/link";
import EmployeesTable from "@/features/employee/components/employees-table";
import { TotalEmployeesPieChart } from "@/components/total-employees-pie-chart";

const employeesSum = [
  {
    title: "Total Karyawan",
    amount: "100",
    note: "+5 karyawan bulan ini",
  },
  {
    title: "Hadir Hari ini",
    amount: "41",
    note: "+7 karyawan wfh",
  },
  {
    title: "Cuti Hari ini",
    amount: "2",
    note: "",
  },
  {
    title: "Karyawan SPPD",
    amount: "5",
    note: "1 Tim dinas di luar kota",
  },
];

const EmployeesPage = () => {
  return (
    <div className="flex flex-col gap-5 px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {employeesSum.map((employee) => (
          <SummarizeCard
            key={employee.title}
            {...employee}
            orientation="horizontal"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-3 flex flex-col">
          <h4 className="section-title mb-2.5">List Karyawan</h4>
          <div className="flex-1 min-h-0">
            <EmployeesTable />
          </div>
        </div>
        <div className="flex flex-col gap-3.75">
          {/* <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h4 className="section-title mb-2.5">Pengajuan Cuti</h4>
              <Link href={"/employees/cuti"}>
                <ChevronsRight />
              </Link>
            </div>
            <LeaveApplicationChart />
          </div> */}

          <TotalEmployeesPieChart />
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
