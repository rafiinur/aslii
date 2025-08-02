import Image from "next/image";

export default function DetailPengumuman() {
  const pengumumanLainnya = [
    {
      poster: "/img/img-2.png",
      judul: "Informasi Libur Nasional dan Cuti Bersama",
      tanggal: "28 Juli 2025",
    },
    {
      poster: "/img/img-1.png",
      judul: "Pengumuman Rapat Koordinasi HIMARPL 2025",
      tanggal: "25 Juli 2025",
    },
    {
      poster: "/img/img-2.png",
      judul: "Open Recruitment Panitia RPL Goes to School",
      tanggal: "20 Juli 2025",
    },
    {
      poster: "/img/img-3.png",
      judul: "Pengumpulan Laporan Setengah Periode",
      tanggal: "18 Juli 2025",
    },
  ];

  return (
    <main className="min-h-screen p-8 pt-4">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        Pengumuman &gt;{" "}
        <span className="text-black dark:text-white">Detail Pengumuman</span>
      </p>

      {/* Konten dan Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Konten Utama */}
        <section className="lg:w-2/3 mb-10 lg:mb-0">
          {/* Poster dengan aspect ratio yang lebih natural */}
          <div className="relative w-full mb-4">
            <Image
              src="/img/img-3.png"
              alt="Poster"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <p className="text-gray-700 dark:text-gray-300">25 Maret 2025 | Selasa</p>
          <h3 className="text-xl font-semibold my-2 dark:text-white">
            Merayakan Cuti Bersama Idul Fitri bersama Keluarga
          </h3>
          <p className="text-sm text-gray-500 mb-4">Oleh Vermillion Arisyawal</p>
          <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed mb-4">
            Idul Fitri adalah momen yang sangat dinantikan oleh seluruh umat Muslim
            di dunia. Perayaan ini bukan hanya menjadi ajang untuk kembali ke fitrah,
            namun juga menjadi waktu terbaik untuk berkumpul bersama keluarga tercinta.
            Pada cuti bersama tahun ini, pemerintah memberikan waktu yang cukup panjang
            agar masyarakat dapat merayakan dengan lebih khidmat dan penuh suka cita.
            Momentum ini dimanfaatkan oleh banyak pihak untuk mudik ke kampung halaman,
            bertemu dengan orang tua, kerabat, dan sanak saudara.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
            HIMARPL juga turut mendukung program ini dengan memberikan keringanan jadwal
            bagi para anggotanya selama masa cuti. Selain itu, pengurus berharap agar
            seluruh anggota bisa menjaga kesehatan, tetap waspada selama perjalanan,
            dan kembali dengan semangat baru untuk menghadapi program kerja selanjutnya.
            Semoga kebahagiaan Idul Fitri ini membawa berkah dan mempererat tali
            silaturahmi antar anggota.
          </p>
        </section>

        {/* Sidebar Pengumuman Lainnya */}
        <aside className="lg:w-1/3">
          <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Pengumuman Lainnya
          </h4>
          <div className="space-y-6">
            {pengumumanLainnya.map((item, index) => (
              <div key={index} className="border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden hover:border-orange-300 dark:hover:border-orange-600 transition-colors">
                {/* Poster dengan ukuran compact untuk sidebar */}
                <div className="relative w-full h-32">
                  <Image
                    src={item.poster}
                    alt={item.judul}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                    {item.judul}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {item.tanggal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}