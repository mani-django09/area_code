import Layout from '../components/Layout';
import AdPlaceholder from '../components/AdPlaceholder';
import { NextSeo, FAQPageJsonLd } from 'next-seo';
import Link from 'next/link';

export default function FAQPage() {
  const faqSchema = {
    mainEntity: [
      {
        questionName: 'What is an area code?',
        acceptedAnswerText: 'An area code is a three-digit number that forms the first part of a ten-digit phone number in North America. It was introduced in 1947 to organize phone numbers geographically and make long-distance calling more efficient.',
      },
      {
        questionName: 'How do I find out what area code a phone number is from?',
        acceptedAnswerText: 'The first three digits of a ten-digit phone number represent the area code. You can use our directory to look up any area code and find its location, time zone, and serving cities.',
      },
      {
        questionName: 'Can I keep my phone number if I move to a different area code?',
        acceptedAnswerText: 'Yes, thanks to wireless number portability, you can typically keep your phone number even if you move to a different state or area code region. Contact your service provider for specific details.',
      },
    ],
  };

  return (
    <Layout>
      <NextSeo
        title="Area Code FAQ - Common Questions Answered"
        description="Find answers to frequently asked questions about U.S. area codes, including how they work, number portability, and caller identification."
        canonical="https://allareacodes.cloud/faq"
      />
      <FAQPageJsonLd {...faqSchema} />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Everything you need to know about U.S. area codes
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdPlaceholder position="banner" />

        {/* General Questions */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
            General Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is an area code?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                An area code is a three-digit number that forms the first part of a ten-digit phone number in the North 
                American Numbering Plan. When the system was introduced in 1947, area codes were designed to organize 
                phone numbers geographically and make long-distance calling more efficient.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every phone number in the United States, Canada, and participating territories includes an area code, 
                followed by a three-digit exchange code and a four-digit subscriber number. Together, these ten digits 
                create a unique identifier for each telephone line.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I find out what area code a phone number is from?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The first three digits of any ten-digit phone number represent the area code. For example, in the number 
                (555) 123-4567, the area code is 555. You can use our area code directory to look up any area code and 
                find detailed information about its location, time zone, and the cities it serves.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Simply search for the three-digit code using our search tool, or browse by state to see all area codes 
                serving a particular region. Each area code page provides comprehensive information including the 
                geographic coverage area, major cities served, and historical background.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Why do phone numbers need area codes?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Area codes serve several important purposes in the modern telephone system. First, they provide a way 
                to organize millions of phone numbers in a logical, geographic structure. This makes it easier for 
                telecommunications equipment to route calls efficiently to the correct destination.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Second, area codes help manage the limited supply of available phone numbers. Without area codes, each 
                region could only have 10 million unique phone numbers (0000000-9999999). By adding area codes, the 
                system can support billions of unique numbers across North America.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                When were area codes first introduced?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Area codes were first introduced in 1947 as part of the North American Numbering Plan (NANP). Before 
                this system, long-distance calls required operators to manually connect calls, which was time-consuming 
                and inefficient. The new area code system allowed for direct-dial long-distance calling, revolutionizing 
                telecommunications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The original plan created 86 area codes to cover the United States and Canada. These codes were assigned 
                based on population and calling volume, with high-traffic areas receiving codes that were quicker to dial 
                on rotary phones. For instance, New York City received 212 because it required the least rotary dial 
                movements.
              </p>
            </div>
          </div>
        </section>

        {/* Number Portability */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
            Number Portability
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I keep my phone number if I move to a different area code?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Yes, thanks to wireless number portability rules implemented by the Federal Communications Commission (FCC), 
                you can typically keep your phone number even if you move to a different state or area code region. This 
                applies to both mobile and some landline numbers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, there are some limitations. The ability to keep your number depends on your service provider's 
                technical capabilities and coverage area. Some providers may not be able to port numbers to certain remote 
                locations. It's best to check with your carrier before moving if keeping your number is important to you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is number portability?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Number portability is a telecommunications regulation that allows customers to keep their existing phone 
                numbers when switching service providers or moving to new locations. This policy was implemented to promote 
                competition among phone companies and give consumers more flexibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wireless number portability became effective in 2003, making it much easier for people to change mobile 
                carriers without losing their established phone numbers. This was a significant consumer protection 
                measure, as many people had built personal and professional networks around their existing numbers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does keeping my number affect my area code?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you port your number to a new location or carrier, the area code remains part of your phone number. 
                This means you could have a California area code while living in New York, or maintain a local area code 
                after your business relocates to another state.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While this provides continuity for you, it also means area codes no longer reliably indicate a caller's 
                current location. This is why verifying caller identity through reverse phone lookup services has become 
                increasingly important in the era of number portability.
              </p>
            </div>
          </div>
        </section>

        <AdPlaceholder position="square" />

        {/* Dialing and Usage */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
            Dialing and Usage
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need to dial the area code for local calls?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In many parts of the United States, ten-digit dialing has become mandatory, meaning you must include the 
                area code even for local calls. This requirement has been implemented in regions with overlay area codes, 
                where multiple area codes serve the same geographic area.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The transition to mandatory ten-digit dialing helps ensure calls are properly routed when multiple area 
                codes exist in one location. Even if your call is to someone across the street, you may need to dial the 
                area code. Check with your local phone service provider to understand the dialing requirements in your area.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How do I call a U.S. number from outside the country?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To call a U.S. number from abroad, first dial your country's international exit code (often 00 or 011), 
                then dial 1 (the country code for the United States and Canada), followed by the ten-digit phone number 
                including the area code.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For example, to call (555) 123-4567 from most countries, you would dial: 00-1-555-123-4567. The exact 
                format depends on your calling country's system. Some mobile phones allow you to dial + instead of the 
                international exit code, making the format +1-555-123-4567.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What are toll-free area codes?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Toll-free area codes include 800, 888, 877, 866, 855, 844, and 833. These special area codes allow 
                callers to reach businesses and services without incurring long-distance charges. Instead, the recipient 
                (typically a business) pays for the call.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toll-free numbers are not tied to specific geographic locations. A business with an 800 number could be 
                located anywhere in North America. These numbers are popular for customer service lines, sales inquiries, 
                and other business purposes where companies want to make it easy and free for customers to contact them.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I choose my own area code when getting a new number?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many service providers allow you to select from available area codes that serve your location, though 
                your options depend on which codes have available numbers in your region. Popular or "vanity" area codes 
                may have limited availability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Some people prefer to have a number with their local area code for business or personal reasons, while 
                others might request a different area code for privacy or to maintain continuity with an area they moved 
                from. Contact your phone service provider to discuss available options when setting up new service.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Questions */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
            Technical Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What happens when an area code runs out of numbers?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When an area code nears exhaustion of available numbers, telecommunications regulators implement either an 
                area code split or an overlay. In a split, the geographic region is divided, with one part keeping the 
                original area code and another receiving a new code. This means some residents must change their numbers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                An overlay involves adding a new area code to serve the same geographic area as the existing one. New phone 
                numbers receive the new area code while existing numbers keep their original codes. Overlays typically 
                require mandatory ten-digit dialing for all calls, including local ones, to ensure proper call routing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How many phone numbers can fit in one area code?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Theoretically, each area code can accommodate up to 7.9 million phone numbers. This number comes from the 
                possible combinations of the seven remaining digits (after the area code), with certain restrictions to 
                exclude reserved numbers and special service codes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, not all theoretically possible numbers are actually assignable. The system reserves certain number 
                patterns for special purposes, such as N11 codes (like 411 for directory assistance and 911 for emergency 
                services). Additionally, inefficiencies in number allocation mean that area codes often require replacement 
                before reaching theoretical capacity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is an overlay area code?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                An overlay area code is a new area code that serves the same geographic region as one or more existing 
                area codes. Unlike area code splits, which divide a region into separate zones, overlays allow multiple 
                codes to coexist in the same location.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When an overlay is implemented, residents and businesses with existing numbers keep their current area 
                codes, while new numbers are assigned from the overlay code. This approach avoids the disruption of forcing 
                people to change their numbers, but it requires everyone in the region to use ten-digit dialing for all 
                calls, including local ones.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Who decides when new area codes are needed?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The North American Numbering Plan Administrator (NANPA), operating under guidance from the Federal 
                Communications Commission, manages the assignment and planning of area codes in the United States. NANPA 
                monitors number utilization rates and projects when new area codes will be needed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When an area code approaches exhaustion, NANPA works with state public utility commissions and industry 
                stakeholders to determine the best solution, whether that's a split or an overlay. This process includes 
                public hearings and consideration of the impact on residents and businesses before implementing changes.
              </p>
            </div>
          </div>
        </section>

        {/* Security and Scams */}
        <section className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
            Security and Scams
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can scammers fake area codes on caller ID?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Yes, scammers can manipulate caller ID information through a practice called "spoofing." This allows them 
                to display any area code and phone number they choose, often selecting local area codes to make their calls 
                appear more legitimate. The displayed number may not have any connection to the actual caller's location.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Because of spoofing, you should never trust a call solely based on the area code or phone number displayed. 
                Always be skeptical of unsolicited calls requesting personal information, money, or immediate action, 
                regardless of what number appears on your screen. When in doubt, hang up and call the organization directly 
                using a verified phone number.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How can I protect myself from phone scams?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Protect yourself by following these guidelines: Never provide personal information, financial details, or 
                passwords to unsolicited callers. Legitimate organizations won't ask for sensitive information through 
                unexpected phone calls. Be especially wary of callers creating urgency or pressure to act immediately.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Register your number with the National Do Not Call Registry at donotcall.gov to reduce unwanted marketing 
                calls. Use your phone's built-in call blocking features or third-party apps to filter suspected spam. If you 
                receive a suspicious call claiming to be from a known organization, hang up and contact them directly using 
                a phone number from their official website or documentation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What should I do if I receive a scam call?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you receive a suspicious call, hang up immediately. Don't engage with the caller or provide any 
                information, even to say "no" or correct incorrect assumptions. Scammers may record your voice responses 
                for fraudulent purposes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Report scam calls to the Federal Trade Commission at reportfraud.ftc.gov. You can also file a complaint 
                with the FCC at consumercomplaints.fcc.gov. Block the number using your phone's features to prevent repeat 
                calls from the same number. Consider using a call-blocking app or service for additional protection against 
                spam and scam calls.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How can I identify who's calling me?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reverse phone lookup services can help identify unknown callers by providing information associated with 
                phone numbers. These services search public records and databases to find the name, address, and other 
                details linked to a phone number.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many smartphones include built-in spam identification features that warn you about likely spam calls. 
                Third-party apps can provide additional caller identification and blocking capabilities. However, remember 
                that determined scammers can spoof any number, so use caller ID information as just one factor in assessing 
                a call's legitimacy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-xl p-6 shadow-md mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg shadow-sm">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Still Have Questions?</h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                Browse our complete area code directory to find specific information about any U.S. area code, including 
                location details, time zones, and serving cities.
              </p>
              <Link
                href="/area-codes"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Browse Area Codes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}