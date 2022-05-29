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

  return (
    <section
      id="comment_id"
      // ref={(elem) => {
      //   if (!elem) {
      //     return;
      //   }
      //   const scriptElem = document.createElement("script");
      //   scriptElem.src = "https://utteranc.es/client.js";
      //   scriptElem.async = true;
      //   scriptElem.setAttribute("repo", String(process.env.GITHUB_REPO));
      //   scriptElem.setAttribute("issue-term", "title");
      //   scriptElem.setAttribute("theme", "github-dark");
      //   scriptElem.setAttribute("label", "comments");
      //   scriptElem.crossOrigin = "anonymous";
      //   elem.appendChild(scriptElem);
      // }}
    />
  );
};

export default Comment;
