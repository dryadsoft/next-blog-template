import Image from "next/image";
import React, { FC } from "react";

interface IMoreImageCardProps {
  id: number;
  title: string;
  description: string;
  regDate: string;
  author: string;
  imgUrl: string;
  tag: string[];
}
const MoreImageCard: FC<IMoreImageCardProps> = ({
  id,
  title,
  description,
  regDate,
  author,
  imgUrl,
  tag,
}) => {
  return (
    <div className="flex flex-row justify-items-end p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <div className="relative w-1/4 h-16">
        <Image
          src={imgUrl}
          layout="fill"
          quality={50}
          className="rounded-l-md"
          placeholder="blur"
          blurDataURL={`${process.env.ASSET_PREFIX}/blur.png`}
        />
      </div>
      <div className="p-2 text-gray-400 bg-gray-700 rounded-r-md h-16 w-3/4">
        <h3 className="line-clamp-1 mt-1 text-base text-gray-200">{title}</h3>
        <p className="line-clamp-1 max-w-lg mb-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MoreImageCard;
