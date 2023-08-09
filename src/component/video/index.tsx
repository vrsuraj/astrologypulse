import React from 'react'
import { VideoProps } from "./video.types";
import { VideoStyle } from "./video.style";
import style from "../../styles/animation.module.css";
import dynamic from "next/dynamic";
const DynamicPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });


export default function Video(props:VideoProps) {
const wrapperClassName = props.wrapper_class || "";
const width = props.width ||  "w-full";
const src= props.src || "";
// const loading = props.loading || "lazy";
const radius = VideoStyle["radius"][props?.radius!] || "none";
const alt = props.alt || "";
const caption = props.caption || null
const thumbnail = props.thumbnail || "/imgs/video_placeholder.png"

return (
    <div style={{}} className={`${wrapperClassName} ${width} aspect-video overflow-hidden ${radius}`}>
        <DynamicPlayer 
        playsInline={true}
        controls={true}
        playIcon={<PlayIcon />}
        width="100%"
        light={
             <img
                src={thumbnail}
                alt={alt}
                className="w-full h-full"
              />
        }
        height="100%"
        url={src} />
    </div>
        )
}




function PlayIcon({ playingState }:{playingState?:boolean}) {
  return (
    <>
      {!playingState ? (
        <button
          // onClick={handlePayer}
          className={`bg-secondary  absolute flex justify-center items-center rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px]`}
        >
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="md:w-10 fill-white md:h-10 w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </span>
        </button>
      ) : (
        <button
          className={`bg-zinc-600/70  ${style.playpauseanimation}  flex justify-center items-center rounded-full w-[50px] h-[50px]`}
        >
          <span className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          </span>
        </button>
      )}
    </>
  );
}





