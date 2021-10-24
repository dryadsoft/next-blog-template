import fs from "fs";
import matter from "gray-matter";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import path from "path";
import React from "react";
import Comment from "../../components/comment";
import MarkdownViewer from "../../components/markdown-viewer";
import Seo from "../../components/seo";
import Tag from "../../components/tag";

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all possible 'id' values via API, file, etc.
  const dir = path.join(process.cwd(), "src/post");
  const files = fs.readdirSync(dir, "utf8");
  const ids = files.reduce((acc: string[], cur) => {
    if (cur.includes(".md")) {
      acc.push(cur.replace(".md", ""));
    }
    return acc;
  }, []);
  const paths = ids.map((pid) => ({
    params: { pid },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: {
  [key: string]: any;
}) => {
  // console.log(context);
  const file = path.join(process.cwd(), `src/post/${context.params.pid}.md`);
  const source = fs.readFileSync(file, "utf8");

  const { content } = matter(source);

  return { props: { content } };
};

const Post: NextPage = ({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { pid } = router.query;
  // console.log(content);
  return (
    <>
      <Seo title={String(pid || "")} description={"description 입니다."} />
      <div className="max-w-3xl m-auto text-base md:text-lg">
        <article className="mb-8">
          <h1 className="text-4xl font-extrabold mb-6 py-2 md:text-5xl">
            타이틀 읿니다. 타이틀 타이틀.....글 제목입니다.
          </h1>
          <div className="py-2">
            <span className="font-semibold sm:text-base mr-2">dryadsoft</span>
            <span className="text-sm sm:text-base">2021-01-01</span>
          </div>
          <div className="flex flex-wrap">
            <Tag text={"태그1"} />
            <Tag text={"태그2"} />
            <Tag text={"태그3"} />
            <Tag text={"태그4"} />
          </div>
        </article>
        <div className="px-2">
          <MarkdownViewer content={content} />
        </div>
      </div>
      <Comment />
    </>
  );
};

export default Post;
