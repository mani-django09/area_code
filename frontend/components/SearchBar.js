
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [searchCode, setSearchCode] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCode.trim()) {
      router.push(`/area-code/${searchCode.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
          placeholder="Enter area code (e.g., 213, 305, 404)"
          className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          pattern="[0-9]{3}"
          maxLength="3"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
}
