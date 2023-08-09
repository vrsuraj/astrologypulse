import { randomIntArrayInRange } from "@/utils/arrayFunc";
import React, { useState } from "react";
import { TarotResponse } from "../../../jsondata/9-spread-tarot-response";
import CirclesLoader, { LoginLoader } from "@/utils/loader";
import PercentageLoadingAnimation from "../percentageLoader";
import Response from "./9SpreadResponse";
import { TatorPast } from "../tarot/9SPreadUtils";
import Text from "../text";
import Paragraph from "../paragraph";
import Button from "../button/index2";

const initialState = {
  past: {
    tarot1: false,
    tarot2: false,
    tarot3: false,
  },
  present: {
    tarot1: false,
    tarot2: false,
    tarot3: false,
  },
  future: {
    tarot1: false,
    tarot2: false,
    tarot3: false,
  },
};
export default function Spread9TarotCalculator({
  allowedComponents,
  headlineComponent,
  paragraphComponent,
}: {
  allowedComponents: any;
  headlineComponent: any;
  paragraphComponent: any;
}) {
  const [buttonState, setButtonState] = useState(false);
  const [response, setResponse] = useState({});
  const [shuffle, setShuffle] = useState(false);
  const [randomId, setRandomId] = useState(randomIntArrayInRange(1, 78, 9));
  const [state, setState] = useState(initialState);
  const [loader, setLoader] = useState(false);

  if (shuffle) {
    setTimeout(() => setShuffle(false), 2000);
  }

  const handleUpdate = (key: "past" | "present" | "future", val: string) => {
    setState((prev) => ({ ...prev, [key]: { ...prev[key], [val]: true } }));
    const check = ButtonStatus({
      ...state,
      [key]: { ...state[key], [val]: true },
    });
    if (check) {
      setTimeout(() => setButtonState(true), 600);
    } else {
      setButtonState(false);
    }
  };

  function ButtonStatus(obj: any) {
    return Object.values(obj).every((nestedObj: any) => {
      return Object.values(nestedObj).every((value) => value === true);
    });
  }

  const handleRoute = () => {
    const obj = {
      past: [
        getFilterObject(TarotResponse, randomId[0], "past"),
        getFilterObject(TarotResponse, randomId[3], "past"),
        getFilterObject(TarotResponse, randomId[6], "past"),
      ],
      present: [
        getFilterObject(TarotResponse, randomId[1], "present"),
        getFilterObject(TarotResponse, randomId[4], "present"),
        getFilterObject(TarotResponse, randomId[7], "present"),
      ],
      future: [
        getFilterObject(TarotResponse, randomId[2], "future"),
        getFilterObject(TarotResponse, randomId[5], "future"),
        getFilterObject(TarotResponse, randomId[8], "future"),
      ],
    };
    setResponse(obj);
  };

  const handleShuffle = () => {
    setShuffle(true);
    const randomArray = randomIntArrayInRange(1, 78, 9);
    setRandomId(randomArray);
    setState(initialState);
  };

  const handleButton = () => {
    setLoader(true);
  };

  const handleLoader = () => {
    setButtonState(false);
    setTimeout(() => handleRoute(), 400);
  };

  return (
    <>
      <div className="relative">
        {shuffle && <CirclesLoader />}
        {buttonState && (
          <div className="absolute px-5 top-0 h-full flex justify-center pt-[200px] md:pt-0 md:items-center z-[2] bg-zinc-900/70 w-full left-0">
            {loader ? (
              <div className="w-full flex flex-col items-center">
                <PercentageLoadingAnimation handleCallBack={handleLoader} />
                <p className="mt-5  text-white md:text-3xl text-2xl">
                  Please Wait...
                </p>
              </div>
            ) : (
              <div className="flex  flex-col gap-5 text-center">
                <p className="text-white md:text-4xl text-3xl">
                  You have selected all your 9 cards
                </p>
                <button
                  onClick={handleButton}
                  className="w-full hover:scale-[1.04] duration-150 ease-in font-semibold rounded-full md:text-xl text-lg px-20 py-3"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, #facc6b 0%, #fabc3c 74%)",
                  }}
                >
                  Calculate your response
                </button>
              </div>
            )}
          </div>
        )}
        <style jsx>
          {`
            .title {
              background-image: linear-gradient(
                to right,

                #cb9b51 22%,
                #f6e27a 45%,
                #f6f2c0 50%,
                #f6e27a 55%,
                #cb9b51 78%,
                #462523 100%
              );
              color: transparent;
              -webkit-background-clip: text;
            }
          `}
        </style>
        {Object.keys(response).length == 0 ? (
          <>
            <div className="min-h-screen w-full">
              <div className="flex flex-col gap-10 md:rounded-[20px] max-w-4xl mx-auto w-full">
                <div className="flex flex-col gap-5 text-center w-full">
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
                <div className="p-[2px]  mx-auto btn max-w-max  w-full rounded-full">
                  <h6
                    onClick={handleShuffle}
                    className=" md:text-lg bg-primary w-full max-w-[250px] min-w-[250px] text-center cursor-pointer  mx-auto px-10 py-2.5 rounded-full text-lg text-white"
                  >
                    {shuffle ? <LoginLoader /> : "Shuffle Cards"}
                  </h6>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5 md:gap-10 w-full max-w-4xl mx-auto mt-10">
                <TatorPast
                  active={[randomId[0], randomId[3], randomId[6]]}
                  shuffle={shuffle}
                  title="Past"
                  identity="past"
                  arr={state.past}
                  handleUpdate={handleUpdate}
                />
                <TatorPast
                  active={[randomId[1], randomId[4], randomId[7]]}
                  shuffle={shuffle}
                  title="Present"
                  identity="present"
                  arr={state.present}
                  handleUpdate={handleUpdate}
                />
                <TatorPast
                  active={[randomId[2], randomId[5], randomId[8]]}
                  shuffle={shuffle}
                  title="Future"
                  identity="future"
                  arr={state.future}
                  handleUpdate={handleUpdate}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col-reverse">
            {Object.keys(response).length > 0 && (
              <Button
                color="white"
                shape="rounded"
                extra="flex gap-2 whitespace-nowrap mx-auto max-w-max"
                callback={() => {
                  setResponse({});
                  setLoader(false);
                  handleShuffle();
                  setState(initialState);
                }}
              >
                <span>
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h48v48h-48z" fill="none" />
                    <path d="M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z" />
                  </svg>
                </span>
                Try Another Reading
              </Button>
            )}
            <Response data={response} />
          </div>
        )}
      </div>
    </>
  );
}

export function getFilterObject(arr: any[], id: number, key: string) {
  const object = arr.filter((item) => {
    return item.id == id;
  });

  if (object.length > 0) {
    return {
      name: object[0]["name"],
      desc: object[0][key],
      id: object[0]["id"],
    };
  } else return { name: "", desc: "", id: "" };
}
