import React from "react";

interface IMarkEbayBanner {
  [key: string]: number | string;
}

const MarkEbayBanner: React.FC<IMarkEbayBanner> = ({ id }) => {
  return (
    <div className="w-full h-[220px] px-2 mx-auto sm:px-5">
      <ins className="epn-placement" data-config-id={id}></ins>
    </div>
  );
};
export default MarkEbayBanner;
