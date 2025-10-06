import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function SearchBarAdvanced() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchTerm.length > 0) {
      // Fetch suggestions from API or use static data
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/area-codes`);
          const filtered = response.data.filter(code => 
            code.code.startsWith(searchTerm) || 
            code.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
            code.cities.some(city => city.toLowerCase().includes(searchTerm.toLowerCase()))
          ).slice(0, 5);
          setSuggestions(filtered);
          setShowSuggestions(true);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/area-code/${searchTerm.trim()}`);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (code) => {
    router.push(`/area-code/${code}`);
    setSearchTerm('');
    setShowSuggestions(false);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <form onSubmit={handleSearch}>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
              placeholder="Enter area code, city, or state..."
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                {suggestions.map((item) => (
                  <div
                    key={item.code}
                    onClick={() => selectSuggestion(item.code)}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-blue-600">{item.code}</span>
                        <span className="text-gray-600 ml-2">— {item.state}</span>
                      </div>
                      <span className="text-sm text-gray-500">{item.cities[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}