"use server";

import type { Announcement } from "../type";
import { getAuthToken } from "@/features/auth/services/user.service";

export type AnnouncementPayload = {
  judul: string;
  konten: string;
  tanggal_publish: string;
  tanggal_kedaluwarsa: string;
  target_audience: string;
  require_acknowledgment: boolean;
  priority: string;
  audience_config: {
    type: string;
  };
};

export const createAnnouncement = async (payload: Announcement) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal membuat pengumuman.");
    }

    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat membuat pengumuman."
    );
  }
};

export const createAnnouncementWithThumbnail = async (formData: FormData) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(
        result?.message || "Gagal membuat pengumuman dengan thumbnail."
      );
    }

    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat membuat pengumuman dengan thumbnail."
    );
  }
};

export const updateAnnouncement = async (payload: Announcement) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/update/${payload.t_pengumuman_id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal memperbarui pengumuman.");
    }

    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat memperbarui pengumuman."
    );
  }
};

export const updateAnnouncementWithThumbnail = async (formData: FormData) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/update`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal memperbarui thumbnail.");
    }

    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat memperbarui thumbnail."
    );
  }
};

export const addAnnouncementThumbnail = async (
  formData: FormData,
  announcementId: string
) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/update/${announcementId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Gagal menambahkan thumbnail.");
    }

    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat menambahkan thumbnail."
    );
  }
};

export const deleteAnnouncement = async (announcementId: number) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/delete/${announcementId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const result = await res.json();
      throw new Error(result?.message || "Gagal menghapus pengumuman.");
    }

    return { success: true };
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat menghapus pengumuman."
    );
  }
};

export const publishAnnouncement = async (announcementId: number) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/publish/${announcementId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const result = await res.json();

    if (!res.ok) {
      throw new Error(
        result?.error.message || "Gagal mempublikasikan pengumuman."
      );
    }

    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat mempublikasikan pengumuman."
    );
  }
};

export const unpublishAnnouncement = async (announcementId: number) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/unpublish/${announcementId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const result = await res.json();

    if (!res.ok) {
      throw new Error(
        result?.error.message || "Gagal membatalkan publikasi pengumuman."
      );
    }

    return result;
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat membatalkan publikasi pengumuman."
    );
  }
};

export const acknowledgeAnnouncement = async (announcementId: number) => {
  try {
    const { accessToken } = await getAuthToken();

    if (!accessToken) {
      throw new Error("User not authenticated");
    }

    const res = await fetch(
      `${process.env.SUPABASE_AUTH_API_URL}/notification-announcement/announcement/acknowledge/${announcementId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const result = await res.json();
      throw new Error(result?.message || "Gagal mengakui pengumuman.");
    }

    return { success: true };
  } catch (err) {
    throw new Error(
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan saat mengakui pengumuman."
    );
  }
};
