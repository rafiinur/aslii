'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: 'profile' | 'employee' | 'other';
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Bagaimana cara memperbarui informasi profil?',
    answer: 'Untuk memperbarui informasi profil, masuk ke menu Akun & Profil, kemudian klik tombol Edit Profil. Anda dapat mengubah nama, email, foto profil, dan informasi lainnya. Jangan lupa untuk menyimpan perubahan setelah selesai.',
    category: 'profile'
  },
  {
    id: 2,
    question: 'Bagaimana jika saya lupa kata sandi?',
    answer: 'Jika Anda lupa kata sandi, klik tombol "Lupa Kata Sandi" di halaman login. Masukkan email Anda, dan kami akan mengirimkan link reset kata sandi ke email tersebut. Ikuti instruksi dalam email untuk membuat kata sandi baru.',
    category: 'profile'
  },
  {
    id: 3,
    question: 'Bagaimana cara menambahkan karyawan baru?',
    answer: 'Untuk menambahkan karyawan baru, masuk ke menu Manajemen Karyawan, kemudian klik tombol "Tambah Karyawan". Isi semua informasi yang diperlukan seperti nama, email, posisi, divisi, dan tanggal bergabung. Setelah selesai, klik "Simpan" untuk menambahkan karyawan ke sistem.',
    category: 'employee'
  },
  {
    id: 4,
    question: 'Apakah saya bisa mengedit data karyawan?',
    answer: 'Ya, Anda dapat mengedit data karyawan dengan masuk ke menu Manajemen Karyawan, cari karyawan yang ingin diedit, kemudian klik tombol "Edit" atau ikon pensil. Anda dapat mengubah informasi seperti posisi, gaji, divisi, dan status karyawan.',
    category: 'employee'
  },
  {
    id: 5,
    question: 'Apa itu Leaderboard dan bagaimana cara skornya dihitung?',
    answer: 'Leaderboard adalah fitur untuk menampilkan peringkat karyawan berdasarkan performa mereka. Skor dihitung berdasarkan beberapa faktor seperti kehadiran, penyelesaian tugas, pencapaian target, dan penilaian dari supervisor. Skor diperbarui secara otomatis setiap hari.',
    category: 'other'
  },
  {
    id: 6,
    question: 'Bagaimana cara menghubungi tim support?',
    answer: 'Anda dapat menghubungi tim support melalui beberapa cara: 1) Email ke support@aslii.com, 2) Chat langsung melalui tombol chat di pojok kanan bawah aplikasi, 3) Telepon ke nomor 021-1234-5678 pada jam kerja (09:00-17:00 WIB), atau 4) Kirim tiket support melalui form yang tersedia di menu Bantuan.',
    category: 'other'
  }
];

const categories = [
  { id: 'all', name: 'Semua Kategori' },
  { id: 'profile', name: 'Akun & Profil' },
  { id: 'employee', name: 'Manajemen Karyawan' },
  { id: 'other', name: 'Lainnya' }
];

export default function HelpCenterPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const getFilteredCategories = () => {
    if (activeCategory === 'all') {
      return categories.filter(cat => cat.id !== 'all');
    }
    return categories.filter(cat => cat.id === activeCategory);
  };

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="w-full">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-orange-500 mb-2">Selamat Siang!</h1>
          <h2 className="text-xl text-gray-700 dark:text-gray-200">Pusat Bantuan</h2>
        </div>

        <div className="flex gap-6">
          {/* Left Sidebar - Category Cards */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-700 p-6">
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                      activeCategory === category.id
                        ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - FAQ Sections */}
          <div className="flex-1">
            <div className="space-y-8">
              {getFilteredCategories().map(category => {
                const categoryFAQs = faqData.filter(item => item.category === category.id);
                
                return (
                  <div key={category.id} className="w-full">
                    {/* Category Header */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-orange-500 text-lg">
                        {category.id === 'profile' && '👥'}
                        {category.id === 'employee' && '💼'}
                        {category.id === 'other' && '📚'}
                      </span>
                      <h3 className="text-lg font-semibold text-orange-500">
                        {category.name}
                      </h3>
                    </div>

                    {/* FAQ Cards for this category */}
                    <div className="space-y-4 mb-8">
                      {categoryFAQs.map(item => (
                        <div
                          key={item.id}
                          className="rounded-xl border border-gray-200 dark:border-zinc-700"
                        >
                          {/* Question Header - Always visible */}
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors rounded-xl"
                          >
                            <span className="font-medium text-gray-800 dark:text-white text-base">
                              {item.question}
                            </span>
                            <ChevronDown
                              size={20}
                              className={`text-gray-400 flex-shrink-0 ml-4 transition-transform duration-200 ${
                                openItems.has(item.id) ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          {/* Answer - Expandable */}
                          <div 
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              openItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="px-6 pb-5 border-t border-gray-100 dark:border-zinc-700">
                              <div className="pt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}