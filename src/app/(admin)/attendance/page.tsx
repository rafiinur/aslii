"use client";

import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RekapAbsensiPage() {
  const [data] = useState([
    {
      no: 1,
      nama: "Vermillion Arisyawal",
      jamMasuk: "09:00",
      jamKeluar: "17:00",
      lokasi: "Kantor",
      status: "WFO",
      keterangan: "Tadi nganter adek dulu",
    },
    {
      no: 2,
      nama: "Nurrafi Fadly",
      jamMasuk: "08:00",
      jamKeluar: "20:00",
      lokasi: "Kantor",
      status: "WFO",
      keterangan: "-",
    },
    {
      no: 3,
      nama: "Cahaya Fitri",
      jamMasuk: "08:00",
      jamKeluar: "-",
      lokasi: "Cimahi ya",
      status: "WFH",
      keterangan: "Dari rumah soalnya lagi ...",
    },
  ]);

  // Fungsi bantu untuk bandingkan waktu
  const isLaterThan = (jam: string, batas: string) => {
    if (!jam || jam === "-") return false;
    const [jamA, menitA] = jam.split(":").map(Number);
    const [jamB, menitB] = batas.split(":").map(Number);
    return jamA > jamB || (jamA === jamB && menitA > menitB);
  };

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-[#0D0D0D] text-black dark:text-white min-h-screen transition-colors duration-300">
      {/* Greeting */}
      <h1 className="text-2xl font-bold text-orange-500 dark:text-orange-400">
        Selamat Siang!
      </h1>

      {/* Statistik Card */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total Hadir", value: 49, icon: "👥" },
          { label: "WFO", value: 40, icon: "🏢" },
          { label: "WFH", value: 8, icon: "🏠" },
          { label: "SSPD", value: 1, icon: "🚗" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-[#2A2A2A] rounded-xl shadow p-4 flex flex-col items-center justify-center transition-colors duration-300"
          >
            <div className="text-3xl">{item.icon}</div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-white">
              {item.value}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Rekap Absensi Table */}
      <div className="bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-[#2A2A2A] rounded-xl shadow overflow-x-auto transition-colors duration-300">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 dark:border-[#2A2A2A]">
              <th className="p-3 text-gray-700 dark:text-gray-300">No</th>
              <th className="p-3 text-gray-700 dark:text-gray-300">Nama</th>
              <th className="p-3 text-gray-700 dark:text-gray-300">
                Jam Masuk
              </th>
              <th className="p-3 text-gray-700 dark:text-gray-300">
                Jam Keluar
              </th>
              <th className="p-3 text-gray-700 dark:text-gray-300">Lokasi</th>
              <th className="p-3 text-gray-700 dark:text-gray-300">Status</th>
              <th className="p-3 text-gray-700 dark:text-gray-300">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              const terlambat = isLaterThan(row.jamMasuk, "08:00");
              const lembur = isLaterThan(row.jamKeluar, "17:00");

              return (
                <tr
                  key={row.no}
                  className="border-b border-gray-200 dark:border-[#2A2A2A] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors duration-300"
                >
                  <td className="p-3 text-gray-900 dark:text-gray-100">
                    {row.no}
                  </td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">
                    {row.nama}
                  </td>
                  <td
                    className={`p-3 ${
                      terlambat
                        ? "text-red-500 font-medium"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {row.jamMasuk}
                  </td>
                  <td
                    className={`p-3 ${
                      lembur
                        ? "text-orange-500 font-medium"
                        : "text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    {row.jamKeluar}
                  </td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">
                    {row.lokasi}
                  </td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">
                    {row.status}
                  </td>
                  <td className="p-3 text-gray-900 dark:text-gray-100">
                    <div className="flex justify-between items-center w-full">
                      <span>{row.keterangan}</span>
                      <Link
                        className="text-lg ml-2 text-gray-400 dark:text-gray-500"
                        href={`/attendance/${row.no}`}
                      >
                        <ChevronsRight />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
