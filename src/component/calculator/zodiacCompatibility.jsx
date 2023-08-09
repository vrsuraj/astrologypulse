const { useRouter } = require("next/router");
const { useState } = require("react");

export default function ZodiacCompatibility() {
  const [zodiac, setzodiac] = useState({ male: "", female: "" });
  const [allsigns, setsigns] = useState({ male: false, female: false });
  const signs = [
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
  const router = useRouter();
  const handleSubmit = (e) => {
    if (zodiac.female !== "" && zodiac.male !== "") {
      const query = `${zodiac.female.toLowerCase()}-${zodiac.male.toLowerCase()}`;
      router.push(`/zodiac-compatibility?zodiac=${query}`);
    }
  };

  return (
    <div className="w-full z-[2]   bg-gradient-to-bl  rounded from-pink-400  to-rose-300   p-7">
      <div className="flex w-full flex-col gap-10">
        <h2 className="md:text-2xl font-semibold text-2xl text-center text-white">
          Find out your Zodiac compatibility and Love Intrest
        </h2>
        <div className="flex h-full flex-col items-center justify-center">
          <div className="flex items-center flex-col gap-2 text-white uppercase font-cera_medium">
            <div className="flex gap-5 items-center">
              <button
                onClick={() => setsigns({ male: true, female: false })}
                className={`${
                  zodiac.male !== ""
                    ? "bg-[#D56794] shadow-zinc-50"
                    : "hover:bg-[#D56794]  hover:shadow-zinc-50 hover:shadow-md"
                } bg-pink-100 bg-opacity-20 p-4 border max-w-max mx-auto  relative shadow-md cursor-pointer rounded-full`}
              >
                <img
                  className="w-[40px]"
                  src={`${
                    zodiac.male !== ""
                      ? `/zodiac/${zodiac.male.toLowerCase()}.svg`
                      : "/imgs/question2.svg"
                  }`}
                  alt={zodiac === "" ? "question" : zodiac}
                />
              </button>
              <span className="text-4xl font-cera_light -mt-4">+</span>
              <button
                onClick={() => setsigns({ male: false, female: true })}
                className={`${
                  zodiac.female !== ""
                    ? "bg-[#D56794] shadow-zinc-50"
                    : "hover:bg-[#D56794] hover:shadow-zinc-50 hover:shadow-md"
                } bg-pink-100 bg-opacity-20 p-4 border max-w-max mx-auto  relative shadow-md cursor-pointer rounded-full`}
              >
                <img
                  className="w-[40px]"
                  src={`${
                    zodiac.female !== ""
                      ? `/zodiac/${zodiac.female.toLowerCase()}.svg`
                      : "/imgs/question2.svg"
                  }`}
                  alt={zodiac === "" ? "question" : zodiac}
                />
              </button>
            </div>
          </div>
          {allsigns.male && (
            <div className="flex mt-5 flex-wrap gap-y-1 justify-center gap-x-3">
              {signs.map((item, i) => (
                <button
                  onClick={() => {
                    setzodiac((prev) => ({ ...prev, male: item }));
                    setsigns({ male: false, female: false });
                  }}
                  key={i}
                  className="underline hover:text-zinc-800 text-[15px] cursor-pointer text-white text-lg "
                >
                  {item}
                </button>
              ))}
            </div>
          )}
          {allsigns.female && (
            <div className="flex mt-5 flex-wrap gap-y-1 justify-center gap-x-3">
              {signs.map((item, i) => (
                <button
                  onClick={() => {
                    setzodiac((prev) => ({ ...prev, female: item }));
                    setsigns({ male: false, female: false });
                  }}
                  key={i}
                  className="underline hover:text-zinc-800 text-[15px] cursor-pointer text-white text-lg "
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        {allsigns.female === false && allsigns.male === false && (
          <button
            onClick={handleSubmit}
            type="submit"
            className={`${
              zodiac.female !== "" && zodiac.male !== ""
                ? "cursor-pointer"
                : "cursor-not-allowed"
            } capitalize    bg-white  text-zinc-800   duration-100 ease-in py-3 px-5 rounded hover:bg-zinc-800 hover:text-white`}
          >
            your Zodiac Compatibility Report
          </button>
        )}
      </div>
    </div>
  );
}
