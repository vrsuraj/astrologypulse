import React from "react";
import CommonForm from "./commonInput";
import { formInitialValue } from "@/utils/const/formInitialValue";

export default function FormWrapper({
  transit,
  solar,
  bgColor,
  userData,
  handleData,
  formLabel,
  label_status,
  email_status,
  disclaimer,
  children,
  style,
}) {
  const bg_color =
    style == "stylishform"
      ? "linear-gradient(0deg,rgba(22,4,8,.96),rgba(22,4,8,.96)),linear-gradient(100.41deg,#ff5b37 .52%,#ab0052 100.52%)"
      : bgColor;

  return (
    <>
      <style jsx>
        {`
          .blob {
            position: absolute;
            top: 0%;
            width: 600px;
            transform: translateX(-50%);
            left: 0;
            height: 600px;
            border-radius: 16px;
            animation: Hero_disco___tDkn -0.64s linear 4s infinite;
            background: conic-gradient(
              transparent 50deg,
              #ff4874 80deg,
              transparent 100deg
            );
            filter: blur(8px);
            inset: 0;
            z-index: -1;
            transform-origin: center;
          }
          @keyframes Hero_disco___tDkn {
            0% {
              transform: translateY(-25%) translateX(40%) rotate(0deg);
            }

            30% {
              transform: translateY(0) translateX(0) rotate(90deg) scaleX(0.7);
            }

            50% {
              transform: translateY(-25%) translateX(-40%) rotate(180deg);
            }

            70% {
              transform: translateY(0) translateX(0) rotate(270deg) scaleX(0.7);
            }

            to {
              transform: translateY(-25%) translateX(40%) rotate(1turn);
            }
          }
        `}
      </style>
      {style == "stylishform" ? (
        <div
          className="max-w-max w-full z-[1] overflow-hidden relative mx-auto p-[2px] "
          style={{
            boxShadow: "0 0 27px rgba(173,40,40,.48)",
            background:
              "linear-gradient(0deg,rgba(22,4,8,.5),rgba(22,4,8,.5)),linear-gradient(100.41deg,#ff5b37 .52%,#ab0052 100.52%)",
          }}
        >
          <div className="blob" />
          <div
            className={`${
              bg_color ? "" : "bg-third/50 "
            }  p-[2px] w-full max-w-max  rounded-md `}
          >
            <div className="max-w-lg w-full rounded-md ">
              <CommonForm
                bgColor={bg_color}
                solar={transit ? transit : false}
                transit={solar ? solar : false}
                handleData={handleData}
                formKeys={formLabel}
                label={label_status ? true : false}
                email_status={email_status ? email_status : false}
                initialvalue={formInitialValue()}
                userData={userData}
                disclaimer={disclaimer}
              >
                {children}
              </CommonForm>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-lg w-full border border-third overflow-hidden rounded-md ">
          <CommonForm
            bgColor={bg_color}
            solar={transit ? transit : false}
            transit={solar ? solar : false}
            handleData={handleData}
            formKeys={formLabel}
            label={label_status ? true : false}
            email_status={email_status ? email_status : false}
            initialvalue={formInitialValue()}
            userData={userData}
            disclaimer={disclaimer}
          >
            {children}
          </CommonForm>
        </div>
      )}
    </>
  );
}
