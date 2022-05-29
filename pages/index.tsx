import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import List from "../components/list";
import Seo from "../components/seo";
import { getListData } from "../src/utils";

const Home: NextPage = ({
  list,
  metaData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo
        title={"Home"}
        description={process.env.description}
        pageUrl={metaData.pageUrl}
      />
      <List list={list} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return getListData();
};

export default Home;
