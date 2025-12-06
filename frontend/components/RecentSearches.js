import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RecentSearches() {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // Get from localStorage (but remember Claude artifacts don't support localStorage)
    // In production, this would work fine
    const searches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    setRecentSearches(searches);
  }, []);

  if (recentSearches.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((code, index) => (
          <Link
            key={index}
            href={`/area-code/${code}`}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition"
          >
            {code}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Helper function to save search
export function saveSearch(code) {
  if (typeof window !== 'undefined') {
    const searches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const updated = [code, ...searches.filter(s => s !== code)].slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  }
}
