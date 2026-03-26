import { notFound } from 'next/navigation';
import { questions } from '@/lib/questions';
import UjianClient from './UjianClient';

interface Props {
  params: Promise<{ nomor: string }>;
}

export default async function UjianPage({ params }: Props) {
  const { nomor } = await params;
  const questionNumber = parseInt(nomor, 10);

  if (
    isNaN(questionNumber) ||
    questionNumber < 1 ||
    questionNumber > questions.length
  ) {
    notFound();
  }

  const question = questions[questionNumber - 1];

  return <UjianClient question={question} questionNumber={questionNumber} />;
}

export function generateStaticParams() {
  return questions.map((q) => ({
    nomor: String(q.topicNumber),
  }));
}
