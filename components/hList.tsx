import Image from "next/image";
import Link from "next/link";

//@ts-ignore
const ImageBox = ({ data }) => {
  return (
    <li className="max-w-[150px] min-w-[150px] h-full mx-1 bg-gray-600/30 rounded-md sm:max-w-[200px] sm:min-w-[200px] md:max-w-[230px] md:min-w-[230px]">
      <div className="relative w-full h-4/5">
        <Image
          src={data.imgUrl}
          layout="fill"
          quality={50}
          className="rounded-t-md"
          placeholder="blur"
          objectFit="cover"
          blurDataURL={`${process.env.ASSET_PREFIX}/blur.png`}
        />
      </div>
      <div className="line-clamp-1 m-1">{data.title}</div>
    </li>
  );
};
//@ts-ignore
const TextBox = ({ data }) => {
  return (
    <li className="max-w-[150px] min-w-[150px] h-full mx-1 bg-gray-600/30 rounded-md sm:max-w-[200px] sm:min-w-[200px] md:max-w-[230px] md:min-w-[230px]">
      <div className=" w-full p-4">
        <div className="text-lg text-center line-clamp-2 sm:text-xl md:text-2xl">
          {data.title}
        </div>
        <div className="text-center line-clamp-3 text-base mt-4 text-gray-400 sm:line-clamp-4 md:line-clamp-5">
          {data.description}
        </div>
      </div>
    </li>
  );
};
//@ts-ignore
const HList = ({ datas }) => {
  const key = Object.keys(datas)[0];
  return (
    <article className="w-full max-w-5xl mx-auto px-1 mb-16 h-40 sm:mb-20 sm:h-52 md:h-60">
      <div className="text-lg font-semibold flex justify-between items-end mb-2 sm:mb-4">
        <span>{key.toUpperCase()}</span>
        <Link href={`/${key}`}>
          <a>
            <span className="text-sm text-neutral-200 cursor-pointer">
              MORE
            </span>
          </a>
        </Link>
      </div>
      <ul className="flex flex-row h-full w-full justify-start flex-nowrap overflow-x-auto scrollbar-hide list-none">
        {
          //@ts-ignore
          datas[key].map((data, idx) => {
            return (
              <Link key={idx} href={`/${data.blogPath}`}>
                <a>
                  {data.imgUrl ? (
                    <ImageBox data={data} />
                  ) : (
                    <TextBox data={data} />
                  )}
                </a>
              </Link>
            );
          })
        }
      </ul>
    </article>
  );
};

export default HList;
