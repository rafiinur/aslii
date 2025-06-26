export interface DocumentFile {
  id: string;
  title: string;
  description: string;
  version: string;
  status: "Aktif" | "Non-Aktif";
  createdDate: string;
  fileSize: string;
  location: string;
  owner: string;
  iconComponent?: string;
}

export interface ListDocument {
  judul: string;
  tanggalUpload: string;
  versi: string;
  pemilik: string;
  avatarUrl?: string;
  ukuran: string;
  status: "Aktif" | "Non-Aktif";
}

export interface DocumentsFileSectionProps {
  files: DocumentFile[];
  onFileSelect: (file: DocumentFile) => void;
  selectedFileId?: string;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export interface DocumentsFileGridProps {
  files: DocumentFile[];
  onFileSelect: (file: DocumentFile) => void;
  selectedFileId?: string;
}


export type ViewMode = "grid" | "table";
