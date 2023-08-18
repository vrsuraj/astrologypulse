import Paragraph from "../../../src/component/paragraph";
import Text from "../../../src/component/text";
import React, { useEffect, useState } from "react";
import useForm from "../../../context/useFormValue";
import FormWrapper from "../../../src/component/forms/formWrapper";
import { useRouter } from "next/router";
import { findComponent } from "@/utils/arrayFunc";
import { dynamicRouter } from "@/utils/routing";
import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import Image from "@/src/component/image";

export function getLayout(variant: string) {
  switch (variant) {
    case "transit_chart_style_one":
    case "transit_chart_style_two":
    case "transit_chart_style_three":
      return " md:flex-row";

    case "transit_chart_style_four":
      return "md:flex-row-reverse";
  }
}

export default function TransitSection({ data }: { data: any }) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const [components, setComponents] = useState(data.components);
  const customLayout = getLayout(data?.currentVariant);
  const router = useRouter();
  const sectionConfig = data?.config;
  const styles = SectionStyle(sectionConfig);

  const defaultFormData = useForm();
  const [userData, setUserdata] = useState({});

  useEffect(() => {
    if (defaultFormData["transit"]) {
      setUserdata(defaultFormData["transit"]);
    }
  }, [defaultFormData.transit]);

  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const contentComponent = findComponent("CONTENT", components);
  const transitComponent = findComponent("TRANSIT_CHART_FORM", components);

  const imageComponent = findComponent("IMAGE", components);

  const handleData = (data: any) => {
    const url = dynamicRouter(transitComponent?.props?.action?.value);
    defaultFormData["adduserdata"]({ ["transit"]: data });
    router.push(url?.link);
  };

  const formStyle = transitComponent?.props?.form_style?.value;

  return (
    <>
      <div style={styles} className={`md:py-20 py-14 px-5`}>
        <div
          className={` max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-14`}
        >
          <div className="max-w-3xl mx-auto flex flex-col gap-5 items-center justify-center w-full">
            {allowedComponents.includes("HEADLINE") && headlineComponent && (
              <Text
                extra="!text-highlight !dark:text-hightlight"
                size={headlineComponent?.props?.size?.value || "5xl"}
                variant={headlineComponent?.props?.variant?.value || "h1"}
                weight={headlineComponent?.props?.weight?.value || "bold"}
                color={headlineComponent?.props?.color?.value}
              >
                {headlineComponent?.props.content.value}
              </Text>
            )}

            {allowedComponents.includes("CONTENT") && contentComponent && (
              <Paragraph
                extra="text-center"
                size="lg"
                weight={contentComponent?.props?.weight?.value || "normal"}
                color={contentComponent?.props?.color?.value}
              >
                {contentComponent?.props?.content?.value}
              </Paragraph>
            )}
          </div>
          <div className={`flex md:gap-14 gap-10 items-center ${customLayout}`}>
            <FormWrapper
              style={formStyle}
              label_status={transitComponent?.props?.label_status?.value}
              formLabel={transitComponent}
              userData={userData}
              handleData={handleData}
              transit={true}
              solar={false}
              bgColor={undefined}
              email_status={transitComponent?.props?.email_status?.value}
              disclaimer={undefined}
              children={undefined}
            />
            {allowedComponents.includes("IMAGE") && imageComponent && (
              <Image
                width={imageComponent?.props?.width?.value}
                src={imageComponent?.props?.src?.value}
                alt={imageComponent?.props?.alt?.value}
                caption={imageComponent?.props?.caption?.value}
                fit={imageComponent?.props?.fit?.value}
                position={imageComponent?.props?.position?.value}
                radius={imageComponent?.props?.radius?.value}
              ></Image>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
