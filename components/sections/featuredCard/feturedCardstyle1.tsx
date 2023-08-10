import { IFetchData } from "@/interface/ICommon";
import Button from "@/src/component/button/index2";
import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Image from "@/src/component/image";
import Paragraph from "@/src/component/paragraph";
import Text from "@/src/component/text";
import { findComponent } from "@/utils/arrayFunc";
import React, { useState } from "react";

type Props = {
  data: IFetchData;
};

const getLayoutStyleFunc = (name: string | any) => {
  let object: any = {};
  switch (name) {
    case "featured_style_four":
      object["layout_width"] = "max-w-3xl mx-auto";
      object["padding"] = "p-0 md:p-10";
      object["button_align"] = "mx-auto";
      break;
    default:
      object["button_align"] = "";
      object["padding"] = "p-10 md:p-20";
      break;
  }
  return object;
};

export default function FeturedCardStyle1({ data }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant!].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const iconComponent = findComponent("ICON", components);
  const imageComponent = findComponent("IMAGE", components);
  const buttonComponent = findComponent("BUTTON", components);

  const getLayoutStyle = getLayoutStyleFunc(data?.currentVariant);

  return (
    <div className="md:py-20 py-14 px-5">
      <div
        style={styles}
        className={`overflow-hidden ${
          getLayoutStyle?.layout_width
            ? getLayoutStyle?.layout_width
            : "max-w-5xl"
        } ${getLayoutStyle?.padding}  mx-auto rounded-[20px]`}
      >
        <div className="flex md:flex-row  flex-col w-full items-center gap-10">
          <div className="w-full flex flex-col gap-3">
            {allowedComponents.includes("ICON") && iconComponent && (
              <div
                className="rounded-[15px] mb-2 p-4 max-w-[80px] w-full "
                style={{
                  backgroundImage:
                    "radial-gradient(100% 100% at 50% ,hsla(0,0%,100%,.3) 0,hsla(0,0%,100%,0) 100%,hsla(0,0%,100%,.15)",
                }}
              >
                <Image
                  alt={iconComponent?.props?.alt?.value}
                  src={iconComponent?.props?.src?.value}
                ></Image>
              </div>
            )}
            {allowedComponents.includes("HEADLINE") && headlineComponent && (
              <Text
                size={headlineComponent?.props?.size?.value || "3xl"}
                variant={headlineComponent?.props?.variant?.value || "h6"}
                weight={headlineComponent?.props?.weight?.value || "medium"}
                color={headlineComponent?.props?.color?.value || "#F39561"}
              >
                {headlineComponent?.props.content.value}
              </Text>
            )}
            {allowedComponents.includes("CONTENT") && paragraphComponent && (
              <Paragraph size={paragraphComponent?.props?.size?.value || "lg"}>
                {paragraphComponent?.props?.content?.value}
              </Paragraph>
            )}
            {allowedComponents.includes("BUTTON") && buttonComponent && (
              <Button
                extra={`mt-5 max-w-[250px] ${getLayoutStyle.button_align}`}
                animation={buttonComponent?.props?.animation?.value}
                shape={buttonComponent?.props?.shape?.value || "rounded"}
                color={buttonComponent?.props?.color?.value || "white"}
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
          {allowedComponents.includes("IMAGE") && imageComponent && (
            <div className="w-full">
              <Image
                alt={imageComponent?.props?.alt?.value}
                src={imageComponent?.props?.src?.value}
              ></Image>
            </div>
          )}

          {/* <div className="w-full relative z-[1]  md:h-[300px]">
           
            <div className="w-full absolute z-[-1] top-[-150px] right-[-170px]">
              <img
                src="/imgs/Wheelchart.svg"
                className="image w-[600px] -ml-[0px]"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
