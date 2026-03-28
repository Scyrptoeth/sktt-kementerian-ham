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
      role="timer"
      aria-live="polite"
      aria-label={`Sisa waktu ${formatTime(timeLeft)}`}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg text-lg
        transition-colors duration-300 border-2
        ${isCritical
          ? 'bg-danger-light text-danger border-rose-dust-300 animate-pulse'
          : isWarning
          ? 'bg-rose-dust-100 text-rose-dust-500 border-rose-dust-300'
          : 'bg-bg-secondary text-text-primary border-sand-300'
        }
      `}
    >
      <svg
        className={`w-5 h-5 ${isCritical ? 'text-danger' : isWarning ? 'text-rose-dust-400' : 'text-text-secondary'}`}
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
      <span className="font-bold timer-digit">{formatTime(timeLeft)}</span>
      {!isRunning && (
        <span className="text-xs font-normal opacity-60">(dijeda)</span>
      )}
    </div>
  );
}
