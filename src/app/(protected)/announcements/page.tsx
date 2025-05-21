import { getCurrentUser } from "@/lib/auth";
import AnnouncementTableWrapper from "./announcement-table-wrapper";
import CreateAnnouncementDialog from "./create-announcement-dialog";

const AnnouncementPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex flex-1 flex-col gap-4 py-4">
      <div className="flex items-baseline justify-between mb-2.5">
        <h4 className="font-semibold text-lg">List Pengumuman</h4>
        <CreateAnnouncementDialog />
      </div>

      <AnnouncementTableWrapper user={user} />
    </div>
  );
};

export default AnnouncementPage;
