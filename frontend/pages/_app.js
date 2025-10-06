
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'

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
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
