// components/announcement-table-wrapper.tsx
"use client";

import LeaveTable from "./cuti-table";

const LeaveTableWrapper = () => {
  const data = [
    {
      id: "1",
      nama: "John Doe",
      divisi: "IT",
      tgl_pengajuan: "2023-10-01",
      tgl_cuti: "2023-10-05",
      alasan: "Vacation",
      status: "Approved",
    },
    {
      id: "2",
      nama: "Jane Smith",
      divisi: "HR",
      tgl_pengajuan: "2023-10-02",
      tgl_cuti: "2023-10-06",
      alasan: "Sick Leave",
      status: "Pending",
    },
    {
      id: "3",
      nama: "Alice Johnson",
      divisi: "Finance",
      tgl_pengajuan: "2023-10-03",
      tgl_cuti: "2023-10-07",
      alasan: "Personal Leave",
      status: "Rejected",
    },
  ];

  return <LeaveTable data={data || []} isLoading={false} error={null} />;
};

export default LeaveTableWrapper;
