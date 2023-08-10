import { IFetchData } from "@/interface/ICommon";
import HoroscopeCardCalculator from "@/src/component/astrologyCards/horoscope";
import ZodiacCompatibilityCardCalculator from "@/src/component/astrologyCards/zcodiacCompatibilityCardCalculator";
import Card from "@/src/component/cards";
import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Paragraph from "@/src/component/paragraph";
import Text from "@/src/component/text";
import { findComponent } from "@/utils/arrayFunc";
import React, { useState } from "react";

interface Props {
  data: any;
  extra?: string;
}

function getGridLayoutstyle(length: number) {
  switch (length) {
    case 3:
      return "grid-cols-1 md:grid-cols-3 max-w-6xl";
    case 2:
      return "grid-cols-1 md:grid-cols-2 max-w-3xl";
    case 4:
      return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl";
    default:
      return "grid-cols-1 md:grid-cols-3 max-w-6xl";
  }
}

export default function GridCardCalculator({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const cardComponent = findComponent("CARDS", components);

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
        {allowedComponents.includes("CONTENT") && paragraphComponent && (
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
          cardComponent?.props?.items?.card_length || 4
        )} mx-auto grid place-items-center gap-7`}
      >
        {cardComponent?.props?.items?.value.map((item: any, i: number) => (
          <RenderCardByType
            number={i}
            data={item}
            id={item?.props?.card_type?.value}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export function RenderCardByType({
  id,
  data,
  number,
}: {
  id: string;
  data: any;
  number: number;
}) {
  switch (id) {
    case "HOROSCOPE_CARD":
      return (
        <HoroscopeCardCalculator
          border_radius={data?.props?.radius?.value || "md"}
          sub_heading={data?.props?.sub_heading?.value}
          color={
            data?.props?.card_color?.value ||
            "linear-gradient(220.55deg, #8A88FB 0%, #D079EE 100%)"
          }
          button={{
            color: data?.props?.button_color?.value || "white",
            extra: "w-full !max-w-[350px]",
            shape: data?.props?.button_radius?.value || "rounded",
            children: data?.props?.button_text?.value || "",
          }}
        />
      );

    case "ZODIAC_COMPATIBILITY_CARD":
      return (
        <ZodiacCompatibilityCardCalculator
          border_radius={data?.props?.radius?.value || "md"}
          sub_heading={data?.props?.sub_heading?.value}
          color={
            data?.props?.card_color?.value ||
            "linear-gradient(220.55deg, #8A88FB 0%, #D079EE 100%)"
          }
          button={{
            color: data?.props?.button_color?.value || "white",
            extra: "w-full !max-w-[350px]",
            shape: data?.props?.button_radius?.value || "rounded",
            children: data?.props?.button_text?.value || "",
          }}
        />
      );

    default:
      return (
        <Card
          extra="h-full"
          align={data?.props?.align?.value || "center"}
          button={{
            display: data?.props?.button_disaply?.value || false,
            target: data?.props?.target?.value || "self",
            shape: data?.props?.button_radius?.value || "rounded",
            link: data?.props?.action?.value,
            children: data?.props?.button_text?.value,
            color: data?.props?.button_color?.value || "white",
            extra: "w-full max-w-[350px]",
          }}
          border_radius={data?.props?.radius?.value || "md"}
          link={{
            url: data?.props?.action?.value,
            target: data?.props?.target?.value,
            display: true,
          }}
          color={data?.props?.card_color?.value || colorGradient[number]}
          sub_heading={data?.props?.sub_heading?.value}
          heading={data?.props?.heading?.value}
          image_src={data?.props?.image?.value}
          image_alt={data?.props?.image_alt?.value}
          desc={data?.props?.content?.value}
        />
      );
  }
}

// Usage example:
// const renderedComponent = renderComponentById('

const colorGradient = [
  "linear-gradient(220.55deg, #A531DC 0%, #4300B1 100%)",
  "linear-gradient(220.55deg, #24CFC5 0%, #001C63 100%)",
  "linear-gradient(220.55deg, #FF5E98 0%, #0F213E 100%)",
  "linear-gradient( 135deg, #97ABFF 10%, #123597 100%)",
];
