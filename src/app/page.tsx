import Link from 'next/link';
import { questions } from '@/lib/questions';
import TopicTag from '@/components/TopicTag';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#0f2244' }} className="text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div
            style={{ backgroundColor: '#152d5a', borderColor: '#1e3a6e' }}
            className="inline-block border px-4 py-1.5 rounded-full text-sm font-medium mb-2"
          >
            Kementerian Hak Asasi Manusia RI
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Latihan SKTT
            <span className="block" style={{ color: '#a5b8fc' }}>Kementerian HAM</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#c7d7fe' }}>
            Platform latihan Seleksi Kompetensi Teknis Tambahan berbasis esai
            dengan skenario kasus nyata. Latih kemampuan analisis HAM Anda
            sebelum ujian sesungguhnya.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#c7d7fe' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              12 Topik
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#c7d7fe' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10 Menit per Soal
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#c7d7fe' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Skor Otomatis
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/ujian/1"
              className="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg"
              style={{ color: '#0f2244' }}
            >
              Mulai Paket Latihan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#0f2244' }}>12 Topik Ujian</h2>
        <p className="text-gray-500 mb-8">
          Setiap soal menggunakan skenario kasus nyata Indonesia 2023&#8211;2025 untuk
          mengasah kemampuan analisis Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div className="flex items-start justify-between">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center"
                  style={{ backgroundColor: '#e0e8ff', color: '#0f2244' }}
                >
                  {q.topicNumber}
                </span>
                <TopicTag tag={q.topicTag} isEnglish={q.isEnglish} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 leading-snug">
                  {q.topicName}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Info panel */}
        <div
          className="mt-10 border rounded-xl p-6 space-y-3"
          style={{ backgroundColor: '#f0f4ff', borderColor: '#c7d7fe' }}
        >
          <h3 className="font-bold text-lg" style={{ color: '#0f2244' }}>Cara Menggunakan</h3>
          <ol className="space-y-2 text-gray-700 text-sm list-decimal list-inside">
            <li>Klik &quot;Mulai Paket Latihan&quot; untuk memulai sesi ujian</li>
            <li>Setiap soal memiliki batas waktu 10 menit — timer berjalan otomatis</li>
            <li>Tulis jawaban esai Anda di kolom yang tersedia (minimal 150 kata dianjurkan)</li>
            <li>Klik &quot;Kirim Jawaban &amp; Lanjut&quot; atau jawaban akan terkirim otomatis saat waktu habis</li>
            <li>Setelah semua soal selesai, lihat skor dan jawaban terbaik di halaman hasil</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
