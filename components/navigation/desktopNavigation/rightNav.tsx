import { IMenu, MenuProps } from "@/interface/Imenu";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function RightNav({
  data,
  handleSubMenu,
  color,
  active,
  social_link,
  authentication_links,
  handleMobileMenu,
}: MenuProps) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Change this value to adjust the height at which the navbar appears
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={` w-full ${
          !isFixed
            ? "md:py-3  border-transparent"
            : "md:py-1 fixed bg-zinc-900/50 border-secondary backdrop-filter backdrop-blur-md"
        }   py-5 z-20 border-b duration-150 ease-in px-5`}
      >
        <nav className="max-w-7xl flex justify-between mx-auto  w-full">
          <div className=" flex items-center justify-between w-full">
            <div className="w-full flex">
              <Link href="/">
                <img src={data?.logo} alt="logo" className="w-[150px]" />
              </Link>
            </div>
            <div className="flex gap-10">
              <ul className="md:flex gap-5   md:gap-10 hidden w-full">
                {data?.menu_links?.map((item: IMenu, i: number) => {
                  return (
                    <li
                      onMouseEnter={() => handleSubMenu(item.name)}
                      onMouseLeave={() => {
                        handleSubMenu("");
                      }}
                      key={i}
                      className="pt-6 cursor-pointer pb-5 flex gap-1 items-center relative   capitalize"
                    >
                      {item?.type == "LINK" ? (
                        <Link href={item?.value ? `/${item?.value}` : "#"}>
                          <p className={`${color.heading}`}>{item?.name}</p>
                        </Link>
                      ) : (
                        <p className={`${color.heading}`}>{item?.name}</p>
                      )}
                      {item?.type == "SUB_MENU" && (
                        <div className="mt-1">
                          <svg
                            id="Layer_1"
                            className={`${
                              active == item?.name ? "rotate-180" : ""
                            } duration-100 ease-in w-3.5 h-3.5 fill-zinc-300 hover:fill-current`}
                            version="1.1"
                            viewBox="0 0 512 512"
                          >
                            <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
                          </svg>
                        </div>
                      )}

                      {item?.type == "SUB_MENU" && item?.sub_menu && (
                        <ul
                          className={`${
                            active == item?.name
                              ? "opacity-1 visible"
                              : "opacity-0 invisible"
                          } z-40 flex  gap-2 flex-col absolute top-[100%] min-w-[200px] w-full bg-secondary shadow-md px-5 pt-3 pb-5`}
                        >
                          {item?.sub_menu.map((item: IMenu, i) => (
                            <li onClick={() => handleSubMenu("")} key={i}>
                              <Link
                                href={item?.value ? `/${item?.value}` : "#"}
                              >
                                <p
                                  className={`pt-2 pb-1 hover:border-highlight border-b border-transparent ${color.para} hover:text-highlight duration-100 ease-in max-w-max`}
                                >
                                  {item?.name}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-end items-center gap-5">
                {authentication_links && (
                  <div className="hidden md:flex items-center gap-5">
                    <Link href="/login" legacyBehavior>
                      <a className="py-2 text-zinc-300 hover:text-highlight duration-150 ease-in font-medium whitespace-nowrap">
                        Sign In
                      </a>
                    </Link>
                    <Link href="/signup" legacyBehavior>
                      <a className="bg-highlight hover:opacity-80 font-medium px-5 py-2 duration-150 ease-in rounded-md whitespace-nowrap">
                        Sign Up
                      </a>
                    </Link>
                  </div>
                )}
                <button
                  onClick={handleMobileMenu}
                  className="md:hidden block text-white"
                >
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
