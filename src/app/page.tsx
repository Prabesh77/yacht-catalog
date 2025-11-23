import { fetchYachts } from '@/services/yachtService';
import YachtList from '@/components/yachts/YachtList';

export default async function Home() {
  const yachts = await fetchYachts();

  return (
    <div className="min-h-screen luxury-pattern">
      <div className="container mx-auto px-4 py-16 md:px-8 md:py-24">
        <div className="mb-16 text-center animate-fade-in-up">
          <div className="inline-block mb-4 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight font-display animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            Luxury Yacht Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Discover our exclusive selection of world-class yachts
          </p>
          <div className="inline-block mt-6 animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
        </div>
        
        <YachtList yachts={yachts} />
      </div>
    </div>
  );
}
