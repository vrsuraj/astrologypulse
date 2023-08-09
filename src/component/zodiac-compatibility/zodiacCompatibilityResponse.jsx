import Button from "../button/index2";

export function ZodiacPartnerCompatibilityResponse({ data, handleCallback }) {
  return (
    <div className="max-w-5xl flex md:flex-row flex-col gap-24 items-start mx-auto">
      <div className="w-full flex flex-col gap-10 sm:gap-14">
        <h2
          style={{ lineHeight: 1.3 }}
          className="text-center md:text-4xl text-3xl font-bold text-white "
        >
          {data.your_sign} Love Relationship with {data?.your_partner_sign}
        </h2>
        <div className="flex md:max-w-md w-full rounded-[20px] p-8 md:p-10 bg-gradient-to-tl from-pink-500 to-red-300 items-center gap-10 mx-auto">
          <span className="w-full sm:w-[100px]">
            <img
              className="w-10/12 sm:w-full"
              src={`/zodiac/${data?.your_sign.toLowerCase()}.svg`}
              alt={`${data?.your_sign}`}
            />
          </span>
          <div className="bg-white p-5 flex justify-center items-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full">
            <h6 className="md:text-2xl text-xl font-bold text-zinc-800">
              {data?.compatibility_percentage}%
            </h6>
          </div>
          {/* <DynamicPieChart /> */}
          <span className="w-full sm:w-[100px]">
            <img
              className="w-10/12 sm:w-full"
              src={`/zodiac/${data?.your_partner_sign.toLowerCase()}.svg`}
              alt={`${data?.your_partner_sign}`}
            />
          </span>
        </div>

        {/* <CircularProgressBar value={data1.compatibility_percentage} max={100} /> */}
        <p className="md:text-lg text-zinc-300 ">{data.compatibility_report}</p>
        <Button
          color="white"
          shape="rounded"
          extra="whitespace-nowrap mx-auto max-w-[200px]"
          callback={() => {
            handleCallback();
          }}
        >
          Try again
        </Button>
      </div>
      <div className="w-full max-w-xs"></div>
    </div>
  );
}
