// components/announcement-table-wrapper.tsx
"use client";

import { useAnnouncements } from "@/hooks/use-announcement";
import AnnouncementTable from "./announcement-table";
import { UserProfileResponse } from "@/types/user";

const AnnouncementTableWrapper = ({ user }: { user: UserProfileResponse }) => {
  const { data, isLoading, error } = useAnnouncements(user);

  return (
    <AnnouncementTable data={data || []} isLoading={isLoading} error={error} />
  );
};

export default AnnouncementTableWrapper;
