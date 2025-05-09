import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className="rounded-full shadow-sm cursor-pointer"
    >
      <Search />
    </Button>
  );
};

export default SearchInput;
