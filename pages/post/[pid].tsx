import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Comment from "../../components/comment";
import Seo from "../../components/seo";

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all possible 'id' values via API, file, etc.
  const ids = ["1", "2", "3", "4", "5", "6"]; // Example
  const paths = ids.map((pid) => ({
    params: { pid },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Seo title={String(pid || "")} />
      <div>Post: {pid}</div>
      <Comment />
    </>
  );
};

export default Post;
