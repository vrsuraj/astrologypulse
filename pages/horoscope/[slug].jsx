import {
  CommonCardPage,
  signs,
} from "../../src/component/horoscope/horoscopeCards";
import { MonthlyHoroscopeComponent } from "../../src/component/horoscope/monthlyHoroscope";
import { WeeklyHoroscopeComponent } from "../../src/component/horoscope/weeklyHoroscope";
import HoroscopeTab, { HoroscopeTopBar } from "../../src/component/tab/tabUi1";
import { FetchApi } from "../../utils/fetchAPI";
import { Loader2 } from "../../utils/loader";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function HoroscopeSlug({ slug }) {
  const router = useRouter();

  const [loader, setLoder] = useState(true);

  const [active, setActive] = useState({
    sign: "",
    time: "",
  });

  const [response, setResponse] = useState({});

  useEffect(() => {
    setActive({
      sign: SplitLink(slug)[0],
      time: SplitLink(slug)[1],
    });
    apiCall(SplitLink(slug));
  }, [slug]);

  const apiCall = async (data) => {
    if (Array.isArray(data)) {
      setLoder(true);
      const link = {
        daily: "sun_sign_prediction/daily/",
        next: "sun_sign_prediction/daily/next/",
        monthly: "horoscope_prediction/monthly/",
        yesterday: "sun_sign_prediction/daily/previous/",
      };
      const Dailyapi = { apiName: `${link[data[1]]}${data[0]}` };
      const Dailyresponse = await FetchApi({ ...Dailyapi });
      setResponse(Dailyresponse);
      setLoder(false);
    }
  };

  const handleSelectZodiac = async (val) => {
    await router.push(`${val.toLowerCase()}-${active.time}-horoscope`);
  };

  const handleTime = async (time) => {
    await router.push(
      `${active.sign.toLowerCase()}-${time.toLowerCase()}-horoscope`
    );
  };

  return (
    <div className="pb-20">
      {/*  tab ui  */}
      <div className="flex flex-col w-full gap-10">
        <HoroscopeTopBar
          handleSign={handleSelectZodiac}
          sign={active.sign}
          time={active.time}
        />
        <div className="max-w-6xl items-start w-full px-5 md:gap-20 gap-14 mx-auto flex md:flex-row flex-col">
          <div className="w-full overflow-hidden flex flex-col gap-10">
            <HoroscopeTab
              active={active.time}
              handleTime={handleTime}
              tabs={tab}
            />
            <>
              {active.time === "monthly" ? (
                <>
                  {Object.keys(response).length !== 0 && !loader ? (
                    <MonthlyHoroscopeComponent data={response} />
                  ) : (
                    <Loader2 />
                  )}
                </>
              ) : (
                <>
                  {active.time === "weekly" ? (
                    <>
                      {Object.keys(response).length !== 0 && !loader ? (
                        <WeeklyHoroscopeComponent data={response} />
                      ) : (
                        <Loader2 />
                      )}
                    </>
                  ) : (
                    <>
                      {Object.keys(response).length !== 0 && !loader ? (
                        <div className="flex flex-col gap-10">
                          <CommonCardPage data={response} />
                        </div>
                      ) : (
                        <Loader2 />
                      )}
                    </>
                  )}
                </>
              )}
            </>
          </div>
          <div
            className={`w-full md:max-w-[320px]  flex flex-col md:mt-24  gap-10 md:gap-14`}
          >
            {/* <div className="flex text-center flex-col gap-5 bg-gradient-to-b from-pink-300 to-pink-400 text-white px-5 py-8 rounded">
              <h6 className="md:text-2xl text-xl font-semibold ">
                Are you and your love interest meant to be?
              </h6>
              <div className="flex justify-center items-center">
                <img src="/imgs/birth-chart.svg" className="max-w-[100px]" />
              </div>
              <Link href="/zodiac-compatibility">
                <button className="bg-white w-full hover:bg-zinc-800 hover:text-white duration-100 ease-in text-zinc-800 p-2 rounded">
                  Check our compatibility
                </button>
              </Link>
            </div>

            <div className="flex items-center flex-col gap-5 bg-gradient-to-b from-rose-300 to-red-400 text-center text-white px-5 py-8 rounded">
              <h6 className="md:text-2xl text-xl font-semibold ">
                Numerology Prediction
              </h6>
              <span>
                <svg
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  role="img"
                  className="w-[100px] h-[100px]"
                  preserveAspectRatio="xMidYMid meet"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M18 16.723L22.619 15H26v14h-3.945V17.908H22l-3.33 1.271l-.67-2.456M23.207 49c-1.832 0-3.377-.459-4.207-.959l.676-2.375c.586.291 1.941.832 3.291.832c1.719 0 2.592-.789 2.592-1.811c0-1.334-1.395-1.939-2.855-1.939h-1.35v-2.271h1.287c1.109-.02 2.523-.414 2.523-1.561c0-.813-.695-1.416-2.09-1.416c-1.154 0-2.375.479-2.963.813l-.674-2.293c.85-.52 2.549-1.02 4.377-1.02c3.027 0 4.707 1.521 4.707 3.373c0 1.439-.85 2.564-2.594 3.148v.039c1.702.294 3.073 1.522 3.073 3.294C29 47.248 26.801 49 23.207 49M35.5 27.053l1.824-1.611c3.08-2.689 4.578-4.236 4.619-5.846c0-1.123-.693-2.014-2.32-2.014c-1.215 0-2.277.594-3.018 1.146l-.93-2.309c1.063-.785 2.711-1.42 4.619-1.42c3.189 0 4.947 1.82 4.947 4.32c0 2.309-1.715 4.152-3.754 5.932l-1.301 1.057v.043H45.5V29h-10v-1.947M46 45.662h-1.832V49h-3.393v-3.338H34v-2.133L39.789 35h4.379v8.205H46v2.457"
                      fill="#000000"
                    ></path>
                    <path
                      d="M39.389 40.107l-2.047 3.057v.041h3.434v-3.098c0-.844.047-1.703.117-2.609h-.092c-.494.906-.895 1.725-1.412 2.609"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link href="/numerology">
                <p className="bg-white w-full hover:bg-zinc-800 hover:text-white duration-100 ease-in text-zinc-800 p-2 rounded">
                  Know your numerology
                </p>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let paths = [];
  signs.map((item) => {
    for (let i = 0; i < 4; i++) {
      const slugname = ["daily", "next", "yesterday", "monthly"];
      const url = `${item.toLowerCase()}-${slugname[i]}-horoscope`;
      paths.push({ params: { slug: url } });
    }
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

function SplitLink(text) {
  return text.split("-");
}

const tab = [
  { name: "Yesterday", link: "yesterday" },
  { name: "Today", link: "daily" },
  { name: "Tommorrow", link: "next" },
  { name: "Monthly", link: "monthly" },
];
