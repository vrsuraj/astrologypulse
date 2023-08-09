import {
  ProfileDetailCard2,
  SynastryAspectCard,
  SynastryOneFeture,
} from "../reports/utils";
import { DynamicText, Paragraph } from "../utils/text";
import { Loader2 } from "../utils/loader";
import React, { useEffect, useState } from "react";
import { FetchApi } from "../utils/fetchapi";

export default function SynastryResponse({ handleForm, userdata, jsonData }) {
  const [detail, setdetail] = useState({});
  const [svg, setsvg] = useState();

  useEffect(() => {
    if (Object.keys(userdata).length > 0) {
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
        setdetail(ApiDetail);
      } else {
        setsvg(ApiDetail?.chart_url);
      }
    }
  };
  return (
    <div className="px-5 md:py-14 py-14">
      <div className="flex flex-col gap-10">
        <div className="max-w-3xl mx-auto  text-center flex flex-col gap-5">
          <DynamicText value={jsonData?.content?.title}>
            <h1 className="md:text-5xl text-4xl text-center text-highlight font-bold">
              {jsonData?.content?.title}
            </h1>
          </DynamicText>
          <Paragraph
            style="text-zinc-300 md:text-lg text-center"
            text={jsonData?.content?.description}
          />
        </div>

        {svg !== null ? (
          <div className="max-w-md mx-auto w-full">
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
      <div className="pb-14 pt-10 mt-14 max-w-4xl mx-auto w-full border-t border-third/50">
        <ProfileDetailCard2
          userDetail={userdata?.male}
          handleForm={handleForm}
        />
        <ProfileDetailCard2 hidebtn={true} userDetail={userdata?.female} />
      </div>

      {Object.keys(detail).length > 0 ? (
        <div>
          <div className="max-w-4xl mx-auto pb-20">
            <h2 className="font-semibold md:text-4xl text-3xl mb-5 border-b pb-3 text-white border-third/50">
              Synastry Positions
            </h2>
            <div className="border border-b-0 border-third/50">
              {detail["first"].map((item, i) => (
                <SynastryOneFeture
                  color={i}
                  data2={detail["second"][i]}
                  key={i}
                  data={item}
                />
              ))}
            </div>
          </div>
          <div className="md:pb-20 pb-14">
            <SynastryAspectCard
              title="Synastry Aspect"
              desc=" The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
              response={detail?.synastry?.aspects}
            />
          </div>
        </div>
      ) : (
        <Loader2 />
      )}
    </div>
  );
}
