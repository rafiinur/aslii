export type ListProject = {
  nama_proyek: string;
  deskripsi: string;
  jumlah_tasks: number;
  pic: string;
  deadline: string;
  status: "On Progress" | "Review" | "Done" | "Waiting";
};

export type ListJob = {
  nama_tugas: string;
  penanggung_jawab: string;
  tanggal_mulai: string;
  tenggat: string;
  status: "Tertunda" | "Berjalan" | "Selesai";
};

export type ListTeam = {
  nama_anggota: string;
  peran: string;
}