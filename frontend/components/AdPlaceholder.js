// frontend/components/AdPlaceholder.js
import { memo, useEffect, useRef } from 'react';

// Fixed dimensions for each ad type - PREVENTS CLS
const AD_SIZES = {
  banner: { 
    height: '90px', 
    minHeight: '90px',
    className: 'w-full max-w-[728px]',
    adSlot: 4066884856,
    width: 728,
    heightPx: 90
  },
  square: { 
    height: '250px', 
    minHeight: '250px',
    className: 'w-full max-w-[300px]',
    adSlot: null, 
    width: 300,
    heightPx: 250
  },
  sidebar: { 
    height: '250px', 
    minHeight: '250px',
    className: 'w-full max-w-[300px]',
    adSlot: '2562231497', 
    width: 300,
    heightPx: 250
  },
  leaderboard: {
    height: '90px',
    minHeight: '90px',
    className: 'w-full max-w-[970px]',
    adSlot: null, 
    width: 970,
    heightPx: 90
  },
  mobile: {
    height: '50px',
    minHeight: '50px',
    className: 'w-full max-w-[320px]',
    adSlot: null, 
    width: 320,
    heightPx: 50
  }
};

function AdPlaceholder({ position = 'banner', className = '' }) {
  const size = AD_SIZES[position] || AD_SIZES.banner;
  const adRef = useRef(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    // Only push ads if:
    // 1. We have an ad slot configured
    // 2. Window and adsbygoogle are available
    // 3. We haven't already pushed this ad
    if (size.adSlot && typeof window !== 'undefined' && !isAdPushed.current) {
      try {
        // Wait a bit for the ad element to be in DOM
        const timer = setTimeout(() => {
          if (window.adsbygoogle && adRef.current) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            isAdPushed.current = true;
          }
        }, 100);

        return () => clearTimeout(timer);
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [size.adSlot]);

  // If no ad slot configured, show placeholder
  if (!size.adSlot) {
    return (
      <div 
        className={`my-6 mx-auto ${size.className} ${className}`}
        style={{ height: size.height, minHeight: size.minHeight }}
      >
        <div 
          className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center"
        >
          <p className="text-gray-400 font-medium text-sm">
            [{position.toUpperCase()} AD]
          </p>
        </div>
      </div>
    );
  }

  // Render actual AdSense ad
  return (
    <div 
      ref={adRef}
      className={`my-6 mx-auto ${size.className} ${className}`}
      style={{ height: size.height, minHeight: size.minHeight }}
    >
      <ins 
        className="adsbygoogle"
        style={{ 
          display: 'inline-block',
          width: `${size.width}px`,
          height: `${size.heightPx}px`
        }}
        data-ad-client="ca-pub-6913093595582462"
        data-ad-slot={size.adSlot}
      />
    </div>
  );
}

export default memo(AdPlaceholder);