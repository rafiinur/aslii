// src/schemas/create-company-schema.ts

import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const createCompanySchema = z.object({
  nama_perusahaan: z.string().min(1, "Nama perusahaan tidak boleh kosong."),
  kode_perusahaan: z.string().min(1, "Kode perusahaan tidak boleh kosong."),
  alamat: z.string().min(1, "Alamat tidak boleh kosong."),
  no_telepon: z.string().min(1, "No telepon tidak boleh kosong."),
  email_perusahaan: z.string().email("Email tidak valid."),
  logo_perusahaan: z
    .any()
    .optional()
    .refine((file) => {
      if (!file) return true; // File is optional
      return file instanceof File;
    }, "File harus berupa gambar.")
    .refine((file) => {
      if (!file) return true;
      return file.size <= MAX_FILE_SIZE;
    }, `Ukuran file maksimal 5MB.`)
    .refine((file) => {
      if (!file) return true;
      return ACCEPTED_IMAGE_TYPES.includes(file.type);
    }, "Hanya file gambar yang diperbolehkan (JPEG, PNG, WebP)."),
});

export type CreateCompanyFormValues = z.infer<typeof createCompanySchema>;
