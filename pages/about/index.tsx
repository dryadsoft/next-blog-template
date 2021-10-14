import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div>About</div>
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
