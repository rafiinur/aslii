import { CreateAnnouncementDialog } from "@/features/announcement/components/dialog/create-announcement-dialog";
import AnnouncementTable from "@/features/announcement/components/table/announcement-table";
import { Megaphone } from "lucide-react";

const AnnouncementsPage = async () => {
  return (
    <div className="flex flex-col flex-1 px-6 pb-4">
      <div className="flex items-center justify-between gap-2 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Megaphone className="h-5 w-5 text-muted-foreground" />
          <h2 className="section-title">Announcement</h2>
        </div>
        <CreateAnnouncementDialog />
      </div>
      <div className="flex-1 overflow-auto">
        <AnnouncementTable />
      </div>
    </div>
  );
};

export default AnnouncementsPage;
