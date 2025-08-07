"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

type Notification = {
  id: number;
  title: string;
  message: string;
  icon: string;
  time: string;
  status: "read" | "unread";
  group: "Hari ini" | "Minggu ini" | "Bulan lalu";
};

const allNotifications: Notification[] = [
  {
    id: 1,
    title: "Pengajuan Cuti Baru",
    message: "Vermillion Arisyawal mengajukan cuti 5 hari (1–5 Agustus).",
    icon: "https://storage.googleapis.com/a1aa/image/17dad147-89df-40c7-46ad-4f05771006bf.jpg",
    time: "5 menit yang lalu",
    status: "unread",
    group: "Hari ini",
  },
  {
    id: 2,
    title: "Lembur Melebihi Batas",
    message: "Terdeteksi 3 karyawan lembur lebih dari 5 hari berturut-turut.",
    icon: "https://storage.googleapis.com/a1aa/image/4c90aeac-2fd0-495a-9cfb-a493c5b56fbc.jpg",
    time: "8 jam yang lalu",
    status: "unread",
    group: "Hari ini",
  },
  {
    id: 3,
    title: "Karyawan Baru Ditambahkan",
    message: "HR telah menambahkan Fadly Nurrafi ke divisi IT.",
    icon: "https://storage.googleapis.com/a1aa/image/e3ed9ecf-8aca-4bae-b8a4-16e92bb7eb2a.jpg",
    time: "2 hari yang lalu",
    status: "read",
    group: "Minggu ini",
  },
  {
    id: 4,
    title: "Pengajuan Cuti Ditolak",
    message: "Pengajuan cuti oleh Adrian ditolak karena konflik jadwal proyek.",
    icon: "https://storage.googleapis.com/a1aa/image/fea764eb-47b8-42af-4805-bab00b6708a2.jpg",
    time: "3 hari yang lalu",
    status: "read",
    group: "Minggu ini",
  },
  {
    id: 5,
    title: "Modul Baru Tersedia",
    message: 'Modul "Rekap Kehadiran" kini tersedia untuk semua role HR.',
    icon: "https://storage.googleapis.com/a1aa/image/96229675-559c-41d4-6cf3-a2bf907b9e47.jpg",
    time: "5 hari yang lalu",
    status: "unread",
    group: "Minggu ini",
  },
  {
    id: 6,
    title: "Percobaan Login Gagal",
    message:
      "Ada 3 percobaan login gagal ke akun HR Manager (IP: 192.168.1.10).",
    icon: "https://storage.googleapis.com/a1aa/image/efd42ebf-d654-462b-fb00-7fd9230d8df3.jpg",
    time: "20 hari yang lalu",
    status: "read",
    group: "Bulan lalu",
  },
];

const groups = ["Hari ini", "Minggu ini", "Bulan lalu"] as const;

export default function NotificationPage() {
  const [filter, setFilter] = useState<"semua" | "belum">("semua");

  return (
    <div className="min-h-screen px-6 py-4 text-zinc-900 dark:text-white">
      <main className="w-full mx-auto">
        <div className="mb-8 pl-2">
          <h2 className="text-zinc-800 dark:text-white font-extrabold text-3xl">
            Selamat Siang!
          </h2>

          <div className="mt-4">
            <h3 className="font-semibold text-black dark:text-white text-xl">
              Notifikasi
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Anda memiliki{" "}
              {allNotifications.filter((n) => n.status === "unread").length}{" "}
              notifikasi untuk dilihat
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setFilter("semua")}
              className={clsx(
                "text-sm font-semibold rounded-md px-4 py-2 transition-all",
                filter === "semua"
                  ? "bg-[#f58234] text-white"
                  : "border border-[#f58234] text-[#4a4a4a] dark:text-white"
              )}
            >
              Semua
            </button>
            <button
              onClick={() => setFilter("belum")}
              className={clsx(
                "text-sm font-semibold rounded-md px-4 py-2 transition-all",
                filter === "belum"
                  ? "bg-[#f58234] text-white"
                  : "border border-[#f58234] text-[#4a4a4a] dark:text-white"
              )}
            >
              Belum Dibaca
            </button>
          </div>
        </div>

        <div className="space-y-8 w-full">
          {groups.map((group) => {
            const notifs = allNotifications.filter(
              (n) =>
                n.group === group &&
                (filter === "semua" || n.status === "unread")
            );
            if (notifs.length === 0) return null;

            return (
              <div key={group} className="w-full">
                <p className="text-base text-gray-600 dark:text-gray-300 font-semibold mb-4 pl-2">
                  {group}
                </p>

                <div className="space-y-4 w-full">
                  {notifs.map((n) => (
                    <div
                      key={n.id}
                      className={clsx(
                        "w-full rounded-xl shadow-sm px-6 py-5 flex justify-between items-center gap-6",
                        "border border-gray-200 dark:border-zinc-700 hover:border-[#f58234]",
                        "transition-colors duration-200"
                      )}
                    >
                      <div className="flex items-start gap-6 flex-grow">
                        <Image
                          src={n.icon}
                          alt="Icon"
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-semibold text-black dark:text-white truncate">
                            {n.title}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {n.message}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-4">
                          {" "}
                          {/* Changed to flex with items-center and gap-4 */}
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {n.time}
                          </span>
                          <span
                            className={clsx(
                              "text-xs font-semibold",
                              n.status === "unread"
                                ? "text-[#f58234]"
                                : "text-green-600 dark:text-green-400"
                            )}
                          >
                            {n.status === "unread"
                              ? "Belum Dibaca"
                              : "Sudah Dibaca"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
