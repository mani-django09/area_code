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
        title="AllAreaCodes.cloud - Look Up Any US Area Code Free"
        description="Got a missed call from a weird number? AllAreaCodes.cloud tells you where it came from. Search any 3-digit area code and get the city, state, and time zone in seconds."
        canonical="https://allareacodes.cloud/"
        openGraph={{
          title: "AllAreaCodes.cloud - Figure Out Where That Call Came From",
          description:
            "Free area code lookup. Type in any 3 digits and find out the location, time zone, and whether other people flagged it as spam.",
          images: [{ url: "https://allareacodes.cloud/og-image.jpg" }],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "area code lookup, where is area code, phone number location, who called me, spam call checker, us area codes list",
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


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <section className="mb-10" aria-labelledby="top-codes-heading">
          <header className="text-center mb-6">
            <h2 id="top-codes-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Area Codes People Search the Most
            </h2>
            <p className="text-base text-gray-600">
              These keep showing up in our search logs week after week
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


        <section className="mb-10" aria-labelledby="features-heading">
          <header className="text-center mb-6">
            <h2 id="features-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              What Can You Do on AllAreaCodes.cloud?
            </h2>
            <p className="text-base text-gray-600">More than just a simple lookup tool</p>
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
                title: "Figure Out Where Calls Come From",
                description: "Someone called from 469? That's the Dallas-Fort Worth area. We break down exactly which cities and counties each code covers.",
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
                title: "Check What Time It Is There",
                description: "Before you call back that number from 808 (Hawaii), maybe check if it's 4 AM there. We show you the local time for every code.",
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
                title: "See If Others Reported It as Spam",
                description: "Our users flag sketchy numbers. If that 833 number calling you has 47 spam reports, you probably want to let it go to voicemail.",
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
                title: "Look Up Unknown Numbers",
                description: "Missed a call and curious who it was? Our reverse lookup points you in the right direction without charging you a dime.",
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
                title: "Learn the Backstory",
                description: "Did you know 212 was one of the original area codes from 1947? Some of these numbers have interesting histories going back decades.",
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
                title: "Find Related Codes",
                description: "LA has like five different area codes now. We show you which ones overlap so you understand why your neighbor has a different prefix.",
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


        <section className="mb-10" aria-labelledby="states-heading">
          <header className="text-center mb-6">
            <h2 id="states-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Browse by State
            </h2>
            <p className="text-base text-gray-600">Click your state to see all the area codes there</p>
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


        <section className="mb-10" aria-labelledby="what-is-heading">
          <article className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 md:p-8 border border-blue-100">
            <h2 id="what-is-heading" className="text-2xl md:text-3xl font-bold mb-4 text-center">
              So What Exactly Is an Area Code Anyway?
            </h2>

            <div className="prose prose-sm md:prose-base max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                You probably dial them every day without thinking about it, but those three digits at the start of a phone number have been around since 1947. Back then, AT&T and Bell Labs came up with the <a href="https://en.wikipedia.org/wiki/North_American_Numbering_Plan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">North American Numbering Plan</a> because they needed a way to route long-distance calls automatically instead of having operators manually connect every single call. Pretty clever solution, honestly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-base font-bold text-blue-600 mb-2">How They Actually Work</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    When you dial a number, the phone system reads those first three digits to figure out which region to send your call. Think of it like a zip code, but for phone calls instead of mail.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-base font-bold text-blue-600 mb-2">Why Some States Have So Many</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    California has over 30 area codes. Wyoming has just one. It comes down to population - more people means more phone numbers needed, which means more codes.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-base font-bold text-blue-600 mb-2">They Started With Just 86</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The original plan had 86 codes for the whole country. Cell phones changed everything. Now we're past 300 and the <a href="https://www.nanpa.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">NANPA</a> keeps adding more.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-base font-bold text-blue-600 mb-2">People Take Their Numbers With Them</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Since 2003, you can keep your number when you move. So that 718 Brooklyn number might belong to someone living in Arizona now. Area codes don't mean what they used to.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Should You Care About Any of This?</h3>

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
                    <strong>Dodging Scam Calls:</strong> When you see an unfamiliar area code, a quick search here tells you if it's even a real place. The <a href="https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCC says</a> Americans get billions of robocalls every year. Knowing your area codes helps.
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
                    <strong>Running a Business:</strong> If you're selling stuff, having a local area code makes people way more likely to pick up. Nobody answers calls from random states.
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
                    <strong>Not Waking People Up:</strong> That client in 907 (Alaska) is four hours behind you. That one in 787 (Puerto Rico) is in Atlantic time. Good to know before you dial.
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
                    <strong>Satisfying Your Curiosity:</strong> Sometimes you just want to know where a call came from. That's totally valid and that's why AllAreaCodes.cloud exists.
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="mb-10" aria-labelledby="faq-heading">
          <header className="text-center mb-6">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Questions We Get Asked a Lot
            </h2>
            <p className="text-base text-gray-600">Straight answers, no fluff</p>
          </header>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "I got a call from a weird area code. How do I find out where it's from?",
                a: "Just punch those three digits into the search bar up top. We'll tell you the state, the major cities in that area, what time zone they're in, and if other people have flagged numbers from that code as spam. Takes about two seconds.",
              },
              {
                q: "Can I figure out someone's exact address from their area code?",
                a: "Nope, and honestly that would be pretty creepy if you could. Area codes just tell you the general region where a number was originally assigned. And since people can keep their numbers when they move now, even that's not guaranteed. Someone with a Chicago 312 number could be living in Miami.",
              },
              {
                q: "Why do scammers call from so many different area codes?",
                a: "They spoof numbers to look local because people are more likely to answer calls from their own area code. If you're in Atlanta with a 404 number and see another 404 number calling, you might think it's someone you know. Scammers exploit that. Always be careful with unknown callers even if the area code looks familiar.",
              },
              {
                q: "What's the deal with cities having multiple area codes?",
                a: "Population growth. When a region runs out of available phone numbers, they either split the area (some neighborhoods get a new code) or do an overlay where new numbers get a different code but serve the same geography. New York City has something like 10 different codes now. It's wild.",
              },
              {
                q: "Is the info on AllAreaCodes.cloud actually accurate?",
                a: "We pull our data from official telecom sources and update regularly. Area code assignments come from NANPA (the North American Numbering Plan Administrator), which is the official body that manages this stuff. If something looks wrong, shoot us a note and we'll fix it.",
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


        <section className="mb-10" aria-labelledby="recent-heading">
          <header className="text-center mb-6">
            <h2 id="recent-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Area Codes Added in Recent Years
            </h2>
            <p className="text-base text-gray-600">Yep, they're still making new ones</p>
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
              Some Numbers About Our Numbers
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
              That's Pretty Much It
            </h2>
            <p className="text-base md:text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              AllAreaCodes.cloud is free, we don't make you sign up for anything, and we're not going to sell your data. Just search for an area code whenever you need to.
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
                More Questions?
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
            name: "AllAreaCodes.cloud",
            url: "https://allareacodes.cloud",
            description:
              "Free area code lookup tool. Search any US area code to find location, time zone, and spam reports.",
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
      description: "Every US code covered",
    },
    {
      icon: "🚨",
      value: "2.4M+",
      label: "Spam Reports",
      description: "From real users like you",
    },
    {
      icon: "🌎",
      value: "50",
      label: "States",
      description: "Plus DC and territories",
    },
    {
      icon: "⏰",
      value: "6",
      label: "Time Zones",
      description: "From Maine to Hawaii",
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