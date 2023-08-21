import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Paragraph from "@/src/component/paragraph";
import Text from "@/src/component/text";
import { findComponent } from "@/utils/arrayFunc";
import { useState } from "react";

type Props = {
  data: any;
};

// common leagal pages function
export default function LegalPages({ data }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);
  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);

  return (
    <div
      style={styles}
      className={`md:py-24 py-14  w-full flex flex-col gap-14`}
    >
      {/* header */}
      <div className="bg-secondary py-10">
        {allowedComponents.includes("HEADLINE") && headlineComponent && (
          <Text
            size={headlineComponent?.props?.size?.value || "4xl"}
            variant={headlineComponent?.props?.variant?.value || "h1"}
            weight={headlineComponent?.props?.weight?.value || "bold"}
            color={headlineComponent?.props?.color?.value}
          >
            {headlineComponent?.props.content.value}
          </Text>
        )}
      </div>
      <div className="px-5 max-w-4xl mx-auto">
        {allowedComponents.includes("CONTENT") && paragraphComponent && (
          <Paragraph size={paragraphComponent?.props?.size?.value || "lg"}>
            {paragraphComponent?.props?.content?.value}
          </Paragraph>
        )}
      </div>
    </div>
  );
}
