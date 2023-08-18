import React, { useEffect, useState } from "react";
// import GoogleLoginAuth2 from "./googleAuth";
import Link from "next/link";
import { LoginLoader } from "../../../utils/loader";
import {
  ErrorText,
  SuccessText,
  commonAuthValidate,
} from "../../../utils/authenticationUtils";
import { DBEntry } from "../../../utils/fetchAPI";

const initialValue = {
  email: "",
  password: "",
};

type Props = {
  data?: any;
  mode?: string;
};

export default function LoginForm({ data, mode }: Props) {
  const [formValue, setFormValue] = useState(initialValue);
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
      url: "public/auth/login",
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
    <>
      <div className="max-w-md mx-auto w-full bg-white shadow-xl rounded-[20px] md:p-14 p-5 flex flex-col gap-7 items-center">
        <div className="flex flex-col gap-3 items-center text-center">
          <h5 className="font-semibold md:text-4xl text-3xl">
            {data?.content?.title}
          </h5>
          <p>{data?.content?.desc}</p>
        </div>
        {/* <GoogleLoginAuth2 handleCallback={handleLogin} />
        <div className="text-zinc-500 text-sm flex items-center gap-3">
          <span className="w-[50px] h-[1px] bg-zinc-400"></span>
          <span>Or {mode} With</span>
          <span className="w-[50px] h-[1px] bg-zinc-400"></span>
        </div> */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-col  gap-4 w-full">
            <input
              type="email"
              name="email"
              value={formValue.email}
              className="border text-[15px] rounded px-5 py-3 w-full focus:ring-2 focus:ring-blue-100 outline-none focus:border-blue-300"
              onChange={handleInput}
              placeholder="Enter your email"
            ></input>
            <input
              type="password"
              name="password"
              value={formValue.password}
              className="border text-[15px] rounded px-5 py-3 w-full focus:ring-2 focus:ring-blue-100 outline-none focus:border-blue-300"
              onChange={handleInput}
              placeholder="Passcode"
            ></input>
            <SuccessText text={success} />
            <ErrorText text={error} />
            <button className="bg-secondary mt-2 rounded px-5 py-3 hover:bg-opacity-80 duration-150 ease-in font-semibold">
              {loader ? <LoginLoader /> : mode}
            </button>
          </form>
        </div>
        <div className="text-center">
          {mode != "Sign In" ? (
            <div className="text-sm text-zinc-600">
              Already have an account?{" "}
              <Link href="/login" legacyBehavior>
                <a className="font-semibold text-zinc-800 hover:text-blue-500 duration-100 ease-in">
                  Login
                </a>
              </Link>
            </div>
          ) : (
            <>
              <div className="text-sm text-zinc-600">
                Don't have an account?{" "}
                <Link href="/signup" legacyBehavior>
                  <a className="font-semibold text-zinc-800 hover:text-blue-500 duration-100 ease-in">
                    Register Now
                  </a>
                </Link>
              </div>
              <div className="text-sm mt-2 text-zinc-600">
                Forget your password?{" "}
                <Link href="/forget-password" legacyBehavior>
                  <a className="font-semibold text-zinc-800 hover:text-blue-500 duration-100 ease-in">
                    Cick Here
                  </a>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
