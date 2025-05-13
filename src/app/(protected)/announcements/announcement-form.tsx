"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { createAnnouncement } from "@/actions/announcement";
import { AnnouncementType } from "@/types/announcement";
import { announcementSchema } from "@/lib/schema";

import { useMutation, useQueryClient } from "@tanstack/react-query";

// Component prop types
interface AnnouncementFormProps {
  setOpen: (open: boolean) => void;
}

const AnnouncementForm = ({ setOpen }: AnnouncementFormProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync: createAnnouncementMutate } = useMutation({
    mutationFn: createAnnouncement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    },
  });

  const form = useForm({
    resolver: zodResolver(announcementSchema),
    defaultValues: {
      t_pengumuman_judul: "",
      t_pengumuman_konten: "",
      t_pengumuman_tanggal_publish: "",
      t_pengumuman_tanggal_kedaluwarsa: "",
      t_pengumuman_is_active: "",
      t_pengumuman_target_audience: "",
      t_pengumuman_require_acknowledgement: false,
    },
  });

  const handleCreateAnnouncement = async (
    data: Omit<AnnouncementType, "t_pengumuman_id">
  ) => {
    try {
      await createAnnouncementMutate(data as AnnouncementType);
      toast("Pengumuman berhasil dibuat", {
        description: "Pengumuman telah ditambahkan.",
      });
      form.reset();
      setOpen(false);
    } catch (err) {
      toast.error("Gagal menambahkan pengumuman.");
      console.error(err);
    }
  };

  const handleCancel = () => {
    form.reset();
    setOpen(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCreateAnnouncement)}
        className="space-y-3"
      >
        {/* Title field */}
        <FormField
          control={form.control}
          name="t_pengumuman_judul"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Judul</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan judul pengumuman" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description field */}
        <FormField
          control={form.control}
          name="t_pengumuman_konten"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Deskripsi</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Masukkan deskripsi lengkap pengumuman"
                  className="min-h-32 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date fields - arranged in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="t_pengumuman_tanggal_publish"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Tanggal Mulai</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="t_pengumuman_tanggal_kedaluwarsa"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Tanggal Berakhir</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Status and Target fields - arranged in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="t_pengumuman_is_active"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="aktif">Aktif</SelectItem>
                    <SelectItem value="nonaktif">Non Aktif</SelectItem>
                    <SelectItem value="diarsipkan">Draft</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="t_pengumuman_target_audience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Target</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih target" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="all">Semua Pengguna</SelectItem>
                    <SelectItem value="student">Siswa</SelectItem>
                    <SelectItem value="teacher">Guru</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Form action buttons */}
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" type="button" onClick={handleCancel}>
            Batal
          </Button>
          <Button type="submit">Tambah</Button>
        </div>
      </form>
    </Form>
  );
};

export default AnnouncementForm;
