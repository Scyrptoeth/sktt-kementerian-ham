import { notFound } from 'next/navigation';
import { getPacketQuestions, packetInfoList } from '@/lib/questions';
import type { PacketId } from '@/lib/types';
import UjianClient from './UjianClient';

interface Props {
  params: Promise<{ paket: string; nomor: string }>;
}

export default async function UjianPage({ params }: Props) {
  const { paket, nomor } = await params;
  const packetId = parseInt(paket, 10) as PacketId;
  const questionNumber = parseInt(nomor, 10);

  if (isNaN(packetId) || packetId < 1 || !packetInfoList.find(p => p.id === packetId)) {
    notFound();
  }

  const packetInfo = packetInfoList.find(p => p.id === packetId);
  if (!packetInfo || !packetInfo.isAvailable) {
    notFound();
  }

  const questions = getPacketQuestions(packetId);

  if (isNaN(questionNumber) || questionNumber < 1 || questionNumber > questions.length) {
    notFound();
  }

  const question = questions[questionNumber - 1];

  return (
    <UjianClient
      question={question}
      questionNumber={questionNumber}
      packetId={packetId}
      totalQuestions={questions.length}
    />
  );
}

export function generateStaticParams() {
  const params: { paket: string; nomor: string }[] = [];
  for (const packet of packetInfoList) {
    if (packet.isAvailable) {
      const questions = getPacketQuestions(packet.id);
      for (let i = 1; i <= questions.length; i++) {
        params.push({ paket: String(packet.id), nomor: String(i) });
      }
    }
  }
  return params;
}
