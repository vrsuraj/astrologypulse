import React from "react";
import { svgIcon } from "../../../utils/const/svgIcon";
import { useRouter } from "next/router";
import { SignBgColor1 } from "../../../utils/const/colors";
import { Sign } from "../calculator/confirmBirthCard";

export const signs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export default function HoroscopeCards() {
  return (
    <div className="md:pb-24 py-14  gap-10">
      <div className="flex flex-col max-w-6xl mx-auto px-5  gap-14 md:gap-20">
        <div className="flex flex-col gap-5 max-w-3xl text-center mx-auto">
          <h2 className="font-semibold md:text-5xl dark:text-white text-4xl">
            Horoscopes
          </h2>
          {/* <p className="md:text-lg dark:text-zinc-300">
            Unpack the mysteries of the universe with our horoscopes! Our cosmic
            guidance will help you prepare for what's to come.
          </p> */}
        </div>
        <div className="flex md:flex-row items-center flex-col gap-14">
          {/* <div className="grid md:grid-cols-4 grid-cols-3 gap-6 md:gap-x-10 md:gap-y-5 w-full">
            {signs.map((s, i) => (
              <DailySign2 key={i} name={s}></DailySign2>
            ))}
          </div> */}
          <div className="w-full">
            <div className="w-full mx-auto max-w-4xl grid sm:grid-cols-3 grid-cols-2 md:gap-7 gap-6">
              <DifferentHoroscopeCard
                link="/horoscope/aries-daily-horoscope"
                bg="bg-[#FDE68A]"
                name="Daily Horoscope"
              />

              <DifferentHoroscopeCard
                link="/horoscope/aries-monthly-horoscope"
                bg="bg-[#61D4E7]"
                name="Monthly Horoscope"
              />
              <DifferentHoroscopeCard
                extra="sm:col-span-1 col-span-2"
                link="/zodiac-compatibility"
                bg="bg-[#F993AB]"
                name="Zodiac Compatibility"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const DailySign2 = ({ name, extra, hidename }) => {
  const router = useRouter();
  return (
    <div
      onClick={() =>
        router.push(`/horoscope/${name.toLowerCase()}-daily-horoscope`)
      }
      className={`flex ${extra} flex-col gap-2 items-center w-full`}
    >
      <div className="w-full h-full rounded-full cursor-pointer p-[2px] bg-gradient-to-tr dark:from-rose-400 dark:to-orange-300 dark:via-[#2C2B46] from-rose-400 via-white to-orange-400 ">
        <div className="h-full group dark:bg-[#2C2B46] bg-white duration-150 ease-in hover:bg-gradient-to-tr from-rose-400 to-orange-400 rounded-full flex flex-col w-full justify-center p-2  sm:p-5 item-center ">
          <Sign
            name={name}
            color="dark:text-white group-hover:text-white text-zinc-800 mx-auto"
            size="text-[25px] sm:text-[35px] md:text-[40px]"
          />
        </div>
      </div>
      {!hidename && (
        <p className="md:text-lg dark:text-zinc-100">
          {name.charAt(0).toUpperCase() + name.substring(1)}
        </p>
      )}
    </div>
  );
};

export function CommonCardPage({ data }) {
  return (
    <>
      {data ? (
        <div className="flex flex-col gap-6 items-center pb-10">
          <HoroscopeCard
            bg="bg-[#FFCDD2]"
            img={svgIcon.love}
            head={`Love`}
            desc={data.prediction.personal_life}
          />
          <HoroscopeCard
            bg="bg-[#BBDEFB]"
            img={svgIcon.carrer}
            head={`Career`}
            desc={data.prediction.profession}
          />
          <HoroscopeCard
            bg="bg-[#C8E6C9]"
            img={svgIcon.health}
            head={`Health`}
            desc={data.prediction.health}
          />
          <HoroscopeCard
            bg="bg-[#FFECB3]"
            img={svgIcon.smily}
            head={`Emotion`}
            desc={data.prediction.emotions}
          />
          <HoroscopeCard
            bg="bg-[#C5CAE9]"
            img={svgIcon.travel}
            head={`Travel`}
            desc={data.prediction.travel}
          />
          <HoroscopeCard
            bg="bg-[#FFCCBC]"
            img={svgIcon.luck}
            head={`Luck`}
            desc={data.prediction.luck}
          />
        </div>
      ) : (
        <h3 className="text-2xl">No data to show</h3>
      )}
    </>
  );
}

export function HoroscopeCard(props) {
  return (
    <div
      className={`w-full ${props.bg} flex flex-col gap-5 rounded-[10px]  md:p-6 p-5 text-left`}
    >
      <h2 className="text-lg font-semibold bg-white/40 border border-white/40 shadow-md shadow-zinc-50/30 max-w-max rounded-[10px] py-1.5 px-3  text-zinc-800 flex gap-2 items-center">
        {props.img && (
          <span
            dangerouslySetInnerHTML={{ __html: props.img }}
            className="w-6 h-6 text-zinc-800"
          ></span>
        )}
        {props.head}
      </h2>
      <div className="flex gap-5 md:gap-8 items-start">
        <p className="md:text-lg w-full text-zinc-700">{props.desc}</p>
      </div>
    </div>
  );
}

export function DifferentHoroscopeCard({ name, link, bg, extra }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className={`flex ${extra} flex-col gap-5 cursor-pointer hover:scale-[1.04] duration-100 ease-in md:p-6 p-5 rounded-[15px] ${bg}`}
    >
      <h3 className="md:text-[1.5rem] font-medium text-lg sm:text-xl">
        {name}
      </h3>
      <div className="flex gap-3 items-center">
        <h6 className="font-nunito sm:text-base text-sm text-zinc-700">
          Read More
        </h6>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export function YesterdayHoroscopeCard({ data }) {
  return (
    <div
      className={` gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
    >
      <div className="flex flex-col gap-5">
        <span className="max-w-max bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
          <Sign size="text-[25px]" name={data.sun_sign} color="text-zinc-800" />
          {data.sun_sign}
        </span>
        <p>{data.prediction}</p>
      </div>
    </div>
  );
}
// ${
//         SignBgColor1[data.sun_sign.toLowerCase()]
//       }
