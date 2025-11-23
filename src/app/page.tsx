import { fetchYachts } from '@/services/yachtService';
import YachtList from '@/components/yachts/YachtList';

export default async function Home() {
  const yachts = await fetchYachts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream-dark">
      <div className="container mx-auto px-4 py-16 md:px-8 md:py-24">
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight font-display">
            Luxury Yacht Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our exclusive selection of world-class yachts, where unparalleled elegance meets exceptional craftsmanship
          </p>
          <div className="inline-block mt-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
        </div>
        
        <YachtList yachts={yachts} />
      </div>
    </div>
  );
}
