import { gql } from "@apollo/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "../src/lib/apolloClient";
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

const Home: NextPage = ({
  rates,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("getStaticProps", rates.length);
  return (
    <div className="text-white bg-gray-900 h-screen w-screen overflow-hidden">
      <Link href="/post">
        <a>Post</a>
      </Link>{" "}
      |{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <Image layout="responsive" src="/01.jpg" width="100" height="100"></Image>
    </div>
  );
};

export default Home;
