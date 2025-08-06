import React from "react";
import { divisionColumns } from "./division-column-client";
import { DataTable } from "@/components/data-table";
import type { DivisionCompany } from "./division-column-client";


type DivisionTableClientProps = {
  allDivisions: DivisionCompany[];
  companyDivisions: DivisionCompany[];
};

const DivisionTableClient = ({
  allDivisions,
  companyDivisions,
}: DivisionTableClientProps) => {
  // Tambahkan info isSelected ke setiap divisi
  const data = allDivisions.map((div) => ({
    ...div,
    isSelected: companyDivisions.some((cd) => cd.code === div.code),
  }));

  return <DataTable columns={divisionColumns} data={data} />;
};

export default DivisionTableClient;