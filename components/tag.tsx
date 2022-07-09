import React, { FC } from "react";

interface ITagProps {
  text: string;
}
const Tag: FC<ITagProps> = ({ text }) => {
  return (
    <span className="py-1 px-1 mr-1 my-1 text-gray-200 text-xs sm:text-sm bg-emerald-600/80 rounded-md">
      {text}
    </span>
  );
};
export default Tag;
