import React, { useEffect, useState } from "react";
import { DynamicText, dynamicRouter, Paragraph } from "../utils/text";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { formInitialValue } from "../const/formInitialValue";
import useForm from "../context/useFormValue";
import CommonForm from "./commonInput";
const DynamicForm = dynamic(() => import("./commonInput"));
export default function SynastryCalculator({ jsonData, withoutText }) {
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
      jsonData?.config?.form_label?.male?.button_config
    );
    defaultFormData["adduserdata"]({ ["synastry"]: data });
    router.push(url.url);
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

  return (
    <div className={`flex flex-col gap-14 px-5 py-14`}>
      {!withoutText && (
        <div className="max-w-4xl mx-auto  text-center flex flex-col gap-5">
          <DynamicText value={jsonData?.content?.title}>
            <h1
              dangerouslySetInnerHTML={{
                __html: jsonData?.content?.title,
              }}
              className="md:text-5xl font-bold text-4xl text-highlight"
            ></h1>
          </DynamicText>
          <Paragraph
            text={jsonData?.content?.description}
            extra="max-w-2xl mx-auto text-zinc-300"
          />
        </div>
      )}
      <div className={`w-full max-w-lg bg-third/50 p-[2px] mx-auto`}>
        {!femaleform ? (
          <>
            <CommonForm
              solar={false}
              transit={false}
              handleData={(val) => handlepassdata(val, "female")}
              formKeys={jsonData.config.form_label.female}
              label={true}
              email_status="0"
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
              formKeys={jsonData.config.form_label.male}
              label={true}
              email_status="0"
              initialvalue={formInitialValue()}
              userData={userData?.male}
            />
          </>
        )}
      </div>
    </div>
  );
}
