import React from "react";
import MarkdownViewer from "./markdown-viewer";
import Tag from "./tag";

interface IDetailProps {
  data: any;
  content: any;
}
const Detail: React.FC<IDetailProps> = ({ data, content }) => {
  return (
    <div className="max-w-3xl m-auto text-base md:text-lg bg-gray-800 rounded-md px-2 sm:px-4">
      <article className="mb-8">
        <h1 className="text-3xl font-bold mb-2 py-2 md:text-4xl">
          {data.title}
        </h1>
        <div className="py-2">
          <span className="font-semibold sm:text-base mr-2">{data.author}</span>
          <span className="text-sm sm:text-base">{data.regDate}</span>
        </div>
        {data.tag ? (
          <div className="flex flex-wrap">
            {data.tag.map((tag: string, i: number) => (
              <Tag key={i} text={tag} />
            ))}
          </div>
        ) : null}
      </article>
      <div>
        <MarkdownViewer content={content} />
      </div>
    </div>
  );
};
export default Detail;
