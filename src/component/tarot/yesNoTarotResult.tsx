import React from "react";

interface IResponse {
  id: number;
  name: string;
  value: string;
  description: string;
}

export default function YesNoTarotResult({
  response,
  handleReset,
}: {
  response: IResponse;
  handleReset: () => void;
}) {
  return (
    <>
      <div className="max-w-5xl mx-auto flex flex-col md:gap-24 gap-10  md:px-5">
        <div className="flex w-full justify-center relative gap-5 items-center">
          {/* <Button url="/" /> */}
          <h1 className="md:text-5xl md:pl-0 pl-10 text-center text-highlight text-4xl  font-bold">
            YES/NO TAROT READING
          </h1>
        </div>
        <div className="flex md:flex-row flex-col md:gap-14 gap-10 items-center ">
          <div className="w-full max-w-[200px] md:max-w-[250px]">
            <img
              src={`/MajorCards/${response?.id}.png`}
              className="w-full"
              alt="tarot"
            />
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-white md:text-2xl text-xl mb-5">
              {response.name}
            </h2>
            <div className="max-w-max mb-4 bg-gradient-to-br from-highlight  rounded-full p-[1px]">
              <p className="text-white bg-primary capitalize rounded-full px-4 py-1">
                {response.value}
              </p>
            </div>

            <p className=" text-zinc-300  flex flex-col gap-2">
              {response.description}
            </p>
            <button
              onClick={handleReset}
              className="mt-5   rounded-md border border-transparent bg-white  hover:border-third"
            >
              <h6 className=" font-para px-10 py-2">Pick up another card</h6>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
