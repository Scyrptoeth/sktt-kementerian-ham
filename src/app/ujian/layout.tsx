import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilih Paket Latihan | SKTT Kementerian HAM',
  description: 'Pilih paket latihan soal esai SKTT Kementerian HAM. 7 paket × 12 soal = 84 soal berbasis studi kasus nyata Indonesia.',
};

export default function UjianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
