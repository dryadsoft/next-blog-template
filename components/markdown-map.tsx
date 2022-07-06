import React from "react";
import GoogleMapReact from "google-map-react";

interface IMarkdownMap {
  [key: string]: number | string;
}
interface IMarker {
  lat: number;
  lng: number;
  title?: string;
  $hover?: any;
}

const Marker: React.FC<IMarker> = ({ title }) => (
  <div>
    {title && (
      <div className="absolute top-[-20px] text-red-400 text-base left-[-180px] right-[-180px] text-center truncate">
        <span>{title}</span>
      </div>
    )}
    <div className="text-3xl">📍</div>
  </div>
);
const MarkdownMap: React.FC<IMarkdownMap> = ({
  latitude,
  longitude,
  title,
}) => {
  return (
    <div className="overflow-hidden h-52 w-[95%] sm:w-[98%] sm:h-80 mx-auto">
      <GoogleMapReact
        defaultZoom={15}
        defaultCenter={{
          lat: +latitude,
          lng: +longitude,
        }}
        bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAP_API_KEY}` }}
      >
        <Marker
          lat={+latitude}
          lng={+longitude}
          title={title ? String(title) : undefined}
        />
      </GoogleMapReact>
    </div>
  );
};
export default MarkdownMap;
