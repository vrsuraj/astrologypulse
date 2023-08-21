import Layout from "@/components/layout/defaultLayout";
import SectionList from "@/components/sectionList";
import { DBEntry } from "@/utils/fetchAPI";
// import { DBEntry } from "@/utils/fetchAPI";
import React from "react";

type Props = {
  pageSection1: any;
};

export default function Home({ pageSection1 }: Props) {
  return (
    <div>
      {pageSection?.map((item: any, i: number) => (
        <SectionList data={item} key={i} />
      ))}
    </div>
  );
}

const pageSection = [
  {
    type: "GRIDS",
    id: "grids",
    label: "Grid Cards ",
    config: {
      background: {
        type: "COLOR",
        value: "",
      },
      style: {
        type: "grids_style_one",
        value: "",
      },
    },
    variants: {
      grids_style_one: {
        label: "Grid Cards Style 1",
        value: "grids_style_one",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
      grids_style_two: {
        label: "Grid Cards Style 2",
        value: "grids_style_two",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
      grids_style_three: {
        label: "Grid Cards Style 3",
        value: "grids_style_three",
        allowedComponents: ["HEADLINE", "CARDS", "BUTTON"],
      },
    },
    currentVariant: "grids_style_one",
    components: [
      {
        id: 1,
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "Prepare to delve into the fascinating realm of the stars and unlock the secrets they hold. Embark on a personal astrology exploration today and experience a transformative cosmic adventure that will shed light on your path, like a steadfast guiding North Star.",
          },
          size: {
            input_type: "SELECT",
            value: "base",
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "sm",
                value: "sm",
              },
              {
                label: "base",
                value: "base",
              },
              {
                label: "md",
                value: "md",
              },
              {
                label: "lg",
                value: "lg",
              },
              {
                label: "xl",
                value: "xl",
              },
            ],
            hidden: false,
          },
        },
      },
      {
        id: 2,
        type: "CARDS",
        label: "Cards",
        props: {
          items: {
            input_type: "CARDS",
            card_limit: 3,
            card_length: 3,
            value: [
              {
                type: "CARD",
                label: "Card 1",
                props: {
                  card_type: {
                    input_type: "SELECT",
                    value: "CARD",
                    options: [
                      {
                        label: "Default",
                        value: "CARD",
                      },
                      {
                        label: "Horoscope Card",
                        value: "HOROSCOPE_CARD",
                      },
                      {
                        label: "Icon Card",
                        value: "ICON_CARD",
                      },
                      {
                        label: "Zodiac Compatibility Card",
                        value: "ZODIAC_COMPATIBILITY_CARD",
                      },
                    ],
                    hidden: false,
                  },

                  sub_heading: {
                    input_type: "TEXT_INPUT",
                    value: "Free Personal Horoscope",
                  },

                  image: {
                    input_type: "FILE_UPLOAD",
                    value:
                      "https://astro-page-14.vercel.app/imgs/birth-chart.svg",
                    hidden: false,
                  },
                  content: {
                    input_type: "RICH_TEXTAREA",
                    value:
                      "Discover the cosmic energies that shape your day and get clear guidance, inspiration, and a sprinkle of magic to navigate life's twists and turns. With a 100% personalised touch, your daily horoscope becomes a cherished roadmap, helping you make the most of every moment and harness the power of the stars.",
                  },
                  radius: {
                    input_type: "SELECT",
                    value: "none",
                    options: [
                      {
                        label: "none",
                        value: "none",
                      },
                      {
                        label: "sm",
                        value: "sm",
                      },
                      {
                        label: "normal",
                        value: "base",
                      },
                      {
                        label: "md",
                        value: "md",
                      },
                      {
                        label: "lg",
                        value: "lg",
                      },
                      {
                        label: "xl",
                        value: "xl",
                      },
                      {
                        label: "2xl",
                        value: "2xl",
                      },
                      {
                        label: "3xl",
                        value: "3xl",
                      },
                      {
                        label: "full",
                        value: "full",
                      },
                    ],
                  },
                  shadow_size: {
                    input_type: "SELECT",
                    value: "base",
                    options: [
                      {
                        label: "none",
                        value: "none",
                      },
                      {
                        label: "sm",
                        value: "sm",
                      },
                      {
                        label: "base",
                        value: "base",
                      },
                      {
                        label: "md",
                        value: "md",
                      },
                      {
                        label: "lg",
                        value: "lg",
                      },
                      {
                        label: "xl",
                        value: "xl",
                      },
                    ],
                    hidden: false,
                  },
                  target: {
                    input_type: "SELECT",
                    value: "self",
                    options: [
                      {
                        label: "Current Tab",
                        value: "self",
                      },
                      {
                        label: "New Tab",
                        value: "blank",
                      },
                    ],
                    hidden: false,
                  },
                  link: {
                    input_type: "TOGGLE_BUTTON",
                    value: false,
                    hidden: false,
                  },
                  action: {
                    input_type: "TEXT_INPUT",
                    value: "/demo",
                    hidden: false,
                  },
                },
              },
              {
                type: "CARD",
                label: "Card 2",
                props: {
                  card_type: {
                    input_type: "SELECT",
                    value: "CARD",
                    options: [
                      {
                        label: "Default",
                        value: "CARD",
                      },
                      {
                        label: "Horoscope Card",
                        value: "HOROSCOPE_CARD",
                      },
                      {
                        label: "Icon Card",
                        value: "ICON_CARD",
                      },
                      {
                        label: "Zodiac Compatibility Card",
                        value: "ZODIAC_COMPATIBILITY_CARD",
                      },
                    ],
                    hidden: false,
                  },
                  sub_heading: {
                    input_type: "TEXT_INPUT",
                    value: "Natal Chart",
                  },

                  image: {
                    input_type: "FILE_UPLOAD",
                    value:
                      "https://astro-page-14.vercel.app/imgs/birth-chart.svg",
                    hidden: false,
                  },
                  content: {
                    input_type: "RICH_TEXTAREA",
                    value:
                      "Your natal (or birth) chart is a cosmic snapshot, capturing the precise arrangement of planets and constellations at the moment of your birth. Our expert astrologers decode this celestial map, revealing valuable insights into your personality, talents, and life's patterns. Gain a profound understanding of yourself and unleash your true potential. ",
                  },
                  radius: {
                    input_type: "SELECT",
                    value: "none",
                    options: [
                      {
                        label: "none",
                        value: "none",
                      },
                      {
                        label: "sm",
                        value: "sm",
                      },
                      {
                        label: "normal",
                        value: "base",
                      },
                      {
                        label: "md",
                        value: "md",
                      },
                      {
                        label: "lg",
                        value: "lg",
                      },
                      {
                        label: "xl",
                        value: "xl",
                      },
                      {
                        label: "2xl",
                        value: "2xl",
                      },
                      {
                        label: "3xl",
                        value: "3xl",
                      },
                      {
                        label: "full",
                        value: "full",
                      },
                    ],
                  },
                  shadow_size: {
                    input_type: "SELECT",
                    value: "base",
                    options: [
                      {
                        label: "none",
                        value: "none",
                      },
                      {
                        label: "sm",
                        value: "sm",
                      },
                      {
                        label: "base",
                        value: "base",
                      },
                      {
                        label: "md",
                        value: "md",
                      },
                      {
                        label: "lg",
                        value: "lg",
                      },
                      {
                        label: "xl",
                        value: "xl",
                      },
                    ],
                    hidden: false,
                  },
                  target: {
                    input_type: "SELECT",
                    value: "self",
                    options: [
                      {
                        label: "Current Tab",
                        value: "self",
                      },
                      {
                        label: "New Tab",
                        value: "blank",
                      },
                    ],
                    hidden: false,
                  },
                  link: {
                    input_type: "TOGGLE_BUTTON",
                    value: false,
                    hidden: false,
                  },
                  action: {
                    input_type: "TEXT_INPUT",
                    value: "/demo",
                    hidden: false,
                  },
                },
              },
              {
                type: "CARD",
                label: "Card 3",
                props: {
                  card_type: {
                    input_type: "SELECT",
                    value: "CARD",
                    options: [
                      {
                        label: "Default",
                        value: "CARD",
                      },
                      {
                        label: "Horoscope Card",
                        value: "HOROSCOPE_CARD",
                      },
                      {
                        label: "Icon Card",
                        value: "ICON_CARD",
                      },
                      {
                        label: "Zodiac Compatibility Card",
                        value: "ZODIAC_COMPATIBILITY_CARD",
                      },
                    ],
                    hidden: false,
                  },
                  sub_heading: {
                    input_type: "TEXT_INPUT",
                    value: "Zodiac Compatibility",
                  },

                  image: {
                    input_type: "FILE_UPLOAD",
                    value:
                      "https://astro-page-14.vercel.app/imgs/birth-chart.svg",
                    hidden: false,
                  },
                  content: {
                    input_type: "RICH_TEXTAREA",
                    value:
                      "Curious about your cosmic connections? Our Zodiac Compatibility Chart holds the key to understanding the dynamics of your relationships. Whether you're seeking insights into romantic partnerships, friendships, or family dynamics, our Compatibility Chart offers personalised analysis and guidance.",
                  },
                  radius: {
                    input_type: "SELECT",
                    value: "none",
                    options: [
                      {
                        label: "none",
                        value: "none",
                      },
                      {
                        label: "sm",
                        value: "sm",
                      },
                      {
                        label: "normal",
                        value: "base",
                      },
                      {
                        label: "md",
                        value: "md",
                      },
                      {
                        label: "lg",
                        value: "lg",
                      },
                      {
                        label: "xl",
                        value: "xl",
                      },
                      {
                        label: "2xl",
                        value: "2xl",
                      },
                      {
                        label: "3xl",
                        value: "3xl",
                      },
                      {
                        label: "full",
                        value: "full",
                      },
                    ],
                  },
                  shadow_size: {
                    input_type: "SELECT",
                    value: "base",
                    options: [
                      {
                        label: "none",
                        value: "none",
                      },
                      {
                        label: "sm",
                        value: "sm",
                      },
                      {
                        label: "base",
                        value: "base",
                      },
                      {
                        label: "md",
                        value: "md",
                      },
                      {
                        label: "lg",
                        value: "lg",
                      },
                      {
                        label: "xl",
                        value: "xl",
                      },
                    ],
                    hidden: false,
                  },
                  target: {
                    input_type: "SELECT",
                    value: "self",
                    options: [
                      {
                        label: "Current Tab",
                        value: "self",
                      },
                      {
                        label: "New Tab",
                        value: "blank",
                      },
                    ],
                    hidden: false,
                  },
                  link: {
                    input_type: "TOGGLE_BUTTON",
                    value: false,
                    hidden: false,
                  },
                  action: {
                    input_type: "TEXT_INPUT",
                    value: "/demo",
                    hidden: false,
                  },
                },
              },
            ],
          },
        },
      },
      {
        id: 3,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "Unlock the Secrets of Your Destiny with AstrologyPulse",
            hidden: false,
          },
          size: {
            input_type: "SELECT",
            value: "base",
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "sm",
                value: "sm",
              },
              {
                label: "base",
                value: "base",
              },
              {
                label: "md",
                value: "md",
              },
              {
                label: "lg",
                value: "lg",
              },
              {
                label: "xl",
                value: "xl",
              },
            ],
            hidden: false,
          },

          variant: {
            input_type: "SELECT",
            value: "h5",
            options: [
              {
                label: "h1",
                value: "h1",
              },
              {
                label: "h2",
                value: "h2",
              },
              {
                label: "h3",
                value: "h3",
              },
              {
                label: "h4",
                value: "h4",
              },
              {
                label: "h5",
                value: "h5",
              },
              {
                label: "h6",
                value: "h6",
              },
              {
                label: "paragraph",
                value: "p",
              },
            ],
            hidden: false,
          },
        },
      },
      {
        id: 4,
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
            value: "pulse",
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "pulse",
                value: "pulse",
              },
              {
                label: "bounce",
                value: "bounce",
              },
            ],
            hidden: false,
          },
          color: {
            input_type: "COLOR_PICKER",
            value: "none",
            hidden: false,
          },

          radius: {
            input_type: "SELECT",
            value: "square",
            options: [
              {
                label: "Square",
                value: "square",
              },
              {
                label: "Rounded",
                value: "rounded",
              },
              {
                label: "Pill",
                value: "pill",
              },
            ],
            hidden: false,
          },
          shadow_size: {
            input_type: "SELECT",
            value: "base",
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "sm",
                value: "sm",
              },
              {
                label: "base",
                value: "base",
              },
              {
                label: "md",
                value: "md",
              },
              {
                label: "lg",
                value: "lg",
              },
              {
                label: "xl",
                value: "xl",
              },
            ],
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
            options: [
              {
                label: "Extra small",
                value: "xs",
              },
              {
                label: "Small",
                value: "sm",
              },
              {
                label: "Medium",
                value: "md",
              },
              {
                label: "Large",
                value: "lg",
              },
            ],
            hidden: false,
          },
          tone: {
            input_type: "SELECT",
            value: "outline",
            options: [
              {
                label: "Solid",
                value: "solid",
              },
              {
                label: "Light",
                value: "light",
              },
              {
                label: "Outline",
                value: "outline",
              },
              {
                label: "Transparent",
                value: "transparent",
              },
            ],
            hidden: false,
          },
          target: {
            input_type: "SELECT",
            value: "self",
            options: [
              {
                label: "Current Tab",
                value: "self",
              },
              {
                label: "New Tab",
                value: "blank",
              },
            ],
            hidden: false,
          },
          action: {
            input_type: "ACTION_BUTTON",
            value: "transit-chart",
            hidden: false,
          },
        },
      },
    ],
  },
];

// export async function getStaticProps() {
//   const getAndUpdateOrderDetail = async () => {
//     const req = await DBEntry({
//       url: `admin/page/homepage`,
//       method: "GET",
//     });
//     return req;
//   };

//   const data = await getAndUpdateOrderDetail();
//   return {
//     props: {
//       pageSection: data?.success ? data?.response?.page_skeleton : {},
//     },
//   };
// }
