import React from "react";
import { IconCard } from "./cards";
import { CONST_LINKS } from "../const/links";
import { Paragraph } from "../utils/text";
import { signs } from "../horoscope/horoscopeCards";
import { useRouter } from "next/router";
import style from "../../styles/Animation.module.css";
import { SignColor } from "../utils/color";
import { Sign } from "../utils/gtmSign";
export default function HomeSection1({ data }) {
  return (
    <div className="px-5">
      <div className="md:pt-20 md:pb-24 py-14 flex flex-col md:gap-16 gap-14 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-7">
          <h1
            style={{ lineHeight: 1.1 }}
            className={`text-white  md:text-[4rem] font-bold text-5xl`}
          >
            Unlock the Secrets of Your Destiny with{" "}
            <span className={`${style.shimmer}`}>AstrologyPulse</span>
          </h1>
          <Paragraph
            extra="max-w-3xl md:text-xl mx-auto"
            text={data.content.desc}
          />
        </div>

        <div className="mx-auto max-w-7xl md:gap-6 gap-5 grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-4 w-full">
          {data.cards.map((item, i) => (
            <IconCard
              key={i}
              bg={colorGradient[i]}
              text={item.title}
              desc={item.desc}
              link={CONST_LINKS[item.id]}
              img={item.image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HoroscopeCards({ data }) {
  const router = useRouter();
  return (
    <div className="md:pb-24 md:pt-0 pb-14 px-5 flex flex-col gap-14">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-5">
        <h1
          style={{
            lineHeight: 1.3,
          }}
          className="text-white  md:text-6xl font-bold text-4xl"
        >
          {data.content.title}
        </h1>
        <Paragraph extra="max-w-3xl mx-auto" text={data.content.desc} />
      </div>
      <div>
        <div className="grid sm:grid-cols-4 grid-cols-3 md:grid-cols-12 max-w-7xl mx-auto gap-x-5 gap-y-5 sm:gap-5 w-full">
          {signs.map((item, i) => (
            <div className="flex w-full  flex-col gap-1 items-center">
              <div
                onClick={() =>
                  router.push(
                    `/horoscope/${item.toLowerCase()}-daily-horoscope`
                  )
                }
                key={i}
                className=" text-white flex justify-center items-center w-full border-2 border-secondary hover:border-zinc-300 cursor-pointer rounded-[10px] group bg-gradient-to-bl from-primary to-secondary duration-150 ease-in p-[1.5px]"
              >
                <div className="flex p-3 w-full  md:min-w-[100px] h-[80px] justify-center items-center ">
                  <Sign
                    name={item}
                    size="text-[40px]"
                    color={`${SignColor[item.toLowerCase()]}`}
                  />
                  {/* <img
                    className="w-full h-full"
                    src={`/zodiac/${item.toLowerCase()}.svg`}
                  /> */}
                </div>
              </div>
              <h6 className={`md:text-lg  ${SignColor[item.toLowerCase()]}`}>
                {item}
              </h6>
              {/* <div className="text-currrent group-hover:bg-transparent bg-[#5C5061] cursor-pointer  text-center flex flex-col items-center w-full">
                <div className="flex flex-col relative p-4">
                  <Sign name={item} color="text-current" />
                  <h6 className="text-currrent font-bold">{item}</h6>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const colorGradient = [
  " linear-gradient(220.55deg, #A531DC 0%, #4300B1 100%)",
  " linear-gradient(220.55deg, #24CFC5 0%, #001C63 100%)",
  "linear-gradient(220.55deg, #FF5E98 0%, #0F213E 100%)",
  "linear-gradient( 135deg, #97ABFF 10%, #123597 100%)",
];
