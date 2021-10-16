import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-red-500">About</div>
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
