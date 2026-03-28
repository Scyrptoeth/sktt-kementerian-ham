import { Suspense } from 'react';
import HasilClient from './HasilClient';

export default function HasilPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-bg-primary">
          <p className="text-text-muted">Memuat hasil...</p>
        </div>
      }
    >
      <HasilClient />
    </Suspense>
  );
}
