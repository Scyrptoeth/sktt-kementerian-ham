import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilih Paket Latihan | SKTT Kementerian HAM',
  description: 'Pilih paket latihan soal esai SKTT Kementerian HAM. 5 paket × 12 soal = 60 soal berbasis studi kasus nyata Indonesia.',
};

export default function UjianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
