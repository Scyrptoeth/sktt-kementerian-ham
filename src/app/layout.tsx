import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ExamProvider } from "@/context/ExamContext";
import GlobalNav from "@/components/GlobalNav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://projek-sktt-kementerian-ham.vercel.app'),
  title: "Latihan SKTT Kementerian HAM",
  description:
    "Platform latihan Seleksi Kompetensi Teknis Tambahan Kementerian HAM RI. 120 soal esai (10 paket) berbasis kasus nyata, skor otomatis, pembahasan langsung.",
  keywords: [
    "SKTT",
    "Kementerian HAM",
    "latihan ujian",
    "hak asasi manusia",
    "CPNS",
    "seleksi kompetensi",
  ],
  openGraph: {
    title: "Latihan SKTT Kementerian HAM",
    description:
      "120 soal esai (10 paket) berbasis kasus nyata · skor otomatis · pembahasan langsung. Persiapkan SKTT Kementerian HAM RI.",
    url: "https://projek-sktt-kementerian-ham.vercel.app",
    siteName: "Latihan SKTT Kementerian HAM",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latihan SKTT Kementerian HAM",
    description:
      "120 soal esai (10 paket) berbasis kasus nyata · skor otomatis · pembahasan langsung.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-sans">
        <ExamProvider>
          {/* Skip navigation for keyboard/screen reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-teal-soft-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:text-sm focus:shadow-warm-md"
          >
            Langsung ke konten utama
          </a>
          <GlobalNav />
          {children}
        </ExamProvider>
      </body>
    </html>
  );
}
