import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ExamProvider } from "@/context/ExamContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latihan SKTT Kementerian HAM",
  description:
    "Website latihan Seleksi Kompetensi Teknis Tambahan Kementerian Hak Asasi Manusia Republik Indonesia",
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
    <html lang="id" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-sans">
        <ExamProvider>{children}</ExamProvider>
      </body>
    </html>
  );
}
