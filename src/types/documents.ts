export interface DocumentFile {
  id: string;
  title: string;
  description: string;
  version: string;
  status: 'Aktif' | 'Non-Aktif';
  createdDate: string;
  fileSize: string;
  location: string;
  owner: string;
  iconComponent?: string;
}

export type ViewMode = 'grid' | 'table';