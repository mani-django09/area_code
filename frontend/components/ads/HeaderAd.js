// FILE 2: components/ads/HeaderAd.js
// Header Banner Ad (728x90)
// ============================================
import { useEffect } from 'react';

export default function HeaderAd() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense Header Ad error:', err);
    }
  }, []);

  return (
    <div className="header-ad-wrapper">
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '728px', height: '90px' }}
        data-ad-client="ca-pub-6913093595582462"
        data-ad-slot="4066884856"
      />
    </div>
  );
}
