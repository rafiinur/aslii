// src/schemas/create-module-schema.ts

import { z } from "zod";

export const moduleSchema = z.object({
  name: z.string().min(3, { message: "Nama modul minimal 3 karakter." }),
  description: z.string(),
  code: z.string().min(2, { message: "Kode modul minimal 2 karakter." }),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, {
    message: "Format versi harus X.X.X (contoh: 1.0.0)",
  }),
  apiEndpoints: z.array(z.string()),
  isSystemModule: z.boolean(),
});

export type ModuleFormValues = z.infer<typeof moduleSchema>;
