import React from "react";
import { moduleCompanyColumns } from "./module-company-column";
import { DataTable } from "@/components/data-table";
import type { ModuleCompany } from "./module-company-column";

type ModuleCompanyTableProps = {
  allModuleCompanies: ModuleCompany[];
  companyModules: ModuleCompany[];
};

const ModuleCompanyTable = ({
  allModuleCompanies,
  companyModules,
}: ModuleCompanyTableProps) => {
  // Tambahkan info isSelected ke setiap divisi
  const data = allModuleCompanies.map((div) => ({
    ...div,
    isSelected: companyModules.some((cd) => cd.code === div.code),
  }));

  return <DataTable columns={moduleCompanyColumns} data={data} />;
};

export default ModuleCompanyTable;
