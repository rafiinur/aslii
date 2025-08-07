"use client";

import { useProject } from "../hooks/use-project";
import { columns } from "./projects-column";
import { DataTable } from "@/components/data-table";

const ProjectsTable = () => {
  const { data, isLoading, error } = useProject();

  console.log("Projects data:", data);

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default ProjectsTable;
