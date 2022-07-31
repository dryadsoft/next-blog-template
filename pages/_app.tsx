import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout navList={pageProps.navList}>
      {process.env.EBAY_IR_SITE_VERIFICATION && (
        <Script
          strategy="lazyOnload"
          src="https://epnt.ebay.com/static/epn-smart-tools.js"
        />
      )}
      {process.env.GOOGLE_ADS && (
        <Script
          strategy="lazyOnload"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADS}`}
          crossOrigin="anonymous"
        />
      )}
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
