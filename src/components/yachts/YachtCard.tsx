import Image from 'next/image';
import Link from 'next/link';
import { Yacht } from '@/types/yacht';
import { formatPrice } from '@/utils/formatPrice';

interface YachtCardProps {
  yacht: Yacht;
}

export default function YachtCard({ yacht }: YachtCardProps) {
  return (
    <Link href={`/${yacht.id}`} className="group block">
      <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 hover:border-gold/30 group-hover:border-gold/50">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={yacht.url}
            alt={yacht.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-gold/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wide shadow-lg">
              {yacht.type}
            </span>
          </div>
        </div>
        
        <div className="p-4 bg-gradient-to-b from-white via-cream/30 to-white">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-primary uppercase tracking-wider font-display mb-1">
              {yacht.name}
            </h3>
            <div className="w-10 h-0.5 bg-gradient-to-r from-gold to-gold-dark mt-1.5"></div>
          </div>
          
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30 shadow-sm">
                <svg className="w-4 h-4 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Length</p>
                <p className="text-sm font-bold text-primary mt-0.5">{yacht.length}m</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30 shadow-sm">
                <svg className="w-4 h-4 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Guests</p>
                <p className="text-sm font-bold text-primary mt-0.5">{yacht.maxPassengers}</p>
              </div>
            </div>
          </div>
          
          <div className="pt-3 border-t border-gradient-to-r from-transparent via-gold/20 to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider font-medium">Starting from</p>
                <p className="text-2xl font-bold text-primary font-display tracking-tight">
                  {formatPrice(parseInt(yacht.weeklyLowRetail), yacht.currency)}
                </p>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-primary via-secondary to-primary text-white text-xs font-semibold rounded-lg hover:from-gold hover:via-gold-dark hover:to-gold transition-all duration-500 transform group-hover:scale-105 shadow-md hover:shadow-lg border border-gold/20 uppercase tracking-wide">
                Explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
