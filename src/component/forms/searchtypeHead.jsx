import React, { useRef, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { useRouter } from "next/router";
import Link from "next/link";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { DBEntry } from "../utils/fetchapi";
import { getBlogHero } from "../blog/utils";

export default function SearchAsyncTypehead() {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const typeahead = useRef(null);
  const [focus, setFocus] = useState(false);

  const handleSearch = (query) => {
    setIsLoading(true);
    DBEntry({
      url: `public/post/search/${query}`,
      method: "GET",
    }).then((item) => {
      if (Array.isArray(item?.response)) {
        const options = item?.response?.map((item) => ({
          post_name: item.post_name,
          post_hero: item.post_hero,
          category: item?.category,
          post_route: item?.post_route,
        }));
        setOptions(options);
        setIsLoading(false);
      } else {
        seterror("no match found");
      }
    });
  };

  const handleFocus = () => {
    setFocus((prev) => !prev);
  };

  const filterBy = () => true;
  return (
    <>
      {focus && (
        <div
          onClick={handleFocus}
          className="h-screen left-0 top-0 w-full bg-zinc-900/50 overflow-y-hidden z-[1]  fixed"
        ></div>
      )}
      <div
        onBlur={handleFocus}
        onFocus={handleFocus}
        className={`bg-white relative z-[2] md:shadow-none shadow-md`}
      >
        <div className="w-full max-w-7xl md:text-xl text-lg mx-auto px-3 md:px-5 py-3  flex items-center">
          <label htmlFor="async-user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </label>
          <div className="flex-grow mx-auto  w-full ">
            <AsyncTypeahead
              ref={typeahead}
              filterBy={filterBy}
              id="async-user"
              isLoading={isLoading}
              labelKey="post_name"
              minLength={3}
              // onChange={handdleChange}
              onSearch={handleSearch}
              options={options}
              placeholder="Search Blogs"
              renderMenuItemChildren={(option, props) => (
                <Link href={`/blog/${option?.post_route}`}>
                  <div className="bg-white relative z-40 w-full border-b-[1px] border-gray-200/80">
                    <div className="flex group hover:bg-zinc-50 cursor-pointer px-5 py-3 md:py-5 gap-3 items-center">
                      <div className="w-full flex items-center gap-3 text-zinc-800 text-base cursor-pointer">
                        <div className="md:block hidden md:w-[100px] w-[100px]">
                          <img
                            className="w-full h-full"
                            src={getBlogHero(option?.post_hero)?.post_hero}
                            alt={getBlogHero(option?.post_hero)?.alt_text}
                          />
                        </div>
                        <div>
                          {option?.category && (
                            <span className="text-secondary text-sm ">
                              {option?.category}
                            </span>
                          )}
                          <h6 className="md:text-lg  group-hover:underline mt-[2px]">
                            {option.post_name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
