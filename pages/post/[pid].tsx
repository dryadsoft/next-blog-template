import { useRouter } from "next/router";
import React from "react";
import Seo from "../../components/seo";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Seo title={String(pid)} />
      <div>Post: {pid}</div>
    </>
  );
};

export default Post;
