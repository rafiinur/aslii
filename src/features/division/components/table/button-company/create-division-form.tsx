// src/components/create-division-form.tsx

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
import { divisionSchema, DivisionFormValues } from "@/schemas/division-schema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CreateDivisionFormProps {
  onSuccess?: () => void;
  defaultDivisions?: { id: string; name: string }[];
  parentDivisions?: { id: string; name: string }[];
}

export function CreateDivisionForm({ onSuccess, defaultDivisions = [], parentDivisions = [] }: CreateDivisionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DivisionFormValues>({
    resolver: zodResolver(divisionSchema),
    defaultValues: {
      name: "",
      code: "",
      description: "",
      parentId: "",
      fromSystem: "",
    },
  });

  async function onSubmit(values: DivisionFormValues) {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data yang dikirim:", values);
      toast.success("Divisi berhasil dibuat!");
      onSuccess?.();
    } catch {
      toast.error("Gagal membuat divisi.");
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

          {defaultDivisions.length > 0 && (
            <FormField
              control={form.control}
              name="fromSystem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gunakan Template Divisi</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih dari divisi sistem (opsional)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {defaultDivisions.map((div) => (
                        <SelectItem key={div.id} value={div.id}>{div.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Jika memilih ini, data dari divisi sistem akan digunakan sebagai dasar.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isSubmitting ? "Menyimpan..." : "Simpan Divisi"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
