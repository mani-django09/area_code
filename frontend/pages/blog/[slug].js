import Layout from '../../components/Layout';
import AdPlaceholder from '../../components/AdPlaceholder';
import { NextSeo } from 'next-seo';

export default function BlogPost({ post }) {
  return (
    <Layout>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://allareacodes.cloud/blog/${post.slug}`}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>

        <AdPlaceholder position="banner" />

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

        <AdPlaceholder position="square" />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Sample blog posts - in production, fetch from CMS or database
  const posts = [
    { slug: 'how-to-identify-spam-calls' },
    { slug: 'understanding-area-codes' },
    { slug: 'phone-number-portability-explained' }
  ];

  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Sample blog posts - in production, fetch from CMS or database
  const posts = {
    'how-to-identify-spam-calls': {
      slug: 'how-to-identify-spam-calls',
      title: 'How to Identify and Block Spam Calls',
      excerpt: 'Learn how to identify spam calls using area codes and protect yourself from phone scams.',
      date: 'January 15, 2025',
      content: `Spam calls have become an increasingly common problem in today's digital age. Understanding how to identify these unwanted calls can save you time and protect you from potential scams.\n\nOne of the first indicators of a spam call is an unfamiliar area code. While not all calls from unknown area codes are spam, certain patterns can help you identify suspicious activity.\n\nCommon spam call tactics include pretending to be from government agencies, claiming you've won a prize, or threatening legal action. These calls often create a sense of urgency to pressure you into providing personal information or making payments.\n\nTo protect yourself, never give out personal information over the phone unless you initiated the call. Use caller ID apps and reverse phone lookup services to identify unknown numbers before answering. Consider registering your number on the National Do Not Call Registry.\n\nIf you receive a spam call, hang up immediately and report it to the FTC. Block the number to prevent future calls from that source. Remember, legitimate organizations will never ask for sensitive information over an unsolicited phone call.`
    },
    'understanding-area-codes': {
      slug: 'understanding-area-codes',
      title: 'Understanding Area Codes: A Complete Guide',
      excerpt: 'Everything you need to know about how area codes work in the United States.',
      date: 'January 10, 2025',
      content: `Area codes are an essential part of the North American telephone numbering system. Originally introduced in 1947, they help route calls to the correct geographic location.\n\nThe first area codes were assigned to the largest cities and most populous regions. Lower numbers like 212 (New York) and 213 (Los Angeles) were given to areas with the most phone lines.\n\nAs phone usage grew, new area codes were added through splits and overlays. A split divides a geographic area into two or more regions with different codes. An overlay adds a new code to the same geographic area, requiring 10-digit dialing.\n\nToday, with cell phones and VoIP technology, area codes are less tied to physical locations. Number portability allows you to keep your number when moving, meaning someone with a California area code might actually live in New York.\n\nUnderstanding area codes can help you identify where a call is coming from and whether it might be legitimate. However, scammers can spoof area codes, so always exercise caution with unknown callers.`
    },
    'phone-number-portability-explained': {
      slug: 'phone-number-portability-explained',
      title: 'Phone Number Portability Explained',
      excerpt: 'Learn how phone number portability works and what it means for area codes.',
      date: 'January 5, 2025',
      content: `Phone number portability has changed the way we think about area codes and phone numbers. This service allows you to keep your phone number when switching carriers or moving to a different location.\n\nIntroduced in 2003, local number portability (LNP) gives consumers the freedom to switch service providers without losing their established phone number. This has been particularly valuable for businesses that rely on their phone number for customer recognition.\n\nWireless number portability followed in 2004, allowing cell phone users to keep their numbers when changing carriers. This made the mobile phone market more competitive and gave consumers more options.\n\nThe impact on area codes has been significant. Since people can keep their numbers when moving, area codes no longer reliably indicate where someone is physically located. A person with a 212 (New York) area code might be living in California.\n\nThis portability has both benefits and drawbacks. While it provides convenience and continuity, it also makes it harder to identify the geographic origin of calls, which can be useful for avoiding spam or identifying local callers.`
    }
  };

  return {
    props: {
      post: posts[params.slug] || null
    }
  };
}