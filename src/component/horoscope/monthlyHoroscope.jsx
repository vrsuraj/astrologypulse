export function MonthlyHoroscopeComponent({ data, style }) {
  const year = new Date().getFullYear();
  const str2 = data.sun_sign.charAt(0).toUpperCase() + data.sun_sign.slice(1);
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <h3
          className={`md:text-4xl  text-2xl sm:text-3xl text-center font-semibold text-white `}
        >
          {`${str2} for ${data.prediction_month} ${year} `}
        </h3>
        <div className="flex flex-col gap-5 mt-7">
          {data.prediction.map((item, i) => (
            <p className={`md:text-lg text-zinc-200`} key={i}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
