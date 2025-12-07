import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <NextSeo
        title="Privacy Policy - Area Code Finder"
        description="Our privacy policy explains how we collect, use, and protect your information."
        canonical="https://allareacodes.cloud/privacy-policy"
        noindex={true}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Information You Provide</h3>
            <p className="text-gray-700 mb-4">
              When you use our website, we may collect information you voluntarily provide, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Search queries (area codes you lookup)</li>
              <li>Contact information if you reach out to us</li>
              <li>Spam reports you submit</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you visit our site:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referral source</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and improve our services</li>
              <li>Understand how users interact with our site</li>
              <li>Respond to your inquiries</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
              <li>Display relevant advertisements (if applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Remember your preferences</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="text-gray-700">
              You can control cookies through your browser settings, but disabling them may affect site functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may use third-party services including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Google Analytics:</strong> To analyze website traffic</li>
              <li><strong>Advertising Networks:</strong> To display relevant ads</li>
              <li><strong>Affiliate Services:</strong> For reverse phone lookup recommendations</li>
            </ul>
            <p className="text-gray-700 mt-4">
              These services have their own privacy policies and may collect information independently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700">
              We implement reasonable security measures to protect your information. However, no internet transmission is 100% secure. We cannot guarantee absolute security of data transmitted to our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies through your browser</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700">
              Our service is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this privacy policy, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              Email: privacy@allareacodes.cloud<br />
              Address: [privacy@allareacodes.cloud]
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}