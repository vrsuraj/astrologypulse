"use client";

import Paragraph from "../../../src/component/paragraph";
import Text from "../../../src/component/text";
import React, { useEffect, useState } from "react";
import NumerologyForm from "../../../src/component/forms/numerologyForm";
import useForm from "../../../context/useFormValue";
import { findComponent } from "@/utils/arrayFunc";
import { FetchApi } from "@/utils/fetchAPI";
import ImageText from "../image-text";
export function getLayout(variant: string) {
  switch (variant) {
    case "HeadlineContentImageRight":
    case "ContentImageRight":
    case "HeadlineContentButtonImageRight":
      return " md:flex-row";

    case "ContentImageLeft":
    case "HeadlineContentImageLeft":
    case "HeadlineContentButtonImageLeft":
      return "md:flex-row-reverse";
  }
}

export default function NumerologySection({ data }: { data: any }) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const [components, setComponents] = useState(data.components);
  const customLayout = getLayout(data?.currentVariant);
  const defaultFormData = useForm();
  const [userData, setUserData] = useState({});
  const [response, setResponse] = useState({});

  const handlePassData = async (data: any) => {
    setUserData(data);
    handleData(data);
    await fetchdata(data);
  };
  useEffect(() => {
    if (defaultFormData["numerology"]) {
      setUserData(defaultFormData["numerology"]);
      fetchdata(defaultFormData["numerology"]);
    }
  }, [defaultFormData["numerology"]]);

  const handleData = (data: object) => {
    defaultFormData["adduserdata"]({ numerology: data });
  };

  const fetchdata = async (e: any) => {
    const ApiCall = await FetchApi({
      apiName: "numerological_numbers",
      userData: e,
    });
    setResponse(ApiCall ? ApiCall : null);
    // setLoader(false);
  };

  const headlineComponent = findComponent("HEADLINE", components);
  const contentComponent = findComponent("CONTENT", components);
  const numerologyComponent = findComponent("NUMEROLOGY_FORM", components);

  const handleUserData = () => {
    defaultFormData["deleteuserdata"]({ ["numerology"]: null });
    setResponse({});
    setUserData({});
  };

  return (
    <div className="md:py-20 py-14">
      {Object.keys(userData).length == 0 ? (
        <>
          <div className="px-5 md:pb-14 pb-10 md:flex-row flex flex-col max-w-6xl mx-auto items-center md:gap-14 gap-10 ">
            <div className={` px-5 flex flex-col gap-5`}>
              {/* <DynamicText value={jsonData?.sections[0].content?.title}>
                <h1
                  style={{ lineHeight: 1.1 }}
                  dangerouslySetInnerHTML={{
                    __html: jsonData?.sections[0].content?.title,
                  }}
                  className='md:text-6xl   text-5xl text-highlight font-semibold'></h1>
              </DynamicText>
              <Paragraph
                text={jsonData?.sections[0].content?.description}
                extra='max-w-2xl text-zinc-300 md:text-lg mx-auto'
                          /> */}

              {allowedComponents.includes("HEADLINE") && headlineComponent && (
                <Text
                  variant={headlineComponent.props.variant.value}
                  weight={headlineComponent.props.weight.value}
                  color={"red"}
                >
                  {headlineComponent.props.content.value}
                </Text>
              )}

              {allowedComponents.includes("CONTENT") && contentComponent && (
                <Paragraph
                  extra="text-center"
                  weight={contentComponent.props.weight.value}
                  color={contentComponent.props?.color?.value}
                >
                  {contentComponent.props.content.value}
                </Paragraph>
              )}
            </div>
            <NumerologyForm
              formKeys={numerologyComponent}
              passdata={handlePassData}
            />
          </div>
          <ImageText data={splitSection[0]}></ImageText>
        </>
      ) : (
        <>
          {/* {Object.keys(response).length > 0 ? (
            <div className='px-5 flex flex-col gap-14 w-full'>
              <div className='flex max-w-3xl mx-auto border-b border-secondary  w-full pb-10 gap-6  items-start'>
                <div className='flex flex-col gap-4'>
                  <h6 className=' text-zinc-200 md:text-2xl'>
                    {response?.name}
                  </h6>
                  <p className='text-zinc-200 text-para md:text-lg'>
                    {Callculatedate(response?.birth_date)}
                  </p>
                </div>
                <button
                  onClick={handleUserData}
                  className='duration-100 ease-in hover:bg-white hover:text-zinc-800  text-third p-1 rounded-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                  </svg>
                </button>
              </div>
              <div className='max-w-3xl w-full mx-auto flex flex-col gap-5 '>
                <FavorableTable
                  bg='bg-gradient-to-r from-blue-400/80 to-blue-300'
                  name='Life path number'
                  color='bg-gradient-to-r from-blue-200 to-blue-300'
                  desc={`Your life path number is ${response?.lifepath_number}. It represents both the situation and opportunities that are attracted to you as the result of your actions.`}
                  value={response?.lifepath_number}
                />
                <FavorableTable
                  name='Personality Number'
                  bg='bg-gradient-to-r from-pink-400/80 to-pink-300'
                  color='bg-gradient-to-r from-pink-200 to-pink-300'
                  desc={`Your Personality number also called as Persona is ${response?.personality_number}. Personality Number is compliment to the inner aspect of the self.`}
                  value={response?.personality_number}
                />
                <FavorableTable
                  name='Expression Number'
                  bg='bg-gradient-to-r from-purple-400/80 to-purple-300'
                  color='bg-gradient-to-r from-purple-200 to-purple-300'
                  desc={`Your Expression Number or Total Name Number is ${response?.expression_number}. It describes the magic that you bring into the world.`}
                  value={response?.expression_number}
                />
                <FavorableTable
                  name='Challenge Numbers'
                  color='bg-gradient-to-r from-red-200 to-red-300'
                  value={response?.challenge_numbers.join(",")}
                />
                <FavorableTable
                  name=' Soul Urge Number '
                  bg='bg-gradient-to-r from-yellow-400/80 to-yellow-300'
                  color='bg-gradient-to-r from-yellow-100 to-yellow-300'
                  value={response?.subconscious_self_number}
                />
                <FavorableTable
                  bg='bg-gradient-to-r from-indigo-400/80 to-indigo-300'
                  name='Subconscious Self Number'
                  color='bg-gradient-to-r from-indigo-200 to-indigo-300'
                  value={response?.subconscious_self_number}
                />
              </div>
            </div>
          ) : (
            <div className='mt-[100px]'>
              <Loader2 />
            </div>
          )} */}
        </>
      )}
    </div>
  );
}

export function FavorableTable(props: any) {
  const color = props.color || "";
  return (
    <div
      className={`${color} w-full relative overflow-hidden z-[1] flex rounded-[10px] md:p-10 p-5 text-left justify-between text-sm`}
    >
      <div className="flex flex-col gap-4">
        <h6 className=" font-semibold text-gray-800 md:text-2xl text-xl w-full">
          {props.name}
        </h6>
        {props.desc && (
          <p
            className="md:text-lg max-w-xl"
            dangerouslySetInnerHTML={{ __html: props.desc }}
          ></p>
        )}
      </div>
      <div
        className={`${props.bg} z-[-1] absolute w-[150px] rounded-full h-[150px] right-[-60px] top-[-60px] sm:right-[-30px] sm:top-[-30px]`}
      ></div>
      <p className="text-center md:text-4xl text-2xl sm:text-3xl text-gray-800">
        {props.value}
      </p>
    </div>
  );
}

export const Callculatedate = (d: string) => {
  const s = d.split("-");
  return monthobj2[s[1]] + " " + s[2] + ", " + s[0];
};

export let monthobj2: any = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

// const jsonData = {
//   sections: [
//     {
//       component_id: "numerology_calculator",
//       config: {
//         label_status: "0",
//         bg_color: "",
//         input_style: "bottom_border",
//         form_label: {
//           name: "Enter Your Full Name",
//           button_config: {
//             button_text: "Calculate Your Numerology",
//             target_tab: "0",
//             target_page: "",
//             button_route: "",
//           },
//         },
//       },
//       content: {
//         description:
//           "Unveil the secrets of the universe and reveal your true identity and hidden meanings of the world. Numerology provides predictions and helps realize potential, like a secret roadmap to life.",
//         title: "Numerology Predictions",
//       },
//     },
//     {
//       config: {
//         layout: "right",
//       },
//       content: {
//         title: "About The significance of Numerology",
//         image_url: "https://upastrology.com/numerology/n4.svg",
//         description:
//           "Numerology is the science of systematically reading the numbers and extracting conclusions out of it. The prehistoric study of Numerology is still used to comprehend the personality traits and relationship compatibility. The numerology uses the complete date of birth of the person to determine the character of a person. The talent that naturally belongs to you and others that you may acquire with time can be calculated with the help of numerology. The destiny number in Numerology can also be calculated with the help of a person's name. A lot can be unveiled by the numerological study of an individual's birth date and full name, like happenings in the near future, suitable profession, etc. The numerological science is also used to compare the compatibility of two people by matching their destiny numbers.",
//       },
//     },
//   ],
// };
const splitSection = [
  {
    type: "SPLIT",
    id: "split-section",
    label: "Split Section 1",
    config: {
      style: {
        type: "ContentImageRight",
        value: "",
      },
    },
    variants: {
      ContentImageRight: {
        label: "Default",
        value: "ContentImageRight",
        allowedComponents: ["CONTENT", "IMAGE"],
      },
      ContentImageLeft: {
        label: "Content Image Left",
        value: "ContentImageLeft",
        allowedComponents: ["CONTENT", "IMAGE"],
      },
      HeadlineContentImageLeft: {
        label: "Headline Content Image Left",
        value: "HeadlineContentImageLeft",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE"],
      },
      HeadlineContentImageRight: {
        label: "Headline Content Image Right",
        value: "HeadlineContentImageRight",
        allowedComponents: ["HEADLINE", "PARAGRAPH", "IMAGE"],
      },
      HeadlineContentButtonImageLeft: {
        label: "Headline Content Button Image Left",
        value: "HeadlineContentButtonImageLeft",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE", "BUTTON"],
      },
      HeadlineContentButtonImageRight: {
        label: "Headline Content Button Image Right",
        value: "HeadlineContentButtonImageRight",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE", "BUTTON"],
      },
    },
    currentVariant: "ContentImageRight",
    components: [
      {
        id: 1,
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "<p>At first glance, a birth chart just looks like a big 12-slice pie chart. Those 12 individual sections are called “Houses.” Each House represents one of the 12 different zodiac signs, as well as a significant part of our life. For example, the zodiac sign Libra rules the 7th House of connections and long-term partnerships. Visually a chart is a 360 degree wheel divided into 12 sections. Each section is named after the famous constellations or zodiac signs that we are all familiar with (i.e Aries, Leo, Gemini, …). Your planets are plotted onto the wheel to see which sign they fall into to. For example, to calculate your Sun sign we look at which zodiac constellation the Sun was sitting in at the time of your birth.</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",

            hidden: false,
          },
        },
      },
      {
        id: 2,
        type: "IMAGE",
        label: "Image",
        props: {
          src: {
            input_type: "FILE_UPLOAD",
            value: "https://purple-nebula.vercel.app/natal/natal-wheel.svg",
            hidden: false,
          },
          alt: {
            input_type: "TEXT_INPUT",
            value: "hello",
            hidden: false,
          },
          caption: {
            input_type: "TEXT_INPUT",
            value: "sdsdgdsg",
            hidden: false,
          },
          fit: {
            input_type: "SELECT",
            value: "cover",

            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "md",

            hidden: false,
          },
          wrapper_class: {
            input_type: "TEXT_INPUT",
            value: "",
            hidden: false,
          },
          position: {
            input_type: "SELECT",
            value: "top",

            hidden: false,
          },
        },
      },
      {
        id: 3,
        type: "BUTTON",
        label: "Button",
        props: {
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Hero Alom",
            hidden: false,
          },
          animation: {
            input_type: "SELECT",
            value: "bounce",

            hidden: false,
          },
          color: {
            input_type: "COLOR_PICKER",
            value: "#00b894",
            hidden: false,
          },
          disabled: {
            input_type: "SELECT",
            value: "false",

            hidden: false,
          },
          loading: {
            input_type: "SELECT",
            value: "true",

            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "lg",

            hidden: false,
          },
          shadow_size: {
            input_type: "SELECT",
            value: "base",

            hidden: false,
          },
          shadow_color: {
            input_type: "COLOR_PICKER",
            value: "#d63031",
            hidden: false,
          },
          size: {
            input_type: "SELECT",
            value: "lg",

            hidden: false,
          },
          tone: {
            input_type: "SELECT",
            value: "outline",

            hidden: false,
          },
          tab: {
            input_type: "RADIO",
            value: "current", //blank

            hidden: false,
          },

          action: {
            input_type: "ACTION_BUTTON",
            value: "transit-chart", // or external link
            hidden: false,
          },
        },
      },
      {
        id: 4,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "<p>What is a Birth Chart?</p>",
            hidden: false,
          },
          weight: {
            input_type: "SELECT",
            value: "light",

            hidden: false,
          },
          variant: {
            input_type: "SELECT",
            value: "h5",

            hidden: false,
          },
        },
      },
      {
        id: 5,
        type: "VIDEO",
        label: "Video",
        props: {
          src: {
            input_type: "TEXT_INPUT",
            value: "https://www.youtube.com/",
            hidden: false,
          },
          thumbnail: {
            input_type: "TEXT_INPUT",
            value: "sdg",
            hidden: false,
          },
          alt: {
            input_type: "TEXT_INPUT",
            value: "some text",
            hidden: false,
          },
          caption: {
            input_type: "TEXT_INPUT",
            value: "sdsdgdsg",
            hidden: false,
          },
          fit: {
            input_type: "SELECT",
            value: "contain",

            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "base",

            hidden: false,
          },
          wrapper_class: {
            input_type: "TEXT_INPUT",
            value: "",
            hidden: false,
          },
          position: {
            input_type: "SELECT",
            value: "center",

            hidden: false,
          },
        },
      },
    ],
  },
];
