import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface GroupSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const permissionGroups = [
  { value: "read", label: "Read" },
  { value: "write", label: "Write" },
  { value: "delete", label: "Delete" },
  { value: "admin", label: "Admin" },
  { value: "user-management", label: "User Management" },
  { value: "system", label: "System" },
];

const GroupSelect = ({
  value,
  onValueChange,
  placeholder = "Pilih Group",
  disabled = false,
}: GroupSelectProps) => {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Permission Groups</SelectLabel>
          {permissionGroups.map((group) => (
            <SelectItem key={group.value} value={group.value}>
              {group.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GroupSelect;
