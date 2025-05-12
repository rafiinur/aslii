import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./announcement-column";
import { getAnnouncements } from "@/lib/supabase/announcements";

const AnnouncementTable = async () => {
  const announcements = await getAnnouncements();

  return <DataTable columns={columns} data={announcements} />;
};

export default AnnouncementTable;
