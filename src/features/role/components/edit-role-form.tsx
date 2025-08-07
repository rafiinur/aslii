"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/floating-label-input";
import { FloatingLabelTextarea } from "@/components/floating-label-textarea";
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

import type { Role } from "../types";
import { RoleFormValues, roleSchema } from "@/schemas/role-schema";
import { useEffect, useState } from "react";

interface EditRoleFormProps {
  role: Role;
  onSuccess?: () => void;
}

export function EditRoleForm({ role, onSuccess }: EditRoleFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RoleFormValues>({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      name: role.r_role_nama,
      description: role.r_role_deskripsi,
      isSystemRole: role.r_role_is_system_role,
    },
  });

  // Reset form when role prop changes to ensure fields are editable
  useEffect(() => {
    form.reset({
      name: role.r_role_nama,
      description: role.r_role_deskripsi,
      isSystemRole: role.r_role_is_system_role,
    });
  }, [role, form]);

  async function onSubmit(values: RoleFormValues) {
    setIsSubmitting(true);
    try {
      // Validasi tambahan
      if (role.r_role_is_system_role && !values.isSystemRole) {
        toast.error("System role tidak dapat diubah menjadi role biasa");
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data yang diupdate:", { id: role.r_role_id, ...values });
      toast.success("Role berhasil diperbarui!");
      onSuccess?.();
    } catch {
      toast.error("Gagal memperbarui role.");
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
                  <FloatingLabelInput id="name" label="Nama Role" {...field} />
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
            name="isSystemRole"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">System Role</FormLabel>
                  <FormDescription>
                    Tandai jika ini adalah role untuk modul sistem
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

        <div className="flex justify-end pt-4 gap-2">
          <Button variant="outline" onClick={onSuccess}>
            Batal
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Menyimpan..." : "Simpan Role"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
