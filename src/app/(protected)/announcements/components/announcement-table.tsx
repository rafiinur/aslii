import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./announcement-column";
import { ListAnnouncement } from "@/types/announcement";

const announcements: ListAnnouncement[] = [
  {
    judul: "Ini Judul",
    tgl_publish: "10-10-2010",
    kadaluarsa: "10-10-2020",
    status: "Aktif",
    target: "Divisi It",
  },
  {
    judul: "Ini Judul",
    tgl_publish: "10-10-2010",
    kadaluarsa: "10-10-2020",
    status: "Aktif",
    target: "Divisi It",
  },
  {
    judul: "Ini Judul",
    tgl_publish: "A10-10-2010",
    kadaluarsa: "10-10-2020",
    status: "Aktif",
    target: "Divisi It",
  },
  {
    judul: "Ini Judul",
    tgl_publish: "10-10-2010",
    kadaluarsa: "10-10-2020",
    status: "Aktif",
    target: "Divisi It",
  },
];

const AnnouncementTable = () => {
  return <DataTable columns={columns} data={announcements} />;
};

export default AnnouncementTable;
