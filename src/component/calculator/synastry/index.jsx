import React, { useEffect, useState } from "react";
import SynastryTabResponse from "./synastryTabResponse";
import SynastryResponse from "./synastryResponse";
import { useRouter } from "next/router";
import useForm from "../../../../context/useFormValue";
import { BackUrl } from "@/utils/routing";

export default function Synastry({ pageData }) {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const defaultFormData = useForm();

  useEffect(() => {
    if (defaultFormData["synastry"]) {
      setUserData(defaultFormData["synastry"]);
    }
  }, [defaultFormData?.transit]);

  const handleForm = () => {
    const back_url = BackUrl(router.asPath);
    defaultFormData["deleteuserdata"]({ ["synastry"]: null });
    router.push(back_url);
  };

  const responseType = pageData?.props?.response_type?.value;

  return (
    <div className={``}>
      {responseType !== "tab" ? (
        <SynastryTabResponse
          handleForm={handleForm}
          pageData={pageData}
          userdata={userData}
          isPremium={pageData?.premium == "1" ? true : false}
        />
      ) : (
        <SynastryResponse
          handleForm={() => handleForm("synastry")}
          pageData={pageData}
          userdata={userData}
        />
      )}
    </div>
  );
}
