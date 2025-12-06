import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import Script from 'next/script'

const SEO = {
  titleTemplate: '%s | Area Code Finder',
  defaultTitle: 'Area Code Finder - Lookup U.S. Area Codes',
  description: 'Find any U.S. area code location, cities, time zones, and identify unknown callers.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://allareacodes.cloud/',
    site_name: 'Area Code Finder',
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-HWW4YK2P2R"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HWW4YK2P2R');
          `,
        }}
      />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}