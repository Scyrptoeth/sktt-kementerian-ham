interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-sm font-medium text-navy-700">
        <span>Soal {current} dari {total}</span>
        <span className="text-navy-500">{percent}%</span>
      </div>
      <div className="w-full bg-navy-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-navy-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={1}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
}
