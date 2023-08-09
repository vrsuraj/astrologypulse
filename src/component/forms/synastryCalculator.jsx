import React, { useEffect, useState } from "react";
// import {dynamicRouter } from "../utils/text";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { formInitialValue } from "../../../utils/const/formInitialValue";
import useForm from "../../../context/useFormValue";
import CommonForm from "./commonInput";
import { findComponent } from "@/utils/arrayFunc";
import Paragraph from "../paragraph";
import Text from "../text";
import { dynamicRouter } from "@/utils/routing";

const DynamicForm = dynamic(() => import("./commonInput"));
export default function SynastryCalculator({ pageData, withoutText }) {
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
  const [components, setComponents] = useState(pageData.components);

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

  return (
    <div className={`flex flex-col gap-14 px-5 py-14`}>
      {!withoutText && (
        <div className="max-w-3xl mx-auto  text-center flex flex-col gap-5">
          <Text
            extra="!text-highlight !dark:text-hightlight"
            size={"4xl"}
            variant="h1"
            weight={"semibold"}
          >
            {headlineComponent?.props?.content?.value}
          </Text>
          <Paragraph size={"lg"}>
            {paragraphComponent?.props?.content?.value}
          </Paragraph>
        </div>
      )}
      <div
        className={`w-full border border-third bg-primary max-w-lg bg-third/50 p-[2px] mx-auto`}
      >
        <Text
          extra="!text-third !dark:text-third px-5 pt-5"
          size={"2xl"}
          variant="h1"
          weight={"semibold"}
        >
          {!femaleform ? "Enter your details" : "Enter your partner details"}
        </Text>
        {!femaleform ? (
          <>
            <CommonForm
              solar={false}
              transit={false}
              handleData={(val) => handlepassdata(val, "female")}
              formKeys={synastrySecondaryFormComponent}
              label={true}
              email_status={
                synastrySecondaryFormComponent?.props?.formKeys?.email_status
                  ?.value
              }
              initialvalue={formInitialValue()}
              userData={userData?.female}
            />
          </>
        ) : (
          <>
            <DynamicForm
              solar={false}
              transit={false}
              handleData={(val) => handlepassdata(val, "male")}
              formKeys={synastryPrimaryFormComponent}
              label={true}
              email_status={false}
              initialvalue={formInitialValue()}
              userData={userData?.male}
            />
          </>
        )}
      </div>
    </div>
  );
}
