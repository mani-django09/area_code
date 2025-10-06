// ==========================================
// frontend/pages/[code]/area-code.js
// NEW URL STRUCTURE: /310/area-code instead of /area-code/310
// ==========================================

import Layout from "../../components/Layout"
import AdPlaceholder from "../../components/AdPlaceholder"
import LiveTime from "../../components/LiveTime"
import { NextSeo, FAQPageJsonLd } from "next-seo"
import Link from "next/link"
import fs from "fs"
import path from "path"

export default function AreaCodePage({ areaCode }) {
  if (!areaCode) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Area Code Not Found</h1>
          <Link href="/area-codes" className="text-blue-600 hover:underline">
            Browse all area codes
          </Link>
        </div>
      </Layout>
    )
  }

  const faqSchema = {
    mainEntity: [
      {
        questionName: `Where is area code ${areaCode.code}?`,
        acceptedAnswerText: `Area code ${areaCode.code} is located in ${areaCode.state}, serving ${areaCode.cities.join(", ")}.`,
      },
    ],
  }

  return (
    <Layout>
      <NextSeo
        title={`${areaCode.code} Area Code – ${areaCode.state} Location & Time Zone`}
        description={`Area code ${areaCode.code} is in ${areaCode.state}, serving ${areaCode.cities.join(", ")}. Find location, time zone, and caller identification info.`}
        canonical={`https://allareacodes.cloud/${areaCode.code}/area-code`}
      />
      <FAQPageJsonLd {...faqSchema} />

      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-100 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/area-codes" className="hover:text-white transition-colors">
              Area Codes
            </Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white font-medium">{areaCode.code}</span>
          </nav>

          {/* Hero Content - Compact Design */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-semibold mb-3 border border-white/20">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Active Area Code
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tight drop-shadow-lg">
                {areaCode.code}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-blue-50">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span className="font-semibold text-white text-sm">{areaCode.state}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-white">{areaCode.timezone}</span>
                </div>
                <div className="text-xs bg-white/10 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/20 font-medium text-white">
                  Est. {areaCode.year}
                </div>
              </div>
            </div>

            <a
              href="https://www.truthfinder.com?aff=YOUR_ID"
              target="_blank"
              rel="noreferrer nofollow noopener"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20 transform hover:scale-105 text-sm md:text-base whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Identify This Caller
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 -mt-12 relative z-10">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">PRIMARY</span>
              </div>
              <div className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">Location</div>
              <div className="text-2xl font-black text-gray-900 mb-1">{areaCode.state}</div>
              <div className="text-sm text-gray-600 font-medium">{areaCode.cities[0]}</div>
            </div>

            <LiveTime timezone={areaCode.timezone} />

            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-400 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">ACTIVE</span>
              </div>
              <div className="text-xs text-gray-500 mb-1 font-semibold uppercase tracking-wide">Coverage</div>
              <div className="text-2xl font-black text-gray-900 mb-1">{areaCode.cities.length} Cities</div>
              <div className="text-sm text-gray-600 font-medium">Since {areaCode.year}</div>
            </div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <article className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                  <h2 className="text-3xl font-black text-gray-900">About Area Code {areaCode.code}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Area code <strong className="text-blue-600 font-bold">{areaCode.code}</strong> serves{" "}
                  <strong className="text-gray-900 font-bold">{areaCode.state}</strong>, covering major cities including{" "}
                  {areaCode.cities.join(", ")}. Operating in the{" "}
                  <strong className="text-gray-900 font-bold">{areaCode.timezone}</strong>, this code was established in{" "}
                  <strong className="text-gray-900 font-bold">{areaCode.year}</strong>.
                </p>

                <div className="overflow-hidden border-2 border-gray-200 rounded-2xl shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">
                          State
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">
                          Time Zone
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-black text-white uppercase tracking-wider">
                          Cities
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{areaCode.state}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">{areaCode.timezone}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{areaCode.cities.join(", ")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>

              <div className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-400 rounded-2xl p-6 shadow-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                <div className="relative flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-gray-900 mb-2 text-xl">Beware of Spam Calls</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Scammers frequently use {areaCode.code} numbers. Always verify unknown callers before sharing
                      personal information.
                    </p>
                    <a
                      href="https://www.truthfinder.com?aff=YOUR_ID"
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-bold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Protect Yourself Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                  <h2 className="text-3xl font-black text-gray-900">Common Questions</h2>
                </div>
                <div className="space-y-3">
                  {[
                    [
                      `Where is ${areaCode.code}?`,
                      `Located in ${areaCode.state}, serving ${areaCode.cities[0]} and surrounding areas.`,
                    ],
                    [`What time zone?`, `Operates in ${areaCode.timezone}.`],
                    [`When established?`, `Area code ${areaCode.code} was introduced in ${areaCode.year}.`],
                    [
                      `Used for spam?`,
                      `Can be used by legitimate and fraudulent callers. Always verify unknown numbers.`,
                    ],
                  ].map(([q, a], i) => (
                    <div
                      key={i}
                      className="p-4 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group"
                    >
                      <div className="font-bold text-gray-900 mb-2 flex items-start gap-3 text-base">
                        <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors flex-shrink-0">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        {q}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed ml-11">{a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              {/* Lookup CTA */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-6 text-white shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-black mb-3 border border-white/30">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                    INSTANT RESULTS
                  </div>
                  <h3 className="text-2xl font-black mb-2">Unknown Caller?</h3>
                  <p className="text-sm text-blue-100 mb-5 leading-relaxed font-medium">
                    Identify who called from {areaCode.code} with instant background checks and caller information.
                  </p>
                  <a
                    href="https://www.truthfinder.com?aff=YOUR_ID"
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                    className="block w-full px-5 py-3.5 bg-white text-blue-700 rounded-xl font-black hover:bg-blue-50 transition-all text-center text-base shadow-2xl hover:shadow-white/20 transform hover:scale-105 mb-4"
                  >
                    Search Now →
                  </a>
                  <div className="flex items-center justify-center gap-4 text-xs text-blue-100 font-semibold">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Name
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Address
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      More
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Codes */}
              {areaCode.related_codes.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2 text-lg">
                    <div className="p-1.5 bg-blue-100 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    Related Codes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {areaCode.related_codes.map((code) => (
                      <Link
                        key={code}
                        href={`/${code}/area-code`}
                        className="px-4 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-xl text-sm font-bold hover:from-blue-100 hover:to-blue-50 hover:text-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5 border border-gray-200 hover:border-blue-300"
                      >
                        {code}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Links */}
              <nav className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg" aria-label="Quick navigation">
                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2 text-lg">
                  <div className="p-1.5 bg-blue-100 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <Link
                    href={`/state/${areaCode.state.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center justify-between p-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all group border border-transparent hover:border-blue-200"
                  >
                    <span className="font-bold">All {areaCode.state} codes</span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/area-codes"
                    className="flex items-center justify-between p-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all group border border-transparent hover:border-blue-200"
                  >
                    <span className="font-bold">Browse all codes</span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/faq"
                    className="flex items-center justify-between p-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all group border border-transparent hover:border-blue-200"
                  >
                    <span className="font-bold">FAQ</span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </nav>

              <AdPlaceholder position="sidebar" />
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const dataPath = path.join(process.cwd(), "../data/areaCodes.json")
  const areaCodes = JSON.parse(fs.readFileSync(dataPath, "utf8"))
  const paths = areaCodes.map((code) => ({ params: { code: code.code } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const dataPath = path.join(process.cwd(), "../data/areaCodes.json")
  const areaCodes = JSON.parse(fs.readFileSync(dataPath, "utf8"))
  const areaCode = areaCodes.find((code) => code.code === params.code)
  return { props: { areaCode: areaCode || null } }
}