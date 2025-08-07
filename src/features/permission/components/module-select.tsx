import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useModules } from "@/features/module/hooks/use-modules";
import { Module } from "@/features/module/types";
import { forwardRef } from "react";

interface ModuleSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

// Menggunakan tipe elemen HTML spesifik, yang lebih modern dan aman.
const ModuleSelect = forwardRef<HTMLButtonElement, ModuleSelectProps>(
  ({ value, onChange, disabled, placeholder = "Pilih Module" }, ref) => {
    const { data: modules, isLoading, error } = useModules();

    const isComponentDisabled = disabled || isLoading || !!error;

    const getPlaceholder = () => {
      if (isLoading) return "Memuat modul...";
      if (error) return "Gagal memuat modul";
      return placeholder;
    };

    return (
      <Select
        value={value}
        onValueChange={onChange}
        disabled={isComponentDisabled}
      >
        {/* Ref diteruskan ke SelectTrigger, yang merupakan sebuah button */}
        <SelectTrigger ref={ref} className="w-full">
          <SelectValue placeholder={getPlaceholder()} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Modules</SelectLabel>
            {modules && modules.length > 0 ? (
              modules.map((module: Module) => (
                <SelectItem
                  key={module.sys_module_id}
                  value={module.sys_module_code}
                >
                  {module.sys_module_code}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="no-modules" disabled>
                Tidak ada modul tersedia
              </SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
);

ModuleSelect.displayName = "ModuleSelect";

export default ModuleSelect;
