import React, { FC } from "react";
import Tag from "./tag";

interface IMoreTextCardProps {
  id: number;
  title: string;
  description: string;
  regDate: string;
  author: string;
  tag: string[];
}
const MoreTextCard: FC<IMoreTextCardProps> = ({
  id,
  title,
  description,
  regDate,
  author,
  tag,
}) => {
  return (
    <div className="p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <div className="p-2 text-gray-400 bg-gray-700 rounded-md">
        <h3 className="mt-1 text-xl transition-all duration-100 ease-in-out group-hover:font-bold text-gray-200">
          {title}
        </h3>
        <p className="line-clamp-1 max-w-lg mb-2">{description}</p>
        <div className="text-gray-300 text-xs sm:text-sm flex flex-row justify-between items-end"></div>
      </div>
    </div>
  );
};

export default MoreTextCard;
