"use client";

import { useAnnouncements } from "@/features/announcement/hooks/use-announcement";
import { UserProfileResponse } from "@/features/auth/type";
import AnnouncementTable from "./announcement-table";

const AnnouncementTableWrapper = ({ user }: { user: UserProfileResponse }) => {
  const { data, isLoading, error } = useAnnouncements(user);

  return (
    <AnnouncementTable data={data || []} isLoading={isLoading} error={error} />
  );
};

export default AnnouncementTableWrapper;
