"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

import { FloatingLabelInput } from "@/components/floating-label-input";
import { FloatingLabelTextarea } from "@/components/floating-label-textarea";
import { ModuleFormValues, moduleSchema } from "@/schemas/module-schema";
import { Input } from "@/components/ui/input";

interface CreateModuleFormProps {
  onSuccess?: () => void;
}

export function CreateModuleForm({ onSuccess }: CreateModuleFormProps) {
  const form = useForm<ModuleFormValues>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      name: "",
      description: "",
      code: "",
      version: "1.0.0",
      apiEndpoints: "",
      isSystemModule: false,
    },
  });

  // Gunakan isSubmitting dari react-hook-form
  const { isSubmitting } = form.formState;

  async function onSubmit(values: ModuleFormValues) {
    try {
      // Konversi apiEndpoints dari string ke array
      const processedValues = {
        ...values,
        apiEndpoints: values.apiEndpoints
          .split(",")
          .map((endpoint) => endpoint.trim())
          .filter(Boolean)
      };

      // Simulasi panggilan API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Data yang dikirim:", processedValues);
      toast.success("Modul berhasil dibuat!");
      onSuccess?.();
    } catch (error) {
      toast.error("Gagal membuat modul.");
      console.error("Create failed:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FloatingLabelInput
                    id={field.name}
                    label="Nama Modul"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FloatingLabelInput
                    id={field.name}
                    label="Kode Modul"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          disabled={isSubmitting}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelTextarea
                  id={field.name}
                  label="Deskripsi Singkat"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* --- Field API Endpoints dengan Input Tunggal --- */}
        <div className="space-y-2">
          <FormLabel htmlFor="apiEndpoints">API Endpoints</FormLabel>
          <FormDescription>
            Pisahkan beberapa endpoint dengan koma (,).
          </FormDescription>
          <FormField
            control={form.control}
            name="apiEndpoints"
            disabled={isSubmitting}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id={field.name}
                    placeholder="Contoh: /api/v1/users, /api/v1/orders"
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="isSystemModule"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Sistem Modul</FormLabel>
                <FormDescription>
                  Aktifkan jika ini adalah modul inti sistem.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={isSubmitting}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end pt-4 gap-2">
          <Button type="button" variant="outline" onClick={onSuccess}>
            Batal
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Menyimpan..." : "Simpan Modul"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
