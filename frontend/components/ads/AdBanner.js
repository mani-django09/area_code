import { useEffect } from 'react';

export default function AdBanner({ 
  adSlot, 
  style = {},
  className = ''
}) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-6913093595582462"
        data-ad-slot={adSlot}
      />
    </div>
  );
}