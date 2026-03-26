interface TopicTagProps {
  tag: string;
  isEnglish?: boolean;
  topicNumber?: number;
}

const topicColors: Record<number, string> = {
  1:  'bg-sage-100 text-sage-600 border border-sage-200',
  2:  'bg-lavender-100 text-lavender-400 border border-lavender-200',
  3:  'bg-sand-100 text-sand-500 border border-sand-200',
  4:  'bg-teal-soft-100 text-teal-soft-500 border border-teal-soft-200',
  5:  'bg-rose-dust-100 text-rose-dust-500 border border-rose-dust-200',
  6:  'bg-sage-100 text-sage-600 border border-sage-200',
  7:  'bg-lavender-100 text-lavender-400 border border-lavender-200',
  8:  'bg-sand-100 text-sand-500 border border-sand-200',
  9:  'bg-teal-soft-100 text-teal-soft-500 border border-teal-soft-200',
  10: 'bg-rose-dust-100 text-rose-dust-500 border border-rose-dust-200',
  11: 'bg-lavender-200 text-lavender-400 border border-lavender-300',
  12: 'bg-sage-100 text-sage-600 border border-sage-200',
};

export default function TopicTag({ tag, isEnglish = false, topicNumber }: TopicTagProps) {
  const colorClass = isEnglish
    ? 'bg-lavender-200 text-lavender-400 border border-lavender-300'
    : (topicNumber ? topicColors[topicNumber] : undefined) ?? 'bg-bg-card text-text-secondary border border-sand-200';

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        tracking-wide uppercase
        ${colorClass}
      `}
    >
      {isEnglish && (
        <span className="mr-1" aria-hidden="true">EN</span>
      )}
      {tag}
    </span>
  );
}
