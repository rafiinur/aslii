import { getUserProfile } from "@/features/auth/services/user.service";
import AnnouncementTableWrapper from "../../../features/announcement/components/table/announcement-table-wrapper";

const AnnouncementsPage = async () => {
  const user = await getUserProfile();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex flex-1 flex-col py-4">
      <h4 className="font-semibold text-lg mb-4">List Pengumuman</h4>
      <AnnouncementTableWrapper user={user} />
    </div>
  );
};

export default AnnouncementsPage;
