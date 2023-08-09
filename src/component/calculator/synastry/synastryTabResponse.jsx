// import { ProfileDetailCard2 } from "../../cards/profileCard";
import {
  PlanetColor,
  SignBgColor,
  typeTextColor,
  typebgColor1,
} from "../../../../utils/const/colors";

import { FetchApi } from "../../../../utils/fetchAPI";
import { Loader2 } from "../../../../utils/loader";
import React, { useCallback, useEffect, useState } from "react";
import { SynastryTable } from "./synastryTable";
import { handleTab } from "../../calculator/natalChartResponse/natalCalculator";
import { TabUI } from "../../tab/tabUi1";
import { Sign, getDMS } from "../confirmBirthCard";
import { ProfileDetailCard2 } from "../../reports/utils";
import Text from "../../text";
import Paragraph from "../../paragraph";

export default function SynastryTabResponse({
  isPremium,
  userdata,
  pageData,
  handleForm,
}) {
  const [active, setActive] = useState("positions");
  const [response, setResponse] = useState({});
  const [svg, setsvg] = useState(null);
  const [tabResponse, setTabResponse] = useState({
    "synastry report": null,
  });

  useEffect(() => {
    if (userdata) {
      APiCall(userdata);
    }
  }, [userdata]);

  const APiCall = async (userdata) => {
    if (
      Object.keys(userdata.female).length > 0 &&
      Object.keys(userdata.male).length > 0
    ) {
      await CallApi(userdata?.female, userdata?.male, "synastry_wheel_chart");
      await CallApi(userdata?.female, userdata?.male, "synastry_horoscope");
    }
  };

  const CallApi = async (female, male, api) => {
    let maleDetail = {
      p_name: male.name,
      p_day: male.day,
      p_month: male.month,
      p_year: male.year,
      p_hour: male.hour,
      p_min: male.min,
      p_time: male.time,
      p_country: male.country,
      p_place: male.place,
      p_tzone: male.tzone,
      p_lat: male.lat,
      p_lon: male.lon,
    };
    let femaleDetail = {
      s_name: female.name,
      s_day: female.day,
      s_month: female.month,
      s_year: female.year,
      s_hour: female.hour,
      s_min: female.min,
      s_time: female.time,
      s_country: female.country,
      s_place: female.place,
      s_tzone: female.tzone,
      s_lat: female.lat,
      s_lon: female.lon,
      s_gender: "female",
    };

    const ApiDetail = await FetchApi({
      apiName: api,
      userData: {
        ...femaleDetail,
        theme_name: "WHEEL_CHART_THEME_UPASTROLOGY",
        ...maleDetail,
      },
    });
    if (ApiDetail) {
      if (api === "synastry_horoscope") {
        setResponse(ApiDetail);
      } else {
        setsvg(ApiDetail?.chart_url);
      }
    }
  };

  const handleActive = (val) => {
    if (url[val]) {
      tabCallback(url[val], val);
    }
    setActive(val);
  };

  const tabCallback = useCallback(
    async (tab, key) => {
      const requestData = RequestData(userdata);
      const ApiDetail = await FetchApi({
        apiName: tab,
        userData: {
          ...requestData?.female,
          ...requestData?.male,
        },
      });
      setTabResponse((prev) => ({ ...prev, [key]: ApiDetail }));
    },
    [userdata]
  );

  return (
    <div className="py-14">
      {Object.keys(userdata).length > 0 ? (
        <div className="flex flex-col gap-10 pb-20 px-5">
          <div className="max-w-3xl text-center mx-auto flex flex-col gap-5">
            <Text
              extra="!text-highlight !dark:text-hightlight"
              size={"4xl"}
              variant="h1"
              weight={"semibold"}
            >
              {pageData?.props?.response_headline?.value}
            </Text>
            <Paragraph size={"lg"}>
              {pageData?.props?.response_content_text?.value}
            </Paragraph>
          </div>
          <div className="max-w-5xl  gap-14 flex  flex-col items-center w-full mx-auto">
            <div className="md:mt-10 md:flex-row items-center gap-10 flex flex-col max-w-5xl mx-auto w-full">
              <div className="flex flex-col border-third border md:max-w-sm w-full">
                <ProfileDetailCard2
                  userDetail={userdata?.female}
                  handleForm={handleForm}
                />
                <div className="border-t dark:border-zinc-500 border-zinc-400">
                  <ProfileDetailCard2
                    hidebtn={true}
                    userDetail={userdata?.male}
                  />
                </div>
              </div>
              {svg !== null ? (
                <div className="max-w-md mx-auto w-full px-5">
                  <img
                    className="w-full bg-white rounded-full"
                    src={svg}
                    alt="Synastry chart"
                  />
                </div>
              ) : (
                <Loader2 />
              )}
            </div>
            {Object.keys(response).length > 0 ? (
              <div className="max-w-4xl w-full mx-auto mt-14">
                <TabUI
                  active={active}
                  handleTime={handleActive}
                  tabs={handleTab(isPremium, tabs)}
                />

                {active == "positions" && (
                  <div className=" w-full pt-10 max-w-3xl mx-auto ">
                    <h2 className="font-semibold md:text-4xl text-3xl mb-5  text-zinc-300">
                      Synastry Positions
                    </h2>
                    <div className="border border-b-0  border-secondary/60">
                      {response["first"].map((item, i) => (
                        <SynastryOneFeture
                          female={userdata?.female?.name}
                          male={userdata?.male?.name}
                          color={i}
                          data2={response["second"][i]}
                          key={i}
                          data={item}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {active == "aspects" && (
                  <div className="pt-10">
                    <SynastryAspectCard
                      title="Synastry Aspect"
                      desc=" The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
                      response={response.synastry.aspects}
                    />
                  </div>
                )}
                {active == "synastry report" && (
                  <div className="mt-10">
                    <SynastryHoroscope
                      female={userdata?.female?.name}
                      male={userdata?.male?.name}
                      data1={tabResponse[active]}
                    />
                  </div>
                )}
              </div>
            ) : (
              <Loader2 />
            )}
          </div>
        </div>
      ) : (
        <Loader2 />
      )}
    </div>
  );
}

export function reverseRequest(data, partner) {
  if (partner) {
    let maleDetail = {
      name: data.p_name,
      day: data.p_day,
      month: data.p_month,
      year: data.p_year,
      hour: data.p_hour,
      min: data.p_min,
      country: data.p_country,
      place: data.p_place,
      tzone: data.p_tzone,
      lat: data.p_lat,
      lon: data.p_lon,
    };
    return maleDetail;
  } else {
    let femaleDetail = {
      name: data.s_name,
      day: data.s_day,
      month: data.s_month,
      year: data.s_year,
      hour: data.s_hour,
      min: data.s_min,
      country: data.s_country,
      place: data.s_place,
      tzone: data.s_tzone,
      lat: data.s_lat,
      lon: data.s_lon,
    };
    return femaleDetail;
  }
}

export const SynastryOneFeture = (props) => {
  return (
    <div
      className={`flex  border-b border-secondary/60  px-5 py-5  items-center gap-3`}
    >
      <div className="md:flex-row  text-[15px] flex-wrap flex-col  text-zinc-300 flex gap-2">
        <div className="flex gap-2  text-zinc-300 items-center">
          {props.male}
          <Sign
            size="text-[25px] pr-1"
            color={PlanetColor[props.data.name.toLowerCase()]}
            name={props.data.name}
          />
          {props.data.name} is in{" "}
          <b
            style={{ color: PlanetColor[props.data.name.toLowerCase()] }}
            className={` font-medium  border-b border-current pb-1 text-zinc-800 ${
              SignBgColor[props.data.name.toLowerCase()]
            }`}
          >
            {getDMS(props.data.norm_degree)} {props.data.sign}
          </b>
        </div>
        <div className="flex gap-2 items-center flex-wrap text-zinc-300">
          and {props.female}
          <Sign
            size="text-[25px] pr-1"
            color={PlanetColor[props.data.name.toLowerCase()]}
            name={props.data2.name}
          />
          {props.data2.name} is in{" "}
          <b
            style={{ color: PlanetColor[props.data.name.toLowerCase()] }}
            className={`${
              SignBgColor[props.data.name.toLowerCase()]
            } font-medium  border-b border-current pb-1 text-zinc-800`}
          >
            {getDMS(props.data2.norm_degree)} {props.data2.sign}
          </b>
        </div>
      </div>
    </div>
  );
};

export function SynastryAspectCard({ response, title, desc }) {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10 w-full">
      <div className="w-full">
        <h2 className="font-semibold md:text-4xl text-3xl mb-5  pb-3 text-white ">
          {title}
        </h2>
        <p className=" text-text-zinc-800 p-5 bg-third text-sm sm:text-base leading-7 rounded-md ">
          {desc}
        </p>
      </div>
      <SynastryTable detail={response} />
    </div>
  );
}

export function SynastryHoroscope({ data1, male, female }) {
  return (
    <>
      {!data1 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data1?.map((item, i) => (
            <div
              className={`${
                typebgColor1[item.type.toLowerCase()]
              } gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span
                style={{ lineHeight: 1.2 }}
                className="bg-white flex-wrap shadow-lg px-3 py-2 md:py-1 gap-y-1 rounded-[15px] gap-x-2 font-semibold flex items-center"
              >
                {male}
                <Sign
                  name={item.first}
                  size="text-[25px]"
                  color={PlanetColor[item.first.toLowerCase()]}
                />
                {item.first}
                <Sign
                  name={item.type}
                  size="text-[25px]"
                  color={typeTextColor[item.type]}
                />
                {item.type} {female}
                <Sign
                  name={item.second}
                  size="text-[25px]"
                  color={PlanetColor[item.second.toLowerCase()]}
                />
                {item.second}
                <span className="text-xs py-[1px] text-sky-400 border border-current rounded-full px-2">
                  Orb {item.orb}
                </span>
              </span>
              {item.report.map((item, i) => (
                <p key={i} className="text-zinc-700 sm:text-base text-sm">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function RequestData(userdata) {
  let maleDetail = {
    p_name: userdata?.male?.name,
    p_day: userdata?.male?.day,
    p_month: userdata?.male?.month,
    p_year: userdata?.male?.year,
    p_hour: userdata?.male?.hour,
    p_min: userdata?.male?.min,
    p_time: userdata?.male?.time,
    p_country: userdata?.male?.country,
    p_place: userdata?.male?.place,
    p_tzone: userdata?.male?.tzone,
    p_lat: userdata?.male?.lat,
    p_lon: userdata?.male?.lon,
  };
  let femaleDetail = {
    s_name: userdata?.female?.name,
    s_day: userdata?.female?.day,
    s_month: userdata?.female?.month,
    s_year: userdata?.female?.year,
    s_hour: userdata?.female?.hour,
    s_min: userdata?.female?.min,
    s_time: userdata?.female?.time,
    s_country: userdata?.female?.country,
    s_place: userdata?.female?.place,
    s_tzone: userdata?.female?.tzone,
    s_lat: userdata?.female?.lat,
    s_lon: userdata?.female?.lon,
    s_gender: "female",
  };

  return { female: femaleDetail, male: maleDetail };
}

const tabs = {
  tab: ["positions", "aspects"],
  premium: ["synastry report"],
};

const url = {
  "synastry report": "synastry_horoscope_report",
};
