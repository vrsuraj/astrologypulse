import React, { useRef, useState } from "react";
import { a, useTransition } from "@react-spring/web";
import Link from "next/link";
import { Trail3 } from "../../animation/trail";
import { svgIcon } from "../../../utils/const/svgIcon";
export default function MobileMenu1({
  data,
  handleMobileMenu,
  mobile_menu_active,
  authentication_links,
  active,
  handleSubMenu,
  social_link,
  color,
}) {
  const ref = useRef(null);

  const transitions = useTransition(mobile_menu_active, {
    from: { opacity: 0, x: "50px" },
    enter: { opacity: 1, x: "0" },
    leave: { opacity: 0.2, x: "50" },
    config: { duration: 70 },
  });

  return (
    <>
      {transitions((style, i) => (
        <a.div
          key={i}
          style={style}
          ref={ref}
          className={`fixed z-40 top-0 w-full max-w-lg right-0 bg-primary overflow-y-scroll h-full transition-all ease-in duration-[300ms]`}
        >
          <div className="flex justify-between  py-5 px-5">
            <Link legacyBehavior href="/">
              <a onClick={handleMobileMenu}>
                <img src={data?.logo} alt="logo" className="w-44" />
              </a>
            </Link>
            <button onClick={handleMobileMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between flex-col h-[90%] pb-10 pt-5">
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col divide-y divide-secondary w-full">
                <Trail3 open={mobile_menu_active} delay={300}>
                  {data?.menu_links.map((item, i) => (
                    <li
                      title={item.name}
                      onClick={handleSubMenu}
                      key={i}
                      className="relative py-3 px-5  capitalize"
                    >
                      {item?.type == "SUB_MENU" && item.sub_menu ? (
                        <p
                          onClick={() =>
                            item?.type != "SUB_MENU" ? handleMobileMenu() : ""
                          }
                          className={`${color?.heading}  hover:text-highlight flex cursor-pointer justify-between items-center gap-2 text-xl  pb-1 duration-100 ease-linear`}
                        >
                          {item.name}
                          {item?.type == "SUB_MENU" && item.sub_menu ? (
                            <span
                              className={`${
                                mobile_menu_active == item.name
                                  ? "rotate-180"
                                  : ""
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </p>
                      ) : (
                        <Link href={item?.value ? `${item?.value}` : "#"}>
                          <p
                            onClick={() =>
                              item?.type != "SUB_MENU" ? handleMobileMenu() : ""
                            }
                            className={`${color?.heading} hover:text-highlight flex justify-between items-center gap-2 text-xl  pb-1 duration-100 ease-linear`}
                          >
                            {item.name}
                            {item?.type == "sub_menu" && item.sub_menu ? (
                              <span
                                className={`${
                                  active == item.name ? "rotate-180" : ""
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            ) : (
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </p>
                        </Link>
                      )}

                      {item?.type == "SUB_MENU" && item.sub_menu && (
                        <ul
                          className={`${
                            active == item.name ? "flex" : "hidden"
                          }   gap-2 flex-col  w-full bg-secondary shadow-md px-5 py-3 mt-2`}
                        >
                          {item.sub_menu.map((item, i) => (
                            <li key={i}>
                              <Link href={item?.value ? `${item?.value}` : "#"}>
                                <p
                                  onClick={handleMobileMenu}
                                  className={`flex ${color.para} hover:text-highlight items-center gap-2 pt-2 pb-1  hover:translate-x-2  duration-100 ease-in max-w-max`}
                                >
                                  {item.name}
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="w-5 h-5"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </Trail3>
              </ul>
              {authentication_links && (
                <div className="flex gap-5 px-5">
                  <>
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
                  </>
                </div>
              )}
            </div>

            {/* social links */}
            <div className="flex flex-col gap-5 items-center justify-center text-center ">
              <h6 className={`md:text-lg ${color?.para}`}>Follow Us On</h6>
              <div className="flex gap-5 items-center justify-center px-5">
                {data.social_links.map((item, i) => (
                  <a
                    onClick={handleMobileMenu}
                    key={i}
                    href={item?.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-secondary hover:text-third duration-100 ease-in"
                    dangerouslySetInnerHTML={{ __html: svgIcon[item.name] }}
                  ></a>
                ))}
              </div>
            </div>
          </div>
        </a.div>
      ))}
    </>
  );
}
