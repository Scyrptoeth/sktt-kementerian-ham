import Link from 'next/link';
import { questions } from '@/lib/questions';
import { materials } from '@/lib/materials';
import TopicTag from '@/components/TopicTag';

// Format indicators — visual only
const FORMATS = ['Penjelasan', 'Flashcard', 'Panduan Esai', 'Glosarium', 'Ringkasan'];

export default function MateriHub() {
  return (
    <main id="main-content" className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section
        className="py-16 px-4"
        style={{ background: 'linear-gradient(135deg, #E8F2F0 0%, #F5EFE5 50%, #EDE8F5 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-white/60 border border-teal-soft-200 px-4 py-1.5 rounded-full text-sm font-medium text-teal-soft-600 mb-1">
            Materi Pembelajaran
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Pelajari Dulu,{' '}
            <span className="text-teal-soft-600">Baru Latihan</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Setiap topik dilengkapi penjelasan mendalam, flashcard interaktif, panduan
            menulis esai, glosarium istilah, dan ringkasan visual. Kuasai materi sebelum
            mengerjakan soal.
          </p>

          {/* Format badges */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {FORMATS.map((f) => (
              <span
                key={f}
                className="bg-white/70 border border-teal-soft-200 px-3 py-1 rounded-full text-xs font-medium text-teal-soft-600"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Panduan Esai featured card */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-0">
        <Link
          href="/materi/panduan-esai"
          className="flex items-center gap-5 bg-bg-secondary border border-teal-soft-200 rounded-xl p-5 shadow-warm-sm hover:shadow-warm-md hover:border-teal-soft-400 transition-all duration-200"
        >
          <div className="w-12 h-12 rounded-xl bg-teal-soft-100 text-teal-soft-600 flex items-center justify-center text-2xl flex-shrink-0">
            ✍️
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-teal-soft-600 uppercase tracking-wide mb-0.5">Panduan Umum</p>
            <h2 className="font-bold text-text-primary leading-snug">Panduan Menulis Esai SKTT</h2>
            <p className="text-sm text-text-secondary mt-0.5">
              Strategi struktur, cara memaksimalkan skor, manajemen waktu 10 menit, dan tips pro.
            </p>
          </div>
          <svg className="w-5 h-5 text-teal-soft-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </section>

      {/* Topics grid */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-text-primary">12 Topik Materi</h2>
            <p className="text-sm text-text-muted mt-1">
              Semua 12 topik tersedia dengan 5 format pembelajaran
            </p>
          </div>
          <Link
            href="/ujian"
            className="text-sm font-medium text-teal-soft-600 hover:text-teal-soft-500 transition-colors"
          >
            Langsung latihan →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {questions.map((q) => {
            const available = materials.some((m) => m.topicNumber === q.topicNumber);
            return (
              <div
                key={q.id}
                className={`
                  relative rounded-xl border p-5 shadow-warm-sm transition-all duration-200 space-y-3
                  ${available
                    ? 'bg-bg-secondary border-sand-200 hover:border-teal-soft-300 hover:shadow-warm-md'
                    : 'bg-bg-card border-sand-100 opacity-70'
                  }
                `}
              >
                {/* Coming soon badge */}
                {!available && (
                  <span className="absolute top-3 right-3 text-xs bg-sand-100 text-sand-500 border border-sand-200 px-2 py-0.5 rounded-full font-medium">
                    Segera
                  </span>
                )}

                <div className="flex items-start justify-between gap-2">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full font-bold text-sm flex items-center justify-center bg-sage-100 text-sage-600">
                    {q.topicNumber}
                  </span>
                  <TopicTag tag={q.topicTag} isEnglish={q.isEnglish} topicNumber={q.topicNumber} />
                </div>

                <h3 className="font-semibold text-text-primary leading-snug text-sm">
                  {q.topicName}
                </h3>

                {/* Format progress dots — visual only */}
                {available && (
                  <div className="flex items-center gap-1.5">
                    {FORMATS.map((f) => (
                      <div
                        key={f}
                        title={f}
                        className="w-2 h-2 rounded-full bg-teal-soft-200"
                      />
                    ))}
                    <span className="text-xs text-text-muted ml-1">5 format</span>
                  </div>
                )}

                {/* Action buttons */}
                {available ? (
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
                ) : (
                  <div className="pt-1">
                    <span className="block text-center text-xs text-text-muted bg-bg-card rounded-lg px-3 py-2 border border-sand-100">
                      Belum tersedia
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
