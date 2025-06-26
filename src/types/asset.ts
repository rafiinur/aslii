export interface ListAsset {
  namaAset: string;
  kode: string;
  kategori: string;
  status: "Aktif" | "Rusak" | "Perbaikan";
  digunakanOleh: string;
  nilaiSekarang: string;
  tanggal: string;
}
