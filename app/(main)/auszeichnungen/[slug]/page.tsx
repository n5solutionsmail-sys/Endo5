import { awards } from '@/data/awards';
import AwardDetailClient from './AwardDetailClient';

export function generateStaticParams() {
  return awards.map((award) => ({ slug: award.slug }));
}

export default function AwardDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <AwardDetailClient params={params} />;
}
