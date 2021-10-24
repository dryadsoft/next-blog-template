import { gql } from "@apollo/client";
import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import path from "path";
import ImageCard from "../../components/imageCard";
import Seo from "../../components/seo";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  // console.log("getStaticProps");
  // const { data } = await client.query({
  //   query: EXCHANGE_RATES,
  // });
  const dir = path.join(process.cwd(), "src/post");
  const files = fs.readdirSync(dir, "utf8");
  const data = files.reduce((acc: { [key: string]: any }[], cur) => {
    if (cur.includes(".md")) {
      const file = path.join(process.cwd(), `src/post/${cur}`);
      const source = fs.readFileSync(file, "utf8");
      const { data } = matter(source);
      acc.push(data);
    }
    return acc;
  }, []);
  return {
    props: { list: data },
  };
};

const Posts: NextPage = ({
  list,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo title={"Post"} />
      <div
        className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center"
      >
        {list.map((item: any) => (
          <Link href={`/post/${item.id}`} key={item.id}>
            <a>
              <ImageCard
                id={item.id}
                title={item.title}
                description={item.description}
                regDate={item.regDate}
                author={item.author}
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Posts;
