'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getRandomUnsplashImage } from '@/utils/imageFallback';
import ImageLoader from './ImageLoader';

interface YachtImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function YachtImage({
  src,
  alt,
  fill,
  className,
  priority,
  width,
  height,
}: YachtImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setIsLoading(true);
      setImgSrc(getRandomUnsplashImage());
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (fill) {
    return (
      <div className="relative w-full h-full">
        {isLoading && <ImageLoader />}
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={className}
          priority={priority}
          onError={handleError}
          onLoad={handleLoad}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && <ImageLoader />}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}
