import { PlanetColor } from "@/utils/const/colors";
import { zodiacSigns } from "../../../jsondata/const";

export function ConfirmBirthCard({ title, desc, response, hideborder }) {
  return (
    <div className="w-full  flex max-w-4xl mx-auto flex-col gap-10">
      <div className="w-full">
        <h2
          className={`${
            !hideborder ? "border-secondary/50 border-b pb-3" : ""
          } font-semibold md:text-4xl text-3xl mb-5  text-white`}
        >
          {title}
        </h2>
        <p className=" text-dark_bg p-5 bg-third text-sm sm:text-base leading-7 rounded-md ">
          {desc}
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-y-4 gap-x-10 md:px-10">
        {response.map((item, i) => (
          <div
            key={i}
            className={`flex gap-3 text-zinc-300 rounded items-center text-lg`}
          >
            <Sign
              name={item.name}
              color={PlanetColor[item.name.toLowerCase()]}
            />
            {item.name} in {getDMS(item.norm_degree)} {item.sign}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Sign({ name, color, size }) {
  const c = color || "var(--third)";
  return (
    <span
      style={{ color: color }}
      className={`${c} ${size ? size : "text-[30px]"} font-zodiac`}
    >
      {name ? zodiacSigns[name.split(" ").join("").toLowerCase()] : ""}
    </span>
  );
}

export function getDMS(de) {
  let deg = fix30(de);
  let d = Math.floor(deg);
  let minfloat = (deg - d) * 60;
  let m = Math.floor(minfloat);
  let secfloat = (minfloat - m) * 60;
  let s = Math.round(secfloat);
  if (s === 60) {
    m++;
    s = 0;
  }
  if (m === 60) {
    d++;
    m = 0;
  }
  return d + "°" + m + "′";
}

function fix30(d) {
  let num = d;
  while (num > 30) {
    num -= 30;
  }
  return num;
}
