import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Email tidak valid").nonempty("Email harus diisi"),
  password: z.string().nonempty("Password harus diisi"),
});
