import { gql } from "@apollo/client";
import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import path from "path";
import ImageCard from "../components/imageCard";
import Seo from "../components/seo";
import TextCard from "../components/textCard";
import { getAllImgUrls, getImgUrl } from "../src/utils";

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
  const dir = path.join(process.cwd(), `${process.env.postRootPath}`);
  const files = fs.readdirSync(dir, "utf8");
  const data = files.reduce((acc: { [key: string]: any }[], cur) => {
    if (cur.includes(".md")) {
      const file = path.join(
        process.cwd(),
        `${process.env.postRootPath}/${cur}`
      );
      const source = fs.readFileSync(file, "utf8");
      const { data, content } = matter(source);

      const allImgUrls = getAllImgUrls(content);
      const firstImgUrl = allImgUrls && getImgUrl(allImgUrls[0]);
      data.imgUrl =
        (firstImgUrl && firstImgUrl[0].replace("](", "").replace(")", "")) ||
        "";
      acc.push(data);
    }
    return acc;
  }, []);
  return {
    props: { list: data },
  };
};

const Home: NextPage = ({
  list,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo title={"Home"} />
      <div
        className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        3xl:flex flex-wrap justify-center"
      >
        {list.map((item: any) => (
          <Link href={`/${item.id}`} key={item.id}>
            <a>
              {item.imgUrl ? (
                <ImageCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  regDate={item.regDate}
                  author={item.author}
                  imgUrl={item.imgUrl}
                />
              ) : (
                <TextCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  regDate={item.regDate}
                  author={item.author}
                />
              )}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
