"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

// Dummy data role system
const SYSTEM_ROLES = [
  { id: 1, name: "Admin", description: "Akses penuh", is_system: true },
  { id: 4, name: "Superuser", description: "Role sistem", is_system: true },
];

export function ActivateSystemRoleTab(props: { onSuccess?: () => void }) {
  const [selected, setSelected] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    // Simulasi aktifkan role system
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Role system diaktifkan!");
    props.onSuccess?.();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-4"
    >
      <div className="space-y-2">
        {SYSTEM_ROLES.map((role) => (
          <label key={role.id} className="flex items-center gap-2">
            <Checkbox
              checked={selected.includes(role.id)}
              onCheckedChange={() => handleToggle(role.id)}
            />
            <span className="font-medium">{role.name}</span>
            <span className="text-xs text-muted-foreground">{role.description}</span>
          </label>
        ))}
      </div>
      <Button type="submit" disabled={selected.length === 0}>
        Aktifkan Role Terpilih
      </Button>
    </form>
  );
}