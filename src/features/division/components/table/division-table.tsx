"use client";

import { DataTable } from "@/components/data-table";
import { divisionColumns } from "./division-columns";
import { useDivisions } from "../../hooks/use-divisions";

const DivisionTable = () => {
  //   const { data, isLoading, error } = useDivisions();

  return (
    <>
      <DataTable
        columns={divisionColumns}
        data={[]}
        isLoading={false}
        error={null}
      />
    </>
  );
};

export default DivisionTable;
