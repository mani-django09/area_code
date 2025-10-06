"use client"

import Layout from "../components/Layout"
import { useRouter } from "next/router"
import AdPlaceholder from "../components/AdPlaceholder"
import AffiliateCTA from "../components/AffiliateCTA"
import { NextSeo } from "next-seo"
import Link from "next/link"
import { useState } from "react"

export default function Home({ topCodes, recentCodes, statistics }) {
  const [searchCode, setSearchCode] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchCode.trim()) {
      router.push(`/${searchCode.trim()}/area-code`)
    }
  }

  return (
    <Layout>
      <NextSeo
        title="Area Code Finder - Lookup Any U.S. Area Code Location, City & Time Zone"
        description="Find detailed information about 300+ U.S. area codes. Discover location, cities served, time zones, spam call reports, and reverse phone lookup tools. Free area code directory 2025."
        canonical="https://allareacodes.cloud/"
        openGraph={{
          title: "Area Code Finder - Complete U.S. Area Code Directory",
          description:
            "Lookup any area code to find location, cities, time zones, and identify unknown callers. 300+ area codes with detailed information.",
          images: [{ url: "https://allareacodes.cloud/og-image.jpg" }],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "area code lookup, phone number lookup, reverse phone lookup, area code finder, spam call identifier, US area codes",
          },
        ]}
      />

      {/* HERO SECTION - UNCHANGED */}
      <section className="relative bg-white border-b border-gray-200">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>300+ U.S. Area Codes • Always Free • Updated Daily</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Find Any Area Code</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Instant lookup for location, time zone, and caller identification
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                  placeholder="Enter area code (e.g., 213)"
                  pattern="[0-9]{3}"
                  maxLength="3"
                  className="w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition shadow-sm"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-500 mr-3">Popular:</span>
              <div className="inline-flex flex-wrap gap-2 justify-center">
                {["213", "305", "212", "404", "702", "415"].map((code) => (
                  <Link
                    key={code}
                    href={`/${code}/area-code`}
                    className="inline-block px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                  >
                    {code}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Instant Results</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">100% Secure</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5a1 1 0 011-1zm8-2v2H7V7a3 3 0 016 0z" />
                </svg>
                <span className="font-medium">10k+ Daily Users</span>
              </div>
            </div>
          </div>

          <nav className="mt-8 text-center" aria-label="Quick navigation">
            <div className="inline-flex items-center gap-6 text-sm">
              <Link href="/area-codes" className="text-gray-600 hover:text-blue-600 font-medium transition">
                Browse All Codes
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition">
                How It Works
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/blog/how-to-identify-spam-calls"
                className="text-gray-600 hover:text-blue-600 font-medium transition"
              >
                Identify Spam Calls
              </Link>
            </div>
          </nav>
        </div>
      </section>

      <AdPlaceholder position="banner" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <section className="mb-10" aria-labelledby="top-codes-heading">
          <header className="text-center mb-6">
            <h2 id="top-codes-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Most Searched Area Codes
            </h2>
            <p className="text-base text-gray-600">
              Discover the most popular area codes searched by millions of users
            </p>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {topCodes.map((code, idx) => (
              <Link
                key={code.code}
                href={`/${code.code}/area-code`}
                className="group relative bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-lg transition-all"
                aria-label={`View details for area code ${code.code} in ${code.state}`}
              >
                <span
                  className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  aria-label={`Rank ${idx + 1}`}
                >
                  {idx + 1}
                </span>

                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:scale-105 transition-transform">
                    {code.code}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">{code.state}</div>
                  <div className="text-xs text-gray-500 truncate">{code.cities?.[0]}</div>
                </div>

                <svg
                  className="absolute bottom-2 right-2 w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/area-codes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              View All 300+ Area Codes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        <AdPlaceholder position="square" />

        <section className="mb-10" aria-labelledby="features-heading">
          <header className="text-center mb-6">
            <h2 id="features-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Everything You Need to Know
            </h2>
            <p className="text-base text-gray-600">Comprehensive area code information at your fingertips</p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                title: "Location Information",
                description: "Find exact state, city coverage, and geographic boundaries for any area code.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Time Zone Details",
                description: "Know the exact time zone and current time for scheduling calls across regions.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Spam Detection",
                description: "Identify potential spam calls with real user reports and safety tips.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
                title: "Reverse Lookup",
                description: "Discover who called you with powerful reverse phone lookup tools.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                title: "Historical Data",
                description: "Learn when each area code was established and track its evolution.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                ),
                title: "Related Codes",
                description: "Explore related and nearby area codes serving the same region.",
              },
            ].map((feature, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="mb-3" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <AffiliateCTA areaCode="unknown" />

        <section className="mb-10" aria-labelledby="states-heading">
          <header className="text-center mb-6">
            <h2 id="states-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Browse by State
            </h2>
            <p className="text-base text-gray-600">Select your state to see all available area codes</p>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {[
              "California",
              "Texas",
              "Florida",
              "New York",
              "Pennsylvania",
              "Illinois",
              "Ohio",
              "Georgia",
              "North Carolina",
              "Michigan",
              "New Jersey",
              "Virginia",
              "Washington",
              "Arizona",
              "Massachusetts",
              "Tennessee",
              "Indiana",
              "Missouri",
              "Maryland",
              "Wisconsin",
            ].map((state) => (
              <Link
                key={state}
                href={`/state/${state.toLowerCase().replace(" ", "-")}`}
                className="bg-gray-50 border border-gray-200 rounded-md p-3 hover:bg-blue-50 hover:border-blue-300 transition-colors text-center text-sm font-medium text-gray-700 hover:text-blue-700"
              >
                {state}
              </Link>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/area-codes" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View all 50 states →
            </Link>
          </div>
        </section>

        <AdPlaceholder position="square" />

        <section className="mb-10" aria-labelledby="what-is-heading">
          <article className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 md:p-8 border border-blue-100">
            <h2 id="what-is-heading" className="text-2xl md:text-3xl font-bold mb-4 text-center">
              What is an Area Code?
            </h2>

            <div className="prose prose-sm md:prose-base max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                An <strong>area code</strong> is a three-digit number that identifies a specific geographic region
                within the North American Numbering Plan (NANP). Originally introduced in 1947, area codes streamline
                long-distance calling and automate telephone switching across the United States, Canada, and several
                Caribbean nations.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-base font-bold text-blue-600 mb-2">How They Work</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Area codes tell the telephone network which geographic region to route calls to, creating unique
                    identifiers for every phone line.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-base font-bold text-blue-600 mb-2">Geographic Coverage</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Each code covers a specific region, from entire states to portions of major cities, based on
                    population density.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-base font-bold text-blue-600 mb-2">Historical Evolution</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    From 86 original codes in 1947 to over 300 today through splits and overlays as populations grew.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-base font-bold text-blue-600 mb-2">Modern Usage</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Number portability means you can keep your area code when moving, making location tracking less
                    reliable.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Area Codes Matter Today</h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Identify Unknown Callers:</strong> Quickly determine call origins to screen numbers and
                    avoid scams
                  </span>
                </li>
                <li className="flex gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Business Use:</strong> Local area codes increase trust and answer rates for companies
                  </span>
                </li>
                <li className="flex gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Time Zone Awareness:</strong> Avoid calling at inconvenient times across regions
                  </span>
                </li>
                <li className="flex gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Spam Detection:</strong> Recognize patterns used by scammers and telemarketers
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="mb-10" aria-labelledby="faq-heading">
          <header className="text-center mb-6">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600">Everything you need to know about area codes</p>
          </header>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "How do I find out what area code a phone number is from?",
                a: "Simply enter the three-digit area code in our search bar above. You'll instantly see the state, major cities, time zone, and additional information about that area code.",
              },
              {
                q: "Can area codes tell me the exact location of a caller?",
                a: "Area codes indicate the general region where a phone number was originally assigned, but due to number portability, people can keep their numbers when moving. For exact location tracking, use a reverse phone lookup service.",
              },
              {
                q: "Why am I getting calls from unfamiliar area codes?",
                a: "Unknown area code calls could be from legitimate businesses, friends traveling, or scammers. Many telemarketers use various area codes to appear local. Always verify unknown callers before sharing personal information.",
              },
              {
                q: "What is an area code overlay?",
                a: "An overlay occurs when a new area code is assigned to the same geographic region as an existing code. For example, Los Angeles has multiple overlapping codes (213, 323, 310, 424). Overlays require 10-digit dialing for all calls.",
              },
              {
                q: "How many area codes are there in the United States?",
                a: "There are currently over 300 active geographic area codes in the United States, with new codes being added as regions run out of available numbers. Our database includes all active area codes with detailed information.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary
                  className="cursor-pointer p-4 font-semibold text-gray-900 flex justify-between items-start gap-4"
                  itemProp="name"
                >
                  <span className="flex-1 text-sm md:text-base">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div
                  className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{faq.a}</span>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
            >
              View All FAQs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        <AdPlaceholder position="square" />

        <section className="mb-10" aria-labelledby="recent-heading">
          <header className="text-center mb-6">
            <h2 id="recent-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Recently Added Area Codes
            </h2>
            <p className="text-base text-gray-600">Stay updated with the newest area codes</p>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recentCodes.map((code) => (
              <Link
                key={code.code}
                href={`/${code.code}/area-code`}
                className="bg-green-50 border border-green-200 rounded-lg p-4 hover:border-green-400 hover:shadow-md transition-all"
                aria-label={`View details for new area code ${code.code} in ${code.state}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">NEW</span>
                  <span className="text-gray-600 text-xs">{code.year}</span>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">{code.code}</div>
                <div className="text-sm text-gray-700 font-semibold mb-0.5">{code.state}</div>
                <div className="text-xs text-gray-600 truncate">{code.cities.join(", ")}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10" aria-labelledby="stats-heading">
          <div className="bg-blue-600 rounded-xl p-6 md:p-8 text-white">
            <h2 id="stats-heading" className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Area Code Statistics
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statistics.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-blue-100">{stat.label}</div>
                  <p className="text-xs text-blue-200 mt-1">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10" aria-labelledby="cta-heading">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 md:p-8 text-center text-white">
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Find Any Area Code?
            </h2>
            <p className="text-base md:text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Access our complete database of 300+ area codes with detailed information and spam reports.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/area-codes"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition shadow-md text-base w-full sm:w-auto"
              >
                Browse All Area Codes
              </Link>
              <Link
                href="/faq"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition text-base w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Area Code Finder",
            url: "https://allareacodes.cloud",
            description:
              "Find detailed information about 300+ U.S. area codes including location, time zones, and spam reports.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://allareacodes.cloud/{search_term_string}/area-code",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const topCodes = [
    { code: "212", state: "New York", cities: ["Manhattan", "New York City"] },
    { code: "310", state: "California", cities: ["Santa Monica", "Beverly Hills"] },
    { code: "305", state: "Florida", cities: ["Miami", "Key West"] },
    { code: "312", state: "Illinois", cities: ["Chicago"] },
    { code: "404", state: "Georgia", cities: ["Atlanta"] },
    { code: "213", state: "California", cities: ["Los Angeles", "Downtown LA"] },
    { code: "702", state: "Nevada", cities: ["Las Vegas"] },
    { code: "415", state: "California", cities: ["San Francisco"] },
    { code: "713", state: "Texas", cities: ["Houston"] },
    { code: "202", state: "District of Columbia", cities: ["Washington DC"] },
  ]

  const recentCodes = [
    { code: "659", state: "Alabama", cities: ["Birmingham"], year: 2019 },
    { code: "726", state: "Texas", cities: ["San Antonio"], year: 2019 },
    { code: "959", state: "Connecticut", cities: ["Hartford"], year: 2014 },
    { code: "986", state: "Idaho", cities: ["Boise"], year: 2017 },
  ]

  const statistics = [
    {
      icon: "📞",
      value: "300+",
      label: "Area Codes",
      description: "Complete U.S. coverage",
    },
    {
      icon: "🚨",
      value: "2.4M+",
      label: "Spam Reports",
      description: "User-submitted reports",
    },
    {
      icon: "🌎",
      value: "50+",
      label: "States",
      description: "All states covered",
    },
    {
      icon: "⏰",
      value: "6",
      label: "Time Zones",
      description: "Coast to coast",
    },
  ]

  return {
    props: {
      topCodes,
      recentCodes,
      statistics,
    },
    revalidate: 3600,
  }
}
