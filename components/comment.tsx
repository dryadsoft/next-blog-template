import React, { FC } from "react";

const Comment: FC = () => (
  <section
    ref={(elem) => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.setAttribute("repo", String(process.env.GITHUB_REPO));
      scriptElem.setAttribute("issue-term", "title");
      scriptElem.setAttribute("theme", "github-dark");
      scriptElem.setAttribute("label", "comments");
      scriptElem.crossOrigin = "anonymous";
      elem.appendChild(scriptElem);
    }}
  />
);

export default Comment;
