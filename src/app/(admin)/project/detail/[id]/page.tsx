import TaskStatusChart from "../../../../../components/task-status-chart";
import JobListTable from "../../../../../features/project/components/detail/job-list-table";

import { Card, CardContent } from "@/components/ui/card";
import TeamTable from "../../../../../features/project/components/detail/team-table";

// Dummy data, ganti dengan fetch data jika sudah ada API
const project = {
  nama: "Sistem HRIS V2",
  deskripsi: "16112400",
  pic: "Vermillion",
  mulai: "10 Maret 2024",
  selesai: "-",
  status: "Sedang Berjalan",
  tim: [
    { nama: "Vermillion", peran: "Project Manager" },
    { nama: "Umar Maru", peran: "Business Analyst" },
    // ...tim lain
  ],
  statusTugas: [
    { label: "Tertunda", persen: 40, jumlah: 2 },
    { label: "Berjalan", persen: 40, jumlah: 2 },
    { label: "Selesai", persen: 20, jumlah: 1 },
  ],
};

const ProjectDetailPage = () => {
  return (
    <div className="flex flex-col flex-1 gap-3 py-4 px-6">
      {/* Informasi Proyek & Status Tugas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h4 className="section-title mb-2">Informasi Proyek</h4>
          {/* Informasi Proyek */}
          <Card className="shadow-sm">
            <CardContent className="text-sm">
              <div className="grid grid-cols-2 gap-y-2">
                <div>Nama Proyek</div>
                <div>: {project.nama}</div>
                <div>Deskripsi</div>
                <div>: {project.deskripsi}</div>
                <div>PIC</div>
                <div>: {project.pic}</div>
                <div>Tanggal Mulai</div>
                <div>: {project.mulai}</div>
                <div>Tanggal Berakhir</div>
                <div>: {project.selesai}</div>
                <div>Status</div>
                <div>: {project.status}</div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col">
          <h4 className="section-title mb-2">Status Tugas</h4>
          {/* Status Tugas */}
          <TaskStatusChart></TaskStatusChart>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Daftar Tugas */}
        <div className="md:col-span-2">
          <h4 className="section-title mb-2">Daftar Tugas</h4>
          <JobListTable />
        </div>

        {/* Tim yang Terlibat */}
        <div>
          <h4 className="section-title mb-2">Tim yang Terlibat</h4>
          <TeamTable />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
