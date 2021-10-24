import Head from "next/head";
import React, { FC } from "react";

interface ISeoProps {
  title: string;
  description?: string;
  imageUrl?: string;
  pageUrl?: string;
}
const Seo: FC<ISeoProps> = ({ title, description, imageUrl, pageUrl }) => {
  return (
    <Head>
      <link rel="image_src" href={imageUrl} />
      <meta itemProp="image" content={imageUrl} />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta name="referrer" content="always" />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} /> /
      <meta property="og:article:author" content={process.env.author} />
      <meta property="og:site_name" content={process.env.siteName} />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="by" content={process.env.author} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={imageUrl} />
      <meta property="article:section" content="IT 인터넷" />
      {/* <!-- END OPENGRAPH -- /> */}
      {/* <!-- BEGIN TWITTERCARD --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={process.env.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content={process.env.author} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      {/* <!-- END TWITTERCARD -- />
      <!-- BEGIN DAUMAPP --> */}
      <meta property="dg:plink" content={pageUrl} />
      <meta name="plink" content={pageUrl} />
      <meta name="title" content={title} />
      <meta name="article:media_name" content={process.env.siteName} />
      <meta property="article:mobile_url" content={pageUrl} />
      <meta property="article:pc_url" content={pageUrl} />
      <meta property="article:mobile_view_url" content={pageUrl} />
      <meta property="article:pc_view_url" content={pageUrl} />
      <meta property="article:talk_channel_view_url" content={pageUrl} />
      <meta property="article:pc_service_home" content={process.env.homeUrl} />
      <meta
        property="article:mobile_service_home"
        content={process.env.homeUrl}
      />
      {/* <meta property="article:txid" content="4023133_8" /> */}
      {/* <meta property="article:published_time" content="2020-07-01T09:09:19+09:00" /> */}
      {/* <meta property="og:regDate" content="20200630230904" /> */}
      {/* <meta property="article:modified_time" content="2021-09-12T18:44:45+09:00" /> */}
      {/* <!-- END DAUMAPP --> */}
      <meta property="fb:pages" content={process.env.siteName} />
      <meta name="robots" content="all" />
      <title>{`${title} :: ${process.env.siteName}`}</title>
      <meta name="title" content={`${title} :: ${process.env.siteName}`} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={process.env.siteName}
        href={process.env.rssUrl}
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta httpEquiv="imagetoolbar" content="no" />
    </Head>
  );
};

export default Seo;
