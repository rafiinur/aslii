import { z } from "zod";

export const permissionSchema = z.object({
  name: z.string().nonempty("Nama izin tidak boleh kosong."),
  description: z.string().nonempty("Deskripsi tidak boleh kosong."),
  module: z.string().nonempty("Modul tidak boleh kosong."),
  group: z.string().nonempty("Grup tidak boleh kosong."),
  isSystemModule: z.boolean(),
});

export type PermissionFormValues = z.infer<typeof permissionSchema>;
