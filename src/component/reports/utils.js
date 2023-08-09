import { forwardRef } from "react";
import {
  colorPlanet,
  colortext,
  PlanetColor,
  SignBgColor,
  SignColor,
  typebgColor,
  typebgColor1,
  typeTextColor,
} from "../../../utils/const/colors";

import {
  ampmconvertor,
  convert24hoursto12hours,
  date,
  numberSufix,
  Time,
} from "../reports/dateUtils";

import { Loader2 } from "@/utils/loader";
import { getDMS, Sign } from "../calculator/confirmBirthCard";

export const FetureCard = (props) => {
  return (
    <div
      className={` mx-auto flex flex-col bg-third justify-between items-start gap-5 p-5`}
    >
      <div>
        <img src={props.img} alt={props.img_alt} className="w-[70px] mx-auto" />
      </div>
      <div className="flex flex-col gap-1 w-full my-auto text-text-zinc-800">
        {props.title && (
          <p style={{ lineHeight: 1.2 }} className="md:text-base">
            {props.title}
          </p>
        )}
        <p className="md:text-base ">{props.desc}</p>
      </div>
    </div>
  );
};

export function ProfileDetailCard2({
  userDetail,
  hidebtn,
  children,
  handleForm,
}) {
  return (
    <div className=" relative flex  flex-col gap-3 p-5 w-full  max-w-5xl mx-auto ">
      <h3 className="font-semibold md:border-transparent md:pb-0 pb-3 md:mb-0 mb-2 md:text-2xl text-xl text-white">
        {userDetail?.name}
      </h3>
      <p className=" flex items-center gap-3 text-zinc-300">
        <svg
          fill="currentColor"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M100 615 c0 -20 -5 -25 -25 -25 -14 0 -37 -11 -50 -25 l-25 -24 0
-246 0 -246 25 -24 24 -25 271 0 271 0 24 25 25 24 0 246 0 246 -25 24 c-13
14 -36 25 -50 25 -20 0 -25 5 -25 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25
l0 -25 -160 0 -160 0 0 25 c0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25z m0 -100
c0 -21 5 -25 30 -25 25 0 30 4 30 25 l0 25 160 0 160 0 0 -25 c0 -21 5 -25 30
-25 26 0 30 4 30 26 0 21 4 25 22 22 19 -2 24 -10 26 -40 l3 -38 -270 0 -271
0 0 33 c0 38 6 47 32 47 13 0 18 -7 18 -25z m488 -287 l-3 -173 -265 0 -265 0
-3 173 -2 172 270 0 270 0 -2 -172z"
            />
            <path
              d="M92 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
            />
            <path
              d="M192 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M292 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M392 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M492 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M92 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
            />
            <path
              d="M192 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M292 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M392 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M492 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M92 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
            />
            <path
              d="M192 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M292 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
            <path
              d="M392 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
            />
          </g>
        </svg>
        {date(userDetail?.month, userDetail?.day)}, {userDetail?.year} at{" "}
        {Time(convert24hoursto12hours(userDetail?.hour), userDetail?.min)}{" "}
        {ampmconvertor(userDetail?.hour)}
      </p>
      <p className=" flex gap-3  items-center text-zinc-300">
        <svg
          version="1.0"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 "
          viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path
              d="M223 622 c-109 -39 -178 -112 -210 -221 -29 -102 4 -228 82 -306 122
-121 328 -121 450 0 91 92 118 241 64 356 -69 146 -241 223 -386 171z m77 -86
l0 -64 -42 5 c-24 3 -45 7 -47 9 -7 6 31 103 42 108 40 16 47 8 47 -58z m84
58 c13 -5 53 -101 45 -108 -2 -2 -23 -6 -46 -9 l-43 -5 0 64 c0 66 5 73 44 58z
m-200 -62 c-7 -32 -25 -40 -52 -23 -10 6 -6 15 19 35 17 15 33 25 35 23 2 -2
1 -18 -2 -35z m320 -1 c18 -20 18 -20 -8 -27 -32 -8 -32 -8 -41 34 -6 31 -5
33 12 24 10 -6 27 -19 37 -31z m-369 -63 c20 -9 25 -18 25 -47 0 -74 -6 -81
-67 -81 l-55 0 7 36 c9 49 36 104 51 104 7 0 25 -5 39 -12z m438 -22 c8 -19
19 -50 22 -70 l7 -36 -55 0 c-61 0 -67 7 -67 81 0 27 5 38 23 47 37 18 53 13
70 -22z m-307 -6 l34 0 0 -50 0 -50 -55 0 c-61 0 -61 0 -48 73 4 28 10 37 20
33 8 -4 30 -6 49 -6z m178 -27 c12 -73 12 -73 -49 -73 l-55 0 0 49 0 50 43 4
c23 2 45 4 48 5 4 1 9 -15 13 -35z m-290 -135 c3 -13 6 -39 6 -59 0 -29 -5
-38 -25 -47 -14 -7 -32 -12 -39 -12 -15 0 -42 55 -51 104 l-7 36 55 0 c48 0
55 -3 61 -22z m146 -27 l0 -49 -47 -4 c-27 -3 -49 -4 -50 -4 -1 1 -5 25 -9 54
l-7 52 57 0 56 0 0 -49z m146 -3 c-4 -29 -8 -53 -9 -54 -1 0 -23 1 -49 4 l-48
4 0 49 0 49 56 0 57 0 -7 -52z m149 16 c-9 -49 -36 -104 -51 -104 -7 0 -25 5
-39 12 -20 9 -25 18 -25 47 0 74 6 81 67 81 l55 0 -7 -36z m-295 -159 c0 -55
-3 -65 -17 -65 -29 0 -42 13 -58 59 -20 59 -20 59 23 64 20 2 40 4 45 5 4 1 7
-27 7 -63z m129 49 c8 -7 -32 -103 -45 -108 -39 -15 -44 -8 -44 58 l0 64 43
-5 c23 -3 44 -7 46 -9z m-245 -46 c3 -17 4 -33 2 -35 -2 -2 -18 8 -35 23 -25
20 -29 29 -19 35 27 17 45 9 52 -23z m324 23 c10 -6 6 -15 -19 -35 -17 -15
-33 -25 -35 -23 -2 2 -1 18 2 35 7 32 25 40 52 23z"
            />
          </g>
        </svg>
        {userDetail?.place}
      </p>
      {children}

      {hidebtn ? (
        ""
      ) : (
        <button
          onClick={handleForm}
          className="text-sm flex flex-row-reverse gap-2 items-center px-3 md:px-5 py-2 border border-current  absolute text-third  right-3 md:right-5 top-0 md:top-5"
        >
          <span>EDIT</span>
          <svg viewBox="0 0 48 48" fill="currentColor" className="w-4 h-4">
            <path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function TransitProfileCard({ userDetail, handleForm }) {
  return (
    <div className="flex flex-col  gap-4">
      <h5 className="md:text-lg text-white uppercase font-cera_medium border-b border-secondary/50 pb-2  ">
        Your birth details
      </h5>
      <div className=" w-full relative  md:max-w-sm flex flex-col gap-4">
        {userDetail !== null && (
          <>
            <p className="font-cera_medium  text-zinc-300">
              {userDetail?.name}
            </p>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-3 text-zinc-300">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mt-[6px]  fill-current"
                  viewBox="0 0 64.000000 64.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M100 615 c0 -20 -5 -25 -25 -25 -14 0 -37 -11 -50 -25 l-25 -24 0
-246 0 -246 25 -24 24 -25 271 0 271 0 24 25 25 24 0 246 0 246 -25 24 c-13
14 -36 25 -50 25 -20 0 -25 5 -25 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25
l0 -25 -160 0 -160 0 0 25 c0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25z m0 -100
c0 -21 5 -25 30 -25 25 0 30 4 30 25 l0 25 160 0 160 0 0 -25 c0 -21 5 -25 30
-25 26 0 30 4 30 26 0 21 4 25 22 22 19 -2 24 -10 26 -40 l3 -38 -270 0 -271
0 0 33 c0 38 6 47 32 47 13 0 18 -7 18 -25z m488 -287 l-3 -173 -265 0 -265 0
-3 173 -2 172 270 0 270 0 -2 -172z"
                    />
                    <path
                      d="M92 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M492 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M92 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M492 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M92 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M192 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M292 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                    <path
                      d="M392 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                    />
                  </g>
                </svg>
                {date(userDetail?.month, userDetail?.day)}, {userDetail?.year}{" "}
                at{" "}
                {Time(
                  convert24hoursto12hours(userDetail?.hour),
                  userDetail?.min
                )}{" "}
                {ampmconvertor(userDetail?.hour)}
                {/*March 03, 2000 at 07:45 AM*/}
              </p>
              <p className=" flex gap-3  items-start text-zinc-300">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 64.000000 64.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M223 622 c-109 -39 -178 -112 -210 -221 -29 -102 4 -228 82 -306 122
-121 328 -121 450 0 91 92 118 241 64 356 -69 146 -241 223 -386 171z m77 -86
l0 -64 -42 5 c-24 3 -45 7 -47 9 -7 6 31 103 42 108 40 16 47 8 47 -58z m84
58 c13 -5 53 -101 45 -108 -2 -2 -23 -6 -46 -9 l-43 -5 0 64 c0 66 5 73 44 58z
m-200 -62 c-7 -32 -25 -40 -52 -23 -10 6 -6 15 19 35 17 15 33 25 35 23 2 -2
1 -18 -2 -35z m320 -1 c18 -20 18 -20 -8 -27 -32 -8 -32 -8 -41 34 -6 31 -5
33 12 24 10 -6 27 -19 37 -31z m-369 -63 c20 -9 25 -18 25 -47 0 -74 -6 -81
-67 -81 l-55 0 7 36 c9 49 36 104 51 104 7 0 25 -5 39 -12z m438 -22 c8 -19
19 -50 22 -70 l7 -36 -55 0 c-61 0 -67 7 -67 81 0 27 5 38 23 47 37 18 53 13
70 -22z m-307 -6 l34 0 0 -50 0 -50 -55 0 c-61 0 -61 0 -48 73 4 28 10 37 20
33 8 -4 30 -6 49 -6z m178 -27 c12 -73 12 -73 -49 -73 l-55 0 0 49 0 50 43 4
c23 2 45 4 48 5 4 1 9 -15 13 -35z m-290 -135 c3 -13 6 -39 6 -59 0 -29 -5
-38 -25 -47 -14 -7 -32 -12 -39 -12 -15 0 -42 55 -51 104 l-7 36 55 0 c48 0
55 -3 61 -22z m146 -27 l0 -49 -47 -4 c-27 -3 -49 -4 -50 -4 -1 1 -5 25 -9 54
l-7 52 57 0 56 0 0 -49z m146 -3 c-4 -29 -8 -53 -9 -54 -1 0 -23 1 -49 4 l-48
4 0 49 0 49 56 0 57 0 -7 -52z m149 16 c-9 -49 -36 -104 -51 -104 -7 0 -25 5
-39 12 -20 9 -25 18 -25 47 0 74 6 81 67 81 l55 0 -7 -36z m-295 -159 c0 -55
-3 -65 -17 -65 -29 0 -42 13 -58 59 -20 59 -20 59 23 64 20 2 40 4 45 5 4 1 7
-27 7 -63z m129 49 c8 -7 -32 -103 -45 -108 -39 -15 -44 -8 -44 58 l0 64 43
-5 c23 -3 44 -7 46 -9z m-245 -46 c3 -17 4 -33 2 -35 -2 -2 -18 8 -35 23 -25
20 -29 29 -19 35 27 17 45 9 52 -23z m324 23 c10 -6 6 -15 -19 -35 -17 -15
-33 -25 -35 -23 -2 2 -1 18 2 35 7 32 25 40 52 23z"
                    />
                  </g>
                </svg>

                {userDetail?.place}
              </p>
              <button
                onClick={handleForm}
                className="hover:bg-zinc-800 absolute top-0 right-0 hover:text-white  text-zinc-200  p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    type={"button"}
    ref={ref}
    onClick={onClick}
    className="border px-3  border-secondary/50 flex  py-2.5 rounded text-zinc-300  sm:text-base text-base gap-3 w-full  justify-between  items-center "
  >
    {value}
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 fill-current"
      viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M146 618 c-9 -12 -16 -28 -16 -35 0 -7 -10 -13 -22 -13 -30 -1 -55
-20 -68 -54 -13 -36 -13 -426 0 -462 20 -52 27 -53 280 -53 253 0 260 1 280
53 13 36 13 426 0 462 -13 33 -38 53 -66 54 -16 0 -23 8 -27 30 -11 55 -87 50
-87 -6 0 -19 -5 -24 -24 -24 -18 0 -25 7 -29 30 -11 55 -87 50 -87 -6 0 -19
-5 -24 -25 -24 -18 0 -25 5 -25 18 0 23 -30 52 -53 52 -9 0 -23 -10 -31 -22z
m54 -68 c0 -53 -2 -60 -20 -60 -17 0 -20 7 -20 53 0 56 4 67 27 67 9 0 13 -17
13 -60z m140 -1 c0 -52 -2 -60 -17 -57 -13 2 -19 15 -21 47 -4 52 2 71 23 71
12 0 15 -13 15 -61z m140 3 c0 -32 -3 -62 -7 -65 -13 -14 -33 17 -33 53 0 48
8 70 26 70 10 0 14 -15 14 -58z m80 -292 c0 -187 -1 -200 -19 -210 -12 -6
-101 -10 -221 -10 -120 0 -209 4 -221 10 -18 10 -19 23 -19 210 l0 200 240 0
240 0 0 -200z"
        />
        <path
          d="M120 345 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M230 345 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M330 345 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M440 345 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M120 255 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M230 256 c0 -35 1 -36 41 -36 39 0 40 1 37 33 -3 29 -6 32 -40 35
-37 3 -38 3 -38 -32z"
        />
        <path
          d="M337 283 c-4 -3 -7 -19 -7 -35 0 -26 3 -28 40 -28 39 0 40 1 40 35 0
33 -2 35 -33 35 -19 0 -37 -3 -40 -7z"
        />
        <path
          d="M440 255 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M120 155 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M230 155 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M330 155 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
        <path
          d="M440 155 c0 -34 1 -35 40 -35 39 0 40 1 40 35 0 34 -1 35 -40 35 -39
0 -40 -1 -40 -35z"
        />
      </g>
    </svg>
  </button>
));

export function AspectCard({ response, title, desc, hideborder }) {
  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col gap-10">
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
      <div className="grid grid-cols-1 border md:grid-cols-2  border-secondary/50 max-w-4xl mx-auto w-full text-zinc-300">
        {response.map((item, i) => (
          <div
            key={i}
            className={`${
              i % 2 == 0
                ? "border-r-0 border-l-0 border-b-0"
                : "border-b-0 md:border-l border-l-0 border-r-0"
            } border-secondary/50 border flex w-full text-center px-5 py-3.5 items-center `}
          >
            <div
              className={`text-[15px] overflow-x-auto text-left items-center flex gap-2`}
            >
              {item.sr && "SR"}{" "}
              <Sign
                size="text-[25px]"
                color={PlanetColor[item.aspecting_planet.toLowerCase()]}
                name={item.aspecting_planet}
              />{" "}
              {item.aspecting_planet}{" "}
              <Sign
                size="text-[25px]"
                color={typeTextColor[item.type]}
                name={item.type}
              />
              {item.type}
              <Sign
                size="text-[25px]"
                color={PlanetColor[item.aspected_planet.toLowerCase()]}
                name={item.aspected_planet}
              />
              {item.aspected_planet}{" "}
              <span className="text-xs whitespace-nowrap border border-current py-[2px] px-[5px] rounded-full  text-[#9DCDE4]/80">
                Orb {item.orb}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SynastryAspectCard({ response, title, desc }) {
  return (
    <div className="max-w-4xl mx-auto  flex flex-col gap-10">
      <div className="w-full">
        <h2 className="font-semibold md:text-4xl text-3xl mb-5 border-b pb-3 text-white border-secondary/50">
          {title}
        </h2>
        <p className=" text-primary p-5 bg-secondary text-sm sm:text-base leading-7 rounded-md ">
          {desc}
        </p>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-2  border-secondary/50 max-w-4xl mx-auto w-full text-zinc-300">
        {response.map((item, i) => (
          <div
            key={i}
            className={`${
              i % 2 == 0
                ? "border-r-0 border-l-0 border-b-0"
                : "border-b-0 md:border-l border-l-0 border-r-0"
            } border-secondary/50 border flex w-full text-center px-5 py-3.5 items-center `}
          >
            <div
              className={`text-[15px] overflow-x-auto text-left items-center flex gap-2`}
            >
              {item.sr && "SR"}{" "}
              <Sign
                size="text-[25px]"
                color={PlanetColor[item.first.toLowerCase()]}
                name={item.first}
              />{" "}
              {item.first}{" "}
              <Sign
                size="text-[25px]"
                color={typeTextColor[item.type]}
                name={item.type}
              />
              {item.type}
              <Sign
                size="text-[25px]"
                color={PlanetColor[item.second.toLowerCase()]}
                name={item.second}
              />
              {item.second}{" "}
              <span className="text-xs whitespace-nowrap border border-current py-[2px] px-[5px] rounded-full  text-[#9DCDE4]/80">
                Orb {item.orb}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const OneFeture2 = (props) => {
  return (
    <div
      className={`flex ${
        props.number % 2 == 0 ? "md:border-r-0 border-b-0" : "border-b-0"
      } border-secondary/50  border  px-5 py-4  items-center gap-3`}
    >
      <p className={` text-zinc-300 md:text-[16px]`}>
        {" "}
        {numberSufix(props.data.house)} House starts at{" "}
        <b
          style={{ color: `${colortext[props.number]}` }}
          className={`text-third border-current border-b`}
        >
          {getDMS(props.data.degree)}
        </b>{" "}
        {props.data.sign}
      </p>
    </div>
  );
};

export const PlanetHouse = ({ title, desc, detail, hideborder }) => {
  return (
    <section className="max-w-4xl mx-auto w-full  pb-20">
      <h2
        className={`${
          !hideborder ? "border-secondary/50 border-b pb-3" : ""
        } font-semibold md:text-4xl text-3xl mb-5  text-white`}
      >
        {title}
      </h2>
      <div className="flex justify-between  flex-col gap-10">
        <div className="w-full">
          <p className=" text-dark_bg p-5 bg-third text-sm sm:text-base leading-7 rounded-md ">
            {desc}
          </p>
        </div>
        <div className=" md:px-10">
          <div className="w-full border-b border-secondary/50 justify-between grid grid-cols-1 md:grid-cols-2">
            {detail.map((item, i) => (
              <OneFeture2 number={i} key={i} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export function CommonConfirm({ userDetail }) {
  return (
    <div className="w-full border-2 border-secondary p-5 md:p-7 rounded-[15px]">
      <h3 className="font-semibold text-white border-b border-current pb-2 md:text-xl text-lg">
        Confirm birth detail
      </h3>

      {userDetail?.female && (
        <div className=" text-zinc-300  w-full pb-5  gap-2 border-zinc-400  flex flex-col  mt-5">
          <span> {userDetail?.female?.name}</span>
          <span>
            {date(userDetail?.female?.month, userDetail?.female?.day)},{" "}
            {userDetail?.female?.year} at{" "}
            {Time(
              convert24hoursto12hours(userDetail?.female?.hour),
              userDetail?.female?.min
            )}{" "}
            {ampmconvertor(userDetail?.female?.hour)}
          </span>
          <span>{userDetail?.female?.place}</span>
        </div>
      )}
      {userDetail?.male && (
        <div className=" text-zinc-300  w-full pb-5  gap-2 border-zinc-400  flex flex-col  mt-5">
          <span> {userDetail?.male?.name}</span>
          <span>
            {date(userDetail?.male?.month, userDetail?.male?.day)},{" "}
            {userDetail?.male?.year} at{" "}
            {Time(
              convert24hoursto12hours(userDetail?.male?.hour),
              userDetail?.male?.min
            )}{" "}
            {ampmconvertor(userDetail?.male?.hour)}
          </span>
          <span>{userDetail?.male?.place}</span>
        </div>
      )}
      {userDetail?.name && (
        <div className=" text-zinc-300  w-full pb-5  gap-2 border-zinc-400  flex flex-col  mt-5">
          <span> {userDetail?.name}</span>
          <span>
            {date(userDetail?.month, userDetail?.day)}, {userDetail?.year} at{" "}
            {Time(convert24hoursto12hours(userDetail?.hour), userDetail?.min)}{" "}
            {ampmconvertor(userDetail?.hour)}
          </span>
          <span>{userDetail?.place}</span>
        </div>
      )}
    </div>
  );
}

export function General_ascendant_report({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div
          className={`bg-pink-300 gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
        >
          <span
            style={{ lineHeight: 1.2 }}
            className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center"
          >
            <Sign name={data.ascendant} color="text-zinc-800" />
            {data.ascendant} Rising
          </span>
          {divideParagrahIntoSubPara(data.report, 60).map((item, i) => (
            <p key={i} className="text-zinc-700 sm:text-base text-sm">
              {item}
            </p>
          ))}
          {/* <p className="text-zinc-700 sm:text-base text-sm">{data.report}</p> */}
        </div>
      )}
    </>
  );
}

export function House_cusps_report({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data.map((item, i) => (
            <div
              className={`${
                SignBgColor[item.planet_name.toLowerCase()]
              } gap-5  md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
                <Sign
                  size="text-[25px]"
                  name={item.planet_name}
                  color="text-zinc-800"
                />
                {item.planet_name} in {item.house}
                {date(item.house)} House
              </span>
              <p className="text-zinc-700 sm:text-base text-sm">
                {item.report}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function NatalAspectReport({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data.map((item, i) => (
            <div
              className={`${
                typebgColor1[item.type.toLowerCase()]
              } gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
                <Sign
                  size="text-[25px]"
                  name={item.aspecting_planet}
                  color={PlanetColor[item.aspecting_planet.toLowerCase()]}
                />
                {item.aspecting_planet}{" "}
                <Sign
                  size="text-[25px]"
                  name={item.type}
                  color={typeTextColor[item.type]}
                />{" "}
                {item.type}
                <Sign
                  size="text-[25px]"
                  name={item.aspected_planet}
                  color={PlanetColor[item.aspected_planet.toLowerCase()]}
                />{" "}
                {item.aspected_planet}
              </span>
              <p className="text-zinc-700 sm:text-base text-sm">
                {item.report}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function Natal_house_cusp_report({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data?.map((item, i) => (
            <div
              className={`${colorPlanet[i]} gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
                {item.house}
                {date(item.house)} House start at {getDMS(item.degree)}{" "}
                {item.sign}
              </span>
              <p className="text-zinc-700 sm:text-base text-sm">
                {item.report}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function Planet_sign_report({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data?.map((item, i) => (
            <div
              className={`${colorPlanet[i]} gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span
                style={{ lineHeight: 1.2 }}
                className="bg-white  shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center"
              >
                <Sign
                  size="text-[25px]"
                  name={item.planet_name}
                  color="text-zinc-800"
                />
                {item.planet_name} in{" "}
                <Sign
                  size="text-[25px]"
                  name={item.sign_name}
                  color="text-zinc-800"
                />
                {item.sign_name}
              </span>
              {divideParagrahIntoSubPara(item.report, 65).map((text, i) => (
                <p key={i} className="text-zinc-700 sm:text-base text-sm">
                  {text}
                </p>
              ))}
              {/* <p className="text-zinc-700 sm:text-base text-sm">
                {item.report}
              </p> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function divideParagrahIntoSubPara(para, maxWord) {
  const maxWords = maxWord; // maximum number of words per sub-paragraph

  const words = para.split(/\s+/);
  const subParagraphs = [];

  for (let i = 0; i < words.length; i += maxWords) {
    // loop through words in increments of maxWords
    subParagraphs.push(words.slice(i, i + maxWords).join(" "));
    // add a sub-paragraph containing maxWords words to the array
  }

  return subParagraphs;
}

export const subDays = (date, day) => {
  const d = date.getDate() - day;
  const m = date.getMonth();
  const y = date.getFullYear();
  return new Date(y, m, d);
};

export const addDays = (date, day) => {
  const d = date.getDate() + day;
  const m = date.getMonth();
  const y = date.getFullYear();
  return new Date(y, m, d);
};

export let month = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CallculatedateforTransit = (d) => {
  if (d !== undefined) {
    const s = d.split("-");
    return month[parseInt(s[0])] + " " + s[1] + ", " + s[2];
  } else {
    return "";
  }
};

export function TimeForTransit(d) {
  let a = d.split(" ");
  if (a.length > 1) {
    let b = CallculatedateforTransit1(a[0]);
    return [typeof b !== "undefined" ? b : "-", a[1]];
  }
  return "-";
}

export const CallculatedateforTransit1 = (d) => {
  const s = d.split("-");
  return month[parseInt(s[1])] + " " + s[2] + ", " + s[0];
};

export const SynastryOneFeture = (props) => {
  return (
    <div
      className={`flex  border-b border-secondary/50 px-5 py-5  items-center gap-3`}
    >
      <div className="md:flex-row text-[15px] flex-wrap flex-col  text-zinc-300 flex gap-2">
        <div className="flex gap-2 items-center">
          <Sign
            size="text-[25px] pr-1"
            color={PlanetColor[props.data.name.toLowerCase()]}
            name={props.data.name}
          />
          Your {props.data.name} is in{" "}
          <b className={` py-[2px]  text-secondary border-b border-current `}>
            {getDMS(props.data.norm_degree)} {props.data.sign}
          </b>
        </div>
        <div className="flex gap-2 items-center flex-wrap">
          and your partner's {props.data2.name} is in{" "}
          <b
            className={` font-cera_medium py-[2px]  text-secondary border-b border-current`}
          >
            {getDMS(props.data2.norm_degree)} {props.data2.sign}
          </b>
        </div>
      </div>
    </div>
  );
};

export function SolarReturnAspectReport({ data1 }) {
  return (
    <>
      {Object.keys(data1).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data1?.map((item, i) => (
            <div
              className={`${
                typebgColor1[item.type.toLocaleLowerCase()]
              } gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span
                style={{ lineHeight: 1.2 }}
                className="bg-white flex-wrap shadow-lg px-3 py-2 md:py-1 gap-y-1 rounded-[15px] gap-x-2 font-semibold flex items-center"
              >
                <Sign
                  name={item.solar_return_planet}
                  size="text-[25px]"
                  color={PlanetColor[item.solar_return_planet.toLowerCase()]}
                />
                SR {item.solar_return_planet}
                <Sign
                  name={item.type}
                  size="text-[25px]"
                  color={typeTextColor[item.type]}
                />
                {item.type}
                <Sign
                  name={item.natal_planet}
                  size="text-[25px]"
                  color={PlanetColor[item.solar_return_planet.toLowerCase()]}
                />
                N {item.natal_planet}
                <span className="text-xs py-[1px] text-sky-400 border border-current rounded-full px-2">
                  Orb {item.orb}
                </span>
              </span>
              {divideParagrahIntoSubPara(item.forecast, 60).map((item, i) => (
                <p key={i} className="text-zinc-700 sm:text-base text-sm">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function SolarReturnPlanetReport({ data1 }) {
  return (
    <>
      {Object.keys(data1).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data1?.map((item, i) => (
            <div
              className={`${colorPlanet[i]} gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
                <Sign
                  name={item.name}
                  size="text-[25px]"
                  color={PlanetColor[item.name.toLowerCase()]}
                />
                {item.name} in
                <Sign
                  name={item.sign}
                  size="text-[25px]"
                  color={SignColor[item.sign.toLowerCase()]}
                />
                {item.sign}
                {item.isRetro && (
                  <span className="text-sm text-zinc-500">(R)</span>
                )}
              </span>
              <div className="flex flex-col gap-3">
                {item.forecast.map((item, i) => (
                  <p key={i} className="text-zinc-700 sm:text-base text-sm">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export const TransitData = (props) => {
  return (
    <div
      className={` px-5 py-2 text-zinc-300  flex md:text-[16px] w-full  items-center gap-3`}
    >
      <Sign
        size="text-[27px] md:text-[33px] md:mt-[3px] mt-[-3px]"
        color={` ${typeTextColor[props.data.aspect_type]} text-secondary`}
        name={props.data.aspect_type}
      />
      <span className="leading-8">
        Transit {props.data.transit_planet} {props.data.aspect_type} Natal{" "}
        {props.data.natal_planet} start{" "}
        <b
          className={`${typebgColor[props.data.aspect_type]} mx-1 font-normal ${
            typeTextColor[props.data.aspect_type]
          } text-center  border-current`}
        >
          {TimeForTransit(props.data.exact_time)[0]
            ? TimeForTransit(props.data.exact_time)[0]
            : "-"}
        </b>{" "}
        at{" "}
        <b
          className={`${typebgColor[props.data.aspect_type]} ${
            typeTextColor[props.data.aspect_type]
          } text-center  mx-1 font-normal`}
        >
          {TimeForTransit(props.data.exact_time)[1]
            ? TimeForTransit(props.data.exact_time)[1]
            : "-"}
        </b>{" "}
      </span>
    </div>
  );
};
