import { signs } from "@/jsondata/const";
import { useRouter } from "next/router";
import style from "../../../styles/Home.module.css";
export function TabUI({ tabs, active, handleTime }) {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="flex pb-2 w-full  overflow-x-auto border-secondary/40  whitespace-nowrap border-b">
        {tabs.map((item, i) => (
          <button
            onClick={() => handleTime(item)}
            key={i}
            className={` cursor-pointer rounded-md px-4 py-1 ${
              active.toLowerCase() === item.toLowerCase()
                ? "bg-third text-zinc-800"
                : "text-white"
            }`}
          >
            <h6 className="cursor-pointer text-[15px] md:text-base capitalize">
              {item}
            </h6>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function HoroscopeTab({ tabs, active, handleTime }) {
  return (
    <div className="flex overflow-scroll np-scrollbar text-zinc-300 whitespace-nowrap gap-5 ">
      {tabs.map((item, i) => (
        <button
          onClick={() => handleTime(item.link)}
          key={i}
          className={`border-2 rounded-[10px] duration-100 ease-in cursor-pointer px-5 py-2  ${
            active.toLowerCase() === item.link.toLowerCase()
              ? "bg-white text-zinc-800"
              : "border-secondary hover:border-white"
          }`}
        >
          <h6 className="cursor-pointer capitalize text-[17px]">{item.name}</h6>
        </button>
      ))}
    </div>
  );
}

export function HoroscopeTopBar({ sign, time, handleSign }) {
  const HandleChange = (e) => {
    const { value } = e.target;
    handleSign(value);
  };

  const timeObject = {
    daily: "Today",
    next: "Tommorrow",
    monthly: "Monthly",
    yesterday: "previous",
  };
  const router = useRouter();

  return (
    <div className="bg-[#0d0d0d]/50  py-5 px-5">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <div className="flex  gap-3 items-center">
            <button
              style={{ lineHeight: 1 }}
              onClick={() => router.push("/horoscope")}
              className=" rounded-full bg-white text-zinc-800  p-[2px]  flex gap-1 items-center "
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <h6 className="text-highlight text-sm  uppercase ">
              {timeObject[time.toLowerCase()]}
            </h6>
          </div>
          <div className="flex gap-5 items-center">
            <h2 className="font-semibold text-white capitalize md:text-2xl text-xl">
              {sign} Horoscope
            </h2>
            <select
              onChange={HandleChange}
              value={sign}
              className={`border ${style.select2} capitalize dark:border-zinc-500 border-zinc-500 text-white bg-transparent rounded p-2`}
            >
              <option disabled>Change Sign</option>
              {signs.map((item, i) => (
                <option
                  key={i}
                  value={item.toLowerCase()}
                  className="capitalize"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
