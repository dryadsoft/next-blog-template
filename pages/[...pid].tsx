import fs from "fs";
import matter from "gray-matter";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import path from "path";
import React from "react";
import Comment from "../components/comment";
import Detail from "../components/detail";
import List from "../components/list";
import More from "../components/more";
import Seo from "../components/seo";
import {
  getAllImgUrls,
  getAllPostFiles,
  getAllPostFolders,
  getImgUrl,
  getListData,
} from "../src/utils";

const Post: NextPage = ({
  content,
  data,
  dataList,
  list,
  metaData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log(content, data, list, metaData);
  // console.log(dataList);
  if (metaData) {
    return (
      <>
        <Seo
          title={metaData.nav}
          description={process.env.description}
          pageUrl={metaData.pageUrl}
        />
        <List list={list} />
      </>
    );
  }
  return (
    <>
      <Seo
        title={String(data.title || "")}
        description={data.description}
        imageUrl={data.imgUrl}
        pageUrl={data.pageUrl}
      />
      <Detail data={data} content={content} />
      {process.env.GITHUB_REPO && <Comment />}

      {dataList && <More list={dataList} />}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFiles = getAllPostFiles();
  const navList = getAllPostFolders();
  const postFileNames = postFiles.reduce((acc: string[], cur) => {
    if (cur.endsWith(".md")) {
      acc.push(cur.replace(".md", ""));
    }
    return acc;
  }, []);
  const paths = postFileNames.map((postFileName) => ({
    params: { pid: postFileName.split("/") },
  }));

  const navPath = navList.map((nav) => ({
    params: { pid: nav.split("/") },
  }));
  return { paths: [...paths, ...navPath], fallback: false };
};

export const getStaticProps: GetStaticProps = (context: {
  [key: string]: any;
}) => {
  const filePath = path.join(
    process.cwd(),
    `${process.env.postRootPath}/${context.params.pid.join("/")}.md`
  );
  try {
    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);

    const allImgUrls = getAllImgUrls(content);
    const firstImgUrl = allImgUrls && getImgUrl(allImgUrls[0]);
    data.imgUrl =
      (firstImgUrl && firstImgUrl[0].replace("](", "").replace(")", "")) || "";
    data.pageUrl = path.join(
      `${process.env.homeUrl}`,
      context.params.pid.join("/")
    );

    const { list: dataList, navList } = getListData(context.params.pid[0]);

    return {
      props: {
        content,
        data,
        dataList: dataList.filter(
          (item, idx) => item.id !== data.id && idx < 7
        ),
        navList,
      },
    };
  } catch (err) {
    return { props: { ...getListData(context.params.pid.join("/")) } };
  }
};

export default Post;
