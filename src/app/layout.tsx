import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ExamProvider } from "@/context/ExamContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latihan SKTT Kementerian HAM",
  description:
    "Platform latihan Seleksi Kompetensi Teknis Tambahan (SKTT) Kementerian Hak Asasi Manusia Republik Indonesia. Berlatih menjawab soal esai berbasis kasus nyata.",
  keywords: [
    "SKTT",
    "Kementerian HAM",
    "latihan ujian",
    "hak asasi manusia",
    "CPNS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-gray-900">
        <ExamProvider>{children}</ExamProvider>
      </body>
    </html>
  );
}
