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
          <h1 className="text-4xl font-semibold">{props.children}</h1>
        ),
        h2: ({ ...props }) => <h2 className="text-4xl">{props.children}</h2>,
        h3: ({ ...props }) => <h3 className="text-3xl">{props.children}</h3>,
        h4: ({ ...props }) => <h4 className="text-2xl">{props.children}</h4>,
        h5: ({ ...props }) => <h5 className="text-xl">{props.children}</h5>,
        h6: ({ ...props }) => <h6 className="text-lg">{props.children}</h6>,
        li: ({ ...props }) => <li>{props.children}</li>,
        ol: ({ ...props }) => <ol>{props.children}</ol>,
        td: ({ ...props }) => <td>{props.children}</td>,
        th: ({ ...props }) => <th>{props.children}</th>,
        tr: ({ ...props }) => <tr>{props.children}</tr>,
        ul: ({ ...props }) => <ul>{props.children}</ul>,
      }}
    />
  );
};

export default MarkdownViewer;
