import { PlanetColor, typeTextColor } from "../../../../utils/const/colors";
import { Sign } from "../confirmBirthCard";

export function SynastryTable({ detail }) {
  return (
    <div className="w-full overflow-x-scroll noscrollbar">
      <table className="overflow-x-scroll min-w-[500px] max-w-[600px] mx-auto w-full border border-secondary/60  text-zinc-800 table">
        <thead className="">
          <tr className="bg-third font-semibold">
            <th>Your planet</th>
            <th>Aspects</th>
            <th>Partner planet</th>
            <th>Orb</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-secondary/60 text-zinc-300">
          {synastryTableFilter(detail).map((item, i) => (
            <tr key={i}>
              <td className="md:text-base text-sm">
                <Sign
                  size="text-[25px] pr-1"
                  color={`${PlanetColor[item.first.toLowerCase()]}`}
                  name={item.first}
                />{" "}
                {item.first}
              </td>
              <td className="md:text-base text-sm">
                <Sign
                  size="text-[25px] pr-1"
                  color={`${typeTextColor[item.type]}`}
                  name={item.type}
                />{" "}
                {item.type}
              </td>
              <td className="md:text-base text-sm">
                <Sign
                  size="text-[25px] pr-1"
                  color={`${PlanetColor[item.second.toLowerCase()]}`}
                  name={item.second}
                />{" "}
                {item.second}
              </td>
              <td className="md:text-base text-sm">{item.orb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function synastryTableFilter(data) {
  const d = data.filter((item) => Math.floor(item.orb) <= 5.0);
  return d;
}
