import React, { useState } from "react";
import { CardStyle } from "../../cards/card.style";
import Text from "../../text";
import Button from "../../button/index2";
import { useRouter } from "next/router";
import { getStyle } from "@/utils/configStyle";
import { HoroscopeCardProps } from "../horoscope/horoscopeCardCalculator.type";
import { signs } from "../../../../jsondata/const";

export default function ZodiacCompatibilityCardCalculator(
  props: HoroscopeCardProps
) {
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
        <ZodiacCal button={{ ...props.button }} />
      </div>
    </>
  );
}

function ZodiacCal({ button }: any) {
  const [zodiac, setzodiac] = useState({ male: "", female: "" });
  const [allsigns, setsigns] = useState({ male: false, female: false });

  const router = useRouter();
  const handleSubmit = () => {
    if (zodiac.female !== "" && zodiac.male !== "") {
      const query = `${zodiac.female.toLowerCase()}-${zodiac.male.toLowerCase()}`;
      router.push(`/zodiac-compatibility?zodiac=${query}`);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-between h-full gap-5">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex items-center flex-col gap-2 text-white uppercase font-cera_medium">
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-2.5 items-center">
              <button
                onClick={() => setsigns({ male: true, female: false })}
                className={`${
                  zodiac.male !== ""
                    ? "bg-red-300  shadow-zinc-50"
                    : "hover:bg-red-300  hover:shadow-zinc-50 hover:shadow-md"
                } bg-pink-100 bg-opacity-20 p-4 border max-w-max mx-auto  relative shadow-md cursor-pointer rounded-full`}
              >
                <img
                  className="w-[40px] h-[40px]"
                  src={`${
                    zodiac.male !== ""
                      ? `/zodiac/${zodiac.male.toLowerCase()}.svg`
                      : "/imgs/question2.svg"
                  }`}
                  alt={zodiac.male === "" ? "question" : zodiac.male}
                />
              </button>
              <span className="text-xs">{zodiac.male}</span>
            </div>
            <span className="text-4xl font-cera_light -mt-4">+</span>
            <div className="flex flex-col gap-2.5 items-center">
              <button
                onClick={() => setsigns({ male: false, female: true })}
                className={`${
                  zodiac.female !== ""
                    ? "bg-red-300  shadow-zinc-50"
                    : "hover:bg-red-300  hover:shadow-zinc-50 hover:shadow-md"
                } bg-pink-100 bg-opacity-20 p-4 border max-w-max mx-auto  relative shadow-md cursor-pointer rounded-full`}
              >
                <img
                  className="w-[40px] h-[40px]"
                  src={`${
                    zodiac.female !== ""
                      ? `/zodiac/${zodiac.female.toLowerCase()}.svg`
                      : "/imgs/question2.svg"
                  }`}
                  alt={zodiac.female === "" ? "question" : zodiac.female}
                />
              </button>
              <span className="text-xs">{zodiac.female}</span>
            </div>
          </div>
        </div>
        {allsigns.male && (
          <div className="flex mt-5 flex-wrap gap-y-1 justify-center gap-x-3">
            {signs.map((item, i) => (
              <button
                onClick={() => {
                  setzodiac((prev) => ({ ...prev, male: item }));
                  setsigns({ male: false, female: false });
                }}
                key={i}
                className="underline hover:text-zinc-800  cursor-pointer text-white "
              >
                {item}
              </button>
            ))}
          </div>
        )}
        {allsigns.female && (
          <div className="flex mt-5 flex-wrap gap-y-1 justify-center gap-x-3">
            {signs.map((item, i) => (
              <button
                onClick={() => {
                  setzodiac((prev) => ({ ...prev, female: item }));
                  setsigns({ male: false, female: false });
                }}
                key={i}
                className="underline hover:text-zinc-800 cursor-pointer text-white "
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <Button
        {...button}
        callback={handleSubmit}
        disabled={zodiac.female == "" && zodiac.male == ""}
      >
        {button?.children}
      </Button>
    </div>
  );
}
