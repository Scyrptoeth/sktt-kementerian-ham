'use client';

interface TimerProps {
  timeLeft: number;
  isRunning: boolean;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export default function Timer({ timeLeft, isRunning }: TimerProps) {
  const isWarning = timeLeft < 120;
  const isCritical = timeLeft < 60;

  return (
    <div
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold
        transition-colors duration-300
        ${isCritical
          ? 'bg-red-100 text-red-700 border-2 border-red-500 animate-pulse'
          : isWarning
          ? 'bg-orange-100 text-orange-700 border-2 border-orange-400'
          : 'bg-navy-50 text-navy-700 border-2 border-navy-200'
        }
      `}
    >
      <svg
        className={`w-5 h-5 ${isCritical ? 'text-red-500' : isWarning ? 'text-orange-500' : 'text-navy-500'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{formatTime(timeLeft)}</span>
      {!isRunning && (
        <span className="text-xs font-normal opacity-60">(dijeda)</span>
      )}
    </div>
  );
}
