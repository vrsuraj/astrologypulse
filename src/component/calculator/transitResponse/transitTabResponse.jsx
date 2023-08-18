import { TransitData, TransitProfileCard } from "../../reports/utils";
import { TabUI } from "../../tab/tabUi1";
import { FetchApi } from "../../../../utils/fetchAPI";
import { CustomInput, addDays, subDays } from "../../reports/utils";
import { handleTab } from "../natalChartResponse/natalCalculator";
import React, { useCallback, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Loader2 } from "../../../../utils/loader";

export default function TransitTabResponse({ userData, handleForm }) {
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(false);
  const ref = useRef();
  const [state, setstate] = useState(new Date());
  const [tabResponse, setTabResponse] = useState({
    "daily transit": {},
    "sr aspects report": {},
  });

  const [active, setActive] = useState("daily transit");

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      APICall(userData, state);
    }
  }, [userData]);

  const APICall = async (userData, date) => {
    if (userData && date) {
      const ApiCall = await FetchApi({
        apiName: "natal_transits/daily",
        userData: {
          ...userData,
          start_transit_date: convertDateObject(date),
          end_transit_date: convertDateObject(date, true),
        },
      });
      if (ApiCall) {
        const sortterm = ApiCall?.transit_relation.filter(
          (item) =>
            item.transit_planet !== "Jupiter" &&
            item.transit_planet !== "Saturn" &&
            item.transit_planet !== "Uranus" &&
            item.transit_planet !== "Neptune" &&
            item.transit_planet !== "Chiron" &&
            item.transit_planet !== "Pluto"
        );
        const longterm = ApiCall?.transit_relation.filter(
          (item) =>
            item.transit_planet === "Jupiter" ||
            item.transit_planet === "Saturn" ||
            item.transit_planet === "Uranus" ||
            item.transit_planet === "Neptune" ||
            item.transit_planet === "Chiron" ||
            item.transit_planet === "Pluto"
        );
        setResponse({ short: sortterm, long: longterm, all: ApiCall });
        setLoader(false);
      }
    }
  };

  function convertDateObject(date, next) {
    if (next) {
      const nextDate = new Date();
      nextDate.setDate(date.getDate() + 1);
      return (
        nextDate.getMonth() +
        1 +
        "-" +
        nextDate.getDate() +
        "-" +
        nextDate.getFullYear()
      );
    } else {
      return (
        date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear()
      );
    }
  }

  const CallTransitBasedOnDate = useCallback(
    async (date) => {
      setLoader(true);
      setstate(date);
      await APICall(userData, date);
    },
    [userData, state]
  );

  const tabCallback = useCallback(
    async (tab, key) => {
      const ApiCall = await FetchApi({
        apiName: tab,
        userData: userData,
      });
      setTabResponse((prev) => ({ ...prev, [key]: ApiCall }));
    },
    [userData]
  );

  const handleActive = (val) => {
    if (url[val]) {
      tabCallback(url[val], val);
    }
    setActive(val);
  };
  return (
    <>
      <div className=" w-full py-14 px-5">
        <div className=" max-w-4xl mx-auto">
          <h1 className="text-third md:text-5xl text-4xl text-left">
            {userData?.name}, Transit Report
          </h1>
          <p className="text-zinc-300 sm:text-base text-sm border-2 border-third p-5 mt-5 md:mt-7">
            A transit is a relationship between a planet in your birth chart and
            a planet currently moving in the sky. It reflects an energy pattern
            unfolding in your life based on your current date and location.
          </p>
        </div>
      </div>
      {/* birth details */}
      <div className="max-w-4xl mx-auto">
        <div className="py-14 flex md:flex-row flex-col justify-between md:gap-20  gap-14">
          <TransitProfileCard handleForm={handleForm} userDetail={userData} />
          <div className="flex gap-5  sm:max-w-sm w-full flex-col ">
            <h5 className="md:text-lg  text-white uppercase border-b border-secondary/50 pb-2 ">
              TRANSIT DATE
            </h5>
            <div>
              <DatePicker
                selected={state}
                onChange={(date) => CallTransitBasedOnDate(date)}
                dateFormat="MMMM d, yyyy"
                minDate={subDays(new Date(), 1)}
                maxDate={addDays(new Date(), 1)}
                dropdownMode="select"
                customInput={<CustomInput ref={ref} />}
              />
              <p className="text-base text-zinc-300 mt-5 items-center flex gap-2">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4  fill-current"
                  viewBox="0 0 64.000000 64.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M100 615 c0 -20 -5 -25 -25 -25 -14 0 -37 -11 -50 -25 l-25 -24 0
-246 0 -246 25 -24 24 -25 271 0 271 0 24 25 25 24 0 246 0 246 -25 24 c-13
14 -36 25 -50 25 -20 0 -25 5 -25 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25
l0 -25 -160 0 -160 0 0 25 c0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25z m0 -100
c0 -21 5 -25 30 -25 25 0 30 4 30 25 l0 25 160 0 160 0 0 -25 c0 -21 5 -25 30
-25 26 0 30 4 30 26 0 21 4 25 22 22 19 -2 24 -10 26 -40 l3 -38 -270 0 -271
0 0 33 c0 38 6 47 32 47 13 0 18 -7 18 -25z m488 -287 l-3 -173 -265 0 -265 0
-3 173 -2 172 270 0 270 0 -2 -172z"
                    />
                    <path
                      d="M92 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M492 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M92 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M492 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M92 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                  </g>
                </svg>
                {userData?.current_location}
              </p>
            </div>
          </div>
        </div>
      </div>
      {Object.keys(response).length > 0 && !loader ? (
        <div className="max-w-4xl mx-auto">
          <TabUI
            active={active}
            handleTime={handleActive}
            tabs={handleTab(false, tabs)}
          />
          {active === "daily transit" && (
            <div className=" max-w-xl pt-10 mx-auto grid grid-cols-1 gap-14 md:gap-20">
              <div className="flex flex-col gap-5">
                <h5 className="md:text-2xl text-xl font-medium  pb-2 text-zinc-300">
                  Short Term Transit
                </h5>
                <div className="flex  flex-col divide-y divide-zinc-400 dark:divide-zinc-500 border-zinc-400 dark:border-zinc-500 border">
                  {response.short?.map((item, i) => (
                    <TransitData key={i} number={i} data={item} />
                  ))}
                </div>
              </div>
              <div className="flex  flex-col gap-7">
                <h5 className="md:text-2xl text-xl font-medium  pb-2 text-zinc-300">
                  Long Term Transit
                </h5>
                <div className="flex  flex-col divide-y divide-zinc-400 dark:divide-zinc-500 border-zinc-400 dark:border-zinc-500 border">
                  {response.long?.map((item, i) => (
                    <TransitData key={i} number={i} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
          {active == "PDF Download" && <Test2 />}
        </div>
      ) : (
        <Loader2 />
      )}
    </>
  );
}

const tabs = {
  tab: ["daily transit"],
  premium: [],
  // PDF: ["PDF download"],
};

const url = {
  "daily transit": "natal_transits/daily",
  "sr aspects report": "solar_return_aspects_report",
};
