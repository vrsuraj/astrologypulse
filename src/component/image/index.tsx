import { ImageStyle } from "./image.style";
import { ImageProps } from "./image.type";
import React from "react";

interface Props extends ImageProps {
  children?: React.ReactNode;
}

export default function Image(props: Props) {
  const wrapperClassName = props.wrapper_class || "";
  const width = props.width || "100%";
  const src = props.src || "";
  const loading = props.loading || "lazy";
  const fit = ImageStyle["fit"][props?.fit!] || "";
  const position = ImageStyle["position"][props?.position!] || "";
  const radius = ImageStyle["radius"][props?.radius!] || "none";
  const alt = props.alt || "";
  const caption = props.caption || null;
  return (
    <div className={`${wrapperClassName} w-full`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`${radius} ${fit} ${position}`}
        src={src}
        alt={alt}
        width={width}
        loading={loading}
      />

      {caption && (
        <figcaption className='text-sm text-center mt-1'>
          ({caption})
        </figcaption>
      )}
    </div>
  );
}
