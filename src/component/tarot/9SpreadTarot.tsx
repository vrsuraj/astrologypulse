import React, { useState } from "react";
import SectionStyle from "../globalStyle/sectionStyle";
import { findComponent } from "@/utils/arrayFunc";
import Spread9TarotCalculator from "./9SpreadTarotCalculator";

type Props = {
  data: any;
  extra?: string;
};

export default function Spread9Tarot({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("PARAGRAPH", components);
  return (
    <div style={styles} className={`md:py-20 py-14 px-5 ${extra}`}>
      <Spread9TarotCalculator
        allowedComponents={allowedComponents}
        paragraphComponent={paragraphComponent}
        headlineComponent={headlineComponent}
      />
    </div>
  );
}
