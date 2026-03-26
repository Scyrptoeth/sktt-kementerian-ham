'use client';

interface EssayInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

function countWords(text: string): number {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

export default function EssayInput({
  value,
  onChange,
  disabled = false,
  placeholder = 'Tulis jawaban Anda di sini...',
}: EssayInputProps) {
  const wordCount = countWords(value);
  const charCount = value.length;

  const wordColor =
    wordCount < 50
      ? 'text-danger'
      : wordCount < 150
      ? 'text-warning'
      : wordCount >= 300
      ? 'text-success'
      : 'text-teal-soft-500';

  return (
    <div className="flex flex-col gap-2">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        rows={14}
        className={`
          w-full px-4 py-3 rounded-lg border-2 font-sans text-base leading-relaxed
          resize-y transition-colors duration-200
          focus:outline-none focus:ring-2
          ${disabled
            ? 'bg-bg-card border-sand-200 text-text-muted cursor-not-allowed'
            : 'bg-white border-sand-300 text-text-primary focus:border-teal-soft-400 focus:ring-teal-soft-100 essay-textarea'
          }
        `}
        aria-label="Kolom jawaban esai"
      />
      <div className="flex items-center justify-between text-sm px-1">
        <div className="flex gap-4">
          <span className={`font-medium ${wordColor}`}>
            {wordCount} kata
          </span>
          <span className="text-text-muted">{charCount} karakter</span>
        </div>
        <div className="text-text-muted text-xs">
          {wordCount < 150 ? 'Minimal 150 kata disarankan' : wordCount >= 300 ? 'Sangat baik!' : 'Kembangkan lebih lanjut'}
        </div>
      </div>
    </div>
  );
}
