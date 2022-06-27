import document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends document {
  render(): JSX.Element {
    if (process.env.GOOGLE_ADS) {
      console.log(typeof process.env.GOOGLE_ADS, process.env.GOOGLE_ADS);
    }
    return (
      <Html>
        <Head>
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

          {process.env.NAVER_SITE_VERIFICATION && (
            <meta
              name="naver-site-verification"
              content={process.env.NAVER_SITE_VERIFICATION}
            />
          )}
          {process.env.GOOGLE_ADS && (
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADS}`}
              crossOrigin="anonymous"
            ></script>
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
