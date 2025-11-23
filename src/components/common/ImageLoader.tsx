'use client';

interface ImageLoaderProps {
  className?: string;
}

export default function ImageLoader({ className = '' }: ImageLoaderProps) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br from-gold/20 via-gold/10 to-gold/5 flex items-center justify-center z-10 backdrop-blur-sm transition-opacity duration-500 ${className}`}>
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-2 border-gold/30 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-2 border-transparent border-t-gold rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
        <div className="absolute inset-2 border border-gold/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
      </div>
    </div>
  );
}
