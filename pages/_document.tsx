import document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class CustomDocument extends document {
  render(): JSX.Element {
    if (process.env.GOOGLE_ADS) {
      // console.log(typeof process.env.GOOGLE_ADS, process.env.GOOGLE_ADS);
    }
    return (
      <Html>
        <Head>
          {process.env.NAVER_SITE_VERIFICATION && (
            <meta
              name="naver-site-verification"
              content={process.env.NAVER_SITE_VERIFICATION}
            />
          )}
          {process.env.EBAY_IR_SITE_VERIFICATION && (
            <meta
              name="ir-site-verification-token"
              //@ts-ignore
              value={process.env.EBAY_IR_SITE_VERIFICATION}
            />
          )}
          {process.env.GOOGLE_SITE_VERIFICATION && (
            <meta
              name="google-site-verification"
              //@ts-ignore
              value={process.env.GOOGLE_SITE_VERIFICATION}
            />
          )}
          {process.env.GOOGLE_ANALYTICS && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}
export default CustomDocument;
