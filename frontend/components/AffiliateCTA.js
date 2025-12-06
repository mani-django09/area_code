export default function AffiliateCTA({ areaCode }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 my-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-3">🔍 Unknown Caller from {areaCode}?</h3>
      <p className="mb-4 text-blue-50">
        Discover who's calling you with a reverse phone lookup. Get instant results including name, address, and more.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://www.truthfinder.com?aff=YOUR_AFFILIATE_ID"
          target="_blank"
          rel="nofollow noopener"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-center"
        >
          🔎 TruthFinder Lookup →
        </a>
        <a
          href="https://www.beenverified.com?aff=YOUR_AFFILIATE_ID"
          target="_blank"
          rel="nofollow noopener"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition text-center"
        >
          ✅ BeenVerified Search →
        </a>
      </div>
      <p className="text-xs text-blue-100 mt-3">
        *Affiliate disclosure: We may earn a commission from these services at no cost to you.
      </p>
    </div>
  );
}