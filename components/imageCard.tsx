import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface IImageCardProps {
  id: number;
}
const ImageCard: FC<IImageCardProps> = ({ id }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/post/${id}`);
  };
  return (
    <div className="p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        src="/01.jpg"
        layout="responsive"
        width="640"
        height="360"
        onClick={handleClick}
      />
      <div className="p-2">
        <p className="truncate max-w-lg">
          테스트입니다. 테스트테스트입니다. 테스트테스트입니다.
          테스트테스트입니다. 테스트테스트입니다. 테스트
        </p>
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          제목입니다 . 영화
        </h2>
        <p>2021-10-17 test</p>
      </div>
    </div>
  );
};

export default ImageCard;
