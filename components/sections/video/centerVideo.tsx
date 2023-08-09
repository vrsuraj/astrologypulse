import { getBackground, getStyle } from "@/utils/configStyle";
import VideoPlayer from "../../../src/component/video";
import React from "react";

interface centerVideo {
  extra?: string;
  background: string;
}

export default function CenterVideo(props: centerVideo) {
  const extraStyle = props.extra || "";
  const customStyle = getBackground(props?.background);
  const styles = getStyle(customStyle);
  return (
    <div style={styles} className={`md:py-24 py-14 px-5 ${extraStyle} `}>
      <VideoPlayer radius="lg" src="" alt="demo" />
    </div>
  );
}
