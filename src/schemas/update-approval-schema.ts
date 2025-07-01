import { z } from "zod";

export const approvalSchema = z.object({
  note: z
    .string()
    .max(500, "Note must be at most 500 characters long")
    .optional(),
});
