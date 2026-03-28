import { MetadataRoute } from 'next';
import { packetInfoList } from '@/lib/questions';

const BASE_URL = 'https://projek-sktt-kementerian-ham.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/ujian`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/materi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/materi/panduan-esai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const materiRoutes: MetadataRoute.Sitemap = Array.from({ length: 12 }, (_, i) => ({
    url: `${BASE_URL}/materi/${i + 1}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const ujianRoutes: MetadataRoute.Sitemap = packetInfoList.flatMap((packet) =>
    Array.from({ length: packet.questionCount }, (_, i) => ({
      url: `${BASE_URL}/ujian/${packet.id}/${i + 1}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...materiRoutes, ...ujianRoutes];
}
