import React, { useEffect } from "react";

const Comment: React.FC = () => {
  useEffect(() => {
    const scriptParentNode = document.getElementById("comment_id");
    if (!scriptParentNode) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", String(process.env.GITHUB_REPO));
    script.setAttribute("issue-term", "title");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("label", "comments");
    script.crossOrigin = "anonymous";
    scriptParentNode.appendChild(script);

    return () => {
      scriptParentNode.removeChild(scriptParentNode.firstChild as Node);
    };
  }, []);

  return <section className="mx-2" id="comment_id" />;
};

export default Comment;
