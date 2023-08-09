import { findComponent } from "@/utils/arrayFunc";
import React, { useState } from "react";
import SectionStyle from "../globalStyle/sectionStyle";
import ZodicCompatibilityCalculator from "./zodicCompatibilityCalculator";

type Props = {
  data: any;
  extra?: string;
};

export default function ZodiacComatibility({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("PARAGRAPH", components);
  const zodiacCompatibilityComponent = findComponent(
    "ZODIAC_COMPATIBILITY_FORM",
    components
  );

  return (
    <div className={`md:py-20 py-14 px-5 ${extra}`} style={styles}>
      <ZodicCompatibilityCalculator
        headlineComponent={headlineComponent}
        paragraphComponent={paragraphComponent}
        allowedComponents={allowedComponents}
        zodiacCompatibilityComponent={zodiacCompatibilityComponent}
      />
    </div>
  );
}
