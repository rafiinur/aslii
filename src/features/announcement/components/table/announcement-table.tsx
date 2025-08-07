"use client";

import { DataTable } from "@/components/data-table";
import { announcementColumns } from "./announcement-column";
import { useAnnouncements } from "../../hooks/use-announcement";

const AnnouncementTable = () => {
  const { data, isLoading, error } = useAnnouncements();
  return (
    <>
      <DataTable
        columns={announcementColumns}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default AnnouncementTable;
