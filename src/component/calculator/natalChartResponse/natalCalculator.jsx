import { ProfileDetailCard2 } from "../profileDetailCard";
import {
  elements,
  hemisphere1,
  hemisphere2,
  modes,
  moonPhase,
} from "../../reports/icon";

import { ConfirmBirthCard } from "../../../component/calculator/confirmBirthCard";
import {
  AspectCard,
  FetureCard,
  General_ascendant_report,
  House_cusps_report,
  NatalAspectReport,
  Natal_house_cusp_report,
  PlanetHouse,
  Planet_sign_report,
} from "../../reports/utils";

import { TabUI } from "../../tab/tabUi1";
import { FetchApi } from "../../../../utils/fetchAPI";
import { Loader2 } from "../../../../utils/loader";

import React, { useCallback, useEffect, useState } from "react";
import Text from "../../text";
import Paragraph from "../../paragraph";

export default function NatalTabCalculator({
  isPremium,
  userdata,
  pageData,
  handleForm,
}) {
  const [tabResponse, setTabResponse] = useState({
    "rising sign": {},
    "planet sign": {},
    "house cusps report": {},
    "aspects report": {},
  });

  const [active, setActive] = useState("key points");
  const [detail, setdetail] = useState({});
  const [svg, setsvg] = useState(null);

  useEffect(() => {
    if (Object.keys(userdata).length > 0) {
      API(userdata);
    }
  }, [userdata]);

  const API = async (userdata) => {
    const ApiCall = await FetchApi({
      apiName: "natal_wheel_chart",
      userData: {
        ...userdata,
        theme_name: "WHEEL_CHART_THEME_UPASTROLOGY",
      },
    });

    const ApiDetail = await FetchApi({
      apiName: "natal_chart_interpretation",
      userData: userdata,
    });
    if (ApiCall.status) {
      setdetail(ApiDetail);
      setsvg(ApiCall.chart_url);
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
      const ApiCall = await FetchApi({
        apiName: tab,
        userData: userdata,
      });
      setTabResponse((prev) => ({ ...prev, [key]: ApiCall }));
    },
    [userdata]
  );

  return (
    <>
      {Object.keys(userdata).length > 0 ? (
        <div className="flex flex-col gap-10 pb-20 px-5">
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            <Text
              extra="!text-highlight !dark:text-hightlight"
              size={"4xl"}
              variant="h1"
              weight={"semibold"}
            >
              {pageData?.response_headline?.value}
            </Text>
            <Paragraph size={"lg"}>
              {pageData?.response_content_text?.value}
            </Paragraph>
          </div>
          <div className="max-w-5xl  gap-14 flex md:flex-row flex-col items-center w-full mx-auto">
            <div className="max-w-sm w-full mx-auto">
              <ProfileDetailCard2
                handleForm={() => handleForm("natal")}
                userDetail={userdata}
              />
            </div>
            {svg !== null ? (
              <div className="max-w-md mx-auto w-full px-5">
                <img
                  className="w-full bg-white rounded-full"
                  src={svg}
                  alt="Natal chart"
                />
              </div>
            ) : (
              <Loader2 />
            )}
          </div>

          <div className="max-w-4xl md:mt-10 mx-auto w-full">
            <TabUI
              handleTime={handleActive}
              active={active}
              tabs={handleTab(isPremium, tabs)}
            />
            {Object.keys(detail).length !== 0 ? (
              <>
                <div className="pt-10">
                  {active === "key points" && (
                    <div className=" mx-auto  flex flex-col gap-16">
                      <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 max-w-5xl w-full mx-auto">
                        <FetureCard
                          bg="bg-[#FDE68A]"
                          title={detail["moon_phase"].moon_phase_calc}
                          img={`/natal/${
                            moonPhase[detail["moon_phase"].moon_phase_id]
                          }.png`}
                          desc={detail["moon_phase"].moon_phase_description}
                        />
                        <FetureCard
                          bg="bg-[#fab1a0]"
                          img={`/natal/${
                            elements[detail["elements"].dominant_element_id]
                          }.png`}
                          desc={detail["elements"].description}
                        />
                        <FetureCard
                          bg="bg-[#55efc4]"
                          img={`/natal/${
                            modes[detail["modes"].dominant_mode_id]
                          }.png`}
                          desc={detail["modes"].description}
                        />
                        <FetureCard
                          bg="bg-sky-300"
                          img={`/natal/${
                            hemisphere1[detail["hemisphere"].east_west.id]
                          }.png`}
                          desc={detail["hemisphere"].east_west.description}
                        />
                        <FetureCard
                          bg="bg-[#a29bfe]"
                          img={`/natal/${
                            hemisphere2[detail["hemisphere"].north_south.id]
                          }.png`}
                          desc={detail["hemisphere"].north_south.description}
                        />
                      </div>
                    </div>
                  )}
                  <>
                    {active === "planets" && (
                      <ConfirmBirthCard
                        hideborder={true}
                        title="Planetary Position"
                        desc="The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
                        response={detail.planets}
                      />
                    )}
                  </>
                  {active === "houses" && (
                    <PlanetHouse
                      hideborder={true}
                      title="House Cups"
                      desc=" The planets represent energies and cosmic forces that can be utilized
          in various ways. They are like the actors in a play. Houses represent
          the different spheres of life where these energies can be and are
          brought to bear, for better or for worse. If the planets are the
          actors in a play, then the houses represent the various settings in
          which the actors play out their roles (signs)."
                      detail={detail.houses}
                    />
                  )}
                  {active === "aspects" && (
                    <div className="md:pb-20 pb-14">
                      <AspectCard
                        hideborder={true}
                        title="Natal Aspect"
                        desc=" The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
                        response={detail.aspects}
                      />
                    </div>
                  )}
                  {active == "rising sign" && (
                    <General_ascendant_report data={tabResponse[active]} />
                  )}
                  {active == "house cusps report" && (
                    <House_cusps_report data={tabResponse[active]} />
                  )}
                  {active == "aspects report" && (
                    <NatalAspectReport data={tabResponse[active]} />
                  )}
                  {active == "house cusp report" && (
                    <Natal_house_cusp_report data={tabResponse[active]} />
                  )}
                  {active == "planet sign" && (
                    <Planet_sign_report data={tabResponse[active]} />
                  )}
                  {/* {active == "PDF download" && <PDFDownload />} */}
                </div>
              </>
            ) : (
              <Loader2 />
            )}
          </div>
        </div>
      ) : (
        <Loader2 />
      )}
    </>
  );
}

export function handleTab(isPremium, tabs) {
  let tab = tabs.tab;
  if (isPremium) {
    tab = [...tab, ...tabs.premium];
  }
  // if (isPDF) {
  //   tab = [...tab, ...tabs.PDF];
  // }
  return tab;
}

const tabs = {
  tab: ["key points", "planets", "houses", "aspects"],
  premium: [
    "rising sign",
    "planet sign",
    "house cusps report",
    "aspects report",
  ],
  // PDF: ["PDF download"],
};

const url = {
  "planet sign": "planet_sign_report/tropical",
  "rising sign": "general_ascendant_report/tropical",
  "house cusps report": "house_cusps_report/tropical",
  "aspects report": "natal_aspects_report",
  "house cusp report": "natal_house_cusp_report",
};
