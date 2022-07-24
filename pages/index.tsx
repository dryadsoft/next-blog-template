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

  let customNav: any;
  if (process.env.NAV_LIST) {
    const navSortList = JSON.parse(String(process.env.NAV_LIST));
    //@ts-ignore
    customNav = navSortList
      //@ts-ignore
      .filter((nav) => navList.includes(nav.name))
      //@ts-ignore
      .map((nav) => ({
        href: nav.name,
        name: nav.convertName ? nav.convertName : nav.name,
      }));
  } else {
    customNav = navList;
  }
  let listsByNav;
  if (customNav.length > 1) {
    listsByNav = customNav
      .map((nav: any) => ({
        href: nav.href,
        datas: list.filter((data) => data.blogPath.split("/")[0] === nav.href),
        name: nav.name,
      }))
      .map((data: any) => {
        const key = Object.keys(data)[0];
        return {
          href: data.href,
          name: data.name,
          datas: data.datas.filter((blog: any, idx: number) => idx < 10),
        };
      });
    customNav = customNav.map((data: any) => data.href);
  }
  return {
    props: { list: listsByNav || list, metaData, navList: customNav },
  };
};

export default Home;
