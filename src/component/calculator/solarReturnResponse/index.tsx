import React, { useEffect, useState } from "react";
import SolarReturnTabResponse from "./solarReturnTabResponse";
import { useRouter } from "next/router";
import useForm from "@/context/useFormValue";
import { BackUrl } from "@/utils/routing";
import SolarReturnResponseFunc from "./solarReturnResponse";

export default function SolarReturnResponseComponent({
  pageData,
}: {
  pageData: any;
}) {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const defaultFormData = useForm();

  useEffect(() => {
    if (defaultFormData["solar"]) {
      setUserData(defaultFormData["solar"]);
    }
  }, [defaultFormData?.solar]);

  const handleForm = () => {
    const back_url = BackUrl(router.asPath);
    defaultFormData["deleteuserdata"]({ ["solar"]: null });
    router.push(back_url);
  };
  const responseType = pageData?.props?.response_type?.value;

  return (
    <>
      {responseType == "tab" ? (
        <SolarReturnTabResponse
          handleForm={handleForm}
          pageData={pageData}
          userdata={userData}
          isPremium={pageData?.premium == "1" ? true : false}
        />
      ) : (
        <SolarReturnResponseFunc
          handleForm={handleForm}
          pageData={pageData}
          userdata={userData}
        />
      )}
    </>
  );
}
