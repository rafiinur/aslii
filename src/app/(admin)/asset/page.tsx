"use client";

import AssetTable from "./components/assets-table";
import AssetsPinjamDialog from "./components/assets-pinjam-dialog";
import AssetsTambahDialog from "./components/assets-tambah-dialog";
import SummarizeCard from "@/components/summarize-card";

const Page = () => {
  const assetSummary = [
    { title: "Total Asset 🪙", amount: "50", note: "" },
    { title: "Asset Aktif ✅", amount: "41", note: "" },
    { title: "Asset Dipakai 👥", amount: "20", note: "" },
    { title: "Asset dalam Perbaikan 🛠️", amount: "5", note: "" },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 pb-4 px-6">
      {/* Summary section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {assetSummary.map((e) => (
          <SummarizeCard key={e.title} {...e} orientation="horizontal" />
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3">
        <h3 className="font-semibold text-lg">List Asset</h3>
        <div className="flex gap-4">
          <AssetsPinjamDialog />
          <AssetsTambahDialog />
        </div>
      </div>

      {/* Table Section */}
      <AssetTable />
    </div>
  );
};

export default Page;
