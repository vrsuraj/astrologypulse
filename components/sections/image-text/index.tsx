import Text from "@/src/component/text";
import SectionStyle from "../../../src/component/globalStyle/sectionStyle";
import { findComponent } from "../../../utils/arrayFunc";
import { useState } from "react";
import Paragraph from "@/src/component/paragraph";
import Image from "@/src/component/image";
import Button from "@/src/component/button/index2";
import {
  RenderCardByType,
  getGridLayoutstyle,
} from "../calculators/grid-card-calculator";

export function getSectionLayoutStyle(variant: string) {
  switch (variant) {
    case "split_section_style_one":
    case "split_section_style_three":
    case "split_section_style_five":
    case "split_section_style_seven":
      return "md:flex-row";
    case "split_section_style_two":
    case "split_section_style_four":
    case "split_section_style_six":
    case "split_section_style_eight":
      return "md:flex-row-reverse";
  }
}

export default function ImageText({ data }: { data: any }) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);
  const customLayout = getSectionLayoutStyle(data?.currentVariant);
  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const buttonComponent = findComponent("BUTTON", components);
  const imageComponent = findComponent("IMAGE", components);
  const cardComponent = findComponent("CARDS", components);

  return (
    <div style={styles} className={`md:py-20 bg-primary py-14 px-5`}>
      <div
        className={`${customLayout} max-w-6xl mx-auto flex flex-col-reverse items-center gap-10 md:gap-20`}>
        <div className='flex flex-col gap-5 w-full'>
          {allowedComponents.includes("HEADLINE") && headlineComponent && (
            <Text
              size={headlineComponent?.props?.size?.value || "4xl"}
              variant={headlineComponent?.props?.variant?.value}
              weight={headlineComponent?.props?.weight?.value || "semibold"}
              color={headlineComponent?.props?.color?.value}>
              {headlineComponent?.props?.content?.value}
            </Text>
          )}
          {allowedComponents.includes("CONTENT") && paragraphComponent && (
            <Paragraph size={paragraphComponent?.props?.size?.value}>
              {paragraphComponent?.props?.content?.value}
            </Paragraph>
          )}

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
              link={buttonComponent?.props?.action?.value}>
              {buttonComponent?.props?.button_text.value}
            </Button>
          )}

          {allowedComponents.includes("CARDS") && cardComponent && (
            <div className={`w-full  grid  `}>
              {cardComponent?.props?.items?.value.map(
                (item: any, i: number) => (
                  <RenderCardByType
                    number={i}
                    data={item}
                    id={item?.props?.card_type?.value}
                    key={i}
                  />
                )
              )}
            </div>
          )}
        </div>
        {allowedComponents.includes("IMAGE") && imageComponent && (
          <Image
            width={imageComponent?.props?.width?.value}
            src={imageComponent?.props?.src?.value}
            alt={imageComponent?.props?.alt?.value}
            caption={imageComponent?.props?.caption?.value}
            fit={imageComponent?.props?.fit?.value}
            position={imageComponent?.props?.position?.value}
            radius={imageComponent?.props?.radius?.value}></Image>
        )}
      </div>
    </div>
  );
}
