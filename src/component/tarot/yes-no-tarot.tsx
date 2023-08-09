import React, { useState } from "react";
import { findComponent } from "@/utils/arrayFunc";
import SectionStyle from "../globalStyle/sectionStyle";
import { YesNoTarotCalculatorComponent } from "../tarot/yesNoTarotCalculator";

type Props = {
  data: any;
  extra?: string;
};

export default function YesNoTarotCalculator({ data, extra }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("PARAGRAPH", components);
  const subHeadingComponent = findComponent("SUB_HEADING", components);

  return (
    <div
      className={`md:py-20 py-14 px-5 flex flex-col gap-14 w-full items-center ${extra}`}
      style={styles}
    >
      <YesNoTarotCalculatorComponent
        subHeadingComponent={subHeadingComponent}
        allowedComponents={allowedComponents}
        headlineComponent={headlineComponent}
        paragraphComponent={paragraphComponent}
      />
    </div>
  );
}
