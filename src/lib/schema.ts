import * as z from "zod";

export const announcementSchema = z
  .object({
    t_pengumuman_judul: z.string().min(1, "Judul harus diisi"),
    t_pengumuman_konten: z.string().min(10, "Deskripsi minimal 10 karakter"),
    t_pengumuman_tanggal_publish: z
      .string()
      .min(1, "Tanggal mulai harus diisi"),
    t_pengumuman_tanggal_kedaluwarsa: z
      .string()
      .min(1, "Tanggal berakhir harus diisi"),
    t_pengumuman_is_active: z.string().min(1, "Status harus dipilih"),
    t_pengumuman_target_audience: z.string().min(1, "Target harus dipilih"),
    t_pengumuman_require_acknowledgement: z.boolean().default(false),
  })
  .refine(
    (data) => {
      const start = new Date(data.t_pengumuman_tanggal_publish);
      const end = new Date(data.t_pengumuman_tanggal_kedaluwarsa);
      return start <= end;
    },
    {
      message: "Tanggal berakhir harus setelah tanggal mulai",
      path: ["t_pengumuman_tanggal_kedaluwarsa"],
    }
  );
