// ==========================================
// frontend/pages/area-codes/index.js
// Browse All Area Codes Page
// ==========================================

import Layout from '../../components/Layout';
import AdPlaceholder from '../../components/AdPlaceholder';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { useState } from 'react';

export default function AllAreaCodes({ areaCodes, states, byState }) {
  const [selectedState, setSelectedState] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter codes
  const filteredCodes = areaCodes.filter(code => {
    const matchesState = selectedState === 'all' || code.state === selectedState;
    const matchesSearch = 
      code.code.includes(searchTerm) || 
      code.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.cities.some(city => city.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesState && matchesSearch;
  });

  return (
    <Layout>
      <NextSeo
        title="Browse All U.S. Area Codes - Complete Directory"
        description="Complete directory of 300+ U.S. area codes. Browse by state or search for specific codes. Find location, cities, and time zones."
        canonical="https://allareacodes.cloud/area-codes"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">All U.S. Area Codes</h1>
          <p className="text-xl text-blue-100">
            Complete directory of {areaCodes.length} area codes across the United States
          </p>
        </div>
      </div>

      <AdPlaceholder position="banner" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search & Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Box */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Area Codes
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by code, state, or city..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* State Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
              >
                <option value="all">All States ({areaCodes.length} codes)</option>
                {states.map(state => (
                  <option key={state.name} value={state.name}>
                    {state.name} ({state.count} codes)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredCodes.length} of {areaCodes.length} area codes
          </div>
        </div>

        {/* Area Codes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {filteredCodes.map((code) => (
            <Link
              key={code.code}
              href={`/${code.code}/area-code`}
              className="group bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {code.code}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {code.state}
                </div>
                <div className="text-xs text-gray-500 line-clamp-1">
                  {code.cities[0]}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {code.timezone.split(' ')[0]}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCodes.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No area codes found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedState('all');
              }}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          </div>
        )}

        <AdPlaceholder position="square" />

        {/* Browse by State Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by State
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {states.map((state) => (
              <Link
                key={state.name}
                href={`/state/${state.name.toLowerCase().replace(/ /g, '-')}`}
                className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-4 hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all text-center group"
              >
                <div className="font-semibold text-gray-700 group-hover:text-blue-700 mb-1">
                  {state.name}
                </div>
                <div className="text-sm text-gray-500">
                  {state.count} {state.count === 1 ? 'code' : 'codes'}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Facts */}
        <section className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Area Code Quick Facts
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-2">📱</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">300+</div>
              <div className="text-gray-600 text-sm">Active area codes in the U.S.</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-2">📅</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">1947</div>
              <div className="text-gray-600 text-sm">Year area codes were introduced</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
              <div className="text-gray-600 text-sm">States & territories covered</div>
            </div>
          </div>
        </section>

        {/* Info Box */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Note About Area Codes</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Area codes indicate where a phone number was originally registered, but with number portability, 
                people can keep their numbers when moving. For exact caller location, use a reverse phone lookup service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), '../data/areaCodes.json');
  const areaCodes = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  const stateCount = {};
  areaCodes.forEach(code => {
    stateCount[code.state] = (stateCount[code.state] || 0) + 1;
  });

  const states = Object.entries(stateCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const byState = {};
  areaCodes.forEach(code => {
    if (!byState[code.state]) {
      byState[code.state] = [];
    }
    byState[code.state].push(code);
  });

  return {
    props: {
      areaCodes: areaCodes.sort((a, b) => a.code.localeCompare(b.code)),
      states,
      byState
    }
  };
}