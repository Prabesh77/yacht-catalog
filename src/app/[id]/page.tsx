import Link from 'next/link';
import YachtDetails from '@/components/yachts/YachtDetails';
import { fetchYachtById } from '@/services/yachtService';
import { notFound } from 'next/navigation';

interface YachtDetailPageProps {
  params: {
    id: string;
  };
}

export default async function YachtDetailPage({ params }: YachtDetailPageProps) {
  const resolvedParams = await params;
  const yacht = await fetchYachtById(resolvedParams?.id);

  if (!yacht) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-dark">
      <div className="container mx-auto px-4 py-8 md:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-gold transition-colors duration-200 mb-6 group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium uppercase tracking-wide">Back to Collection</span>
        </Link>

        <YachtDetails yacht={yacht} />
      </div>
    </div>
  );
}
