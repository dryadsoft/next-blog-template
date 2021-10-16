import Link from "next/link";
import React from "react";
import Seo from "../../components/seo";
const About = () => {
  return (
    <>
      <div className="bg-red-500">About</div>
      <Seo title="About" />
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      |{" "}
      <Link href="/post">
        <a>Post</a>
      </Link>
    </>
  );
};

export default About;
