import { gql } from "@apollo/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Seo from "../components/seo";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  // console.log("getStaticProps");
  // const { data } = await client.query({
  //   query: EXCHANGE_RATES,
  // });
  return {
    props: {},
  };
};

const Home: NextPage = ({
  rates,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log("getStaticProps", rates.length);
  return (
    <>
      <Seo title={"Home"} />
      <div
        className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center"
      >
        {/* <ImageCard id={6} /> */}
      </div>
    </>
  );
};

export default Home;
