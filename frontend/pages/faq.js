import Layout from '../components/Layout';
import { NextSeo, FAQPageJsonLd } from 'next-seo';

export default function FAQ() {
  const faqs = [
    {
      question: "What is an area code?",
      answer: "An area code is a three-digit number that identifies a specific geographic region in the North American Numbering Plan. It's the first three digits of a 10-digit phone number."
    },
    {
      question: "How do I find out where an area code is from?",
      answer: "Use our area code finder tool by entering the three-digit code. You'll see the state, cities, time zone, and other details about that area code."
    },
    {
      question: "Can area codes cross state lines?",
      answer: "Generally, area codes don't cross state lines, but there are exceptions. Some area codes serve multiple states in border regions."
    },
    {
      question: "Why am I getting calls from unknown area codes?",
      answer: "Unknown calls can be from telemarketers, scammers, or legitimate businesses. Use a reverse phone lookup service to identify the caller before answering."
    },
    {
      question: "Are toll-free numbers considered area codes?",
      answer: "Toll-free numbers (800, 888, 877, 866, 855, 844, 833) are not traditional area codes as they don't represent geographic locations."
    },
    {
      question: "How many area codes are there in the United States?",
      answer: "There are over 300 geographic area codes in the United States, with new codes being added as phone numbers in certain regions run out."
    },
    {
      question: "Do cell phones keep their area code when moving?",
      answer: "Yes, with number portability, you can keep your phone number and area code even when moving to a different state or region."
    },
    {
      question: "What does it mean when an area code overlays another?",
      answer: "An overlay occurs when a new area code is added to serve the same geographic region as an existing code, requiring 10-digit dialing for all calls."
    }
  ];

  const faqSchema = {
    mainEntity: faqs.map(faq => ({
      questionName: faq.question,
      acceptedAnswerText: faq.answer
    }))
  };

  return (
    <Layout>
      <NextSeo
        title="Area Code FAQ - Common Questions About U.S. Area Codes"
        description="Get answers to frequently asked questions about area codes, phone numbers, and how to identify unknown callers."
        canonical="https://allareacodes.cloud/faq"
      />
      <FAQPageJsonLd {...faqSchema} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-600 mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-4">
            Can't find the answer you're looking for? Use our area code search tool to find detailed 
            information about any U.S. area code.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Search Area Codes
          </a>
        </div>
      </div>
    </Layout>
  );
}