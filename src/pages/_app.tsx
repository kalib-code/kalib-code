import '../../globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://missional-analytics.vercel.app/script.js" data-website-id="cd44b376-bdc0-4ff5-a310-a6d5599feb8b" />
      <Analytics />
    </>
  )

}
