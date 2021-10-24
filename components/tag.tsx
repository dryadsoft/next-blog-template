import React, { FC } from "react";

interface ITagProps {
  text: string;
}
const Tag: FC<ITagProps> = ({ text }) => {
  return (
    <span className="py-1 px-2 mx-2 my-1 font-semibold text-black text-sm bg-red-300 rounded-md">
      {text}
    </span>
  );
};
export default Tag;
