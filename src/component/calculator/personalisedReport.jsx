import { Loader2 } from "../utils/loader";

export function Personality_report_response({ userdata, handleForm }) {
  const [response, setResponse] = useState({});
  const [planets, setPlanets] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (userdata) {
      API();
    }
  }, [userdata]);

  const API = async () => {
    const ApiCall = await FetchApi({
      apiName: "personality_report/tropical",
      userData: userdata,
    });
    const ApiDetail = await FetchApi({
      apiName: "planets/tropical",
      userData: userdata,
    });
    setResponse(ApiCall);
    setPlanets(ApiDetail);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className="w-full flex flex-col md:gap-10 gap-5">
          <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
            Personality Report
          </h2>
          <div className="mt-5 dark:border-zinc-500 border-zinc-500 mx-auto w-full border-b">
           
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 ">
              <SignCalculator
                data={planets[0]}
                bg="bg-gradient-to-tl from-yellow-300 to-amber-200"
              />
              <SignCalculator
                bg="bg-gradient-to-tl from-blue-300 to-violet-200"
                data={planets[1]}
              />
              <SignCalculator
                bg="bg-gradient-to-tl from-rose-300 to-pink-200 md:col-span-1 col-span-2"
                data={planets[10]}
              />
            </div>

            <div className="px-5 mt-5 shadow shadow-zinc-100/20 py-3 rounded-md dark:bg-c_light_dark dark:border-transparent border-2 border-lime-500">
              <p className="dark:text-c_yellow md:text-lg font-medium">
                {response?.spiritual_lesson}
              </p>
            </div>
            {response?.report?.map((item, i) => (
              <p
                key={i}
                className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function SignCalculator({ data, bg, color }) {
  return (
    <>
      <div className={`${bg} p-5 rounded-md w-full`}>
        <h6 className="font-medium">
          {data.name} in {data.sign}
        </h6>
        <div className="flex  items-center gap-5">
          <Sign color={color} name={data.name} size="text-[30px]" />
          <span className={color}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </span>
          <Sign color={color} name={data.sign} size="text-[30px]" />
        </div>
        <p className="text-right">{getDMS(data.normDegree)}</p>
      </div>
    </>
  );
}
