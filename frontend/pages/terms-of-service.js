import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';

export default function TermsOfService() {
  return (
    <Layout>
      <NextSeo
        title="Terms of Service - Area Code Finder"
        description="Terms and conditions for using Area Code Finder services."
        canonical="https://allareacodes.cloud/terms-of-service"
        noindex={true}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using Area Code Finder ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              Area Code Finder provides information about U.S. area codes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Geographic locations of area codes</li>
              <li>Cities served by each area code</li>
              <li>Time zone information</li>
              <li>Historical data about area codes</li>
              <li>Links to third-party reverse phone lookup services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accuracy of Information</h2>
            <p className="text-gray-700">
              While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or timeliness of the information provided. Area codes may change, and information should be verified with official sources for critical decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the Service for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Submit false or misleading spam reports</li>
              <li>Scrape or harvest data from the site without permission</li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Use the Service to harass or harm others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this site, including text, graphics, logos, and software, is the property of Area Code Finder or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links and Services</h2>
            <p className="text-gray-700 mb-4">
              Our Service may contain links to third-party websites and services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Reverse phone lookup services</li>
              <li>Background check services</li>
              <li>Advertising networks</li>
            </ul>
            <p className="text-gray-700">
              We are not responsible for the content, privacy policies, or practices of third-party sites. Use of third-party services is at your own risk and subject to their terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Affiliate Disclosure</h2>
            <p className="text-gray-700">
              Area Code Finder participates in affiliate programs. We may earn commissions from services we recommend, including reverse phone lookup and background check services. This does not affect the cost to you or our editorial independence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AREA CODE FINDER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED $100.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold harmless Area Code Finder from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700">
              For questions about these Terms, please contact:
            </p>
            <p className="text-gray-700 mt-2">
              Email: legal@allareacodes.cloud<br />
              Address: [Your Address]
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}