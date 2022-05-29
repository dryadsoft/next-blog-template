import Document, { Html, Head, Main, NextScript } from "next/document";
function Doc() {
  return (
    <Html>
      <Head>
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
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADS}`}
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Doc;
