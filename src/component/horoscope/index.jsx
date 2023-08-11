import { SignColor } from "../../../utils/const/colors";
import { useRouter } from "next/router";
import { Sign } from "../calculator/confirmBirthCard";
import React, { useState } from "react";
import { findComponent } from "@/utils/arrayFunc";
import SectionStyle from "../globalStyle/sectionStyle";
import Text from "../text";
import Paragraph from "../paragraph";
import horoscope from "../../../jsondata/horoscopeSign";

export default function HoroscopeCalculator({ data }) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);

  return (
    <div
      style={styles}
      className=" md:py-20 py-14 flex flex-col gap-10 md:gap-14 w-full px-5"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
        {allowedComponents.includes("HEADLINE") && headlineComponent && (
          <Text
            size={headlineComponent?.props?.size?.value || "5xl"}
            variant={headlineComponent?.props?.variant?.value || "h2"}
            weight={headlineComponent?.props?.weight?.value || "bold"}
            color={headlineComponent?.props?.color?.value}
          >
            {headlineComponent?.props.content.value}
          </Text>
        )}
        {allowedComponents.includes("CONTENT") && paragraphComponent && (
          <Paragraph
            extra="max-w-3xl mx-auto"
            size={paragraphComponent?.props?.size?.value || "lg"}
          >
            {paragraphComponent?.props?.content?.value}
          </Paragraph>
        )}
      </div>
      <HomeCard data={horoscope} />
    </div>
  );
}

export function HomeCard({ data, duration }) {
  const router = useRouter();
  const customDuration = duration ? duration : "daily";
  return (
    <>
      <div className="max-w-6xl  w-full gap-x-5 gap-y-5 md:gap-6 mx-auto  grid sm:grid-cols-3 grid-cols-2 md:grid-cols-6">
        {/*<Trail3 open={isVisible}>*/}
        {data.map((item, i) => (
          <div className="flex w-full  flex-col gap-1 items-center">
            <div
              onClick={() =>
                router.push(
                  `/horoscope/${item.name.toLowerCase()}-${customDuration}-horoscope`
                )
              }
              key={i}
              className=" text-white  flex justify-center items-center w-full border-2 border-secondary hover:border-zinc-300 cursor-pointer rounded-[10px] group bg-gradient-to-bl from-primary to-secondary duration-150 ease-in p-1 md:p-2"
            >
              <div className="flex p-4 md:p-4 w-full  md:min-w-[150px] h-[100px] justify-center items-center ">
                <Sign
                  name={item.name}
                  size="md:text-[50px] text-[40px]"
                  color={`${SignColor[item.name.toLowerCase()]}`}
                />
                {/* <img
                  className="w-full h-full"
                  src={`/zodiac/${item.name.toLowerCase()}.svg`}
                /> */}
              </div>
            </div>
            <h6
              style={{ color: SignColor[item.name.toLowerCase()] }}
              className={`md:text-xl md:mt-2 text-lg `}
            >
              {item.name}
            </h6>
          </div>
        ))}
        {/*</Trail3>*/}
      </div>
    </>
  );
}
