import React, { useEffect, useState } from "react";
import {
  ErrorText,
  SuccessText,
  commonAuthValidate,
} from "../../../utils/authenticationUtils";
import { DBEntry } from "../../../utils/fetchAPI";
import { useRouter } from "next/router";
import { LoginLoader } from "../../../utils/loader";
import { getParameterByName } from "@/utils/urlParam";

type Props = {
  data?: any;
  mode?: string;
};

export default function ResetPasswordUi({ data }: Props) {
  const [formValue, setFormValue] = useState({
    password: "",
    confirm_password: "",
  });
  const [loader, setLoader] = useState<boolean>(false);
  const [success, setSuccess] = useState<null | string>(null);
  const [error, setError] = useState<null | string>("");
  const [token, setToken] = useState();
  const router = useRouter();
  const handleInput = (e: any) => {
    const { value, name } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const queryString: any = getParameterByName("token", router.asPath);
    if (queryString) {
      setToken(queryString);
    } else {
      router.push("/login");
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errorlog = commonAuthValidate(formValue);
    if (errorlog != "") {
      setError(errorlog);
    } else {
      setLoader(true);
      const response = await ApiCall(token);
      if (response?.success) {
        setSuccess(response?.message);
      } else {
        setError(response?.message);
      }
      setLoader(false);
    }
  };

  const ApiCall = async (token: string | undefined) => {
    const req = await DBEntry({
      url: `public/auth/reset-password/${token}`,
      method: "PUT",
      body: { password: formValue.password },
    });
    return req;
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 4000);
    }
    if (success) {
      setTimeout(() => setSuccess(null), 4000);
    }
  }, [error, success]);

  return (
    <div className={`px-5 flex flex-col gap-10 items-center`}>
      {/* <div>
        <img src="/imgs/logo.svg" alt="logo" className="max-w-[200px]" />
      </div>{" "} */}
      <div className="max-w-md mx-auto w-full bg-white shadow-xl rounded-[20px] md:p-14 p-5 flex flex-col gap-7 items-center">
        <div className="flex flex-col gap-3 items-center text-center">
          <h5 className="font-semibold md:text-4xl text-3xl">
            {data?.content?.title}
          </h5>
          <p>{data?.content?.desc}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col  gap-4 w-full">
          <input
            type="password"
            name="password"
            value={formValue.password}
            className="border text-[15px] rounded px-5 py-3 w-full focus:ring-2 focus:ring-blue-100 outline-none focus:border-blue-300"
            onChange={handleInput}
            placeholder="New password"
          ></input>
          <input
            type="password"
            name="confirm_password"
            value={formValue.confirm_password}
            className="border text-[15px] rounded px-5 py-3 w-full focus:ring-2 focus:ring-blue-100 outline-none focus:border-blue-300"
            onChange={handleInput}
            placeholder="Confirm password"
          ></input>
          <SuccessText text={success} />
          <ErrorText text={error} />
          <button className="bg-secondary mt-2 rounded px-5 py-3 hover:bg-opacity-80 duration-150 ease-in font-semibold">
            {loader ? <LoginLoader /> : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
