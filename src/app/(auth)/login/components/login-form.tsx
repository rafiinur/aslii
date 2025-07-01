"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useProfileStore } from "@/stores/use-profile-store"; // Ditambahkan: Impor store Zustand
import { loginFormSchema } from "@/schemas/login-form-schema";
import { login } from "@/features/auth/actions/auth.action";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const { setProfile } = useProfileStore();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitLogin = async (data: {
    email: string;
    password: string;
  }) => {
    setError(null);
    try {
      const { profile } = await login(data.email, data.password);

      setProfile(profile);

      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login gagal. Coba lagi.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitLogin)}>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-16">
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full h-12 border-primary ps-6"
                        placeholder="Masukkan email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-full h-12 border-primary ps-6"
                        type="password"
                        placeholder="Masukkan password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <a
                href="/forget-password"
                className="ml-auto text-sm underline-offset-4 hover:underline text-primary"
              >
                Lupa password?
              </a>
            </div>
          </div>

          <Button
            size="lg"
            type="submit"
            className="w-full h-12 rounded-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Loading..." : "Login"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
