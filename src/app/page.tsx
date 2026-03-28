import Link from 'next/link';

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
            Platform persiapan SKTT Kementerian HAM — dilengkapi materi pembelajaran
            12 topik kisi-kisi resmi dan latihan soal esai berbasis kasus nyata
            dengan penilaian otomatis.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              10 Paket · 120 Soal
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              12 Topik Materi
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

      {/* Feature Cards Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 — Latihan Soal */}
          <div className="bg-bg-secondary rounded-2xl border border-sand-200 p-7 shadow-warm-sm hover:shadow-warm-md hover:border-teal-soft-300 transition-all duration-200 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-teal-soft-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-soft-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-text-primary text-lg leading-snug">Latihan Soal Esai</h2>
                <p className="text-sm text-text-secondary">Uji kemampuan analisis HAM Anda</p>
              </div>
            </div>

            <ul className="space-y-2.5 flex-1">
              {[
                '10 paket latihan tersedia',
                '120 soal esai berbasis kasus nyata Indonesia',
                'Skor otomatis dengan rubrik detail',
                'Pembahasan + jawaban terbaik tiap soal',
                'Timer 10 menit per soal',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-teal-soft-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/ujian"
              className="inline-flex items-center justify-center gap-2 bg-teal-soft-600 hover:bg-teal-soft-500 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              Pilih Paket Latihan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Card 2 — Materi Pembelajaran */}
          <div className="bg-bg-secondary rounded-2xl border border-sand-200 p-7 shadow-warm-sm hover:shadow-warm-md hover:border-sage-300 transition-all duration-200 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-text-primary text-lg leading-snug">Materi Pembelajaran</h2>
                <p className="text-sm text-text-secondary">Kuasai 12 topik kisi-kisi resmi</p>
              </div>
            </div>

            <ul className="space-y-2.5 flex-1">
              {[
                '12 topik kisi-kisi SKTT Kementerian HAM',
                '5 format belajar: penjelasan, flashcard, panduan esai, glosarium, ringkasan visual',
                'Panduan strategi menulis esai SKTT',
                'Glosarium istilah HAM lengkap',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/materi"
              className="inline-flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-500 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              Mulai Belajar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="mt-10 border border-sand-200 rounded-2xl overflow-hidden bg-bg-secondary">
          <div className="px-7 py-5 border-b border-sand-200">
            <h2 className="font-bold text-lg text-text-primary">Cara Menggunakan</h2>
            <p className="text-sm text-text-secondary mt-0.5">Pilih salah satu jalur belajar sesuai preferensi Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-sand-200">
            {/* Path A */}
            <div className="px-7 py-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-teal-soft-100 text-teal-soft-700 font-bold text-xs flex items-center justify-center flex-shrink-0">A</span>
                <h3 className="font-semibold text-text-primary text-sm">Pelajari Dulu, Baru Latihan</h3>
                <span className="text-xs bg-teal-soft-100 text-teal-soft-600 px-2 py-0.5 rounded-full font-medium">Direkomendasikan</span>
              </div>
              <ol className="space-y-2.5 text-sm text-text-secondary list-none">
                {[
                  'Buka halaman Materi, pilih salah satu dari 12 topik',
                  'Pelajari materi lewat penjelasan, flashcard, glosarium, dan ringkasan visual',
                  'Baca panduan menulis esai SKTT untuk memahami strategi menjawab',
                  'Masuk ke Latihan Soal, pilih paket, dan kerjakan soal esai (10 menit per soal)',
                  'Lihat skor otomatis, pembahasan, dan jawaban terbaik untuk setiap soal',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-bg-card border border-sand-200 text-text-muted font-semibold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Path B */}
            <div className="px-7 py-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-sand-100 text-sand-600 font-bold text-xs flex items-center justify-center flex-shrink-0">B</span>
                <h3 className="font-semibold text-text-primary text-sm">Langsung Latihan</h3>
              </div>
              <ol className="space-y-2.5 text-sm text-text-secondary list-none">
                {[
                  'Buka halaman Latihan Soal, pilih salah satu dari 10 paket',
                  'Kerjakan 12 soal esai dalam paket tersebut (10 menit per soal)',
                  'Setelah selesai, lihat skor dan jawaban terbaik per soal',
                  'Pelajari materi untuk topik yang skornya rendah agar nilai meningkat',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-bg-card border border-sand-200 text-text-muted font-semibold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
