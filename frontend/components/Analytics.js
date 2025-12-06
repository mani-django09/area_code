import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Analytics() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Google Analytics page view
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'YOUR_GA_ID', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}