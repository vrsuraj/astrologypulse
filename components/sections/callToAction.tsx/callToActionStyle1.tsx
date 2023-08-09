import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import { findComponent } from "@/utils/arrayFunc";
import React, { useState } from "react";
import { IFetchData } from "../../../interface/ICommon";
import Text from "@/src/component/text";
import Paragraph from "@/src/component/paragraph";
import Button from "@/src/component/button/index2";

export function getLayout(variant: string | undefined) {
  switch (variant) {
    case "Color":
    case "Image":
    case "CTAStyleThree":
      return "flex-col justify-between md:flex-row gap-10 md:items-center";
    case "CTAStyleFour":
    case "CTAStyleFive":
    case "CTAStyleSix":
      return "flex-col items-center justify-center gap-5";
  }
}

export default function CallToActionSectionStyle1({
  data,
}: {
  data: IFetchData;
}) {
  const allowedComponents =
    data?.variants[data?.currentVariant!].allowedComponents;
  const [components, setComponents] = useState(data.components);
  const customLayout = getLayout(data?.currentVariant);
  const sectionConfig = data?.config;
  const styles = SectionStyle(sectionConfig);
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const buttonComponent = findComponent("BUTTON", components);
  const extraButtonComponent = findComponent("EXTRA_BUTTON", components);

  return (
    <div className="md:py-20 py-14 px-5 w-full">
      <div
        style={styles}
        className={`${customLayout} flex  max-w-5xl mx-auto rounded-md md:p-14 p-7 sm:p-10`}
      >
        <div className="w-full flex flex-col gap-5">
          {allowedComponents.includes("HEADLINE") && headlineComponent && (
            <Text
              extra="dark:text-white"
              size={headlineComponent?.props?.size?.value}
              variant={headlineComponent?.props?.variant?.value}
              weight={headlineComponent?.props?.weight?.value}
              color={headlineComponent?.props?.color?.value}
            >
              {headlineComponent?.props.content.value}
            </Text>
          )}
          {allowedComponents.includes("CONTENT") && paragraphComponent && (
            <Paragraph
              extra="dark:text-zinc-300"
              size={paragraphComponent?.props?.size?.value}
            >
              {paragraphComponent?.props?.content?.value}
            </Paragraph>
          )}
        </div>
        <div className="flex md:justify-end gap-5 md:flex-row flex-col max-w-xs w-full">
          {allowedComponents.includes("BUTTON") && buttonComponent && (
            <Button
              animation={buttonComponent?.props?.animation?.value}
              loading={buttonComponent?.props?.loading?.value}
              disabled={buttonComponent?.props?.disabled?.value}
              color={buttonComponent?.props?.color?.value}
              shadow_size={buttonComponent?.props?.shadow_size?.value}
              shadow_color={buttonComponent?.props?.shadow_color?.value}
              size={buttonComponent?.props?.size?.value}
              tone={buttonComponent?.props?.tone?.value}
              target={buttonComponent?.props?.tab?.value}
              link={"https://www.youtube.com/"}
            >
              {buttonComponent?.props?.button_text.value}
            </Button>
          )}
          {allowedComponents.includes("EXTRA_BUTTON") &&
            extraButtonComponent && (
              <Button
                animation={extraButtonComponent?.props?.animation?.value}
                loading={extraButtonComponent?.props?.loading?.value}
                disabled={extraButtonComponent?.props?.disabled?.value}
                color={extraButtonComponent?.props?.color?.value}
                shadow_size={extraButtonComponent?.props?.shadow_size?.value}
                shadow_color={extraButtonComponent?.props?.shadow_color?.value}
                size={extraButtonComponent?.props?.size?.value}
                tone={extraButtonComponent?.props?.tone?.value}
                target={extraButtonComponent?.props?.tab?.value}
                link={"https://www.youtube.com/"}
              >
                {extraButtonComponent?.props?.button_text.value}
              </Button>
            )}
        </div>
      </div>
    </div>
  );
}
