import { notFound } from 'next/navigation';
import { questions } from '@/lib/questions';
import { materials } from '@/lib/materials';
import TopicMateriClient from './TopicMateriClient';

interface PageProps {
  params: Promise<{ topicNumber: string }>;
}

export function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({
    topicNumber: String(i + 1),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { topicNumber } = await params;
  const num = parseInt(topicNumber, 10);
  const q = questions.find((q) => q.topicNumber === num);
  if (!q) return {};
  return {
    title: `${q.topicName} | Materi SKTT HAM`,
    description: `Pelajari materi topik ${num}: ${q.topicName} — penjelasan, flashcard, panduan esai, glosarium, dan ringkasan visual.`,
  };
}

export default async function TopicMateriPage({ params }: PageProps) {
  const { topicNumber } = await params;
  const num = parseInt(topicNumber, 10);

  if (isNaN(num) || num < 1 || num > 12) {
    notFound();
  }

  const question = questions.find((q) => q.topicNumber === num);
  if (!question) notFound();

  const material = materials.find((m) => m.topicNumber === num) ?? null;

  return (
    <TopicMateriClient
      topicNumber={num}
      question={question}
      material={material}
      allTopics={questions.map((q) => ({
        topicNumber: q.topicNumber,
        topicName: q.topicName,
        topicTag: q.topicTag,
        isEnglish: q.isEnglish,
        available: materials.some((m) => m.topicNumber === q.topicNumber),
      }))}
    />
  );
}
