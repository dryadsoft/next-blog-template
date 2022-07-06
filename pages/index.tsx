import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import dynamic from "next/dynamic";
import Seo from "../components/seo";
import { getListData } from "../src/utils";

const List = dynamic(() => import("../components/list"), {
  ssr: false,
});
const HList = dynamic(() => import("../components/hList"), {
  ssr: false,
});

const Home: NextPage = ({
  list,
  metaData,
  navList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo
        title={"Home"}
        description={process.env.description}
        pageUrl={metaData.pageUrl}
      />
      {navList.length === 1 ? (
        <List list={list} />
      ) : (
        //@ts-ignore
        list.map((datas, idx) => <HList key={idx} datas={datas} />)
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const { list, metaData, navList } = getListData();
  let listsByNav;
  if (navList.length > 1) {
    listsByNav = navList
      .map((nav) => ({
        [nav]: list.filter((data) => data.blogPath.split("/")[0] === nav),
      }))
      .map((data: any) => {
        const key = Object.keys(data)[0];
        return { [key]: data[key].filter((blog: any, idx: number) => idx < 6) };
      });
  }
  return {
    props: { list: listsByNav || list, metaData, navList },
  };
};

export default Home;
