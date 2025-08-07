"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

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
import ModuleSelect from "./module-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditPermissionFormProps {
  permission: Permission;
  onSuccess?: () => void;
}

export function EditPermissionForm({
  permission,
  onSuccess,
}: EditPermissionFormProps) {
  const form = useForm<PermissionFormValues>({
    resolver: zodResolver(permissionSchema),
    defaultValues: {
      name: permission.sys_permission_nama || "",
      description: permission.sys_permission_deskripsi || "",
      module: permission.sys_permission_module || "",
      group: permission.sys_permission_group || "",
      isSystemModule: permission.sys_permission_is_system_permission || false,
    },
  });

  const { isSubmitting } = form.formState;
  const isSystemPermission = permission.sys_permission_is_system_permission;

  // Reset form jika data permission dari props berubah
  useEffect(() => {
    form.reset({
      name: permission.sys_permission_nama,
      description: permission.sys_permission_deskripsi,
      module: permission.sys_permission_module,
      group: permission.sys_permission_group,
      isSystemModule: permission.sys_permission_is_system_permission,
    });
  }, [permission, form]);

  async function onSubmit(values: PermissionFormValues) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data yang diupdate:", {
        id: permission.sys_permission_id,
        ...values,
      });
      toast.success("Permission berhasil diperbarui!");
      onSuccess?.();
    } catch (error) {
      toast.error("Gagal memperbarui permission.");
      console.error("Update failed:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="name"
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="module"
              // Nonaktifkan jika permission sistem ATAU sedang submit
              disabled={isSystemPermission || isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Module</FormLabel>
                  <FormControl>
                    <ModuleSelect
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Pilih Module"
                    />
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
                  <FormLabel>Group</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Group" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Permission Groups</SelectLabel>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="group">Group</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                  <FormLabel className="text-base">System Permission</FormLabel>
                  <FormDescription>
                    Permission sistem tidak dapat diubah statusnya.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isSystemPermission || isSubmitting}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

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
            {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
