"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";

import { FloatingLabelInput } from "@/components/floating-label-input";
import { FloatingLabelTextarea } from "@/components/floating-label-textarea";

type CreateRoleCompanyFormProps = {
  onSuccess?: () => void;
};

type FormValues = {
  name: string;
  description: string;
};

// Dummy data role system
const SYSTEM_ROLES = [
  { id: 1, name: "Admin", description: "Akses penuh", is_system: true },
  { id: 4, name: "Superuser", description: "Role sistem", is_system: true },
];

export default function CreateRoleCompanyForm({
  onSuccess,
}: CreateRoleCompanyFormProps) {
  const [tab, setTab] = useState("new");
  const [selected, setSelected] = useState<number[]>([]);

  // react-hook-form setup
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // Handler tambah role baru
  const handleSubmitNew = () => {
    toast.success("Role baru berhasil ditambahkan!");
    form.reset();
    if (onSuccess) onSuccess();
  };

  // Handler aktifkan role system
  const handleSubmitSystem = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Berhasil menyalin role ini ke daftar role perusahaan Anda!");
    setSelected([]);
    if (onSuccess) onSuccess();
  };

  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="new">Tambah Role Baru</TabsTrigger>
        <TabsTrigger value="system">Gunakan Role dari Template</TabsTrigger>
      </TabsList>
      <TabsContent value="new">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitNew)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FloatingLabelInput
                      id="name"
                      label="Nama Role"
                      {...field}
                    />
                  </FormControl>
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
                </FormItem>
              )}
            />
            <Button type="submit">Simpan</Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="system">
        <form onSubmit={handleSubmitSystem} className="space-y-4">
          <div className="space-y-2">
            {SYSTEM_ROLES.map((role) => (
              <label key={role.id} className="flex items-center gap-2">
                <Checkbox
                  checked={selected.includes(role.id)}
                  onCheckedChange={() =>
                    setSelected((prev) =>
                      prev.includes(role.id)
                        ? prev.filter((x) => x !== role.id)
                        : [...prev, role.id]
                    )
                  }
                />
                <span className="font-medium">{role.name}</span>
                <span className="text-xs text-muted-foreground">
                  {role.description}
                </span>
              </label>
            ))}
          </div>
          <Button type="submit" disabled={selected.length === 0}>
            Aktifkan Role Terpilih
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}
