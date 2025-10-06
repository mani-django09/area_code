export default function AreaCodeMap({ state, cities }) {
  // This would integrate with Google Maps API or similar
  return (
    <div className="bg-gray-100 rounded-lg p-8 my-8">
      <h3 className="text-2xl font-bold mb-4">Geographic Coverage</h3>
      <div className="bg-white rounded-lg h-96 flex items-center justify-center border-2 border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 mb-2">Map View Coming Soon</p>
          <p className="text-sm text-gray-500">
            Coverage: {state} - {cities.join(', ')}
          </p>
        </div>
        {/* In production, integrate actual map:
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          src={`https://maps.google.com/maps?q=${state}&output=embed`}
        ></iframe>
        */}
      </div>
    </div>
  );
}