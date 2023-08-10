import Button from "@/src/component/button/index2";
import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Image from "@/src/component/image";
import Paragraph from "@/src/component/paragraph";
import Text from "@/src/component/text";
import { findComponent } from "@/utils/arrayFunc";
import React, { useState } from "react";

type Props = { data: any };

const getLayoutStyleFunc = (name: string | any) => {
  let object: any = {};
  switch (name) {
    case "hero_style_three":
      object["padding"] = "md:py-24 py-14";
      object["height"] = "";
      break;
    default:
      object["padding"] = "md:pt-[100px] md:pb-[100px] pb-24 pt-24";
      object["height"] = "md:min-h-[550px] md:max-h-[550px] h-full";
      break;
  }
  return object;
};

export default function CenterContentHeader({ data }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);
  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const buttonComponent = findComponent("BUTTON", components);
  const imageComponent = findComponent("IMAGE", components);
  const getLayoutStyle = getLayoutStyleFunc(data?.currentVariant);

  return (
    <div style={styles}>
      <style jsx>
        {`
          .imgs {
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0px;
            right: 0;
            bottom: 0;
            object-fit: cover;
            z-index: -1;
            color: transparent;
          }

          @keyframes Hero_disco___tDkn {
            0% {
              transform: translateY(-25%) translateX(40%) rotate(0deg);
            }

            30% {
              transform: translateY(0) translateX(0) rotate(90deg) scaleX(0.7);
            }

            50% {
              transform: translateY(-25%) translateX(-40%) rotate(180deg);
            }

            70% {
              transform: translateY(0) translateX(0) rotate(270deg) scaleX(0.7);
            }

            to {
              transform: translateY(-25%) translateX(40%) rotate(1turn);
            }
          }
        `}
      </style>
      <>
        <div
          className={`relative ${getLayoutStyle.height}  ${getLayoutStyle.padding}  px-5 z-[1] flex justify-center items-center`}
        >
          <img
            className="imgs"
            alt="Stylistic background splash to pretty up the page"
            fetchPriority="high"
            decoding="async"
            data-nimg="fill"
            src={data?.config?.style?.value}
          />
          <div className="flex max-w-3xl items-center text-center justify-center md:gap-7 gap-5 flex-col">
            {allowedComponents.includes("HEADLINE") && headlineComponent && (
              <Text
                size={headlineComponent?.props?.size?.value || "7xl"}
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
            {allowedComponents.includes("BUTTON") && buttonComponent && (
              <Button
                extra="max-w-[350px]"
                animation={buttonComponent?.props?.animation?.value || "scale"}
                shape={buttonComponent?.props?.shape?.value || "rounded"}
                color={
                  buttonComponent?.props?.color?.value ||
                  "linear-gradient(to right,#e8e0c0,#f39561)"
                }
                shadow_size={buttonComponent?.props?.shadow_size?.value}
                shadow_color={buttonComponent?.props?.shadow_color?.value}
                size={buttonComponent?.props?.size?.value || "xs"}
                tone={buttonComponent?.props?.tone?.value || "solid"}
                target={buttonComponent?.props?.tab?.value}
                link={"https://www.youtube.com/"}
              >
                {buttonComponent?.props?.button_text.value}
              </Button>
            )}
            {allowedComponents.includes("IMAGE") && imageComponent && (
              <div className="w-full max-w-md">
                <Image
                  alt={imageComponent?.props?.alt?.value}
                  src={imageComponent?.props?.src?.value}
                ></Image>
              </div>
            )}
          </div>
        </div>
      </>
    </div>
  );
}
