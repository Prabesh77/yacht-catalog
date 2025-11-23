'use client';

export default function Loader() {
  return (
    <div className="min-h-screen luxury-pattern flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-gold/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-gold rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-gold/10 rounded-full"></div>
          <div className="absolute inset-4 border-4 border-transparent border-b-gold-dark rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-primary uppercase tracking-wider font-display">
            Loading
          </h2>
          <div className="flex items-center justify-center gap-1">
            <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-gold-dark rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <p className="text-sm text-gray-600 uppercase tracking-wide mt-4">
            Preparing your luxury collection
          </p>
        </div>
      </div>
    </div>
  );
}

