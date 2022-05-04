import Image from "next/image";
import React, { FC } from "react";

interface IImageCardProps {
  id: number;
  title: string;
  description: string;
  regDate: string;
  author: string;
  imgUrl: string;
}
const ImageCard: FC<IImageCardProps> = ({
  id,
  title,
  description,
  regDate,
  author,
  imgUrl,
}) => {
  return (
    <div className="p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={imgUrl}
        layout="responsive"
        width="640"
        height="360"
        alt=""
        className="rounded-t-md"
      />
      <div className="p-2 text-gray-400 bg-gray-800 rounded-b-md">
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold text-gray-200">
          {title}
        </h2>
        <p className="line-clamp-3 max-w-lg mb-2">{description}</p>
        <p className="text-gray-100">
          <span>{regDate}</span> <span>{author}</span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
