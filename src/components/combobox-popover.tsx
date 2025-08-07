"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";

export function ComboboxPopover({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  const [open, setOpen] = React.useState(false);
  const selectedStatus =
    options.find((option) => option.value === value) || null;

  return (
    <div className="flex flex-col space-y-2 ">
      <p className="text-muted-foreground text-sm">{label}</p>
      <Popover open={open} onOpenChange={setOpen} modal>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedStatus ? selectedStatus.label : "Select status..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 max-w-[200px]"
          side="bottom"
          align="start"
        >
          <Command>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(selectedValue) => {
                      if (onChange) onChange(selectedValue);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
