import Link from 'next/link';
import YachtDetails from '@/components/yachts/YachtDetails';
import { Yacht } from '@/types/yacht';

interface YachtDetailPageProps {
  params: {
    id: string;
  };
}

const getYachtData = (id: string): Yacht & { toys?: string } => {
  const dummyData: Yacht & { toys?: string } = {
    id: "2",
    name: "FIREBIRD",
    type: "Motor",
    length: "67.00",
    maxPassengers: 12,
    maxPassengersCruising: null,
    bedrooms: 6,
    maxCrew: 19,
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
    weeklyLowAhoy: "450000",
    weeklyLowRetail: "450000",
    currency: "EUR",
    toys: "Kayaking; Jet Ski; Wind Surfing; Scuba Diving Gear; Waterskis; Wakeboard; Seabob; Slide; Beach Club; Stand-up Jet Ski; Paddle Board; Diving Equiptment; Jellyfish Protection Pool; Banana Boat; inflatable towables; eFoils; Swimming Platform",
    acceptsWeeklyCharters: true,
    acceptsDayCharters: false,
  };
  
  return dummyData;
};

export default function YachtDetailPage({ params }: YachtDetailPageProps) {
  const yacht = getYachtData(params.id);

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
