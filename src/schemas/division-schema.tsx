// src/schemas/division-schema.ts

import * as z from "zod";

export const divisionSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nama divisi wajib diisi." })
    .max(100, { message: "Nama terlalu panjang." }),

  code: z
    .string()
    .min(1, { message: "Kode divisi wajib diisi." })
    .max(20, { message: "Kode terlalu panjang." }),

  description: z
    .string()
    .max(255, { message: "Deskripsi maksimal 255 karakter." })
    .optional(),

  parentId: z
    .string()
    .optional()
    .or(z.literal("")), // untuk bisa kosong

  fromSystem: z
    .string()
    .optional()
    .or(z.literal("")), // untuk bisa kosong juga
});

export type DivisionFormValues = z.infer<typeof divisionSchema>;
