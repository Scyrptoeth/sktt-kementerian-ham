import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{ nomor: string }>;
}

export default async function LegacyUjianPage({ params }: Props) {
  const { nomor } = await params;
  // Redirect old URLs (/ujian/3) to paket 1 equivalent (/ujian/1/3)
  redirect(`/ujian/1/${nomor}`);
}
