import { randomIntArrayInRange } from "@/utils/arrayFunc";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useCallback, useEffect, useState } from "react";
import YesNoTarotResult from "./yesNoTarotResult";
import { Loader2 } from "@/utils/loader";
import { FetchApi } from "../../../utils/fetchAPI";
import Text from "../text";
import Paragraph from "../paragraph";

export function YesNoTarotCalculatorComponent({
  headlineComponent,
  paragraphComponent,
  allowedComponents,
  subHeadingComponent,
}) {
  const CARD_LENGTH = 10;
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(false);
  const [hover, setHover] = useState(null);
  const [randomTarotId, setRandomId] = useState(
    randomIntArrayInRange(1, 22, 10)
  );

  const [mobileState, setMobileState] = useState(false);
  const handler = () => {
    const list = window.matchMedia("(max-width: 768px)");
    let check = list.matches ? true : false;
    setMobileState(check);
  };

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [mobileState]);

  const Call = useCallback((id) => APICall(id), []);

  const APICall = async (id) => {
    setLoader(true);
    const tarot = await FetchApi({
      apiName: "yes_no_tarot",
      userData: {
        tarot_id: id,
      },
    });

    setResponse({ ...tarot, id: id });
    setLoader(false);
  };

  const to = (i) => ({
    x:
      i > (CARD_LENGTH - 1) / 2
        ? mobileState
          ? i * 10
          : i * 30
        : mobileState
        ? i * 10
        : i * 30,
    y: 0,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });

  const from = () => ({ x: 0, rot: 0, scale: 1.3 });
  const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;

  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(
    CARD_LENGTH,
    (i) => ({
      ...to(i),
      from: from(),
      deps: mobileState,
    }),
    [mobileState]
  );

  useEffect(() => {
    api.start((i) => ({
      ...to(i),
      onRest: () => {
        if (gone.size === CARD_LENGTH) {
          gone.clear();
          api.start((i) => to(i));
        }
      },
    }));
  }, [api, gone, mobileState]);

  const handleShuffle = () => {
    const randomArray = randomIntArrayInRange(1, 22, 10);
    setRandomId(randomArray);
    const EffectArray = randomIntArrayInRange(1, 10, 10);
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          applyTranslateY(EffectArray[i]);
        }, (j * 10 + i) * 100);
      }
    }
    setTimeout(() => {
      applyTranslateY(null);
    }, 200);
  };

  function applyTranslateY(i) {
    setHover(i);
  }

  const handleReset = () => {
    setResponse({});
    setHover(null);
    api.start((i) => ({
      ...to(i),
      onRest: () => {
        if (gone.size === CARD_LENGTH) {
          gone.clear();
          api.start((i) => to(i));
        }
      },
    }));
  };

  return (
    <>
      <style jsx>
        {`
          .arrow {
            position: relative;
          }
          .arrow:before {
            position: absolute;
            content: "";
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 10px solid;
            border-color: #e8e0c0 transparent transparent;
          }
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
      <>
        <div className="md:pb-20 pb-10 overflow-hidden px-5 flex flex-col gap-10 md:rounded-[20px] max-w-4xl mx-auto w-full">
          {loader ? (
            <Loader2 />
          ) : (
            <>
              {Object.keys(response).length == 0 ? (
                <>
                  <div className="flex flex-col gap-5 w-full text-center max-w-4xl mx-auto items-center">
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
                          extra="max-w-3xl mx-auto"
                          size={paragraphComponent?.props?.size?.value || "lg"}
                        >
                          {paragraphComponent?.props?.content?.value}
                        </Paragraph>
                      )}
                    <div className="bg-third text-zinc-800 arrow  px-5 md:px-10 py-2 max-w-max rounded-full mx-auto ">
                      {allowedComponents.includes("SUB_HEADING") &&
                        subHeadingComponent && (
                          <Text
                            extra="!text-zinc-800 !dark:text-zinc-800"
                            size={
                              subHeadingComponent?.props?.size?.value || "md"
                            }
                            variant={
                              subHeadingComponent?.props?.variant?.value || "h6"
                            }
                            weight={
                              subHeadingComponent?.props?.weight?.value ||
                              "normal"
                            }
                            color={subHeadingComponent?.props?.color?.value}
                          >
                            {subHeadingComponent?.props.content.value}
                          </Text>
                        )}
                    </div>
                  </div>
                  <div className="flex relative justify-center flex-col max-w-3xl mx-auto w-full">
                    <div className="flex  relative h-[150px] md:h-[280px] justify-center gap-2 w-full mt-20">
                      {props.map(({ x, y, rot, scale }, i) => {
                        const spreadAngle = 90; // Adjust this value to control the spread angle
                        const spreadOffset = (CARD_LENGTH - 1) / 2;
                        const theta =
                          ((i - spreadOffset) / (CARD_LENGTH - 1)) *
                          spreadAngle *
                          (Math.PI / 180);
                        const radius = 250;
                        const xPos = 0;
                        const yPos = i == hover ? "-20px" : 0;

                        return (
                          <animated.div
                            onClick={() => Call(randomTarotId[i])}
                            onMouseOver={() => applyTranslateY(i)}
                            onMouseLeave={() => setHover(null)}
                            key={i}
                            className="deck w-[230px] cursor-pointer h-[200px] left-[20%] md:left-[10%]"
                            style={{
                              x,
                              y,
                              transform: interpolate(
                                [rot, scale],
                                (r, s) => `rotateY(${r}deg) scale(${s})`,
                                trans
                              ),
                              transformOrigin: "center",
                              zIndex: CARD_LENGTH - i,
                              position: "absolute",
                              top: "50%",
                              marginLeft: -100,
                              marginTop: -150,
                              translateX: xPos,
                              translateY: yPos,
                            }}
                          >
                            {/* This is the card itself */}
                            <animated.div
                              className="card"
                              style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: `url(/imgs/tarotcard.png)`,
                                transform: interpolate(
                                  [x],
                                  (x) => `translateX(${x}px)`,
                                  trans
                                ),
                              }}
                            />
                          </animated.div>
                        );
                      })}
                    </div>

                    <div className="p-[2px]  mx-auto btn max-w-max  w-full rounded-full">
                      <h6
                        onClick={handleShuffle}
                        className=" md:text-lg bg-primary w-full max-w-[250px] min-w-[250px] text-center cursor-pointer  mx-auto px-10 py-2.5 rounded-full text-lg text-white"
                      >
                        Shuffle Cards
                      </h6>
                    </div>
                  </div>
                </>
              ) : (
                <YesNoTarotResult
                  handleReset={handleReset}
                  response={response}
                />
              )}
            </>
          )}
        </div>
      </>
    </>
  );
}
