import AddAnnouncementDialog from "@/components/add-announcement-dialog";
import AnnouncementTable from "./components/announcement-table";

const AnnouncementPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 py-4">
      <div className="flex items-center justify-between mb-2.5">
        <h4 className="font-semibold text-lg mb-2.5">List Pengumuman</h4>
        <AddAnnouncementDialog />
      </div>
      <AnnouncementTable />
    </div>
  );
};

export default AnnouncementPage;
