import { DataTable } from "@/components/data-table";
import { ListAsset } from "@/types/asset";
import { columns } from "./assets-column";

const assets: ListAsset[] = [
  {
    namaAset: "Laptop ASUS A416",
    kode: "LP-ASUS-001",
    kategori: "Elektronik",
    status: "Aktif",
    digunakanOleh: "Vermillion Arisyawal",
    nilaiSekarang: "Rp4.500.000",
    tanggal: "10 Maret 2025",
  },
  {
    namaAset: "Laptop ASUS A416",
    kode: "LP-ASUS-001",
    kategori: "Elektronik",
    status: "Rusak",
    digunakanOleh: "Vermillion Arisyawal",
    nilaiSekarang: "Rp4.500.000",
    tanggal: "10 Maret 2025",
  },
  {
    namaAset: "Laptop ASUS A416",
    kode: "LP-ASUS-001",
    kategori: "Elektronik",
    status: "Perbaikan",
    digunakanOleh: "Vermillion Arisyawal",
    nilaiSekarang: "Rp4.500.000",
    tanggal: "10 Maret 2025",
  },
  {
    namaAset: "Laptop ASUS A416",
    kode: "LP-ASUS-001",
    kategori: "Elektronik",
    status: "Aktif",
    digunakanOleh: "Vermillion Arisyawal",
    nilaiSekarang: "Rp4.500.000",
    tanggal: "10 Maret 2025",
  },
  {
    namaAset: "Laptop ASUS A416",
    kode: "LP-ASUS-001",
    kategori: "Elektronik",
    status: "Rusak",
    digunakanOleh: "Vermillion Arisyawal",
    nilaiSekarang: "Rp4.500.000",
    tanggal: "10 Maret 2025",
  },
  {
    namaAset: "Laptop ASUS A416",
    kode: "LP-ASUS-001",
    kategori: "Elektronik",
    status: "Aktif",
    digunakanOleh: "Vermillion Arisyawal",
    nilaiSekarang: "Rp4.500.000",
    tanggal: "10 Maret 2025",
  },
  {
    namaAset: "Laptop ASUS A416",
    kode: "LP-ASUS-001",
    kategori: "Elektronik",
    status: "Perbaikan",
    digunakanOleh: "Vermillion Arisyawal",
    nilaiSekarang: "Rp4.500.000",
    tanggal: "10 Maret 2025",
  },
  {
    namaAset: "Laptop ASUS A416",
    kode: "LP-ASUS-001",
    kategori: "Elektronik",
    status: "Rusak",
    digunakanOleh: "Vermillion Arisyawal",
    nilaiSekarang: "Rp4.500.000",
    tanggal: "10 Maret 2025",
  },
];

const AssetTable = () => {
  return <DataTable columns={columns} data={assets} />;
};

export default AssetTable;
