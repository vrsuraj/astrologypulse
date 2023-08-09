import { useTransition, a } from "@react-spring/web";
import React, { useState } from "react";

export default function Response({ data }) {
  const [activeTab, setActiveTab] = useState("past");

  const tab = ["Past", "Present", "Future"];
  const handleTab = (val) => {
    setActiveTab(val.toLowerCase());
    scrollLeft(activeTab, val.toLowerCase());
  };
  const transitions = useTransition(new Array(data[activeTab.toLowerCase()]), {
    from: { opacity: 0, transform: "translate(5%,0)" },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-5%,0)" },
    exitBeforeEnter: true,
    config: { duration: 150, mass: 1, tension: 210, friction: 20 },
  });

  function scrollLeft(activeTab, clickedTab) {
    const scrollContainer = document.querySelector(".scroll-container");
    const tabs = ["past", "present", "future"];
    const lastIndex = tabs.length - 1;
    const activeIndex = tabs.indexOf(activeTab);
    const clickedIndex = tabs.indexOf(clickedTab);

    if (clickedTab === activeTab) {
      return "No Change";
    } else if (
      (clickedIndex === activeIndex + 1 && clickedIndex !== lastIndex) ||
      (clickedIndex === 0 && activeIndex === lastIndex)
    ) {
      scrollContainer.scrollLeft += 100;
      //   return "Left to Right";
    } else if (
      (clickedIndex === activeIndex - 1 && activeIndex !== lastIndex) ||
      (clickedIndex === lastIndex && activeIndex === 0)
    ) {
      scrollContainer.scrollLeft -= 100;
      return "Right to Left";
    }
    // Adjust the scroll amount as needed
  }

  const number = {
    past: "1,4,7",
    present: "2,5,8",
    future: "3,6,9",
  };

  return (
    <>
      <style jsx>
        {`
          .scroll-container {
            width: 100%;
            overflow-x: scroll;
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className=" min-h-screen w-full">
        <div className=" overflow-hidden flex flex-col gap-10 md:rounded-[20px] max-w-4xl mx-auto w-full">
          <div className="overflow-x-scroll  scroll-container scroll-smooth">
            <div className="grid  scroll-container overflow-x-scroll min-w-[500px]  grid-cols-3 divide-x divide-zinc-500">
              {tab.map((item, i) => {
                return (
                  <div
                    onClick={() => handleTab(item)}
                    key={i}
                    className=" text-center"
                  >
                    <h3
                      className={`${
                        activeTab == item.toLowerCase()
                          ? "text-white"
                          : "text-zinc-500 hover:text-white"
                      }  whitespace-nowrap text-4xl sm:text-5xl duration-150 ease-in cursor-pointer`}
                    >
                      {item}
                    </h3>
                    <div
                      className={`${
                        activeTab == item.toLowerCase()
                          ? "text-yellow-500"
                          : "text-zinc-500"
                      }  md:text-xl text-lg`}
                    >
                      ( {number[item.toLowerCase()]} )
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {transitions((style, item) => {
            return (
              <div>
                <a.div className="divide-y divide-zinc-500" style={style}>
                  {item.map((data, i) => (
                    <div key={i} className="divide-y divide-zinc-500">
                      <TarotResponseCard data={data} />
                    </div>
                  ))}
                </a.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function TarotResponseCard({ data }) {
  return (
    <div className="flex py-14 md:flex-row flex-col md:gap-14 gap-10 items-center ">
      <div className="w-full max-w-[250px] flex justify-center">
        <img
          src={`/tarot/${data.id}.png`}
          className="w-[130px] md:w-full"
          alt="tarot"
        />
      </div>
      <div className="w-full">
        <h2 className="font-semibold md:text-2xl text-xl mb-5 text-zinc-100 ">
          {data.name}
        </h2>
        <p className=" text-para flex flex-col gap-2 text-zinc-300 ">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

export function getFilterObject(arr, id, key) {
  const object = arr.filter((item) => {
    return item.id == id;
  });

  if (object.length > 0) {
    return {
      name: object[0]["name"],
      desc: object[0][key],
      id: object[0]["id"],
    };
  } else return { name: "", desc: "", id: "" };
}
