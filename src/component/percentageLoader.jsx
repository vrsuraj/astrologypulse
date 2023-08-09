import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function PercentageLoadingAnimation({ handleCallBack }) {
  const [percentage, setPercentage] = useState(0);

  const progressBarStyles = useSpring({
    width: `${percentage}%`,
    background: `linear-gradient(to right, rgb(187, 247, 208), rgb(74, 222, 128), rgb(34, 197, 94))`,
    config: { duration: 100 },
  });

  const incrementPercentage = () => {
    setPercentage((prevPercentage) => {
      const newPercentage = prevPercentage + 1;
      return newPercentage > 100 ? 100 : newPercentage;
    });
  };

  React.useEffect(() => {
    if (percentage < 100) {
      const timeout = setTimeout(incrementPercentage, 20);
      return () => clearTimeout(timeout);
    } else {
      handleCallBack(true);
    }
  }, [percentage]);

  return (
    <>
      <style jsx>
        {`
          .loading-animation {
            width: 100%;
            position: relative;
            height: 10px;
            background-color: #eee;
            border-radius: 10px;
            overflow: hidden;
            z-index: 1;
          }
        `}
      </style>
      <div className="flex justify-center flex-col max-w-sm w-full gap-2 items-center">
        <div className="md:text-2xl text-xl text-transparent bg-clip-text bg-gradient-to-tr from-green-200 to-yellow-200 font-semibold">
          {percentage}%
        </div>

        <div className="loading-animation ">
          <animated.div
            className="progress-bars"
            style={progressBarStyles}
          ></animated.div>
        </div>
      </div>
    </>
  );
}
