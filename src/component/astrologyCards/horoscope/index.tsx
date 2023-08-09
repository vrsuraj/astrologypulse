import React, { useState } from "react";
import { CardStyle } from "../../cards/card.style";
import Text from "../../text";
import Button from "../../button/index2";
import { useRouter } from "next/router";
import { getStyle } from "@/utils/configStyle";
import { HoroscopeCardProps } from "./horoscopeCardCalculator.type";
import { signs } from "../../../../jsondata/const";
export default function HoroscopeCardCalculator(props: HoroscopeCardProps) {
  const borderRadius = CardStyle["border_radius"][props?.border_radius!];
  const shadow = CardStyle["shadow"][props?.shadow!] || "";
  const padding = props?.padding || "md:p-7 p-5";
  const align =
    CardStyle["align"][props.align!] || CardStyle["align"]["center"];
  const textColor = props.text_color || "#fff";
  // const target_link =
  //   ButtonTargetEnum[props?.link?.target!] || ButtonTargetEnum["self"];
  // const linkUrl = props?.link?.url || "#";
  const extraStyle = props.extra || "";
  const borderColor = props?.border?.border_color || "";
  const borderDisplay = props?.border?.display || false;

  const customStyle = {
    background: props?.color,
    borderColor: borderColor,
  };

  const styles = getStyle(customStyle);

  return (
    <>
      <div
        style={{ ...styles }}
        className={`${
          borderDisplay ? "border border-secondary" : ""
        } ${borderRadius} ${shadow} ${padding} ${align} h-full w-full justify-around  ${extraStyle}`}
      >
        {props.sub_heading && (
          <Text variant="h6" color={textColor} size="xl" weight="medium">
            {props.sub_heading}
          </Text>
        )}
        <HoroscopeCal button={{ ...props.button }} />
      </div>
    </>
  );
}

function HoroscopeCal({ button }: any) {
  // console.log(button);
  const [zodiac, setzodiac] = useState("");
  const [allsigns, setsigns] = useState(false);

  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/horoscope/${zodiac.toLowerCase()}-daily-horoscope`);
  };

  return (
    <div className="w-full flex flex-col items-center justify-between h-full gap-5">
      {!allsigns && (
        <div className="flex items-center flex-col gap-2 text-white uppercase font-cera_medium">
          <button
            onClick={() => setsigns((prev) => !prev)}
            className={`${
              zodiac !== ""
                ? "bg-violet-300 shadow-xl"
                : "hover:bg-violet-300 hover:shadow-xl"
            }  bg-opacity-20 p-4 border max-w-max mx-auto  relative shadow-md shadow-zinc-50/70 cursor-pointer rounded-full`}
          >
            <img
              className="w-[40px] h-[40px]"
              src={`${
                zodiac !== ""
                  ? `/zodiac/${zodiac.toLowerCase()}.svg`
                  : "/imgs/question2.svg"
              }`}
              alt={zodiac === "" ? "question" : zodiac}
            />
          </button>
          <span className="text-xs">{zodiac}</span>
        </div>
      )}
      {allsigns && (
        <div className="flex flex-wrap gap-y-1 justify-center gap-x-3">
          {signs.map((item, i) => (
            <button
              onClick={() => {
                setzodiac(item);
                setsigns((prev) => !prev);
              }}
              key={i}
              className="underline hover:text-zinc-800 text-[15px] cursor-pointer text-white text-lg "
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <Button
        {...button}
        callback={handleSubmit}
        disabled={allsigns === null || allsigns === true}
      >
        {button?.children}
      </Button>
    </div>
  );
}
