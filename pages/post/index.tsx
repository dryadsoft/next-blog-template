import { gql } from "@apollo/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { client } from "../../src/lib/apolloClient";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps");
  const { data } = await client.query({
    query: EXCHANGE_RATES,
  });
  return {
    props: data,
  };
};

const Posts: NextPage = ({
  rates,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("getStaticProps", rates.length);
  return (
    <div className="text-white bg-gray-900 h-screen w-screen overflow-hidden">
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Posts;
