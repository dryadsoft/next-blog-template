import Link from "next/link";
import React from "react";
import ImageCard from "./imageCard";
import TextCard from "./textCard";

const List = ({ list }: any) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {list.map((item: any) => (
        <Link href={`/${item.blogPath}`} key={item.id}>
          <a>
            {item.imgUrl ? (
              <ImageCard
                id={item.id}
                title={item.title}
                description={item.description}
                regDate={item.regDate}
                author={item.author}
                imgUrl={item.imgUrl}
                tag={item.tag}
              />
            ) : (
              <TextCard
                id={item.id}
                title={item.title}
                description={item.description}
                regDate={item.regDate}
                author={item.author}
                tag={item.tag}
              />
            )}
          </a>
        </Link>
      ))}
    </div>
  );
};
export default List;
