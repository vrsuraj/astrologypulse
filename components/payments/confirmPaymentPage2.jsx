import { DBEntry } from "@/utils/fetchAPI";
import { Loader2 } from "@/utils/loader";
import { getParameterByName } from "@/utils/urlParam";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PaymentButton from "./paymentButton";
import { ampmconvertor } from "@/src/component/reports/dateUtils";
import { monthobj2 } from "../sections/forms/numerology";
import Text from "@/src/component/text";

export default function PaymentPage2({ title }) {
  const [data, setData] = useState({});
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const queryString = getParameterByName("token", router.asPath);
    if (queryString) {
      setToken(queryString);
      getUserDetailBasedOnToken(queryString);
    }
  }, []);

  async function getUserDetailBasedOnToken(token) {
    try {
      const req = await DBEntry({
        method: "GET",
        url: `services/payment/order-details/${token}`,
      });
      //return req;
      if (req.success) {
        setData(req?.response);
      } else {
        //router.push("/");
      }
    } catch (err) {
      return {
        staus: false,
        msg: `${err.message}`,
      };
    }
  }

  const handleBack = () => {
    const obj = {
      token: token,
      session: Encode(JSON.stringify(data?.user_details)),
    };
    router.push({
      pathname: type[data?.product?.product_type],
      query: obj,
    });
  };

  return (
    <>
      {token ? (
        <div className="bg-[rgb(224,231,255)] relative overflow-x-hidden md:py-24 py-14 h-screen w-full px-5">
          {/* {model && (
            <PaymentFormEdit
              handleEdit={handleEdit}
              handleModel={handleModel}
              userData={data?.user_details}
              active={model}
            />
          )} */}
          <div className="w-full overflow-hidden flex flex-col gap-10 bg-white p-[40px] rounded-[20px] shadow-md max-w-2xl mx-auto">
            <div className="text-center pb-2 flex flex-col gap-4 items-center ">
              {title && (
                <Text
                  size={"4xl"}
                  color="#1E1F24"
                  variant={"h2"}
                  weight={"semibold"}
                >
                  {title}
                </Text>
              )}
            </div>
            <div className="flex flex-col gap-5 w-full">
              <h6 className="border-b font-cera_medium pb-3 text-[20px]">
                Confirm your birth detail
              </h6>
              {data?.product?.product_type !== "SYNASTRY" ? (
                <div className="divide-y divide-zinc-200 flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <h6 className="font-medium text-lg md:text-xl">Person 1</h6>
                    <ConfirmBirthDetail
                      handleModel={handleBack}
                      data={data?.user_details?.female}
                    />
                  </div>
                  <div className="flex flex-col gap-3 pt-5">
                    <h6 className="font-medium  text-lg">Person 2</h6>
                    <ConfirmBirthDetail
                      handleModel={handleBack}
                      data={data?.user_details?.male}
                    />
                  </div>
                </div>
              ) : (
                <ConfirmBirthDetail
                  handleModel={handleBack}
                  data={data?.user_details}
                />
              )}
            </div>
            <div className="flex flex-col">
              <div className="md:text-xl pb-3 text-lg flex justify-between w-full items-center">
                <div className="flex flex-col gap-1">
                  <h6 className="text-zinc-500 text-lg">Your Order</h6>
                  <h6 className="">Birth Chart</h6>
                </div>
                <p>
                  <span className="line-through text-zinc-500">
                    {currency(data?.product?.currency)}
                    {data?.product?.strike_price}
                  </span>{" "}
                  {currency(data?.product?.currency)}
                  {data?.product?.price}
                </p>
              </div>
              <div className="md:text-xl  relative before:absolute before:top-0 before:left-[-40px] before:w-[100vw]  z-[1] before:z-[-1] before:bg-indigo-50 before:h-full py-3 text-lg flex justify-between w-full items-center">
                <h6>Total</h6>
                <p>
                  {" "}
                  {currency(data?.product?.currency)}
                  {data?.product?.price}
                </p>
              </div>
            </div>
            <PaymentButton token={token} name={"page2"} />
          </div>
        </div>
      ) : (
        <Loader2 />
      )}
    </>
  );
}

function ConfirmBirthDetail({ handleModel, data }) {
  return (
    <div className="w-full rounded-md  relative">
      <div className="flex flex-col gap-3  text-zinc-700">
        <span className="capitalize">{data?.name}</span>
        <div className="flex gap-6">
          <span className="  whitespace-nowrap">
            {monthobj2[data?.month]} {data?.day}, {data?.year} at{" "}
            {data?.hour < 10 ? "0" + data?.hour : data?.hour}{" "}
            {data?.min < 10 ? "0" + data?.min : data?.min}{" "}
            {ampmconvertor(data?.hour)}
          </span>
        </div>

        <span className=" leading-6   flex gap-2 items-center w-full break-words	">
          {data?.place}
        </span>
      </div>
      <button
        onClick={() => handleModel()}
        className="absolute top-[-15px] hover:text-zinc-900 right-5 flex text-zinc-500  mt-5 border-dashed gap-2 border-b border-zinc-500 text-sm font-cera_medium "
      >
        EDIT
      </button>
    </div>
  );
}

export function currency(type) {
  return type == "inr" ? "₹" : "$";
}
