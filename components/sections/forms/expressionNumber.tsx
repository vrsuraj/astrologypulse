"use client";

import Paragraph from "../../../src/component/paragraph";
import Text from "../../../src/component/text";
import React, { useEffect, useState } from "react";
import NumerologyForm from "../../../src/component/forms/numerologyForm";
import useForm from "../../../context/useFormValue";
import { findComponent } from "@/utils/arrayFunc";
import { FetchApi } from "@/utils/fetchAPI";
import { Loader2 } from "@/utils/loader";
import { MoreCards } from "../../cards/calculatorCard";
export function getLayout(variant: string) {
  switch (variant) {
    case "default":
    case "ExpressionNumberCalculatorWithoutContent":
    case "ExpressionNumberCalculatorStyleTwo":
      return " md:flex-col justify-center text-center";

    case "ExpressionNumberCalculatorStyleThree":
      return "md:flex-row";
  }
}

export default function NumerologySection({ data }: { data: any }) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const [components, setComponents] = useState(data.components);
  const customLayout = getLayout(data?.currentVariant);
  const defaultFormData = useForm();
  const [userData, setUserData] = useState({});
  const [response, setResponse] = useState<any>({});

  const handlePassData = async (data: any) => {
    setUserData(data);
    handleData(data);
    await fetchdata(data);
  };
  useEffect(() => {
    if (defaultFormData["numerology"]) {
      setUserData(defaultFormData["numerology"]);
      fetchdata(defaultFormData["numerology"]);
    }
  }, [defaultFormData["numerology"]]);

  const handleData = (data: object) => {
    defaultFormData["adduserdata"]({ numerology: data });
  };

  const headlineComponent = findComponent("HEADLINE", components);
  const contentComponent = findComponent("CONTENT", components);
  const expressionNumberComponent = findComponent(
    "EXPRESSION_NUMBER_CALCULATOR_FORM",
    components
  );

  const fetchdata = async (e: any) => {
    const ApiCall = await FetchApi({
      apiName: "expression_number",
      userData: e,
    });
    setResponse(ApiCall ? ApiCall : null);
    // setLoader(false);
  };

  const handleUserData = () => {
    defaultFormData["deleteuserdata"]({ ["numerology"]: null });
    setResponse({});
    setUserData({});
  };

  return (
    <div className='md:py-20 py-14'>
      {Object.keys(userData).length == 0 ? (
        <>
          <div
            className={`px-5 md:pb-14 pb-10 ${customLayout} flex flex-col w-full max-w-6xl mx-auto items-center md:gap-14 gap-10 `}>
            <div className={` px-5 flex flex-col gap-5`}>
              {allowedComponents.includes("HEADLINE") && headlineComponent && (
                <Text
                  extra={`${customLayout}`}
                  variant={headlineComponent.props.variant.value}
                  weight={headlineComponent.props.weight.value}
                  color={"red"}>
                  {headlineComponent.props.content.value}
                </Text>
              )}

              {allowedComponents.includes("CONTENT") && contentComponent && (
                <Paragraph
                  extra={`${customLayout}`}
                  weight={contentComponent.props.weight.value}
                  color={contentComponent.props?.color?.value}>
                  {contentComponent.props.content.value}
                </Paragraph>
              )}
            </div>
            <NumerologyForm
              formKeys={expressionNumberComponent}
              passdata={handlePassData}
            />
          </div>
        </>
      ) : (
        <>
          {Object.keys(response).length > 0 ? (
            <div className='px-5  flex flex-col gap-14 w-full'>
              <div className='flex max-w-3xl mx-auto border-b border-secondary  w-full pb-10 gap-6  items-start'>
                <div className='flex flex-col gap-4'>
                  <h6 className=' text-zinc-200 md:text-2xl'>
                    {response?.name}
                  </h6>
                  <p className='text-zinc-200 text-para md:text-lg'>
                    {Callculatedate(response?.birth_date)}
                  </p>
                </div>
                <button
                  onClick={handleUserData}
                  className='duration-100 ease-in hover:bg-white hover:text-zinc-800  text-third p-1 rounded-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                  </svg>
                </button>
              </div>
              <div className='max-w-4xl mx-auto '>
                <h6
                  style={{ lineHeight: 1.5 }}
                  className='text-white mb-5 flex gap-2 items-center md:text-4xl text-3xl font-semibold'>
                  {response?.name}, your expression number is :{" "}
                  {response?.expression_number}
                </h6>
                <div className='flex flex-col max-w-3xl gap-10'>
                  {response?.report
                    .slice(0, 3)
                    .map(
                      (
                        item:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | React.PromiseLikeOfReactNode
                          | null
                          | undefined,
                        i: React.Key | null | undefined
                      ) => (
                        <p className='md:text-lg text-zinc-200' key={i}>
                          {item}
                        </p>
                      )
                    )}
                </div>
              </div>
              <div className='flex flex-col gap-10 max-w-3xl w-full mx-auto'>
                <h3 className='md:text-3xl text-2xl font-semibold text-white'>
                  More Numerology
                </h3>
                <div className='flex gap-5 flex-wrap'>
                  <MoreCards
                    link='/life-path-number'
                    title='Life Path Number'
                    icon={undefined}
                  />
                  <MoreCards
                    link='/personality-number'
                    title='Personality Number'
                    icon={undefined}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className='mt-[100px]'>
              <Loader2 />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function FavorableTable(props: any) {
  const color = props.color || "";
  return (
    <div
      className={`${color} w-full relative overflow-hidden z-[1] flex rounded-[10px] md:p-10 p-5 text-left justify-between text-sm`}>
      <div className='flex flex-col gap-4'>
        <h6 className=' font-semibold text-gray-800 md:text-2xl text-xl w-full'>
          {props.name}
        </h6>
        {props.desc && (
          <p
            className='md:text-lg max-w-xl'
            dangerouslySetInnerHTML={{ __html: props.desc }}></p>
        )}
      </div>
      <div
        className={`${props.bg} z-[-1] absolute w-[150px] rounded-full h-[150px] right-[-60px] top-[-60px] sm:right-[-30px] sm:top-[-30px]`}></div>
      <p className='text-center md:text-4xl text-2xl sm:text-3xl text-gray-800'>
        {props.value}
      </p>
    </div>
  );
}

export const Callculatedate = (d: string) => {
  const s = d.split("-");
  return monthobj2[s[1]] + " " + s[2] + ", " + s[0];
};

export let monthobj2: any = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
