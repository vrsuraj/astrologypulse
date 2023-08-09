import {
  elements,
  hemisphere1,
  hemisphere2,
  modes,
  moonPhase,
} from "../reports/icon";
import { PlanetCard2 } from "../reports/planetCards";
import {
  AspectCard,
  FetureCard,
  PlanetHouse,
  ProfileDetailCard2,
} from "../reports/utils";

import { Loader2 } from "../../utils/loader";
import React, { useEffect, useState } from "react";
import { FetchApi } from "@/utils/fetchapi";
import Text from "@/src/component/text";
import Paragraph from "@/src/component/paragraph";

export default function NatalCalculator2({ userdata, handleForm, jsonData }) {
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

  return (
    <div className='px-5  py-14'>
      <div className='flex flex-col gap-10'>
        <div className='max-w-3xl text-center mx-auto flex flex-col gap-5'>
          {/* <DynamicText value={jsonData?.content?.title}>
            <h1 className='md:text-5xl text-4xl text-center text-highlight font-bold'>
              {jsonData?.content?.title}
            </h1>
             </DynamicText> */}
          <Text extra='md:text-5xl text-4xl  text-center text-highlight font-bold'>
            {jsonData.props.response_headline.value}
          </Text>

          <Paragraph extra='text-zinc-300 md:text-lg text-center'>
            {jsonData.props.response_content_text.value}
          </Paragraph>
        </div>

        {svg !== null ? (
          <div className='max-w-md mx-auto w-full px-5'>
            <img
              className='w-full bg-white rounded-full'
              src={svg}
              alt='Natal chart'
            />
          </div>
        ) : (
          <Loader2 />
        )}
      </div>

      {/* profile data */}
      <div className='py-14 mt-14 max-w-4xl mx-auto w-full border-t border-third'>
        <ProfileDetailCard2 userDetail={userdata} handleForm={handleForm} />
      </div>

      {Object.keys(detail).length !== 0 ? (
        <>
          {/* planet data */}
          <div className='pt-10'>
            <div className=' px-5 mx-auto  flex flex-col gap-16'>
              <h2 className='font-semibold text-center text-white md:text-4xl text-3xl'>
                Your Key Features
              </h2>
              <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 divide-y divide-primary max-w-5xl w-full mx-auto'>
                <FetureCard
                  imgbg='bg-[#0984e3]'
                  bg='bg-[#74b9ff]'
                  title={detail["moon_phase"].moon_phase_calc}
                  img={`/natal/${
                    moonPhase[detail["moon_phase"].moon_phase_id]
                  }.png`}
                  desc={detail["moon_phase"].moon_phase_description}
                />
                <FetureCard
                  bg='bg-[#fab1a0]'
                  imgbg='bg-[#e17055]'
                  img={`/natal/${
                    elements[detail["elements"].dominant_element_id]
                  }.png`}
                  desc={detail["elements"].description}
                />
                <FetureCard
                  bg='bg-[#55efc4]'
                  imgbg='bg-[#00b894]'
                  img={`/natal/${modes[detail["modes"].dominant_mode_id]}.png`}
                  desc={detail["modes"].description}
                />
                <FetureCard
                  bg='bg-[#ffeaa7]'
                  imgbg='bg-[#fdcb6e]'
                  img={`/natal/${
                    hemisphere1[detail["hemisphere"].east_west.id]
                  }.png`}
                  desc={detail["hemisphere"].east_west.description}
                />
                <FetureCard
                  bg='bg-[#a29bfe]'
                  imgbg='bg-[#6c5ce7]'
                  img={`/natal/${
                    hemisphere2[detail["hemisphere"].north_south.id]
                  }.png`}
                  desc={detail["hemisphere"].north_south.description}
                />
              </div>
            </div>
            <div className='md:py-20 py-14'>
              <PlanetCard2
                title='Planetary Position'
                desc='The planets represent energies and cosmic forces that can be utilized in various ways. They are like the actors in a play. Houses represent the different spheres of life where these energies can be and are brought to bear, for better or for worse. If the planets are the actors in a play, then the houses represent the various settings in which the actors play out their roles (signs).'
                response={detail.planets}
              />
            </div>
            <PlanetHouse
              title='House Cups'
              desc='The planets represent energies and cosmic forces that can be utilized in various ways. They are like the actors in a play. Houses represent the different spheres of life where these energies can be and are brought to bear, for better or for worse. If the planets are the actors in a play, then the houses represent the various settings in which the actors play out their roles (signs).'
              detail={detail.houses}
            />
            <div className='md:pb-20 pb-14'>
              <AspectCard
                title='Natal Aspect'
                desc=' The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative.'
                response={detail.aspects}
              />
            </div>
          </div>
        </>
      ) : (
        <Loader2 />
      )}
    </div>
  );
}
