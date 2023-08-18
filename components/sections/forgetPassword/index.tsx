import React, { useEffect, useState } from "react";
import { DBEntry } from "../../../utils/fetchAPI";
import {
  ErrorText,
  SuccessText,
  commonAuthValidate,
} from "../../../utils/authenticationUtils";
import { LoginLoader } from "../../../utils/loader";

type Props = {
  data?: any;
  mode?: string;
};

export default function ForgetPasswordUi({ data }: Props) {
  const [formValue, setFormValue] = useState({ email: "" });
  const [loader, setLoader] = useState<boolean>(false);
  const [success, setSuccess] = useState<null | string>(null);
  const [error, setError] = useState<null | string>("");

  const handleInput = (e: any) => {
    const { value, name } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errorlog = commonAuthValidate(formValue);
    if (errorlog != "") {
      setError(errorlog);
    } else {
      setLoader(true);
      const response = await ApiCall();
      if (response?.success) {
        setSuccess(response?.message);
      } else {
        setError(response?.message);
      }
      setLoader(false);
    }
  };

  const ApiCall = async () => {
    const req = await DBEntry({
      url: "public/auth/forget-password",
      method: "POST",
      body: formValue,
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
    <div className={` px-5 flex flex-col gap-10 items-center`}>
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
            type="email"
            name="email"
            value={formValue.email}
            className="border text-[15px] rounded px-5 py-3 w-full focus:ring-2 focus:ring-blue-100 outline-none focus:border-blue-300"
            onChange={handleInput}
            placeholder="Enter your email"
          ></input>
          <SuccessText text={success} />
          <ErrorText text={error} />
          <button className="bg-secondary mt-2 rounded px-5 py-3 hover:bg-opacity-80 duration-150 ease-in font-semibold">
            {loader ? <LoginLoader /> : "Recover Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
