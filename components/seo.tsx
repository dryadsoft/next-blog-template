import Head from "next/head";
import React, { FC } from "react";

interface ISeoProps {
  title: string;
}
const Seo: FC<ISeoProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default Seo;
