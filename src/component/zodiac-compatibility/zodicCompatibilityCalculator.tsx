import { FetchApi } from "@/utils/fetchAPI";
import { Loader2 } from "@/utils/loader";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { getParameterByName } from "../../../utils/urlParam";
import style from "../../../styles/Home.module.css";
import Text from "../text";
import Paragraph from "../paragraph";
import { signs } from "../../../jsondata/const";
import Button from "../button/index2";
import { ZodiacPartnerCompatibilityResponse } from "../zodiac-compatibility/zodiacCompatibilityResponse";
import Image from "../image";

type Props = {
  allowedComponents: any;
  customLayout: any;
  headlineComponent: any;
  imageComponent: any;
  paragraphComponent: any;
  zodiacCompatibilityComponent: any;
};

export default function ZodicCompatibilityCalculator({
  allowedComponents,
  customLayout,
  headlineComponent,
  imageComponent,
  paragraphComponent,
  zodiacCompatibilityComponent,
}: Props) {
  const [state, setState] = useState({ zodiac1: "aries", zodiac2: "gemini" });
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(false);

  const handleZodiacSign = (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    const { value } = e.target;
    setState((prev) => ({ ...prev, [key]: value }));
  };
  const router = useRouter();

  useEffect(() => {
    const queryString = getParameterByName("zodiac", router.asPath);
    if (queryString) {
      const query = queryString.split("-");
      setState({ zodiac1: query[0], zodiac2: query[1] });
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    await API();
  }, [state]);

  const API = async () => {
    setLoader(true);
    const ApiCall = await FetchApi({
      apiName: `zodiac_compatibility/${state.zodiac1.toLowerCase()}/${state.zodiac2.toLowerCase()}`,
    });
    if (ApiCall) {
      setResponse(ApiCall);
      setLoader(false);
    }
  };

  const handleCallback = () => {
    setResponse({});
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className=" relative  ">
          {Object.keys(response).length > 0 ? (
            <div>
              <ZodiacPartnerCompatibilityResponse
                handleCallback={handleCallback}
                data={response}
              />
            </div>
          ) : (
            <>
              <div>
                <div className="max-w-4xl mx-auto flex flex-col gap-5 text-center w-full">
                  {allowedComponents.includes("HEADLINE") &&
                    headlineComponent && (
                      <Text
                        extra="!text-highlight !dark:text-hightlight"
                        size={headlineComponent?.props?.size?.value || "5xl"}
                        variant={
                          headlineComponent?.props?.variant?.value || "h2"
                        }
                        weight={
                          headlineComponent?.props?.weight?.value || "bold"
                        }
                        color={headlineComponent?.props?.color?.value}
                      >
                        {headlineComponent?.props.content.value}
                      </Text>
                    )}
                  {allowedComponents.includes("PARAGRAPH") &&
                    paragraphComponent && (
                      <Paragraph
                        extra="max-w-2xl mx-auto"
                        size={paragraphComponent?.props?.size?.value || "lg"}
                      >
                        {paragraphComponent?.props?.content?.value}
                      </Paragraph>
                    )}
                </div>

                <div className={`flex gap-10 items-center ${customLayout}`}>
                  <div className="md:my-10 mb-10 border-4 border-rose-400 md:p-16 p-10 rounded-[30px]   max-w-2xl mx-auto flex flex-col gap-14 items-center">
                    <div className="items-center max-w-lg mx-auto flex gap-10 md:gap-20 justify-center">
                      <div className="flex w-full flex-col items-center justify-center gap-5 md:gap-7">
                        <div
                          className={`bg-red-400 md:p-7 p-5 border max-w-max mx-auto  shadow-lg shadow-rose-300/30 cursor-pointer rounded-full`}
                        >
                          <span>
                            <img
                              className="w-[80px]"
                              src={`/zodiac/${state.zodiac1}.svg`}
                              alt={`${state.zodiac1}`}
                            />
                          </span>
                        </div>

                        <select
                          value={state.zodiac1}
                          onChange={(e) => handleZodiacSign(e, "zodiac1")}
                          className={`w-full bg-transparent px-5 border border-zinc-300  rounded-md text-white  py-2 ${style.select2}`}
                        >
                          {signs.map((item, i) => (
                            <option key={i} value={item.toLowerCase()}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-full md:w-[90%]">
                        <img src="/imgs/heart.png" className="w-full" />
                      </div>
                      <div className="flex w-full flex-col items-center justify-center gap-5">
                        <div
                          className={`bg-red-400 md:p-7 p-5 border max-w-max mx-auto  shadow-lg shadow-rose-300/30 cursor-pointer rounded-full`}
                        >
                          <span>
                            <img
                              className="w-[80px]"
                              src={`/zodiac/${state.zodiac2}.svg`}
                              alt={`${state.zodiac2}`}
                            />
                          </span>
                        </div>

                        <select
                          value={state.zodiac2}
                          onChange={(e) => handleZodiacSign(e, "zodiac2")}
                          className={`w-full bg-transparent px-5 border border-zinc-300  rounded-md text-white  py-2 ${style.select2}`}
                        >
                          {signs.map((item, i) => (
                            <option key={i} value={item.toLowerCase()}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <Button
                      shape={
                        zodiacCompatibilityComponent?.props?.button_radius
                          ?.value || "rounded"
                      }
                      extra="flex gap-2 whitespace-nowrap mx-auto max-w-max"
                      callback={() => {
                        handleSubmit();
                      }}
                    >
                      {zodiacCompatibilityComponent?.props?.button_text?.value}
                    </Button>
                  </div>
                  {allowedComponents.includes("IMAGE") && imageComponent && (
                    <Image
                      width={imageComponent?.props?.width?.value}
                      src={imageComponent?.props?.src?.value}
                      alt={imageComponent?.props?.alt?.value}
                      caption={imageComponent?.props?.caption?.value}
                      fit={imageComponent?.props?.fit?.value}
                      position={imageComponent?.props?.position?.value}
                      radius={imageComponent?.props?.radius?.value}
                    ></Image>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
