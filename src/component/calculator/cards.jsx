import Link from "next/link";

export function IconCard({ text, img, link, bg, breakword, desc }) {
  return (
    <Link href={link} legacyBehavior>
      <a
        style={{ background: bg }}
        className={` z-[1] overflow-hidden relative hover:scale-[1.04]  rounded group duration-100 ease-linear group md:p-7 p-5 flex flex-col  gap-5 justify-between cursor-pointer w-full`}
      >
        <div
          className={` flex flex-col gap-9 justify-between w-full items-center`}
        >
          <h6
            className={`font-semibold pr-2 text-2xl   text-white duration-[200ms] ease-in leading-7 ${
              breakword ? "break-all" : ""
            } text-center`}
          >
            {text}
          </h6>
          {img && (
            <div className=" z-[-1] top-[-50px] right-[-50px] md:top-[-50px] md:right-[-50px]">
              <img src={img} className="w-[150px] h-[100px]" />
            </div>
          )}
        </div>
        <p className="text-zinc-200 text-sm text-center">{desc}</p>
        {/* <button
          className={` ml-auto group-hover:text-bg_dark bg-white rounded-full p-2 sm:ml-auto  cursor-pointer  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5  w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
      </a>
    </Link>
  );
}

export function IconCard2({ text, img, link, bg, breakword, desc }) {
  return (
    <Link href={link} legacyBehavior>
      <a
        className={`${bg} rounded-[15px] group duration-100 ease-linear group md:p-7 p-5 flex flex-col  gap-5 justify-between cursor-pointer w-full hover:scale-[1.04] ease-in duration-100`}
      >
        <div className={`flex gap-9 justify-between w-full items-center`}>
          <h6
            className={`font-bold md:text-2xl text-xl  group-hover:text-bg_dark duration-[200ms] ease-in leading-7 ${
              breakword ? "break-all" : ""
            } text-left`}
          >
            {text}
          </h6>
          {/* <span
            dangerouslySetInnerHTML={{ __html: img }}
            className="w-[40px] text-light_bg group-hover:text-bg_dark  sm:w-[33px] sm:min-w-[33px] mt-[5px]"
          ></span> */}
        </div>
        {/* <p className="text-para group-hover:text-bg_dark_1">{desc}</p> */}
        <button
          className={` ml-auto group-hover:text-bg_dark bg-white rounded-full p-2 sm:ml-auto  cursor-pointer  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5  w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </a>
    </Link>
  );
}
