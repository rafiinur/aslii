"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">ID Role:</span> {role.r_role_id}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Role</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nama role" {...field} />
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
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Masukkan deskripsi role" {...field} />
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
                    {role.r_role_is_system_role
                      ? "Role sistem tidak dapat diubah statusnya"
                      : "Tandai jika ini adalah role untuk modul sistem"}
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={role.r_role_is_system_role}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => onSuccess?.()}
            disabled={isSubmitting}
          >
            Batal
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
