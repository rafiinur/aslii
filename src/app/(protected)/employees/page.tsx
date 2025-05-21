import LeaveApplicationChart from "@/components/leave-application-chart";

import SummarizeCard from "@/components/summarize-card";
import TotalEmployeesChart from "@/components/total-employees-chart";
import React from "react";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import EmployeesTable from "./components/employees-table";

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
    <div className="flex flex-1 flex-col gap-2 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {employeesSum.map((employee) => (
          <SummarizeCard
            key={employee.title}
            {...employee}
            orientation="horizontal"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 flex-1">
        <div className="col-span-2 flex flex-col rounded-xl p-4">
          <h4 className="section-title">List Karyawan</h4>
          <div className="flex-1 min-h-0">
            <EmployeesTable />
          </div>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-col rounded-xl p-4 flex-1">
            <div className="flex items-center justify-between">
              <h4 className="section-title">Pengajuan Cuti</h4>
              <Link href={"/employees/cuti"}>
                <ChevronsRight />
              </Link>
            </div>
            <div className="flex-1 min-h-0 flex items-center">
              <LeaveApplicationChart />
            </div>
          </div>
          <div className="flex flex-col rounded-xl p-4 flex-1">
            <h4 className="font-semibold text-lg mb-2.5">Jumlah Karyawan</h4>
            <div className="flex-1 min-h-0 flex items-center">
              <TotalEmployeesChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
