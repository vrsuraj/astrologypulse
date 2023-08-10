import React, { useState } from "react";
import SectionStyle from "../globalStyle/sectionStyle";
import { findComponent } from "@/utils/arrayFunc";
import TarotPredictionCalculator from "./tarotPredictionCalculator";

type Props = {
  data: any;
  extra?: string;
};

export default function TarotPrediction({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("PARAGRAPH", components);

  return (
    <div className={`md:py-20  w-full py-14 px-5 ${extra}`} style={styles}>
      <TarotPredictionCalculator
        allowedComponents={allowedComponents}
        headlineComponent={headlineComponent}
        paragraphComponent={paragraphComponent}
      />
    </div>
  );
}
