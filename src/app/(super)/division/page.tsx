import DivisionTable from "@/features/division/components/table/division-table";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";

const DivisionPage = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <BriefcaseBusiness className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold">Divisi</h2>
      </div>
      <DivisionTable />
    </>
  );
};

export default DivisionPage;
