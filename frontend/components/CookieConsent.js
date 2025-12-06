import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve your experience and analyze traffic. 
          By continuing, you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Accept
          </button>
          <Link href="/privacy" className="px-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}