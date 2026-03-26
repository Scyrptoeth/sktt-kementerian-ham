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
      ? 'text-red-500'
      : wordCount < 150
      ? 'text-orange-500'
      : wordCount >= 300
      ? 'text-green-600'
      : 'text-navy-600';

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
            ? 'bg-gray-50 border-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-white border-navy-200 text-gray-800 focus:border-navy-500 focus:ring-navy-200'
          }
        `}
        aria-label="Kolom jawaban esai"
      />
      <div className="flex items-center justify-between text-sm px-1">
        <div className="flex gap-4">
          <span className={`font-medium ${wordColor}`}>
            {wordCount} kata
          </span>
          <span className="text-gray-400">{charCount} karakter</span>
        </div>
        <div className="text-gray-400 text-xs">
          {wordCount < 150 ? 'Minimal 150 kata disarankan' : wordCount >= 300 ? 'Sangat baik!' : 'Kembangkan lebih lanjut'}
        </div>
      </div>
    </div>
  );
}
