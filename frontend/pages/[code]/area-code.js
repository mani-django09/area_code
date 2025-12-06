// frontend/pages/[code]/area-code.js

import Layout from "../../components/Layout"
import AdPlaceholder from "../../components/AdPlaceholder"
import LiveTime from "../../components/LiveTime"
import { NextSeo, FAQPageJsonLd } from "next-seo"
import Link from "next/link"
import fs from "fs"
import path from "path"
import dynamic from "next/dynamic"

const AreaCodeMap = dynamic(() => import("../../components/AreaCodeMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-500 font-medium">Loading map...</p>
      </div>
    </div>
  )
})

export default function AreaCodePage({ areaCode }) {
  if (!areaCode) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Couldn't Find That Area Code</h1>
          <p className="text-gray-600 mb-6">The area code you're looking for doesn't seem to exist in our database.</p>
          <Link href="/area-codes" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
            Browse All Area Codes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </Layout>
    )
  }

  const faqSchema = {
    mainEntity: [
      {
        questionName: `Where is the ${areaCode.code} area code located?`,
        acceptedAnswerText: `The ${areaCode.code} area code covers ${areaCode.state}, serving cities like ${areaCode.cities.slice(0, 3).join(", ")}.`,
      },
      {
        questionName: `What time zone does ${areaCode.code} use?`,
        acceptedAnswerText: `Phone numbers starting with ${areaCode.code} are in the ${areaCode.timezone}.`,
      },
    ],
  }

  const yearsSinceCreated = new Date().getFullYear() - areaCode.year

  return (
    <Layout>
      <NextSeo
        title={`${areaCode.code} Area Code - Where Is It? | ${areaCode.state} Phone Numbers`}
        description={`Got a call from ${areaCode.code}? That's ${areaCode.state} - specifically areas like ${areaCode.cities.slice(0, 2).join(" and ")}. Check the time zone and see if it might be spam.`}
        canonical={`https://allareacodes.cloud/${areaCode.code}/area-code`}
      />
      <FAQPageJsonLd {...faqSchema} />

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
            <span className="text-white">{areaCode.code}</span>
          </nav>
          
          {/* Main Hero Row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              {/* Area Code Badge */}
              <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 ring-1 ring-white/10 flex-shrink-0">
                <span className="text-2xl sm:text-3xl font-black">{areaCode.code}</span>
              </div>
              
              {/* Title */}
              <div>
                <h1 className="text-xl sm:text-2xl font-bold leading-tight">Area Code {areaCode.code}</h1>
                <div className="flex items-center gap-2 text-blue-200/90 text-sm mt-0.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{areaCode.state}</span>
                  <span className="w-1 h-1 bg-blue-400/60 rounded-full"></span>
                  <span className="text-blue-300/80 truncate max-w-[150px]">{areaCode.cities[0]}</span>
                </div>
              </div>
            </div>
            
            {/* Stats Pills */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs flex items-center gap-1.5 whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {areaCode.timezone.split(' ')[0]}
              </div>
              <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs flex items-center gap-1.5 whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Since {areaCode.year}
              </div>
              <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs flex items-center gap-1.5 whitespace-nowrap">
                <svg className="w-3.5 h-3.5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {areaCode.cities.length} Cities
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Stats */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Location</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{areaCode.state}</div>
                <div className="text-gray-600">{areaCode.cities[0]}</div>
              </div>
              
              <LiveTime timezone={areaCode.timezone} />
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Where Exactly Is {areaCode.code}?</h2>
                  <p className="text-sm text-gray-500">Click the marker for more info</p>
                </div>
                <Link 
                  href={`/state/${areaCode.state.toLowerCase().replace(/ /g, '-')}`}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                >
                  See all {areaCode.state} codes
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <AreaCodeMap codes={[areaCode]} state={areaCode.state} zoom={8} />
            </div>

            <AdPlaceholder position="banner" />

            {/* Main Article */}
            <article className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Everything You Need to Know About {areaCode.code}
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  So you got a call from a {areaCode.code} number and you're wondering where it came from? 
                  That's {areaCode.state}. More specifically, {areaCode.code} covers {areaCode.cities[0]}
                  {areaCode.cities.length > 1 ? ` and places like ${areaCode.cities.slice(1, 3).join(", ")}` : ""}.
                </p>

                <p>
                  This area code has been around for {yearsSinceCreated} years now - it was created in {areaCode.year}. 
                  {yearsSinceCreated > 50 
                    ? " That makes it one of the original area codes from when the phone system was first being organized." 
                    : yearsSinceCreated > 20 
                      ? " It was added when the region needed more phone numbers as the population grew."
                      : " It's a relatively newer code that was added as demand for phone numbers increased."}
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quick Tip</h4>
                      <p className="text-sm text-gray-700">
                        People in the {areaCode.code} area are on {areaCode.timezone}. If you're in a different 
                        time zone, double-check before calling so you don't reach them at an awkward hour.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Here's Something Worth Knowing</h3>
                
                <p>
                  Just because you see {areaCode.code} on your caller ID doesn't guarantee the person is actually 
                  sitting in {areaCode.state} right now. Since 2003, people can take their phone numbers with them 
                  when they move. Your old college roommate who grew up near {areaCode.cities[0]}? They might be 
                  living in Texas now but still using their {areaCode.code} number.
                </p>

                <p>
                  That said, a {areaCode.code} number usually means the person originally got their phone number 
                  somewhere in {areaCode.state}. Or they specifically chose a {areaCode.code} number for business 
                  reasons - maybe to seem local to customers in the {areaCode.cities[0]} area.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Dial a {areaCode.code} Number</h3>
                
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="text-sm text-gray-500 mb-2">From within the US</div>
                    <div className="font-mono text-lg font-semibold text-gray-900">1-{areaCode.code}-XXX-XXXX</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="text-sm text-gray-500 mb-2">From outside the US</div>
                    <div className="font-mono text-lg font-semibold text-gray-900">+1-{areaCode.code}-XXX-XXXX</div>
                  </div>
                </div>

                <p>
                  If you're calling from somewhere else in the country, just dial 1 + {areaCode.code} + the 
                  7-digit number. Calling from overseas? Use your country's exit code (usually 00 or +), 
                  then 1 for the US, then {areaCode.code} and the rest.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Should You Be Worried About Scams?</h3>
                
                <p>
                  Here's the honest truth: scammers can fake any area code they want, including {areaCode.code}. 
                  It's called "spoofing" and it's frustratingly common. So if you get a call from {areaCode.code} 
                  that feels off - someone asking for your Social Security number, claiming you won a prize, 
                  or demanding immediate payment for something - trust your gut and hang up.
                </p>

                <p>
                  Real businesses and government agencies don't cold call asking for sensitive info. If you're 
                  unsure whether a call was legit, look up the company's official number yourself and call them back.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Cities and Towns Using {areaCode.code}
                </h3>
                
                <p className="mb-4">
                  The {areaCode.code} area code serves quite a few places across {areaCode.state}. Here's where 
                  you might find someone with this area code:
                </p>
              </div>

              {/* Cities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6">
                {areaCode.cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 truncate">{city}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">People Also Ask</h2>

              <div className="space-y-5">
                <div className="pb-5 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-500">Q:</span>
                    Is {areaCode.code} a toll-free number?
                  </h3>
                  <p className="text-gray-700 pl-6">
                    No, it's not. {areaCode.code} is a regular geographic area code. Toll-free numbers are 
                    the ones that start with 800, 888, 877, 866, 855, 844, or 833. Calls to {areaCode.code} 
                    might use your minutes or cost money depending on your phone plan.
                  </p>
                </div>

                <div className="pb-5 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-500">Q:</span>
                    Can I keep my {areaCode.code} number if I move away?
                  </h3>
                  <p className="text-gray-700 pl-6">
                    Usually, yes. Most carriers let you take your number with you even if you're moving to 
                    a completely different state. Just check with your phone company beforehand to make 
                    sure they support your number in your new location.
                  </p>
                </div>

                <div className="pb-5 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-500">Q:</span>
                    How do I stop unwanted calls from {areaCode.code}?
                  </h3>
                  <p className="text-gray-700 pl-6">
                    You've got a few options. Block specific numbers on your phone (most smartphones make 
                    this easy). Sign up for the <a href="https://www.donotcall.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Do Not Call Registry</a>. 
                    Or ask your carrier about their spam-blocking features - a lot of them offer this for free now.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-500">Q:</span>
                    Does {areaCode.state} have other area codes besides {areaCode.code}?
                  </h3>
                  <p className="text-gray-700 pl-6">
                    {areaCode.related_codes && areaCode.related_codes.length > 0 ? (
                      <>
                        Yep. {areaCode.state} also uses {areaCode.related_codes.slice(0, 4).join(", ")}
                        {areaCode.related_codes.length > 4 ? " and a few others" : ""}. Different parts 
                        of the state have different codes, especially in more populated areas.
                      </>
                    ) : (
                      `${areaCode.code} is one of the area codes serving ${areaCode.state}. Depending on the 
                      state's population, there might be others covering different regions.`
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">One More Thing</h3>
                  <p className="text-gray-700 text-sm">
                    Area codes tell you where a phone number was originally assigned, not where the person 
                    is right now. If you need to verify someone's actual location for safety reasons, 
                    an area code alone isn't enough. Consider using a reverse phone lookup service for 
                    more detailed info.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            
            {/* Related Area Codes */}
            {areaCode.related_codes && areaCode.related_codes.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Other {areaCode.state} Codes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {areaCode.related_codes.map((code) => (
                    <Link
                      key={code}
                      href={`/${code}/area-code`}
                      className="px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-bold hover:bg-blue-50 hover:text-blue-700 border border-gray-100 hover:border-blue-200 transition"
                    >
                      {code}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Links */}
            <nav className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link
                  href={`/state/${areaCode.state.toLowerCase().replace(/ /g, '-')}`}
                  className="flex items-center justify-between p-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition group"
                >
                  <span>All {areaCode.state} Codes</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/area-codes"
                  className="flex items-center justify-between p-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition group"
                >
                  <span>Browse All Codes</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/faq"
                  className="flex items-center justify-between p-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition group"
                >
                  <span>Area Code FAQs</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </nav>

            <AdPlaceholder position="sidebar" />

            {/* Did You Know */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Did You Know?
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                The first area codes were assigned in 1947. {areaCode.code} has been helping connect 
                people in {areaCode.state} since {areaCode.year}. That's {yearsSinceCreated} years 
                of phone calls!
              </p>
            </div>
          </aside>
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