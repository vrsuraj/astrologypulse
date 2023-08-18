import { findComponent } from "@/utils/arrayFunc";
import React, { useState } from "react";
import SectionStyle from "../globalStyle/sectionStyle";
import ZodicCompatibilityCalculator from "./zodicCompatibilityCalculator";

type Props = {
  data: any;
  extra?: string;
};

export function getLayout(variant: string) {
  switch (variant) {
    case "zodiac_compatibility_style_two":
      return "md:flex-row";
    case "zodiac_compatibility_style_three":
      return "md:flex-row-reverse";
  }
}

export default function ZodiacComatibility({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const imageComponent = findComponent("IMAGE", components);
  const zodiacCompatibilityComponent = findComponent(
    "ZODIAC_COMPATIBILITY_FORM",
    components
  );
  const customLayout = getLayout(data?.currentVariant);

  return (
    <div className={`md:py-20 py-14 px-5 ${extra}`} style={styles}>
      <ZodicCompatibilityCalculator
        customLayout={customLayout}
        imageComponent={imageComponent}
        headlineComponent={headlineComponent}
        paragraphComponent={paragraphComponent}
        allowedComponents={allowedComponents}
        zodiacCompatibilityComponent={zodiacCompatibilityComponent}
      />
    </div>
  );
}
