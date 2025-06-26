import { DataTable } from "@/components/data-table";
import { columns } from "./documents-columns";
import { ListDocument } from "@/types/documents";

const documents: ListDocument[] = [
  {
    judul: "Kebijakan Penggunaan Perangkat IT.pdf",
    tanggalUpload: "11/05/2025",
    versi: "1.2",
    pemilik: "Vermillion Arisyawal",
    avatarUrl: "@/assets/icons/Profile.svg?react",
    ukuran: "1 MB",
    status: "Aktif",
  },
  {
    judul: "Kebijakan Penggunaan Perangkat Lunak.pdf",
    tanggalUpload: "10/05/2025",
    versi: "1.1",
    pemilik: "Vermillion Arisyawal",
    avatarUrl: "@/assets/icons/Profile.svg?react",
    ukuran: "1.2 MB",
    status: "Aktif",
  },
  {
    judul: "Protokol Keamanan Data.pdf",
    tanggalUpload: "09/05/2025",
    versi: "2.0",
    pemilik: "Vermillion Arisyawal",
    avatarUrl: "@/assets/icons/Profile.svg?react",
    ukuran: "2.1 MB",
    status: "Aktif",
  },
  {
    judul: "Standar Operasional Prosedur.pdf",
    tanggalUpload: "08/05/2025",
    versi: "3.1",
    pemilik: "Ahmad Wijaya",
    avatarUrl: "/avatars/ahmad.png",
    ukuran: "3.5 MB",
    status: "Aktif",
  },
  {
    judul: "Laporan Keuangan Q1 2025.pdf",
    tanggalUpload: "05/05/2025",
    versi: "1.0",
    pemilik: "Siti Nurhaliza",
    avatarUrl: "/avatars/siti.png",
    ukuran: "4.2 MB",
    status: "Aktif",
  },
  {
    judul: "Manual Pelatihan Karyawan Baru.pdf",
    tanggalUpload: "03/05/2025",
    versi: "2.3",
    pemilik: "Budi Santoso",
    avatarUrl: "/avatars/budi.png",
    ukuran: "2.8 MB",
    status: "Non-Aktif",
  },
];

const DocumentTable = () => {
  return <DataTable columns={columns} data={documents} />;
};

export default DocumentTable;
