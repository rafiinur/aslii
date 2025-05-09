export type ListProject = {
  nama_proyek: string;
  deskripsi: string;
  jumlah_tasks: number;
  pic: string;
  deadline: string;
  status: "On Progress" | "Review" | "Done" | "Waiting";
};
