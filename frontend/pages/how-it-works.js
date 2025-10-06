import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <Layout>
      <NextSeo
        title="How It Works - Area Code Finder Guide"
        description="Learn how to use our area code finder to lookup locations, identify unknown callers, and protect yourself from spam calls."
        canonical="https://allareacodes.cloud/how-it-works"
      />

      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h1>
            <p className="text-xl text-gray-600">
              Finding area code information is simple and free
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12 mb-16">
            {[
              {
                step: '1',
                title: 'Search for an Area Code',
                description: 'Enter any 3-digit area code in the search box on our homepage, or browse by state to find all codes in a specific region.',
                tips: [
                  'Type the area code directly (e.g., "312")',
                  'Click popular searches for quick access',
                  'Browse by state for regional codes'
                ],
                icon: '🔍'
              },
              {
                step: '2',
                title: 'View Detailed Information',
                description: 'Each area code page shows comprehensive information including location, cities served, time zone, year established, and related codes.',
                tips: [
                  'See exact state and city coverage',
                  'Check time zone for scheduling calls',
                  'View historical information',
                  'Find related area codes in the region'
                ],
                icon: '📊'
              },
              {
                step: '3',
                title: 'Identify Unknown Callers',
                description: 'Use our spam reports and reverse lookup tools to identify who is calling you and protect yourself from scams.',
                tips: [
                  'Check user-submitted spam reports',
                  'Use reverse lookup services',
                  'Report suspicious numbers',
                  'Block known scam numbers'
                ],
                icon: '🛡️'
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '⚡', title: 'Instant Results', text: 'Get information immediately, no waiting' },
                { icon: '🔒', title: '100% Free', text: 'No registration or payment required' },
                { icon: '📱', title: 'Mobile Friendly', text: 'Works perfectly on all devices' },
                { icon: '🔄', title: 'Updated Daily', text: 'Latest area code information' },
                { icon: '🌐', title: '300+ Codes', text: 'Complete U.S. coverage' },
                { icon: '🎯', title: 'Accurate Data', text: 'Verified and reliable information' }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg"
            >
              Start Searching Now
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}