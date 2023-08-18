import React, { useEffect, useState } from "react";
// import {dynamicRouter } from "../utils/text";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { formInitialValue } from "../../../utils/const/formInitialValue";
import useForm from "../../../context/useFormValue";
// import CommonForm from "./commonInput";
import { findComponent } from "@/utils/arrayFunc";
import Paragraph from "../paragraph";
import Text from "../text";
import { dynamicRouter } from "@/utils/routing";
import FormWrapper from "./formWrapper";
import Image from "../image";

export function getLayout(variant) {
  switch (variant) {
    case "synastry_chart_style_two":
      return "md:flex-row";
    case "synastry_chart_style_four":
      return "md:flex-row-reverse";
  }
}

const DynamicForm = dynamic(() => import("./formWrapper"));
export default function SynastryCalculator({ data }) {
  const [femaleform, setfemaleform] = useState(false);
  const [userData, setUserdata] = useState({
    female: formInitialValue(),
    male: formInitialValue(),
  });

  const router = useRouter();

  const defaultFormData = useForm();

  useEffect(() => {
    if (defaultFormData["synastry"]) {
      setUserdata(defaultFormData["synastry"]);
    }
  }, [defaultFormData["synastry"]]);

  const handleData = (data) => {
    const url = dynamicRouter(
      synastrySecondaryFormComponent?.props?.action?.value
    );
    defaultFormData["adduserdata"]({ ["synastry"]: data });
    router.push(url?.link);
  };

  const handlepassdata = (e, key) => {
    if (Object.keys(e).length !== 0) {
      setUserdata((prev) => ({ ...prev, [key]: e }));
    }
    if (key == "male") {
      handleData({ ...userData, [key]: e });
    } else {
      setfemaleform((prev) => !prev);
    }
  };
  const [components, setComponents] = useState(data.components);
  const customLayout = getLayout(data?.currentVariant);

  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const synastryPrimaryFormComponent = findComponent(
    "SYNASTRY_CHART_PRIMARY_FORM",
    components
  );
  const synastrySecondaryFormComponent = findComponent(
    "SYNASTRY_CHART_SECONDARY_FORM",
    components
  );
  const imageComponent = findComponent("IMAGE", components);

  const formStyle = synastryPrimaryFormComponent?.props?.form_style?.value;

  return (
    <div className={`flex flex-col gap-14 px-5 py-14`}>
      <div className="max-w-3xl mx-auto  text-center flex flex-col gap-5">
        {allowedComponents.includes("HEADLINE") && headlineComponent && (
          <Text
            extra="!text-highlight !dark:text-hightlight"
            size={"4xl"}
            variant="h1"
            weight={"semibold"}
          >
            {headlineComponent?.props?.content?.value}
          </Text>
        )}
        {allowedComponents.includes("CONTENT") && paragraphComponent && (
          <Paragraph size={"lg"}>
            {paragraphComponent?.props?.content?.value}
          </Paragraph>
        )}
      </div>

      <div
        className={`flex gap-10 max-w-6xl mx-auto items-center ${customLayout}`}
      >
        <div className={`w-full  max-w-lg  p-[2px] mx-auto`}>
          {!femaleform ? (
            <>
              <FormWrapper
                style={formStyle}
                solar={false}
                bgColor={undefined}
                disclaimer={undefined}
                children={undefined}
                transit={false}
                handleData={(val) => handlepassdata(val, "female")}
                formLabel={synastrySecondaryFormComponent}
                label_status={
                  synastrySecondaryFormComponent?.props?.label_status?.value
                }
                email_status={
                  synastrySecondaryFormComponent?.props?.formKeys?.email_status
                    ?.value
                }
                userData={userData?.female}
              >
                <Text
                  extra="!text-third !dark:text-third px-5 pt-5"
                  size={"2xl"}
                  variant="h1"
                  weight={"semibold"}
                >
                  {!femaleform
                    ? "Enter your details"
                    : "Enter your partner details"}
                </Text>
              </FormWrapper>
            </>
          ) : (
            <>
              <DynamicForm
                style={formStyle}
                solar={false}
                bgColor={undefined}
                disclaimer={undefined}
                children={undefined}
                label_status={
                  synastryPrimaryFormComponent?.props?.label_status?.value
                }
                transit={false}
                handleData={(val) => handlepassdata(val, "male")}
                formLabel={synastryPrimaryFormComponent}
                label={true}
                email_status={
                  synastryPrimaryFormComponent?.props?.formKeys?.email_status
                    ?.value
                }
                userData={userData?.male}
              >
                <Text
                  extra="!text-third !dark:text-third px-5 pt-5"
                  size={"2xl"}
                  variant="h1"
                  weight={"semibold"}
                >
                  {!femaleform
                    ? "Enter your details"
                    : "Enter your partner details"}
                </Text>
              </DynamicForm>
            </>
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
            radius={imageComponent?.props?.radius?.value}
          ></Image>
        )}
      </div>
    </div>
  );
}
