"use client";

import Paragraph from "../../../src/component/paragraph";
import Text from "../../../src/component/text";
import React, { useEffect, useState } from "react";
import NumerologyForm from "../../../src/component/forms/numerologyForm";
import useForm from "../../../context/useFormValue";
import { findComponent } from "@/utils/arrayFunc";
import { FetchApi } from "@/utils/fetchAPI";
import { Loader2 } from "@/utils/loader";
import Image from "@/src/component/image";
export function getLayout(variant: string) {
  switch (variant) {
    case "numerology_style_one":
    case "numerology_style_two":
    case "numerology_style_three":
    case "numerology_style_four":
      return " md:flex-col justify-center text-center";

    case "numerology_style_five":
      return "md:flex-row";
  }
}

export function getFormLayout(variant: string) {
  switch (variant) {
    case "numerology_style_four":
      return "md:flex-row-reverse";
    default:
      return "md:flex-row";
  }
}

export default function NumerologySection({ data }: { data: any }) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const [components, setComponents] = useState(data.components);
  const customLayout = getLayout(data?.currentVariant);
  const customFormLayout = getFormLayout(data?.currentVariant);
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

  const fetchdata = async (e: any) => {
    const ApiCall = await FetchApi({
      apiName: "numerological_numbers",
      userData: e,
    });
    setResponse(ApiCall ? ApiCall : null);
    // setLoader(false);
  };

  const headlineComponent = findComponent("HEADLINE", components);
  const contentComponent = findComponent("CONTENT", components);
  const numerologyComponent = findComponent("NUMEROLOGY_FORM", components);
  const imageComponent = findComponent("IMAGE", components);

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
                  extra={`${customLayout}  md:text-6xl   text-5xl text-highlight font-semibold`}
                  variant={headlineComponent.props.variant.value}
                  weight={headlineComponent.props.weight.value}
                  color={"red"}>
                  {headlineComponent.props.content.value}
                </Text>
              )}

              {allowedComponents.includes("CONTENT") && contentComponent && (
                <Paragraph
                  extra={`${customLayout} max-w-2xl text-zinc-300 md:text-lg mx-auto`}
                  weight={contentComponent.props.weight.value}
                  color={contentComponent.props?.color?.value}>
                  {contentComponent.props.content.value}
                </Paragraph>
              )}
            </div>
            <div
              className={`flex gap-10 items-center w-full ${customFormLayout}`}>
              <NumerologyForm
                formKeys={numerologyComponent}
                passdata={handlePassData}
              />
              {allowedComponents.includes("IMAGE") && imageComponent && (
                <Image
                  width={imageComponent?.props?.width?.value}
                  src={imageComponent?.props?.src?.value}
                  alt={imageComponent?.props?.alt?.value}
                  caption={imageComponent?.props?.caption?.value}
                  fit={imageComponent?.props?.fit?.value}
                  position={imageComponent?.props?.position?.value}
                  radius={imageComponent?.props?.radius?.value}></Image>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {Object.keys(response).length > 0 ? (
            <div className='px-5 flex flex-col gap-14 w-full'>
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
              <div className='max-w-3xl w-full mx-auto flex flex-col gap-5 '>
                <FavorableTable
                  bg='bg-gradient-to-r from-blue-400/80 to-blue-300'
                  name='Life path number'
                  color='bg-gradient-to-r from-blue-200 to-blue-300'
                  desc={`Your life path number is ${response?.lifepath_number}. It represents both the situation and opportunities that are attracted to you as the result of your actions.`}
                  value={response?.lifepath_number}
                />
                <FavorableTable
                  name='Personality Number'
                  bg='bg-gradient-to-r from-pink-400/80 to-pink-300'
                  color='bg-gradient-to-r from-pink-200 to-pink-300'
                  desc={`Your Personality number also called as Persona is ${response?.personality_number}. Personality Number is compliment to the inner aspect of the self.`}
                  value={response?.personality_number}
                />
                <FavorableTable
                  name='Expression Number'
                  bg='bg-gradient-to-r from-purple-400/80 to-purple-300'
                  color='bg-gradient-to-r from-purple-200 to-purple-300'
                  desc={`Your Expression Number or Total Name Number is ${response?.expression_number}. It describes the magic that you bring into the world.`}
                  value={response?.expression_number}
                />
                <FavorableTable
                  name='Challenge Numbers'
                  color='bg-gradient-to-r from-red-200 to-red-300'
                  value={response?.challenge_numbers.join(",")}
                />
                <FavorableTable
                  name=' Soul Urge Number '
                  bg='bg-gradient-to-r from-yellow-400/80 to-yellow-300'
                  color='bg-gradient-to-r from-yellow-100 to-yellow-300'
                  value={response?.subconscious_self_number}
                />
                <FavorableTable
                  bg='bg-gradient-to-r from-indigo-400/80 to-indigo-300'
                  name='Subconscious Self Number'
                  color='bg-gradient-to-r from-indigo-200 to-indigo-300'
                  value={response?.subconscious_self_number}
                />
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
