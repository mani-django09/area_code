import { useState } from 'react';

export function SearchWithFilters({ onSearch, filters = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, activeFilters);
  };

  const toggleFilter = (key, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? null : value
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      {/* Filters */}
      {filters.length > 0 && (
        <div className="space-y-4">
          {filters.map((filter, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 mb-2">{filter.label}</h3>
              <div className="flex flex-wrap gap-2">
                {filter.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => toggleFilter(filter.key, option.value)}
                    className={`px-4 py-2 rounded-lg border-2 font-medium transition ${
                      activeFilters[filter.key] === option.value
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}