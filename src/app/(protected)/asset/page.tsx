"use client";

import AssetTable from "./components/assets-table";
import AssetsPinjamDialog from "./components/assets-pinjam-dialog";
import AssetsTambahDialog from "./components/assets-tambah-dialog";

const Page = () => {
  const assetSummary = [
    { label: "Total Asset 🪙", value: 50 },
    { label: "Asset Aktif ✅", value: 41 },
    { label: "Asset Dipakai 👥", value: 20 },
    { label: "Asset dalam Perbaikan 🛠️", value: 5 },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 py-5">
      {/* Summary section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {assetSummary.map((e, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between items-start">
            <h1 className="md:text-sm text-xs text-neutral-950 font-semibold">
              {e.label}
            </h1>
            <h2 className="md:text-5xl text-3xl font-semibold">{e.value}</h2>
          </div>
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
