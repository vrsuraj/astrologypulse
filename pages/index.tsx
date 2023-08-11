import SectionList from "@/components/sectionList";
import { DBEntry } from "@/utils/fetchAPI";
// import { DBEntry } from "@/utils/fetchAPI";
import React from "react";

type Props = {
  pageSection: any;
};

export default function Home({ pageSection }: Props) {
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
  {
    type: "GRIDS",
    id: "grids",
    label: "Interactive Grid Cards Calculator",
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
  {
    type: "GRIDS",
    id: "grids",
    label: "Dynamic Grid Card Calculators",
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
  {
    type: "SPLIT_SECTION",
    id: "split-section",
    label: "Split Section 1",
    config: {
      background: {
        type: "COLOR",
        value: "",
      },
      style: {
        type: "split_section_style_seven",
        value: "",
      },
    },
    variants: {
      split_section_style_one: {
        label: "Split Section Style 1",
        value: "split_section_style_one",
        allowedComponents: ["CONTENT", "IMAGE"],
      },
      split_section_style_two: {
        label: "Split Section Style 2",
        value: "split_section_style_two",
        allowedComponents: ["CONTENT", "IMAGE"],
      },
      split_section_style_three: {
        label: "Split Section Style 3",
        value: "split_section_style_three",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE"],
      },
      split_section_style_four: {
        label: "Split Section Style 4",
        value: "split_section_style_four",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE"],
      },
      split_section_style_five: {
        label: "Split Section Style 5",
        value: "split_section_style_five",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE", "BUTTON"],
      },
      split_section_style_six: {
        label: "Split Section Style 6",
        value: "split_section_style_six",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE", "BUTTON"],
      },
      split_section_style_seven: {
        label: "Split Section Style 7",
        value: "split_section_style_seven",
        allowedComponents: ["IMAGE", "CARDS"],
      },
      split_section_style_eight: {
        label: "Split Section Style 8",
        value: "split_section_style_eight",
        allowedComponents: ["IMAGE", "CARDS"],
      },
    },
    currentVariant: "split_section_style_seven",
    components: [
      {
        id: 1,
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
              },
            ],
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
            value:
              "https://astro-page-14.vercel.app/imgs/zodiacCompatibility.png",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "contain",
                value: "contain",
              },
              {
                label: "cover",
                value: "cover",
              },
              {
                label: "fill",
                value: "fill",
              },
              {
                label: "scale down",
                value: "scale-down",
              },
            ],
            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "md",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "center",
                value: "center",
              },
              {
                label: "top",
                value: "top",
              },
              {
                label: "bottom",
                value: "bottom",
              },
              {
                label: "left-bottom",
                value: "left-bottom",
              },
              {
                label: "left-top",
                value: "left-top",
              },
              {
                label: "right-top",
                value: "right-top",
              },
              {
                label: "right-bottom",
                value: "right-bottom",
              },
            ],
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
          disabled: {
            input_type: "SELECT",
            value: "false",
            options: [
              {
                label: "Yes",
                value: true,
              },
              {
                label: "No",
                value: false,
              },
            ],
            hidden: false,
          },
          loading: {
            input_type: "SELECT",
            value: "true",
            options: [
              {
                label: "Yes",
                value: true,
              },
              {
                label: "No",
                value: false,
              },
            ],
            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "lg",
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
          tab: {
            input_type: "RADIO",
            value: "current",
            options: [
              {
                label: "Current Tab",
                value: "current",
              },
              {
                label: "New Tab",
                value: "new",
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
      {
        id: 4,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "<p>What is Lorem Ipsum$35</p>",
            hidden: false,
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
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
        id: 5,
        type: "CARDS",
        label: "Cards",
        props: {
          items: {
            input_type: "CARDS",
            card_limit: 1,
            card_length: 1,
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
                  button_display: {
                    input_type: "TOGGLE_BUTTON",
                    value: true,
                  },
                  button_text: {
                    input_type: "TEXT_INPUT",
                    value: "Read More",
                  },
                  card_color: {
                    input_type: "COLOR",
                    value: "none",
                  },
                  align: {
                    input_type: "SELECT",
                    value: "left",
                  },
                  bordered: {
                    input_type: "SELECT",
                    value: "medium",
                  },
                  border_color: {
                    input_type: "SELECT",
                    value: "red",
                  },
                  border_display: {
                    input_type: "TOGGLE_BUTTON",
                    value: true,
                  },

                  sub_heading: {
                    input_type: "TEXT_INPUT",
                    value: "Free Personal Horoscope",
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
                    input_type: "ACTION_BUTTON",
                    value: "/demo",
                    hidden: false,
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
  {
    type: "BIRTH_CHART",
    id: "birth-chart",
    label: "Birth Chart",
    config: {
      background: {
        type: "COLOR",
        value: "",
      },
      style: {
        type: "birth_chart_style_two",
        value: "",
      },
    },
    variants: {
      birth_chart_style_one: {
        label: "Birth Chart Style 1",
        value: "birth_chart_style_one",
        allowedComponents: ["HEADLINE", "CONTENT", "BIRTH_CHART_FORM"],
      },
      birth_chart_style_two: {
        label: "Birth Chart Style 2",
        value: "birth_chart_style_two",
        allowedComponents: ["HEADLINE", "CONTENT", "BIRTH_CHART_FORM", "IMAGE"],
      },
      birth_chart_style_three: {
        label: "Birth Chart Style 3",
        value: "birth_chart_style_three",
        allowedComponents: ["BIRTH_CHART_FORM"],
      },
      birth_chart_style_four: {
        label: "Birth Chart Style 4",
        value: "birth_chart_style_four",
        allowedComponents: ["HEADLINE", "CONTENT", "BIRTH_CHART_FORM", "IMAGE"],
      },
    },
    currentVariant: "birth_chart_style_two",
    components: [
      {
        id: 1,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "<p style='color:#F39461;'>Birth Chart Calculator</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
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
        id: 2,
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "<p>Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
              },
            ],
            hidden: false,
          },
        },
      },
      {
        id: 3,
        type: "BIRTH_CHART_FORM",
        label: "Birth Chart",
        props: {
          form_style: {
            input_type: "SELECT",
            value: "default",
            options: [
              {
                label: "Default Form Style",
                value: "default",
              },
              {
                label: "Form With Animated Border",
                value: "stylishform",
              },
            ],
            hidden: false,
          },
          email_status: {
            input_type: "TOGGLE_BUTTON",
            value: true,
            hidden: false,
          },
          label_status: {
            input_type: "TOGGLE_BUTTON",
            value: true,
            hidden: false,
          },
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
            hidden: false,
          },
          date_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Date",
            hidden: false,
          },
          name_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Full Name",
            hidden: false,
          },
          time_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Time",
            hidden: false,
          },
          place_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Place",
            hidden: false,
          },
          email_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Email",
            hidden: false,
          },
          button_action: {
            input_type: "ACTION_BUTTON",
            value: "",
            hidden: false,
          },
        },
      },
      {
        id: 4,
        type: "IMAGE",
        label: " Image",
        props: {
          src: {
            input_type: "FILE_UPLOAD",
            value:
              "https://astro-page-14.vercel.app/imgs/zodiacCompatibility.png",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "contain",
                value: "contain",
              },
              {
                label: "cover",
                value: "cover",
              },
              {
                label: "fill",
                value: "fill",
              },
              {
                label: "scale down",
                value: "scale-down",
              },
            ],
            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "md",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "center",
                value: "center",
              },
              {
                label: "top",
                value: "top",
              },
              {
                label: "bottom",
                value: "bottom",
              },
              {
                label: "left-bottom",
                value: "left-bottom",
              },
              {
                label: "left-top",
                value: "left-top",
              },
              {
                label: "right-top",
                value: "right-top",
              },
              {
                label: "right-bottom",
                value: "right-bottom",
              },
            ],
            hidden: false,
          },
        },
      },
    ],
  },
  {
    type: "NUMEROLOGY",
    id: "numerology",
    label: "Numerology",
    config: {
      background: {
        type: "COLOR",
        value: "",
      },
      style: {
        type: "numerology_style_one",
        value: "",
      },
    },
    variants: {
      numerology_style_one: {
        label: "Numerology Style 1",
        value: "numerology_style_one",
        allowedComponents: ["HEADLINE", "CONTENT", "NUMEROLOGY_FORM"],
      },
      numerology_style_two: {
        label: "Numerology Style 2",
        value: "numerology_style_two",
        allowedComponents: ["HEADLINE", "CONTENT", "NUMEROLOGY_FORM", "IMAGE"],
      },
      numerology_style_three: {
        label: "Numerology Style 3",
        value: "numerology_style_three",
        allowedComponents: ["NUMEROLOGY_FORM"],
      },
      numerology_style_four: {
        label: "Numerology Style 4",
        value: "numerology_style_two",
        allowedComponents: ["HEADLINE", "CONTENT", "NUMEROLOGY_FORM", "IMAGE"],
      },
      numerology_style_five: {
        label: "Numerology Style 5",
        value: "numerology_style_five",
        allowedComponents: ["HEADLINE", "CONTENT", "NUMEROLOGY_FORM"],
      },
    },
    currentVariant: "numerology_style_one",
    components: [
      {
        id: 1,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "<p style='color:#F39461;'>Birth Chart Calculator</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
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
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "<p>Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
              },
            ],
            hidden: false,
          },
        },
      },
      {
        id: 3,
        type: "NUMEROLOGY_FORM",
        label: "Numerology Form",
        props: {
          form_style: {
            input_type: "SELECT",
            value: "default",
            options: [
              {
                label: "Default Form Style",
                value: "default",
              },
              {
                label: "Form With Animated Border",
                value: "stylishform",
              },
            ],
            hidden: false,
          },
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
            hidden: false,
          },
          date_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Date",
            hidden: false,
          },
          name_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Full Name",
            hidden: false,
          },
          button_action: {
            input_type: "ACTION_BUTTON",
            value: "",
            hidden: false,
          },
        },
      },
      {
        id: 4,
        type: "IMAGE",
        label: " Image",
        props: {
          src: {
            input_type: "FILE_UPLOAD",
            value:
              "https://astro-page-14.vercel.app/imgs/zodiacCompatibility.png",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "contain",
                value: "contain",
              },
              {
                label: "cover",
                value: "cover",
              },
              {
                label: "fill",
                value: "fill",
              },
              {
                label: "scale down",
                value: "scale-down",
              },
            ],
            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "md",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "center",
                value: "center",
              },
              {
                label: "top",
                value: "top",
              },
              {
                label: "bottom",
                value: "bottom",
              },
              {
                label: "left-bottom",
                value: "left-bottom",
              },
              {
                label: "left-top",
                value: "left-top",
              },
              {
                label: "right-top",
                value: "right-top",
              },
              {
                label: "right-bottom",
                value: "right-bottom",
              },
            ],
            hidden: false,
          },
        },
      },
    ],
  },

  {
    type: "LIFEPATH_NUMBER_CALCULATOR",
    id: "lifepath-number-calculator",
    label: "Life Path Number Calculator",
    config: {
      background: {
        type: "COLOR",
        value: "",
      },
      style: {
        type: "lifepath_number_style_one",
        value: "",
      },
    },
    variants: {
      lifepath_number_style_one: {
        label: "Life Path Number Style 1",
        value: "lifepath_number_style_one",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "LIFEPATH_NUMBER_CALCULATOR_FORM",
        ],
      },
      lifepath_number_style_two: {
        label: "Life Path Number Style 2",
        value: "lifepath_number_style_two",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "LIFEPATH_NUMBER_CALCULATOR_FORM",
          "IMAGE",
        ],
      },
      lifepath_number_style_three: {
        label: "Life Path Number Style 3",
        value: "lifepath_number_style_three",
        allowedComponents: ["LIFEPATH_NUMBER_CALCULATOR_FORM"],
      },
      lifepath_number_style_four: {
        label: "Life Path Number Style 4",
        value: "lifepath_number_style_four",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "LIFEPATH_NUMBER_CALCULATOR_FORM",
          "IMAGE",
        ],
      },
      lifepath_number_style_five: {
        label: "Life Path Number Style 5",
        value: "lifepath_number_style_five",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "LIFEPATH_NUMBER_CALCULATOR_FORM",
        ],
      },
    },
    currentVariant: "lifepath_number_style_one",
    components: [
      {
        id: 1,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "<p style='color:#F39461;'>Birth Chart Calculator</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
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
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "<p>Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
              },
            ],
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
        },
      },
      {
        id: 3,
        type: "LIFEPATH_NUMBER_CALCULATOR_FORM",
        label: "Life Path Number Calculator Form",
        props: {
          form_style: {
            input_type: "SELECT",
            value: "default",
            options: [
              {
                label: "Default Form Style",
                value: "default",
              },
              {
                label: "Form With Animated Border",
                value: "stylishform",
              },
            ],
            hidden: false,
          },
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
            hidden: false,
          },
          date_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Date",
            hidden: false,
          },
          name_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Full Name",
            hidden: false,
          },
          button_action: {
            input_type: "ACTION_BUTTON",
            value: "",
            hidden: false,
          },
        },
      },
      {
        id: 4,
        type: "IMAGE",
        label: "Image",
        props: {
          src: {
            input_type: "FILE_UPLOAD",
            value:
              "https://astro-page-14.vercel.app/imgs/zodiacCompatibility.png",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "contain",
                value: "contain",
              },
              {
                label: "cover",
                value: "cover",
              },
              {
                label: "fill",
                value: "fill",
              },
              {
                label: "scale down",
                value: "scale-down",
              },
            ],
            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "md",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "center",
                value: "center",
              },
              {
                label: "top",
                value: "top",
              },
              {
                label: "bottom",
                value: "bottom",
              },
              {
                label: "left-bottom",
                value: "left-bottom",
              },
              {
                label: "left-top",
                value: "left-top",
              },
              {
                label: "right-top",
                value: "right-top",
              },
              {
                label: "right-bottom",
                value: "right-bottom",
              },
            ],
            hidden: false,
          },
        },
      },
    ],
  },
  {
    type: "PERSONALITY_NUMBER_CALCULATOR",
    id: "personality-number-calculator",
    label: "Personality Number Calculator",
    config: {
      background: {
        type: "COLOR",
        value: "",
      },
      style: {
        type: "personality_number_style_one",
        value: "",
      },
    },
    variants: {
      personality_number_style_one: {
        label: "Personality Number Style 1",
        value: "personality_number_style_one",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "PERSONALITY_NUMBER_CALCULATOR_FORM",
        ],
      },
      personality_number_style_two: {
        label: "Personality Number Style 2",
        value: "personality_number_style_two",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "PERSONALITY_NUMBER_CALCULATOR_FORM",
          "IMAGE",
        ],
      },
      personality_number_style_three: {
        label: "Personality Number Style 3",
        value: "personality_number_style_three",
        allowedComponents: ["PERSONALITY_NUMBER_CALCULATOR_FORM"],
      },
      personality_number_style_four: {
        label: "Personality Number Style 4",
        value: "personality_number_style_four",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "PERSONALITY_NUMBER_CALCULATOR_FORM",
          "IMAGE",
        ],
      },
      personality_number_style_five: {
        label: "Personality Number Style 5",
        value: "personality_number_style_five",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "PERSONALITY_NUMBER_CALCULATOR_FORM",
        ],
      },
    },
    currentVariant: "personality_number_style_one",
    components: [
      {
        id: 1,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "<p style='color:#F39461;'>Birth Chart Calculator</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
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
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "<p>Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
              },
            ],
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
        },
      },
      {
        id: 3,
        type: "PERSONALITY_NUMBER_CALCULATOR_FORM",
        label: "Personality Number Calculator Form",
        props: {
          form_style: {
            input_type: "SELECT",
            value: "default",
            options: [
              {
                label: "Default Form Style",
                value: "default",
              },
              {
                label: "Form With Animated Border",
                value: "stylishform",
              },
            ],
            hidden: false,
          },
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
            hidden: false,
          },
          date_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Date",
            hidden: false,
          },
          name_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Full Name",
            hidden: false,
          },
          button_action: {
            input_type: "ACTION_BUTTON",
            value: "",
            hidden: false,
          },
        },
      },
      {
        id: 4,
        type: "IMAGE",
        label: "Image",
        props: {
          src: {
            input_type: "FILE_UPLOAD",
            value:
              "https://astro-page-14.vercel.app/imgs/zodiacCompatibility.png",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "contain",
                value: "contain",
              },
              {
                label: "cover",
                value: "cover",
              },
              {
                label: "fill",
                value: "fill",
              },
              {
                label: "scale down",
                value: "scale-down",
              },
            ],
            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "md",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "center",
                value: "center",
              },
              {
                label: "top",
                value: "top",
              },
              {
                label: "bottom",
                value: "bottom",
              },
              {
                label: "left-bottom",
                value: "left-bottom",
              },
              {
                label: "left-top",
                value: "left-top",
              },
              {
                label: "right-top",
                value: "right-top",
              },
              {
                label: "right-bottom",
                value: "right-bottom",
              },
            ],
            hidden: false,
          },
        },
      },
    ],
  },
  {
    type: "EXPRESSION_CALCULATOR",
    id: "expression-number-calculator",
    label: "Expression Calculator",
    config: {
      background: {
        type: "COLOR",
        value: "",
      },
      style: {
        type: "expression_calculator_style_one",
        value: "",
      },
    },
    variants: {
      expression_calculator_style_one: {
        label: "Expression Calculator Style 1",
        value: "expression_calculator_style_one",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "EXPRESSION_CALCULATOR_FORM",
        ],
      },
      expression_calculator_style_two: {
        label: "Expression Calculator Style 2",
        value: "expression_calculator_style_two",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "EXPRESSION_CALCULATOR_FORM",
          "IMAGE",
        ],
      },
      expression_calculator_style_three: {
        label: "Expression Calculator Style 3",
        value: "expression_calculator_style_three",
        allowedComponents: ["EXPRESSION_CALCULATOR_FORM"],
      },
      expression_calculator_style_four: {
        label: "Expression Calculator Style 4",
        value: "expression_calculator_style_four",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "EXPRESSION_CALCULATOR_FORM",
          "IMAGE",
        ],
      },
      expression_calculator_style_five: {
        label: "Expression Calculator Style 5",
        value: "expression_calculator_style_five",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "EXPRESSION_CALCULATOR_FORM",
        ],
      },
    },
    currentVariant: "expression_calculator_style_one",
    components: [
      {
        id: 1,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "<p style='color:#F39461;'>Birth Chart Calculator</p>",
            hidden: false,
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
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
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "<p>Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
              },
            ],
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
        },
      },
      {
        id: 3,
        type: "EXPRESSION_CALCULATOR_FORM",
        label: "Expression Calculator Form",
        props: {
          form_style: {
            input_type: "SELECT",
            value: "default",
            options: [
              {
                label: "Default Form Style",
                value: "default",
              },
              {
                label: "Form With Animated Border",
                value: "stylishform",
              },
            ],
            hidden: false,
          },
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
            hidden: false,
          },
          date_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Date",
            hidden: false,
          },
          name_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Full Name",
            hidden: false,
          },
          button_action: {
            input_type: "ACTION_BUTTON",
            value: "",
            hidden: false,
          },
        },
      },
      {
        id: 4,
        type: "IMAGE",
        label: " Image",
        props: {
          src: {
            input_type: "FILE_UPLOAD",
            value:
              "https://astro-page-14.vercel.app/imgs/zodiacCompatibility.png",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "contain",
                value: "contain",
              },
              {
                label: "cover",
                value: "cover",
              },
              {
                label: "fill",
                value: "fill",
              },
              {
                label: "scale down",
                value: "scale-down",
              },
            ],
            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "md",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "center",
                value: "center",
              },
              {
                label: "top",
                value: "top",
              },
              {
                label: "bottom",
                value: "bottom",
              },
              {
                label: "left-bottom",
                value: "left-bottom",
              },
              {
                label: "left-top",
                value: "left-top",
              },
              {
                label: "right-top",
                value: "right-top",
              },
              {
                label: "right-bottom",
                value: "right-bottom",
              },
            ],
            hidden: false,
          },
        },
      },
    ],
  },
  {
    type: "SYNASTRY_CHART",
    id: "synastry-chart",
    label: "Solar Return Chart",
    config: {
      background: {
        type: "COLOR",
        value: "",
      },
      style: {
        type: "synastry_chart_style_one",
        value: "",
      },
    },
    variants: {
      synastry_chart_style_one: {
        label: "Synastry Chart Style 1",
        value: "synastry_chart_style_one",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "SYNASTRY_CHART_PRIMARY_FORM",
          "SYNASTRY_CHART_SECONDARY_FORM",
        ],
      },
      synastry_chart_style_two: {
        label: "Synastry Chart Style 2",
        value: "synastry_chart_style_two",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "SYNASTRY_CHART_PRIMARY_FORM",
          "SYNASTRY_CHART_SECONDARY_FORM",

          "IMAGE",
        ],
      },
      synastry_chart_style_three: {
        label: "Synastry Chart Style 3",
        value: "synastry_chart_style_three",
        allowedComponents: [
          "SYNASTRY_CHART_PRIMARY_FORM",
          "SYNASTRY_CHART_SECONDARY_FORM",
        ],
      },
      synastry_chart_style_four: {
        label: "Synastry Chart Style 4",
        value: "synastry_chart_style_four",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "SYNASTRY_CHART_PRIMARY_FORM",
          "SYNASTRY_CHART_SECONDARY_FORM",

          "IMAGE",
        ],
      },
    },
    currentVariant: "synastry_chart_style_four",
    components: [
      {
        id: 1,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "<p style='color:#F39461;'>Birth Chart Calculator</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
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
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "<p>Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today</p>",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            options: [
              {
                label: "thin",
                value: "thin",
              },
              {
                label: "extraLight",
                value: "extraLight",
              },
              {
                label: "light",
                value: "light",
              },
              {
                label: "normal",
                value: "normal",
              },
              {
                label: "medium",
                value: "medium",
              },
              {
                label: "semiBold",
                value: "semiBold",
              },
              {
                label: "bold",
                value: "bold",
              },
              {
                label: "extraBold",
                value: "extraBold",
              },
              {
                label: "black",
                value: "black",
              },
            ],
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
        },
      },
      {
        id: 3,
        type: "SYNASTRY_CHART_PRIMARY_FORM",
        label: "Synastry Chart Primary Form",
        props: {
          form_style: {
            input_type: "SELECT",
            value: "default",
            options: [
              {
                label: "Default Form Style",
                value: "default",
              },
              {
                label: "Form With Animated Border",
                value: "stylishform",
              },
            ],
            hidden: false,
          },
          email_status: {
            input_type: "TOGGLE_BUTTON",
            value: true,
            hidden: false,
          },
          label_status: {
            input_type: "TOGGLE_BUTTON",
            value: true,
            hidden: false,
          },
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
            hidden: false,
          },
          date_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Date",
            hidden: false,
          },
          name_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Full Name",
            hidden: false,
          },
          time_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Time",
            hidden: false,
          },
          place_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Place",
            hidden: false,
          },
          email_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Email",
            hidden: false,
          },
        },
      },
      {
        id: 4,
        type: "SYNASTRY_CHART_SECONDARY_FORM",
        label: "Synastry Chart Secondary Form",
        props: {
          email_status: {
            input_type: "TOGGLE_BUTTON",
            value: true,
            hidden: false,
          },
          label_status: {
            input_type: "TOGGLE_BUTTON",
            value: true,
            hidden: false,
          },
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
            hidden: false,
          },
          date_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Date",
            hidden: false,
          },
          name_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Full Name",
            hidden: false,
          },
          time_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Time",
            hidden: false,
          },
          place_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Place",
            hidden: false,
          },
          email_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Email",
            hidden: false,
          },
          button_action: {
            input_type: "ACTION_BUTTON",
            value: "synastry-chart-response",
            hidden: false,
          },
        },
      },

      {
        id: 5,
        type: "IMAGE",
        label: "Image",
        props: {
          src: {
            input_type: "FILE_UPLOAD",
            value:
              "https://astro-page-14.vercel.app/imgs/zodiacCompatibility.png",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "contain",
                value: "contain",
              },
              {
                label: "cover",
                value: "cover",
              },
              {
                label: "fill",
                value: "fill",
              },
              {
                label: "scale down",
                value: "scale-down",
              },
            ],
            hidden: false,
          },
          radius: {
            input_type: "SELECT",
            value: "md",
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
            options: [
              {
                label: "none",
                value: "none",
              },
              {
                label: "center",
                value: "center",
              },
              {
                label: "top",
                value: "top",
              },
              {
                label: "bottom",
                value: "bottom",
              },
              {
                label: "left-bottom",
                value: "left-bottom",
              },
              {
                label: "left-top",
                value: "left-top",
              },
              {
                label: "right-top",
                value: "right-top",
              },
              {
                label: "right-bottom",
                value: "right-bottom",
              },
            ],
            hidden: false,
          },
        },
      },
    ],
  },
];

export async function getStaticProps() {
  const getAndUpdateOrderDetail = async () => {
    const req = await DBEntry({
      url: `admin/page/homepage`,
      method: "GET",
    });
    return req;
  };

  const data = await getAndUpdateOrderDetail();

  return {
    props: {
      pageSection: data?.success ? data?.response?.page_skeleton?.sections : {},
    },
  };
}
