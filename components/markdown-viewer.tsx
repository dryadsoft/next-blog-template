import Image from "next/image";
import React, { FC, isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import remarkGfm from "remark-gfm";
import MarkEbayBanner from "./markdown-ebayBanner";
import MarkdownMap from "./markdown-map";
interface IMarkdownViewerProps {
  content: string;
}

const transBrTag = (children: React.ReactNode & React.ReactNode[]) => {
  return children.map((data, idx) => {
    if (!isValidElement(data) && typeof data === "string") {
      data = data?.toString().replaceAll("\\n", "");
      data = data?.toString().replaceAll("\n", "");
    }
    const strTag = data?.toString().replaceAll(" ", "").toLowerCase();
    if (strTag === "<br/>" || strTag === "<br>") {
      data = <br key={idx} />;
      return data;
    }
    return data;
  });
};

const transParams = (child: any) => {
  const params: { [key: string]: number | string } = child
    .split("\n")
    .filter((value: string) => value !== "")
    .map((value: string) => {
      const values = value.split(":");
      const [_, ...rest] = values;
      return {
        [values[0]]: rest.join(":"),
      };
    })
    .reduce(
      (
        acc: { [key: string]: number | string },
        cur: { [key: string]: number | string }
      ) => {
        const key = Object.keys(cur)[0];
        acc[key] = cur[key];
        return acc;
      },
      {}
    );
  return params;
};

const MarkdownViewer: FC<IMarkdownViewerProps> = ({ content }) => {
  return (
    <ReactMarkdown
      // children={content}
      remarkPlugins={[remarkGfm]}
      className="markdown-viewer"
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              // children={String(children).replace(/\n$/, "")}
              style={dracula}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        h1: ({ ...props }) => (
          <h1 className="text-3xl sm:text-4xl sm:font-semibold mx-2 my-4 pb-3 border-b-[1px] border-solid border-gray-600">
            {props.children}
          </h1>
        ),
        h2: ({ ...props }) => (
          <h2 className="text-2xl sm:text-3xl mx-2 my-4 pb-3 border-b-[1px] border-solid border-gray-600">
            {props.children}
          </h2>
        ),
        h3: ({ ...props }) => (
          <h3 className="text-xl sm:text-3xl mx-2 my-4 pb-3 border-b-[1px] border-solid border-gray-600">
            {props.children}
          </h3>
        ),
        h4: ({ ...props }) => (
          <h4 className="text-lg sm:text-xl mt-4 my-4 mx-2 pb-3 border-b-[1px] border-solid border-gray-600">
            {props.children}
          </h4>
        ),
        h5: ({ ...props }) => (
          <h5 className="text-base sm:text-lg mx-2 my-4 pb-3 border-b-[1px] border-solid border-gray-600">
            {props.children}
          </h5>
        ),
        h6: ({ ...props }) => (
          <h6 className="text-sm sm:text-base mx-2 my-4 pb-3 border-b-[1px] border-solid border-gray-600">
            {props.children}
          </h6>
        ),
        li: ({ ...props }) => {
          const childrens = transBrTag(props.children);
          return <li {...props.node.properties}>{childrens}</li>;
        },
        ol: ({ ...props }) => <ol>{props.children}</ol>,
        // td: ({ ...props }) => <td>{props.children}</td>,
        th: ({ ...props }) => (
          <th className="bg-gray-600 text-rose-300">{props.children}</th>
        ),
        tr: ({ ...props }) => (
          <tr className="odd:bg-gray-700">{props.children}</tr>
        ),
        ul: ({ ...props }) => (
          <ul className="pl-4 list-disc mx-4 mb-4">{props.children}</ul>
        ),
        table: ({ ...props }) => (
          <div className="overflow-x-auto mx-2">
            <table className="border-collapse border border-solid border-gray-700 text-base sm:text-base w-full sm:w-fit">
              {props.children}
            </table>
          </div>
        ),
        blockquote: ({ ...props }) => (
          <blockquote className="m-4 block px-4 py-1 border-l-4 border-solid border-gray-500 text-gray-400">
            {props.children}
          </blockquote>
        ),
        img: ({ ...props }) => {
          return (
            <div className="w-[95%] sm:w-[98%] mx-auto">
              <Image
                layout="responsive"
                src={props.src as any}
                width="100%"
                height="100%"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`${process.env.ASSET_PREFIX}/blur.png`}
              />
            </div>
          );
        },
        a: ({ ...props }) => (
          <a
            className="text-blue-500"
            {...props.node.properties}
            target="_blank"
          >
            {props.children}
          </a>
        ),
        td: ({ ...props }) => {
          const childrens = transBrTag(props.children);
          return <td {...props.node.properties}>{childrens}</td>;
        },
        p: ({ ...props }) => {
          //@ts-ignore
          const tagName = props.node.children[0].tagName;
          if (tagName === "img" || tagName === "a") {
            return <>{props.children}</>;
          }
          const childrens = transBrTag(props.children);
          return (
            <p {...props.node.properties} className="m-2">
              {childrens}
            </p>
          );
        },
        pre: ({ ...props }) => {
          //@ts-ignore
          const { className, children } = props.children[0].props;
          if (className === "language-googleMap") {
            const latLan = transParams(children[0]);
            return <MarkdownMap {...latLan} />;
          } else if (className === "language-ebayBanner") {
            const params = transParams(children[0]);
            return <MarkEbayBanner {...params} />;
          } else if (className === "language-button") {
            const params = transParams(children[0]);
            return (
              <div className="text-center mt-10 mb-6">
                <a
                  className="bg-blue-700 px-20 py-3  rounded-md hover:bg-red-300"
                  href={params.link as string}
                >
                  {params.title}
                </a>
              </div>
            );
          } else if (className === "language-rightText") {
            const params = transParams(children[0]);
            return (
              <div className="w-full px-6 flex justify-end">
                <div className="text-ml text-gray-300">
                  <div>
                    <span>{params.title}</span>
                    <span>{params.value}</span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <pre {...props.node.properties} className="mx-1">
              {props.children}
            </pre>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
