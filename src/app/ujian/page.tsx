'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useExam } from '@/context/ExamContext';
import { packetInfoList, getTotalQuestionCount } from '@/lib/questions';
import type { PacketId, PacketProgress } from '@/lib/types';

function PacketStatusBadge({ progress }: { progress: PacketProgress }) {
  if (progress.status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-sage-100 text-sage-600 border border-sage-200">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
        Selesai
      </span>
    );
  }
  if (progress.status === 'active') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-sand-100 text-sand-600 border border-sand-300">
        <span className="w-1.5 h-1.5 rounded-full bg-sand-500 animate-pulse" />
        Sedang dikerjakan
      </span>
    );
  }
  return null;
}

function PacketProgress({ progress, totalQuestions }: { progress: PacketProgress; totalQuestions: number }) {
  if (progress.status === 'idle') {
    return (
      <p className="text-xs text-text-muted">Belum dikerjakan</p>
    );
  }

  const answered = progress.answers.length;
  const percent = Math.round((answered / totalQuestions) * 100);

  if (progress.status === 'completed') {
    const totalScore = progress.answers.reduce((sum, a) => sum + a.score, 0);
    const maxScore = totalQuestions * 5;
    const scorePercent = Math.round((totalScore / maxScore) * 100);
    return (
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-muted">Skor: {totalScore}/{maxScore}</span>
          <span className={`font-semibold ${scorePercent >= 80 ? 'text-sage-600' : scorePercent >= 60 ? 'text-warning' : 'text-danger'}`}>
            {scorePercent}%
          </span>
        </div>
        <div className="w-full bg-sand-100 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full transition-all duration-500 ${scorePercent >= 80 ? 'bg-sage-400' : scorePercent >= 60 ? 'bg-warning' : 'bg-rose-dust-400'}`}
            style={{ width: `${scorePercent}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="text-text-muted">{answered}/{totalQuestions} soal</span>
        <span className="font-medium text-teal-soft-600">{percent}%</span>
      </div>
      <div className="w-full bg-sand-100 rounded-full h-1.5">
        <div
          className="h-1.5 rounded-full bg-teal-soft-400 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function PilihPaketPage() {
  const { getPacketProgress, resetPacket } = useExam();
  const router = useRouter();

  return (
    <main id="main-content" className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section
        className="py-14 px-4"
        style={{ background: 'linear-gradient(135deg, #C8D5C4 0%, #F5EFE5 40%, #F5E8E8 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-bg-secondary border border-sand-300 px-4 py-1.5 rounded-full text-sm font-medium text-text-secondary mb-1">
            Latihan Soal Esai
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Pilih Paket Latihan
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
            Setiap paket berisi 12 soal esai berbasis studi kasus HAM. Kerjakan satu paket penuh untuk
            mendapatkan skor dan pembahasan lengkap.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-1 text-sm text-text-secondary">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              10 Paket Latihan
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              10 Menit per Soal
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Skor Otomatis
            </span>
          </div>
        </div>
      </section>

      {/* Packet Grid */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packetInfoList.map((packet) => {
            const progress = getPacketProgress(packet.id as PacketId);
            const nextQuestion = progress.status === 'active'
              ? progress.currentQuestionIndex + 1
              : 1;

            return (
              <div
                key={packet.id}
                className={`
                  relative rounded-xl border p-5 shadow-warm-sm transition-all duration-200 flex flex-col gap-4
                  ${packet.isAvailable
                    ? 'bg-bg-secondary border-sand-200 hover:border-teal-soft-300 hover:shadow-warm-md'
                    : 'bg-bg-card border-sand-100 opacity-60'
                  }
                `}
              >
                {/* Coming soon badge */}
                {!packet.isAvailable && (
                  <span className="absolute top-3 right-3 text-xs bg-sand-100 text-sand-500 border border-sand-200 px-2 py-0.5 rounded-full font-medium">
                    Segera Hadir
                  </span>
                )}

                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full font-bold text-base flex items-center justify-center bg-teal-soft-100 text-teal-soft-700">
                      {packet.id}
                    </span>
                    <div>
                      <h2 className="font-bold text-text-primary text-base leading-snug">{packet.name}</h2>
                      <p className="text-xs text-text-muted mt-0.5">12 Soal Esai</p>
                    </div>
                  </div>
                  {packet.isAvailable && <PacketStatusBadge progress={progress} />}
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-snug flex-1">
                  {packet.description}
                </p>

                {/* Progress */}
                {packet.isAvailable && (
                  <PacketProgress progress={progress} totalQuestions={packet.questionCount} />
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-1">
                  {!packet.isAvailable ? (
                    <span className="flex-1 text-center text-sm text-text-muted bg-bg-card rounded-xl px-4 py-2.5 border border-sand-100 cursor-not-allowed">
                      Segera Hadir
                    </span>
                  ) : progress.status === 'completed' ? (
                    <>
                      <Link
                        href={`/hasil?paket=${packet.id}`}
                        className="flex-1 text-center text-sm font-semibold bg-teal-soft-100 hover:bg-teal-soft-200 text-teal-soft-700 px-4 py-2.5 rounded-xl transition-colors border border-teal-soft-200"
                      >
                        Lihat Hasil
                      </Link>
                      <button
                        onClick={() => {
                          resetPacket(packet.id as PacketId);
                          router.push(`/ujian/${packet.id}/1`);
                        }}
                        className="flex-1 text-center text-sm font-semibold bg-bg-card hover:bg-sand-100 text-text-secondary px-4 py-2.5 rounded-xl transition-colors border border-sand-200"
                      >
                        Ulangi
                      </button>
                    </>
                  ) : progress.status === 'active' ? (
                    <Link
                      href={`/ujian/${packet.id}/${nextQuestion}`}
                      className="flex-1 text-center text-sm font-semibold bg-teal-soft-600 hover:bg-teal-soft-500 text-white px-4 py-2.5 rounded-xl transition-colors shadow-warm-sm"
                    >
                      Lanjutkan →
                    </Link>
                  ) : (
                    <Link
                      href={`/ujian/${packet.id}/1`}
                      className="flex-1 text-center text-sm font-semibold bg-teal-soft-600 hover:bg-teal-soft-500 text-white px-4 py-2.5 rounded-xl transition-colors shadow-warm-sm"
                    >
                      Mulai Paket →
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom info */}
        <div className="mt-10 bg-bg-secondary border border-sand-200 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-text-primary text-sm">{packetInfoList.length} Paket × 12 Soal = {getTotalQuestionCount()} Soal Total</p>
            <p className="text-xs text-text-muted mt-0.5">
              Semua {packetInfoList.length} paket tersedia · {getTotalQuestionCount()} soal siap dikerjakan
            </p>
          </div>
          <Link
            href="/materi"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-soft-600 hover:text-teal-soft-500 transition-colors"
          >
            Pelajari materi dulu →
          </Link>
        </div>
      </section>
    </main>
  );
}
