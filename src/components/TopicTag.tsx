interface TopicTagProps {
  tag: string;
  isEnglish?: boolean;
}

export default function TopicTag({ tag, isEnglish = false }: TopicTagProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        tracking-wide uppercase
        ${isEnglish
          ? 'bg-amber-100 text-amber-800 border border-amber-300'
          : 'bg-navy-100 text-navy-700 border border-navy-200'
        }
      `}
    >
      {isEnglish && (
        <span className="mr-1 text-amber-600" aria-hidden="true">EN</span>
      )}
      {tag}
    </span>
  );
}
