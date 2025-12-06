export default function AdPlaceholder({ position = 'banner' }) {
  const heights = {
    banner: 'h-24',
    square: 'h-64',
    sidebar: 'h-96'
  };

  return (
    <div className={`my-6 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg ${heights[position]} flex items-center justify-center`}>
      <p className="text-gray-500 font-semibold">
        [{position.toUpperCase()} AD PLACEMENT]
      </p>
    </div>
  );
}