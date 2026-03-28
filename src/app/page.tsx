import Link from 'next/link';
import { questions } from '@/lib/questions';
import TopicTag from '@/components/TopicTag';

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #C8D5C4 0%, #F5EFE5 40%, #F5E8E8 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-block bg-bg-secondary border border-sand-300 px-4 py-1.5 rounded-full text-sm font-medium text-text-secondary mb-2">
            Kementerian Hak Asasi Manusia RI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-primary">
            Latihan SKTT
            <span className="block text-teal-soft-600">Kementerian HAM</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-text-secondary">
            Platform latihan Seleksi Kompetensi Teknis Tambahan berbasis esai
            dengan skenario kasus nyata. Latih kemampuan analisis HAM Anda
            sebelum ujian sesungguhnya.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              7 Paket · 84 Soal
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10 Menit per Soal
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Skor Otomatis
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/ujian"
              className="inline-flex items-center gap-2 bg-teal-soft-600 hover:bg-teal-soft-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-warm-md text-lg"
            >
              Mulai Paket Latihan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/materi"
              className="inline-flex items-center gap-2 bg-bg-secondary hover:bg-bg-card text-text-secondary font-semibold px-6 py-4 rounded-xl transition-colors border border-sand-200 text-lg"
            >
              Pelajari Materi Dulu
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2 text-text-primary">12 Topik Ujian</h2>
        <p className="text-text-secondary mb-8">
          Setiap soal menggunakan skenario kasus nyata Indonesia 2023&#8211;2025 untuk
          mengasah kemampuan analisis Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-bg-secondary rounded-xl border border-sand-200 hover:border-sage-300 p-5 shadow-warm-sm hover:shadow-warm-md transition-all duration-200 space-y-3"
            >
              <div className="flex items-start justify-between">
                <span className="flex-shrink-0 w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center bg-sage-100 text-sage-600">
                  {q.topicNumber}
                </span>
                <TopicTag tag={q.topicTag} isEnglish={q.isEnglish} topicNumber={q.topicNumber} />
              </div>

              <div>
                <h3 className="font-semibold text-text-primary leading-snug text-sm">
                  {q.topicName}
                </h3>
              </div>

              {/* Dual action buttons */}
              <div className="flex gap-2 pt-1">
                <Link
                  href={`/materi/${q.topicNumber}`}
                  className="flex-1 text-center text-xs font-medium bg-teal-soft-100 hover:bg-teal-soft-200 text-teal-soft-600 px-3 py-2 rounded-lg transition-colors"
                >
                  Pelajari Materi
                </Link>
                <Link
                  href={`/ujian/1/${q.topicNumber}`}
                  className="flex-1 text-center text-xs font-medium bg-bg-card hover:bg-sand-100 text-text-secondary px-3 py-2 rounded-lg border border-sand-200 transition-colors"
                >
                  Latihan Soal
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info panel */}
        <div className="mt-10 border border-sand-200 rounded-xl p-6 space-y-3 bg-bg-secondary">
          <h3 className="font-bold text-lg text-text-primary">Cara Menggunakan</h3>
          <ol className="space-y-2 text-text-secondary text-sm list-decimal list-inside">
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
