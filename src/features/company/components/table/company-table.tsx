"use client";

import { companyColumns } from "./company-columns";
import { DataTable } from "@/components/data-table";

const CompanyTable = () => {
  return (
    <>
      <DataTable
        columns={companyColumns}
        data={[]}
        isLoading={false}
        error={null}
      />
    </>
  );
};

export default CompanyTable;
