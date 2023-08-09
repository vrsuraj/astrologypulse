import Card from "@/src/component/cards";
import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Paragraph from "@/src/component/paragraph";
import Text from "@/src/component/text";
import {
  filterArrayByNestedPropertyValue,
  findComponent,
} from "@/utils/arrayFunc";
import React, { useState } from "react";

interface Props {
  data: any;
  extra?: string;
}

function getGridLayoutstyle(length: number) {
  switch (length) {
    case 3:
      return "grid-cols-1 md:grid-cols-3 max-w-3xl";
    case 2:
      return "grid-cols-1 md:grid-cols-2 max-w-4xl";
    case 4:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl";
    default:
      return "grid-cols-1 md:grid-cols-3 max-w-6xl";
  }
}

export default function GridIconCardCalculator({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("PARAGRAPH", components);
  const cardComponent = findComponent("CARDS", components);
  const cardComponentContent = filterArrayByNestedPropertyValue(
    cardComponent?.props?.items?.value,
    ["props", "card_type", "value"],
    "CARD"
  );
  const iconCardComponentContent = filterArrayByNestedPropertyValue(
    cardComponent?.props?.items?.value,
    ["props", "card_type", "value"],
    "ICON_CARD"
  );

  return (
    <div
      style={styles}
      className={`md:py-20 py-14 px-5 flex flex-col gap-14 w-full ${extra}`}
    >
      <div className="flex flex-col gap-5 w-full text-center max-w-4xl mx-auto items-center">
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
        {allowedComponents.includes("PARAGRAPH") && paragraphComponent && (
          <Paragraph
            extra="max-w-3xl mx-auto"
            size={paragraphComponent?.props?.size?.value || "lg"}
          >
            {paragraphComponent?.props?.content?.value}
          </Paragraph>
        )}
      </div>
      {/* cards grid */}
      <div
        className={`w-full ${getGridLayoutstyle(
          2
        )} mx-auto grid place-items-center gap-7`}
      >
        {Array.isArray(cardComponentContent) &&
          cardComponentContent?.map((item: any, i: number) => (
            <Card
              key={i}
              button={{
                display: item?.props?.button_disaply?.value || false,
                target: item?.props?.target?.value || "self",
                shape: item?.props?.button_radius?.value || "rounded",
                link: item?.props?.action?.value,
                children: item?.props?.button_text?.value,
                color: item?.props?.button_color?.value || "white",
                extra: "w-full !max-w-[300px]",
              }}
              border_radius={item?.props?.radius?.value || "md"}
              link={{
                url: item?.props?.action?.value,
                target: item?.props?.target?.value,
                display: true,
              }}
              color={item?.props?.card_color?.value}
              sub_heading={item?.props?.sub_heading?.value}
              heading={item?.props?.heading?.value}
              image_src={item?.props?.image?.value}
              image_alt={item?.props?.image_alt?.value}
              desc={item?.props?.content?.value}
            />
          ))}
        <div className="flex flex-col gap-5 max-w-3xl mx-auto w-full">
          {Array.isArray(iconCardComponentContent) &&
            iconCardComponentContent?.map((item: any, i: number) => (
              <Card
                key={i}
                extra="h-full !p-5"
                border={{
                  display: true,
                  border_width: item?.props?.border_width?.value || "",
                  border_color: item?.props?.border_color?.value || "",
                }}
                border_radius={item?.props?.radius?.value || "md"}
                link={{
                  url: item?.props?.action?.value,
                  target: item?.props?.target?.value,
                  display: true,
                }}
                align="left"
                color={item?.props?.card_color?.value}
                sub_heading={item?.props?.sub_heading?.value}
                heading={item?.props?.heading?.value}
                image_src={item?.props?.image?.value}
                image_alt={item?.props?.image_alt?.value}
                desc={item?.props?.content?.value}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

// const colorGradient = [
//   "linear-gradient(220.55deg, #A531DC 0%, #4300B1 100%)",
//   "linear-gradient(220.55deg, #24CFC5 0%, #001C63 100%)",
//   "linear-gradient(220.55deg, #FF5E98 0%, #0F213E 100%)",
//   "linear-gradient( 135deg, #97ABFF 10%, #123597 100%)",
// ];
