// src/components/edit-division-form.tsx

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { DivisionFormValues, divisionSchema } from "@/schemas/division-schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EditDivisionFormProps {
  initialData: DivisionFormValues;
  onSuccess?: () => void;
  parentDivisions?: { id: string; name: string }[];
}

export function EditDivisionForm({
  initialData,
  onSuccess,
  parentDivisions = [],
}: EditDivisionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DivisionFormValues>({
    resolver: zodResolver(divisionSchema),
    defaultValues: initialData,
  });

  async function onSubmit(values: DivisionFormValues) {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data yang diperbarui:", values);
      toast.success("Divisi berhasil diperbarui!");
      onSuccess?.();
    } catch {
      toast.error("Gagal memperbarui divisi.");
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
                <FormLabel>Nama Divisi</FormLabel>
                <FormControl>
                  <FloatingLabelInput id="name" label="Nama Divisi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode Divisi</FormLabel>
                <FormControl>
                  <FloatingLabelInput id="code" label="Kode Divisi" {...field} />
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
                  <FloatingLabelTextarea id="description" label="Deskripsi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {parentDivisions.length > 0 && (
            <FormField
              control={form.control}
              name="parentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Divisi Induk</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih divisi induk (jika ada)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {parentDivisions.map((div) => (
                        <SelectItem key={div.id} value={div.id}>{div.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Menyimpan..." : "Perbarui Divisi"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
