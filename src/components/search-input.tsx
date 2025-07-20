"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      // Handle search submission
      console.log("Search:", value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className={cn(
          "relative flex items-center w-80 h-9 rounded-full border bg-background/50 backdrop-blur-sm transition-all duration-200",
          isFocused
            ? "border-ring shadow-sm bg-background"
            : "border-border hover:border-border/80"
        )}
      >
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent px-10 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* Optional: Search shortcut hint */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {!value && !isFocused && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchInput;
