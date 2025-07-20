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
import {
  PermissionFormValues,
  permissionSchema,
} from "@/schemas/create-permission-schema";
import type { Permission } from "../type";
import { useState } from "react";

interface EditPermissionFormProps {
  permission: Permission;
  onSuccess?: () => void;
}

export function EditPermissionForm({
  permission,
  onSuccess,
}: EditPermissionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PermissionFormValues>({
    resolver: zodResolver(permissionSchema),
    defaultValues: {
      name: permission.sys_permission_nama,
      description: permission.sys_permission_deskripsi,
      module: permission.sys_permission_module,
      group: permission.sys_permission_group,
      isSystemModule: permission.sys_permission_is_system_permission,
    },
  });

  async function onSubmit(values: PermissionFormValues) {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data yang dikirim:", values);
      toast.success("Permission berhasil dibuat!");
      onSuccess?.();
    } catch {
      toast.error("Gagal membuat permission.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FloatingLabelInput
                    id="name"
                    label="Nama Permission"
                    {...field}
                  />
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
                    label="Deskripsi"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="module"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FloatingLabelInput id="module" label="Modul" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="group"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <FloatingLabelInput id="group" label="Grup" {...field} />
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
                  <FormLabel className="text-base">System Module</FormLabel>
                  <FormDescription>
                    Tandai jika ini adalah permission untuk modul sistem
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
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Menyimpan..." : "Simpan Permission"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
