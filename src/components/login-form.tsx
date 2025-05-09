"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/auth";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useState } from "react";
import { Alert, AlertDescription } from "./ui/alert";

const formSchema = z.object({
  email: z.string().email("Email tidak valid").nonempty("Email harus diisi"),
  password: z.string().nonempty("Password harus diisi"),
});

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
      await login(data.email, data.password);

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login gagal. Silakan coba lagi."
      );
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-12"
        onSubmit={form.handleSubmit(handleSubmitLogin)}
      >
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-primary">Login</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Siap produktif hari ini? Masukkan informasi login Anda!
          </p>
        </div>
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
                        id="email"
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
                        id="password"
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
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline text-primary"
              >
                Lupa password?
              </a>
            </div>
          </div>
          <Button
            size={"lg"}
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
