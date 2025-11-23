import Image from 'next/image';
import { Yacht } from '@/types/yacht';
import { formatPrice } from '@/utils/formatPrice';

interface YachtDetailsProps {
  yacht: Yacht & { toys?: string };
}

export default function YachtDetails({ yacht }: YachtDetailsProps) {
  const toysList = yacht.toys ? yacht.toys.split('; ').filter(Boolean) : [];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100/50">
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <Image
          src={yacht.url}
          alt={yacht.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="mb-3">
            <span className="inline-block px-4 py-1.5 bg-gold/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wide mb-3">
              {yacht.type}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wider font-display mb-3 drop-shadow-lg">
            {yacht.name}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark"></div>
        </div>
      </div>

      <div className="p-6 md:p-10 bg-gradient-to-b from-white via-cream/30 to-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/20">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30">
              <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Length</p>
              <p className="text-lg font-bold text-primary">{yacht.length}m</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/20">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30">
              <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Guests</p>
              <p className="text-lg font-bold text-primary">{yacht.maxPassengers}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/20">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30">
              <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Bedrooms</p>
              <p className="text-lg font-bold text-primary">{yacht.bedrooms}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border border-gold/20">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/30">
              <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Crew</p>
              <p className="text-lg font-bold text-primary">{yacht.maxCrew}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary uppercase tracking-wider font-display mb-6">
                Charter Information
              </h2>
              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-br from-white to-cream/30 rounded-xl border border-gold/10">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">Weekly Charter</p>
                  <p className="text-3xl font-bold text-primary font-display">
                    {formatPrice(parseInt(yacht.weeklyLowRetail), yacht.currency)} <span className="text-lg text-gray-500">/ week</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Starting from • {yacht.currency}</p>
                </div>
              </div>
            </div>

            {toysList.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-primary uppercase tracking-wider font-display mb-6">
                  Water Toys & Amenities
                </h2>
                <div className="flex flex-wrap gap-3">
                  {toysList.map((toy, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-lg text-sm font-medium text-primary uppercase tracking-wide"
                    >
                      {toy}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 p-6 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl shadow-xl border border-gold/20">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider font-display mb-6">
                Book Charter
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs text-gold-light uppercase tracking-wide mb-2">Weekly Rate</p>
                  <p className="text-3xl font-bold text-white font-display">
                    {formatPrice(parseInt(yacht.weeklyLowRetail), yacht.currency)}
                  </p>
                </div>
                <div className="pt-4 border-t border-gold/20">
                  <p className="text-xs text-gold-light uppercase tracking-wide mb-2">Charter Type</p>
                  <div className="space-y-2">
                    {yacht.acceptsWeeklyCharters && (
                      <div className="flex items-center gap-2 text-white text-sm">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Weekly Charters Available</span>
                      </div>
                    )}
                    {yacht.acceptsDayCharters && (
                      <div className="flex items-center gap-2 text-white text-sm">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Day Charters Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className="w-full px-6 py-4 bg-gradient-to-r from-gold via-gold-dark to-gold text-white text-sm font-semibold rounded-xl hover:from-gold-dark hover:via-gold hover:to-gold-dark transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide">
                Request Charter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
