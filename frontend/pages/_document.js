// frontend/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Preconnect to critical third-party origins - IMPROVES LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for other resources */}
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//basemaps.cartocdn.com" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* AdSense - async loading */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6913093595582462"
          crossOrigin="anonymous"
        />
        
        {/* Critical CSS to prevent FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Prevent layout shift */
              html{scroll-behavior:smooth}
              body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto',sans-serif}
              /* Reserve header height */
              header{height:64px}
            `,
          }}
        />
      </Head>
      <body className="antialiased bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}