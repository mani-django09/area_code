import Link from 'next/link';

export default function RelatedContent({ currentCode, allCodes }) {
  // Find codes in same state
  const currentAreaCode = allCodes.find(c => c.code === currentCode);
  if (!currentAreaCode) return null;

  const relatedCodes = allCodes
    .filter(c => 
      c.state === currentAreaCode.state && 
      c.code !== currentCode
    )
    .slice(0, 4);

  if (relatedCodes.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">
        More {currentAreaCode.state} Area Codes
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedCodes.map((code) => (
          <Link
            key={code.code}
            href={`/area-code/${code.code}`}
            className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg transition text-center"
          >
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {code.code}
            </div>
            <div className="text-sm text-gray-600">
              {code.cities[0]}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
