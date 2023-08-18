import React, { useEffect, useState } from "react";
import NatalCalculator2 from "./natalCalculator2";
import NatalTabCalculator from "./natalCalculator";
import { useRouter } from "next/router";
import useForm from "@/context/useFormValue";
import { BackUrl } from "@/utils/routing";

export default function Natal({ pageData }: { pageData: any }) {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const defaultFormData = useForm();

  useEffect(() => {
    if (defaultFormData["natal"]) {
      setUserData(defaultFormData["natal"]);
    }
  }, [defaultFormData?.natal]);

  const handleForm = () => {
    const back_url = BackUrl(router.asPath);
    defaultFormData["deleteuserdata"]({ ["natal"]: null });
    router.push(back_url);
  };

  const responseType = pageData?.props?.response_type?.value;

  return (
    <div>
      {responseType == "tab" ? (
        <NatalTabCalculator
          handleForm={handleForm}
          pageData={pageData}
          userdata={userData}
          isPremium={pageData?.premium == "1" ? true : false}
        />
      ) : (
        <NatalCalculator2
          handleForm={handleForm}
          pageData={pageData}
          userdata={userData}
        />
      )}
    </div>
  );
}
