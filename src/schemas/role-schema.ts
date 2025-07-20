// src/schemas/-module-schema.ts

import { z } from "zod";

export const roleSchema = z.object({
  name: z.string().nonempty("Nama izin tidak boleh kosong."),
  description: z.string().nonempty("Deskripsi tidak boleh kosong."),
  isSystemRole: z.boolean(),
});

export type RoleFormValues = z.infer<typeof roleSchema>;
