import fs from "fs";
import matter from "gray-matter";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import path from "path";
import React from "react";
import Comment from "../components/comment";
import MarkdownViewer from "../components/markdown-viewer";
import Seo from "../components/seo";
import Tag from "../components/tag";
import { getAllImgUrls, getAllPostFiles, getImgUrl } from "../src/utils";

const Post: NextPage = ({ content, data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo
        title={String(data.title || "")}
        description={data.description}
        imageUrl={data.imgUrl}
        pageUrl={data.pageUrl}
      />
      <div className="max-w-3xl m-auto text-base md:text-lg bg-gray-800 rounded-md px-2">
        <article className="mb-8">
          <h1 className="text-4xl font-extrabold mb-6 py-2 md:text-5xl">{data.title}</h1>
          <div className="py-2">
            <span className="font-semibold sm:text-base mr-2">{data.author}</span>
            <span className="text-sm sm:text-base">{data.regDate}</span>
          </div>
          {data.tag ? (
            <div className="flex flex-wrap">
              {data.tag.map((tag: string, i: number) => (
                <Tag key={i} text={tag} />
              ))}
            </div>
          ) : null}
        </article>
        <div>
          <MarkdownViewer content={content} />
        </div>
      </div>
      <Comment />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFiles = getAllPostFiles();
  const postFileNames = postFiles.reduce((acc: string[], cur) => {
    if (cur.endsWith(".md")) {
      acc.push(cur.replace(".md", ""));
    }
    return acc;
  }, []);
  const paths = postFileNames.map((postFileName) => ({
    params: { pid: postFileName.split("/") },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: { [key: string]: any }) => {
  const file = path.join(
    process.cwd(),
    `${process.env.postRootPath}/${context.params.pid.join("/")}.md`
  );
  const source = fs.readFileSync(file, "utf8");
  const { content, data } = matter(source);

  const allImgUrls = getAllImgUrls(content);
  const firstImgUrl = allImgUrls && getImgUrl(allImgUrls[0]);
  data.imgUrl = (firstImgUrl && firstImgUrl[0].replace("](", "").replace(")", "")) || "";
  data.pageUrl = `${process.env.homeUrl}/${context.params.pid.join("/")}`;
  return { props: { content, data } };
};

export default Post;
