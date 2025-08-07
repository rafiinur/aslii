import apiClient from "@/lib/api-client";

export const announcements = {
  getAllAnnouncements: (page: number, limit: number) =>
    apiClient(
      `/notification-announcement/announcement/list?page=${page}&limit=${limit}`
    ),
  getAnnouncementDetails: (announcementId: string) =>
    apiClient(
      `/notification-announcement/announcement/detail/${announcementId}`
    ),
  getAnnouncementAnalytics: (announcementId: string) =>
    apiClient(
      `/notification-announcement/announcement/analytics/${announcementId}`
    ),
};
