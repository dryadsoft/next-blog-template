import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MoreImageCard = dynamic(() => import("./moreImageCard"), {
  ssr: false,
});
const MoreTextCard = dynamic(() => import("./moreTextCard"), {
  ssr: false,
});

const More = ({ list }: any) => {
  return (
    <div className="max-w-3xl m-auto text-base px-2 mt-4 pb-1 sm:px-4 md:text-lg">
      <div className="pl-2 font-semibold text-xl">
        <span>More</span>
      </div>
      <div className="my-4 flex-wrap justify-center sm:px-5  sm:grid md:grid-cols-2">
        {list.map((item: any) => (
          <Link href={`/${item.blogPath}`} key={item.id}>
            <a>
              {item.imgUrl ? (
                <MoreImageCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  regDate={item.regDate}
                  author={item.author}
                  imgUrl={item.imgUrl}
                  tag={item.tag}
                />
              ) : (
                <MoreTextCard
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
    </div>
  );
};
export default More;
