import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface IImageCardProps {
  id: number;
  title: string;
  description: string;
  regDate: string;
  author: string;
}
const ImageCard: FC<IImageCardProps> = ({
  id,
  title,
  description,
  regDate,
  author,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/post/${id}`);
  };
  return (
    <div
      className="p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      onClick={handleClick}
    >
      <Image src="/01.jpg" layout="responsive" width="640" height="360" />
      <div className="p-2">
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {title}
        </h2>
        <p className="truncate max-w-lg">{description}</p>

        <p>
          <span>{regDate}</span> <span>{author}</span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
