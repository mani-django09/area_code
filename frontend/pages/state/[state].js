// frontend/pages/state/[state].js

import Layout from "../../components/Layout"
import AdPlaceholder from "../../components/AdPlaceholder"
import { NextSeo } from "next-seo"
import Link from "next/link"
import fs from "fs"
import path from "path"
import dynamic from "next/dynamic"

// Dynamic import to avoid SSR issues with Leaflet
const AreaCodeMap = dynamic(() => import("../../components/AreaCodeMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
})

export default function StatePage({ state, codes }) {
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

  // Group by timezone
  const codesByTimezone = codes.reduce((acc, code) => {
    if (!acc[code.timezone]) {
      acc[code.timezone] = []
    }
    acc[code.timezone].push(code)
    return acc
  }, {})

  const allCities = new Set(codes.flatMap((c) => c.cities))
  const oldestYear = Math.min(...codes.map((c) => c.year))
  const hasMultipleTimezones = Object.keys(codesByTimezone).length > 1

  return (
    <Layout>
      <NextSeo
        title={`${state} Area Codes - All ${codes.length} Codes Listed`}
        description={`Complete list of area codes in ${state}. Find which cities use which area codes, time zones, and when each code was created.`}
        canonical={`https://allareacodes.cloud/state/${state.toLowerCase().replace(/ /g, "-")}`}
      />

      {/* Compact Impressive Hero */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-4 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-blue-300/80 mb-3">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/area-codes" className="hover:text-white transition">Area Codes</Link>
            <span>/</span>
            <span className="text-white">{state}</span>
          </nav>
          
          {/* Main Hero Row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              {/* State Badge */}
              <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 ring-1 ring-white/10 flex-shrink-0">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              
              {/* Title */}
              <div>
                <h1 className="text-xl sm:text-2xl font-bold leading-tight">{state} Area Codes</h1>
                <div className="flex items-center gap-2 text-blue-200/90 text-sm mt-0.5">
                  <span>{codes.length} area code{codes.length !== 1 ? 's' : ''}</span>
                  <span className="w-1 h-1 bg-blue-400/60 rounded-full"></span>
                  <span className="text-blue-300/80">{allCities.size}+ cities</span>
                </div>
              </div>
            </div>
            
            {/* Stats Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs flex items-center gap-1.5 whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {Object.keys(codesByTimezone).length} Timezone{Object.keys(codesByTimezone).length > 1 ? 's' : ''}
              </div>
              <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs flex items-center gap-1.5 whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Since {oldestYear}
              </div>
              <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs flex items-center gap-1.5 whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                {codes.slice(0, 3).map(c => c.code).join(', ')}{codes.length > 3 ? '...' : ''}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Map Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{state} Area Code Map</h2>
            <div className="text-sm text-gray-500">Click markers for details</div>
          </div>
          <AreaCodeMap codes={codes} state={state} zoom={6} />
        </div>
        
        {/* Area Codes Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All Area Codes</h2>
            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {codes.length} total
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {codes.map((code) => (
              <Link
                key={code.code}
                href={`/${code.code}/area-code`}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl font-bold text-blue-600">{code.code}</div>
                  <div className="text-xs text-gray-500">Est. {code.year}</div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>{code.cities.slice(0, 2).join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{code.timezone.split(' ')[0]}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>


        {/* Main Content */}
        <article className="bg-white rounded-xl p-8 shadow border mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About {state} Area Codes</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              {state} has {codes.length} active area code{codes.length !== 1 ? "s" : ""}. That might seem 
              like a lot, but it makes sense when you think about it - the more people living in a state, 
              the more phone numbers are needed. Each area code can only handle so many phone numbers before 
              it runs out.
            </p>

            <p>
              The first area code in {state} was created back in {oldestYear}. That was when the phone 
              company was setting up the area code system across the whole country. At that time, one or 
              two area codes was usually enough for most states. But as the population grew and everyone 
              started carrying cell phones, more area codes were needed.
            </p>

            {hasMultipleTimezones ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Time Zones</h3>
                <p>
                  Here's something to watch out for: {state} has area codes in {Object.keys(codesByTimezone).length} different 
                  time zones. This means when you're calling someone in {state}, you need to think about 
                  what time it is where they are. You don't want to accidentally call someone at 6 AM because 
                  you forgot they're in a different time zone than you expected.
                </p>
                
                <div className="mt-6 space-y-4">
                  {Object.entries(codesByTimezone).map(([timezone, timezoneCodes]) => (
                    <div key={timezone} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-bold text-gray-900 mb-2">{timezone}</h4>
                      <div className="flex flex-wrap gap-2">
                        {timezoneCodes.map((code) => (
                          <span key={code.code} className="px-3 py-1 bg-white text-blue-700 rounded font-medium text-sm">
                            {code.code}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>
                All the area codes in {state} are in the same time zone: {Object.keys(codesByTimezone)[0]}. 
                That makes things easier - you don't have to worry about time differences when calling 
                different parts of the state.
              </p>
            )}

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Area Codes Work in {state}</h3>
            
            <p>
              Different area codes in {state} cover different parts of the state. Usually, big cities 
              and their surrounding areas get their own area codes because lots of people live there and 
              they need lots of phone numbers. Smaller cities might share an area code that covers a 
              larger geographic area.
            </p>

            <p>
              Sometimes when a region runs out of available phone numbers, they add a new area code. 
              They can do this in two ways: either split the region into two parts (so some people have 
              to change their numbers), or add a new code that covers the same area (so new phone numbers 
              get the new code, but existing numbers don't change).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You Should Know</h3>
            
            <p>
              Just because someone has a {state} area code doesn't mean they're actually in {state} right now. 
              People can keep their phone numbers when they move to different states. Your cousin who moved 
              from {state} to another state probably still has their old {state} number.
            </p>

            <p>
              If you need to dial an area code for local calls depends on where you are in {state}. Some 
              areas require you to dial all 10 digits (area code + number) even for local calls. Other 
              areas let you just dial the 7-digit number for local calls. When in doubt, dial all 10 digits 
              - it always works.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Watch Out for Scams</h3>
            
            <p>
              Scammers can make their calls show any area code they want, including {state} area codes. 
              So don't automatically trust a call just because it looks like it's from {state}. If someone 
              calls asking for money, personal information, or saying you've won something, be very careful - 
              even if it shows a local area code.
            </p>
          </div>
        </article>

        {/* Common Questions */}
        <div className="bg-white rounded-xl p-8 shadow border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Why does {state} need {codes.length} area codes?</h3>
              <p className="text-gray-700">
                Each area code can only provide about 7-8 million phone numbers. With everyone having cell phones, 
                plus all the fax lines, business lines, and other services that need numbers, states with large 
                populations need multiple area codes. {state} has enough people and devices that {codes.length} area 
                code{codes.length !== 1 ? "s are" : " is"} needed to provide enough phone numbers for everyone.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Can I choose which {state} area code I get?</h3>
              <p className="text-gray-700">
                Sometimes, yes. When you get a new phone number, your carrier might let you pick from the area 
                codes available in your area. But it depends on what area codes serve your location and whether 
                they have numbers available. If you want a specific area code, ask your phone company when you're 
                setting up service.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Do I have to change my number if they add a new area code?</h3>
              <p className="text-gray-700">
                It depends on how they add the new code. If they do a "split" (dividing the area into two parts), 
                some people might have to change numbers. But if they do an "overlay" (adding a new code over the 
                same area), you keep your existing number. Overlays are more common now because nobody likes having 
                to change their number.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">How do I report spam calls from {state} numbers?</h3>
              <p className="text-gray-700">
                You can report unwanted calls to the Federal Trade Commission at donotcall.gov or ftc.gov. You 
                should also register your number with the National Do Not Call Registry. And check if your phone 
                carrier has spam-blocking services - many do, and they can help filter out a lot of junk calls.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const dataPath = path.join(process.cwd(), "../data/areaCodes.json")
  const areaCodes = JSON.parse(fs.readFileSync(dataPath, "utf8"))
  const states = [...new Set(areaCodes.map((code) => code.state))]
  const paths = states.map((state) => ({
    params: {
      state: state.toLowerCase().replace(/ /g, "-"),
    },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const dataPath = path.join(process.cwd(), "../data/areaCodes.json")
  const areaCodes = JSON.parse(fs.readFileSync(dataPath, "utf8"))
  const stateSlug = params.state
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

  const codes = areaCodes.filter((code) => code.state === matchedState)
  codes.sort((a, b) => a.code.localeCompare(b.code))

  return {
    props: {
      state: matchedState,
      codes,
    },
  }
}