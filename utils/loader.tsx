import style from "../styles/Home.module.css";
import style1 from "../styles/circlesLoading.module.css";

export function Loader2() {
  return (
    <div className="flex w-full   justify-center ">
      <div
        style={{
          width: "100px",
          height: "100px",
        }}
        className=" text-highlight"
      >
        <svg
          className="w-full h-full"
          fill="currentColor"
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
        >
          <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  );
}

export function LoginLoader() {
  return (
    <div className="w-full flex py-2 justify-center">
      <div className="stage">
        <div className={`${style["dot-pulse"]}`}></div>
      </div>
    </div>
  );
}

export default function CirclesLoader() {
  return (
    <div className="bg-zinc-700/80 z-[1] absolute h-full w-full flex p-10 flex-col justify-center gap-5 md:gap-10 text-center items-center">
      <div className={`max-w-[200px] h-[100px] ${style1.loader}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="md:text-2xl text-xl text-white">Shuffling Cards</p>
    </div>
  );
}
