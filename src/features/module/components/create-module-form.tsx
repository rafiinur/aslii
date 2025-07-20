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
import { useState } from "react";
import { ModuleFormValues, moduleSchema } from "@/schemas/module-schema";
import ApiEndpointsField from "./api-endpoints-field";

interface CreateModuleFormProps {
  onSuccess?: () => void;
}

export function CreateModuleForm({ onSuccess }: CreateModuleFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ModuleFormValues>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      name: "",
      description: "",
      code: "",
      version: "1.0.0",
      apiEndpoints: [],
      isSystemModule: false,
    },
  });

  async function onSubmit(values: ModuleFormValues) {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data yang dikirim:", values);
      toast.success("Modul berhasil dibuat!");
      onSuccess?.();
    } catch {
      toast.error("Gagal membuat modul.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelInput id="name" label="Nama Modul" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingLabelTextarea
                  id="description"
                  label="Deskripsi Singkat"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-x-6">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FloatingLabelInput id="code" label="Kode Modul" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="version"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FloatingLabelInput id="version" label="Versi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* 👇 API Endpoints ala Postman */}
        <FormField
          control={form.control}
          name="apiEndpoints"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-sm font-medium">
                API Endpoints
              </FormLabel>
              <FormControl>
                <ApiEndpointsField
                  value={
                    Array.isArray(field.value) &&
                    field.value.length > 0 &&
                    typeof field.value[0] === "object"
                      ? field.value
                      : []
                  }
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end pt-4">
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
