import Image from "next/image";
import React, { FC } from "react";
import Tag from "./tag";

interface IImageCardProps {
  id: number;
  title: string;
  description: string;
  regDate: string;
  author: string;
  imgUrl: string;
  tag: string[];
}
const ImageCard: FC<IImageCardProps> = ({
  id,
  title,
  description,
  regDate,
  author,
  imgUrl,
  tag,
}) => {
  return (
    <div className="p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src={imgUrl}
        layout="responsive"
        width="640"
        height="360"
        quality={75}
        className="rounded-t-md"
        placeholder="blur"
        blurDataURL={`${process.env.ASSET_PREFIX}/blur.png`}
      />
      <div className="p-2 text-gray-400 bg-gray-800 rounded-b-md">
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold text-gray-200">
          {title}
        </h2>
        <p className="line-clamp-3 max-w-lg mb-2">{description}</p>

        <div className="text-gray-300 text-xs sm:text-sm flex flex-row justify-between items-end">
          {/* <span>{author}</span> */}
          {tag ? (
            <div className="text-gray-100">
              <div className="flex flex-wrap">
                {tag.map((tag: string, i: number) => (
                  <Tag key={i} text={tag} />
                ))}
              </div>
            </div>
          ) : null}
          <span className="min-w-fit">{regDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
