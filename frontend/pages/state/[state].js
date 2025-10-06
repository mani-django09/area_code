// ==========================================
// frontend/pages/state/[state].js
// Auto-generates pages for all 50 U.S. states
// Fixed: Handles lowercase URLs like /state/florida
// ==========================================

import Layout from "../../components/Layout"
import AdPlaceholder from "../../components/AdPlaceholder"
import { NextSeo } from "next-seo"
import Link from "next/link"
import fs from "fs"
import path from "path"

export default function StatePage({ state, codes, stateInfo }) {
  if (!codes || codes.length === 0) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">State Not Found</h1>
          <Link href="/area-codes" className="text-blue-600 hover:underline">
            Browse all area codes
          </Link>
        </div>
      </Layout>
    )
  }

  // Group codes by timezone
  const codesByTimezone = codes.reduce((acc, code) => {
    if (!acc[code.timezone]) {
      acc[code.timezone] = []
    }
    acc[code.timezone].push(code)
    return acc
  }, {})

  return (
    <Layout>
      <NextSeo
        title={`${state} Area Codes - Complete List with Cities and Time Zones`}
        description={`Find all ${codes.length} area codes for ${state}. View locations, cities served, and time zones for each ${state} area code.`}
        canonical={`https://yoursite.com/state/${state.toLowerCase().replace(/ /g, "-")}`}
      />

      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/area-codes" className="hover:text-white transition-colors">
              Area Codes
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white font-medium">{state}</span>
          </nav>

          {/* Header with stats */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                State Directory
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                {state} Area Codes
              </h1>
              <p className="text-lg text-blue-100">
                {codes.length} area code{codes.length !== 1 ? "s" : ""} • {Object.keys(codesByTimezone).length} time
                zone
                {Object.keys(codesByTimezone).length !== 1 ? "s" : ""} • {new Set(codes.flatMap((c) => c.cities)).size}+
                cities
              </p>
            </div>

            {/* Compact stats badge */}
            <div className="flex gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                <div className="text-xs text-blue-100 mb-0.5">Active Codes</div>
                <div className="text-2xl font-bold text-white">{codes.length}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
                <div className="text-xs text-blue-100 mb-0.5">Time Zones</div>
                <div className="text-2xl font-bold text-white">{Object.keys(codesByTimezone).length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full shadow-lg"></span>
                All {state} Area Codes
              </h2>
              <div className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {codes.length} total
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {codes.map((code) => (
                <Link
                  key={code.code}
                  href={`/area-code/${code.code}`}
                  className="group bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all">
                      {code.code}
                    </div>
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg group-hover:from-blue-200 group-hover:to-indigo-200 transition-all shadow-sm">
                      <svg
                        className="w-5 h-5 text-blue-600 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <span className="line-clamp-1 font-medium">{code.cities.slice(0, 2).join(", ")}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium">{code.timezone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-md text-xs font-semibold shadow-sm">
                        Est. {code.year}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <AdPlaceholder position="square" />

          <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 shadow-lg mb-8 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full shadow-lg"></span>
              Codes by Time Zone
            </h2>

            <div className="space-y-6">
              {Object.entries(codesByTimezone).map(([timezone, tzCodes]) => (
                <div
                  key={timezone}
                  className="pb-6 border-b-2 border-gray-100 last:border-0 last:pb-0 hover:bg-gray-50 -mx-4 px-4 py-4 rounded-lg transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-sm">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      {timezone}
                    </h3>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-bold shadow-sm">
                      {tzCodes.length} code{tzCodes.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tzCodes.map((code) => (
                      <Link
                        key={code.code}
                        href={`/area-code/${code.code}`}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-sm font-bold hover:from-blue-100 hover:to-indigo-100 hover:text-blue-700 transition-all hover:shadow-md transform hover:-translate-y-0.5 border border-gray-300 hover:border-blue-400"
                      >
                        {code.code}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <article className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 border-2 border-blue-200 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full shadow-lg"></span>
              About {state} Area Codes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {state} is served by <strong className="text-gray-900">{codes.length}</strong> area code
              {codes.length !== 1 ? "s" : ""}, covering various cities and regions throughout the state.{" "}
              {codes.length > 1
                ? "Each area code has its own service area and may overlap with other codes in some locations."
                : "This code serves the entire state."}
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-xl p-6 shadow-md mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg shadow-sm">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Getting Unknown Calls from {state}?</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Identify unknown callers instantly with reverse phone lookup. Protect yourself from spam and scam
                    calls.
                  </p>
                  <a
                    href="https://www.truthfinder.com/phone/?utm_source=areacode"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-bold hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Lookup Unknown Numbers
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border-l-4 border-blue-500 rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Quick Facts
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>{codes.length}</strong> active area codes in {state}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Operates across <strong>{Object.keys(codesByTimezone).length}</strong> time zone
                    {Object.keys(codesByTimezone).length !== 1 ? "s" : ""}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Oldest code established in <strong>{Math.min(...codes.map((c) => c.year))}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

// ==========================================
// Auto-generate paths for all 50 states
// ==========================================

export async function getStaticPaths() {
  const dataPath = path.join(process.cwd(), "../data/areaCodes.json")
  const areaCodes = JSON.parse(fs.readFileSync(dataPath, "utf8"))

  // Get unique states and convert to lowercase slugs
  const states = [...new Set(areaCodes.map((code) => code.state))]

  const paths = states.map((state) => ({
    params: {
      state: state.toLowerCase().replace(/ /g, "-"), // Convert to lowercase slug
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

// ==========================================
// Get data for each state
// ==========================================

export async function getStaticProps({ params }) {
  const dataPath = path.join(process.cwd(), "../data/areaCodes.json")
  const areaCodes = JSON.parse(fs.readFileSync(dataPath, "utf8"))

  // Convert URL slug back to proper state name for matching
  const stateSlug = params.state

  // Find the matching state (case-insensitive, handle spaces)
  const matchedState = [...new Set(areaCodes.map((code) => code.state))].find(
    (state) => state.toLowerCase().replace(/ /g, "-") === stateSlug,
  )

  if (!matchedState) {
    return {
      props: {
        state: null,
        codes: [],
      },
    }
  }

  // Filter codes for this state
  const codes = areaCodes.filter((code) => code.state === matchedState)

  // Sort by code number
  codes.sort((a, b) => a.code.localeCompare(b.code))

  return {
    props: {
      state: matchedState, // Return the properly capitalized state name
      codes,
    },
  }
}
