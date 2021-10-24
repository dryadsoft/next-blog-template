import { gql } from "@apollo/client";
import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
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

  // const data = [
  //   {
  //     id: 1,
  //     title: "타이틀입니다.",
  //     description: "description입니다.",
  //     regDate: "20211024",
  //     author: "dryadsoft",
  //   },
  //   {
  //     id: 2,
  //     title: "타이틀입니다.",
  //     description: "description입니다.",
  //     regDate: "20211024",
  //     author: "dryadsoft",
  //   },
  //   {
  //     id: 3,
  //     title: "타이틀입니다.",
  //     description: "description입니다.",
  //     regDate: "20211024",
  //     author: "dryadsoft",
  //   },
  //   {
  //     id: 4,
  //     title: "타이틀입니다.",
  //     description: "description입니다.",
  //     regDate: "20211024",
  //     author: "dryadsoft",
  //   },
  //   {
  //     id: 5,
  //     title: "타이틀입니다.",
  //     description: "description입니다.",
  //     regDate: "20211024",
  //     author: "dryadsoft",
  //   },
  //   {
  //     id: 6,
  //     title: "타이틀입니다.",
  //     description: "description입니다.",
  //     regDate: "20211024",
  //     author: "dryadsoft",
  //   },
  // ];
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
          <ImageCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            regDate={item.regDate}
            author={item.author}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
