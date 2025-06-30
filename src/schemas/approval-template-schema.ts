import * as z from "zod";

export const approvalTemplateSchema = z.object({
  templateName: z.string().min(1, "Nama template tidak boleh kosong"),
  steps: z
    .array(
      z.object({
        order: z.number().int().positive("Urutan harus positif"),
        approver_type: z.enum(["user", "role"], {
          errorMap: () => ({ message: "Jenis approver tidak valid" }),
        }),
        approver_id: z.string().min(1, "ID approver tidak boleh kosong"),
      })
    )
    .min(1, "Minimal satu langkah diperlukan"),
});
