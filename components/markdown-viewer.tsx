import Image from "next/image";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import remarkGfm from "remark-gfm";
interface IMarkdownViewerProps {
  content: string;
}
const MarkdownViewer: FC<IMarkdownViewerProps> = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      className="markdown-viewer"
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={dracula}
              language={match[1]}
              PreTag="div"
              {...props}
            />
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
        li: ({ ...props }) => <li>{props.children}</li>,
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
            <table className="border-collapse border border-solid border-gray-700 text-sm sm:text-base w-full min-w-max sm:w-fit">
              {props.children}
            </table>
          </div>
        ),
        // thead: ({ ...props }) => <thead>{props.children}</thead>,
        // tbody: ({ ...props }) => <tbody>{props.children}</tbody>,
        blockquote: ({ ...props }) => (
          <blockquote className="m-4 block px-4 py-1 border-l-4 border-solid border-gray-500 text-gray-400">
            {props.children}
          </blockquote>
        ),
        img: ({ ...props }) => {
          // props.node.properties?.src &&
          //   (props.node.properties.src =
          //     `${process.env.homeUrl}/assets/` +
          //     (props.src?.replace("/", "") || ""));
          return (
            <div className="relative pb-52 sm:pb-80">
              <Image
                layout="fill"
                src={props.src as any}
                className="object-cover"
                placeholder="blur"
                blurDataURL="https://i.ibb.co/ByhpsFY/blur.png"
              />
            </div>
          );
        },
        a: ({ ...props }) => (
          <a className="text-blue-500" {...props.node.properties}>
            {props.children}
          </a>
        ),
        p: ({ ...props }) => (
          <p {...props.node.properties} className="m-2">
            {props.children}
          </p>
        ),
        pre: ({ ...props }) => (
          <pre {...props.node.properties} className="mx-1">
            {props.children}
          </pre>
        ),
      }}
    />
  );
};

export default MarkdownViewer;
