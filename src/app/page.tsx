import { Yacht } from '@/types/yacht';
import YachtCard from '@/components/yachts/YachtCard';

const dummyYachts: Yacht[] = [
  {
    id: '1',
    name: 'OCEAN DREAM',
    type: 'Motor',
    length: '45.00',
    maxPassengers: 12,
    maxPassengersCruising: null,
    bedrooms: 5,
    maxCrew: 8,
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    weeklyLowAhoy: '250000',
    weeklyLowRetail: '250000',
    currency: 'USD',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: false,
  },
  {
    id: '2',
    name: 'AZURE MAJESTY',
    type: 'Motor',
    length: '60.00',
    maxPassengers: 16,
    maxPassengersCruising: null,
    bedrooms: 7,
    maxCrew: 12,
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    weeklyLowAhoy: '450000',
    weeklyLowRetail: '450000',
    currency: 'USD',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: false,
  },
  {
    id: '3',
    name: 'ROYAL WAVE',
    type: 'Sail',
    length: '35.00',
    maxPassengers: 8,
    maxPassengersCruising: null,
    bedrooms: 4,
    maxCrew: 5,
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    weeklyLowAhoy: '180000',
    weeklyLowRetail: '180000',
    currency: 'USD',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: true,
  },
  {
    id: '4',
    name: 'PACIFIC STAR',
    type: 'Motor',
    length: '55.00',
    maxPassengers: 14,
    maxPassengersCruising: null,
    bedrooms: 6,
    maxCrew: 10,
    url: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&h=600&fit=crop',
    weeklyLowAhoy: '380000',
    weeklyLowRetail: '380000',
    currency: 'USD',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: false,
  },
  {
    id: '5',
    name: 'CRYSTAL SEAS',
    type: 'Motor',
    length: '40.00',
    maxPassengers: 10,
    maxPassengersCruising: null,
    bedrooms: 5,
    maxCrew: 7,
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    weeklyLowAhoy: '220000',
    weeklyLowRetail: '220000',
    currency: 'USD',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: false,
  },
  {
    id: '6',
    name: 'HORIZON EXPLORER',
    type: 'Motor',
    length: '50.00',
    maxPassengers: 12,
    maxPassengersCruising: null,
    bedrooms: 6,
    maxCrew: 9,
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    weeklyLowAhoy: '320000',
    weeklyLowRetail: '320000',
    currency: 'USD',
    acceptsWeeklyCharters: true,
    acceptsDayCharters: false,
  }
];

export default function Home() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyYachts.map((yacht) => (
            <YachtCard key={yacht.id} yacht={yacht} />
          ))}
        </div>
      </div>
    </div>
  );
}
