import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TransitResponse from "./transitResponse";
import TransitTabResponse from "./transitTabResponse";
import { BackUrl } from "@/utils/routing";
import useForm from "@/context/useFormValue";

export default function TransitChartResponse({ pageData }: { pageData: any }) {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const defaultFormData = useForm();

  useEffect(() => {
    if (defaultFormData["transit"]) {
      setUserData(defaultFormData["transit"]);
    }
  }, [defaultFormData?.transit]);

  const handleForm = () => {
    const back_url = BackUrl(router.asPath);
    defaultFormData["deleteuserdata"]({ ["transit"]: null });
    router.push(back_url);
  };
  const responseType = pageData?.props?.response_type?.value;

  return (
    <>
      {responseType !== "tab" ? (
        <TransitTabResponse handleForm={handleForm} userData={userData} />
      ) : (
        <TransitResponse handleForm={handleForm} userData={userData} />
      )}
    </>
  );
}
