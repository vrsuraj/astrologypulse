import VideoPlayer from "../../../src/component/video";
import React, { useState } from "react";
import { IFetchData } from "@/interface/ICommon";
import { findComponent } from "@/utils/arrayFunc";
import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Text from "@/src/component/text";
import Paragraph from "@/src/component/paragraph";
import Button from "@/src/component/button/index2";

interface centerVideo {
  extra?: string;
  data: IFetchData;
}

const getLayoutStyleFunc = (name: string | any) => {
  let object: any = {};
  switch (name) {
    case "video_style_two":
      object["layout"] =
        "md:flex-row flex-col md:gap-20 gap-14 max-w-7xl mx-auto text-left items-center";
      object["align"] = "items-start";
      break;
    default:
      object["layout"] =
        "flex-col gap-14 max-w-5xl mx-auto items-center bg-red-100 justify-center text-center";
      object["align"] = "items-center";
      break;
  }
  return object;
};

export default function CenterVideoSection({ data, extra }: centerVideo) {
  const [components, setComponents] = useState(data.components);

  const extraStyle = extra || "";
  const allowedComponents =
    data?.variants[data?.currentVariant!].allowedComponents;
  const sectionConfig = data?.config;

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const buttonComponent = findComponent("BUTTON", components);
  const videoComponent = findComponent("VIDEO", components);

  const getLayoutStyle = getLayoutStyleFunc(data?.currentVariant);
  return (
    <div style={styles} className={`md:py-24 py-14 px-5 ${extraStyle} `}>
      <div className={`flex ${getLayoutStyle?.layout} w-full`}>
        <div className={`flex flex-col gap-5 w-full ${getLayoutStyle?.align}`}>
          {allowedComponents.includes("SUB_TEXT") && headlineComponent && (
            <Text
              size={headlineComponent?.props?.size?.value || "xl"}
              variant={headlineComponent?.props?.variant?.value || "h6"}
              weight={headlineComponent?.props?.weight?.value || "medium"}
              color={headlineComponent?.props?.color?.value || "#F39561"}
            >
              {headlineComponent?.props.content.value}
            </Text>
          )}
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
              extra="max-w-3xl"
              size={paragraphComponent?.props?.size?.value || "lg"}
            >
              {paragraphComponent?.props?.content?.value}
            </Paragraph>
          )}
          {allowedComponents.includes("BUTTON") && buttonComponent && (
            <Button
              animation={buttonComponent?.props?.animation?.value}
              shape={buttonComponent?.props?.shape?.value || "rounded"}
              color={buttonComponent?.props?.color?.value}
              shadow_size={buttonComponent?.props?.shadow_size?.value}
              shadow_color={buttonComponent?.props?.shadow_color?.value}
              size={buttonComponent?.props?.size?.value}
              tone={buttonComponent?.props?.tone?.value || "solid"}
              target={buttonComponent?.props?.tab?.value}
              link={buttonComponent?.props?.action?.value}
            >
              {buttonComponent?.props?.button_text.value}
            </Button>
          )}
        </div>
        <div className="w-full">
          <VideoPlayer
            thumbnail={videoComponent?.props?.thumbnail_image?.value}
            radius={videoComponent?.props?.radius?.value}
            src={videoComponent?.props?.alt?.value}
            alt={videoComponent?.props?.alt?.value}
          />
        </div>
      </div>
    </div>
  );
}
