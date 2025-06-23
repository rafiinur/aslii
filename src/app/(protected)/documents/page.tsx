"use client";

import { useState } from "react";
import DocumentsHeader from "./components/documents-header";
import DocumentsFolderSection from "./components/documents-folder-section";
import DocumentsFileSection from "./components/documents-file-section";
import DocumentsAside from "./components/documents-aside";
import { DocumentFile } from "@/types/documents";

export type ViewMode = "grid" | "table";

const sampleFiles: DocumentFile[] = [
  {
    id: "1",
    title: "📄 Kebijakan Penggunaan Perangkat IT.pdf",
    description: "Dokumen berisi aturan penggunaan perangkat IT perusahaan",
    version: "v1.2",
    status: "Aktif",
    createdDate: "11/05/2025",
    fileSize: "1 MB",
    location: "📁 Perusahaan",
    owner: "Vermillion Arisyawal",
  },
  {
    id: "2",
    title: "📄 Kebijakan Penggunaan Perangkat Lunak.pdf",
    description: "Dokumen berisi aturan penggunaan perangkat lunak perusahaan",
    version: "v1.1",
    status: "Aktif",
    createdDate: "10/05/2025",
    fileSize: "1.2 MB",
    location: "📁 Perusahaan",
    owner: "Vermillion Arisyawal",
  },
  {
    id: "3",
    title: "📄 Protokol Keamanan Data.pdf",
    description: "Dokumen berisi protokol keamanan data perusahaan",
    version: "v2.0",
    status: "Aktif",
    createdDate: "09/05/2025",
    fileSize: "2.1 MB",
    location: "📁 Keamanan",
    owner: "Vermillion Arisyawal",
  },
  {
    id: "4",
    title: "📄 Standar Operasional Prosedur.pdf",
    description: "Dokumen SOP lengkap untuk operasional harian perusahaan",
    version: "v3.1",
    status: "Aktif",
    createdDate: "08/05/2025",
    fileSize: "3.5 MB",
    location: "📁 Operasional",
    owner: "Ahmad Wijaya",
  },
  {
    id: "5",
    title: "📄 Laporan Keuangan Q1 2025.pdf",
    description: "Laporan keuangan triwulan pertama tahun 2025",
    version: "v1.0",
    status: "Aktif",
    createdDate: "05/05/2025",
    fileSize: "4.2 MB",
    location: "📁 Keuangan",
    owner: "Siti Nurhaliza",
  },
  {
    id: "6",
    title: "📄 Manual Pelatihan Karyawan Baru.pdf",
    description: "Panduan lengkap untuk orientasi dan pelatihan karyawan baru",
    version: "v2.3",
    status: "Non-Aktif",
    createdDate: "03/05/2025",
    fileSize: "2.8 MB",
    location: "📁 SDM",
    owner: "Budi Santoso",
  },
];

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<DocumentFile | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const handleFileSelect = (file: DocumentFile) => {
    setSelectedFile(file);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 pb-10">
      <div
        className={`${
          selectedFile ? "lg:w-3/4" : "w-full"
        } flex flex-col gap-8 transition-all duration-300`}
      >
        <DocumentsHeader />
        <DocumentsFolderSection />
        <DocumentsFileSection
          files={sampleFiles}
          onFileSelect={handleFileSelect}
          selectedFileId={selectedFile?.id}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />
      </div>
      {selectedFile && (
        <DocumentsAside
          file={selectedFile}
          onClose={() => setSelectedFile(null)}
        />
      )}
    </div>
  );
};

export default Page;
