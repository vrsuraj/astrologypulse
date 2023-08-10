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
      {pageSection?.sections?.map((item: any, i: number) => (
        <SectionList data={item} key={i} />
      ))}
    </div>
  );
}

const pageSection = [
  {
    type: "GRIDS",
    id: "grids",
    label: "Grid Cards Calculator",
    config: {
      style: {
        type: "default",
        value: "",
      },
    },
    variants: {
      default: {
        label: "Default",
        value: "default",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
      gridCardsStyleTwo: {
        label: "Grid Cards Style Two",
        value: "gridCardsStyleTwo",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
    },
    currentVariant: "default",
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
            card_limit: 4,
            card_length: 4,
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
              {
                type: "CARD",
                label: "Card 4",
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
                    value: "Synastry Chart",
                  },

                  image: {
                    input_type: "FILE_UPLOAD",
                    value: "https://astro-page-14.vercel.app/imgs/heart.svg",
                    hidden: false,
                  },
                  content: {
                    input_type: "RICH_TEXTAREA",
                    value:
                      "The Synastry Chart is a powerful tool that compares and intertwines the birth charts of two individuals, unraveling the intricate dance of their cosmic connections. Gain profound insights into the dynamics, compatibility, and potential challenges within your relationships. Our expert astrologers will navigate the celestial tapestry, highlighting the harmonious aspects, areas of growth, and potential areas of tension.",
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
    ],
  },
  {
    type: "GRIDS",
    id: "grids",
    label: "Additional Grid Calculators",
    config: {
      style: {
        type: "default",
        value: "",
      },
    },
    variants: {
      default: {
        label: "Default",
        value: "default",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
      gridCardsStyleTwo: {
        label: "Grid Cards Style Two",
        value: "gridCardsStyleTwo",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
    },
    currentVariant: "default",
    components: [
      {
        id: 1,
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "Find answers to your questions about your love, relationships, career, wellness and more.",
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
                  heading: {
                    input_type: "TEXT_INPUT",
                    value: "Yes/No Tarot Predictions",
                  },
                  image: {
                    input_type: "TEXT_INPUT",
                    value: "/imgs/yes-no-tarot.png",
                  },
                  button_disaply: {
                    value: true,
                  },
                  button_text: {
                    input_type: "TEXT_INPUT",
                    value: "Pick up a card and get an answer",
                    hidden: false,
                  },
                  button_radius: {
                    input_type: "SELECT",
                    value: "rounded",
                    hidden: false,
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
                  button_color: {
                    input_type: "SELECT",
                    value: "white",
                  },

                  card_color: {
                    value:
                      "linear-gradient(220.55deg, #7CF7FF 0%, #4B73FF 100%)",
                  },
                  action: {
                    input_type: "ACTION_BUTTON",
                    value: "transit-chart",
                    hidden: false,
                  },
                  animation: {
                    value: "none",
                  },

                  target: {
                    input_type: "RADIO_BUTTON",
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
                    value: "Choose your Sun Sign based on your date of birth.",
                  },
                  button_text: {
                    input_type: "TEXT_INPUT",
                    value: "Get Your Horoscope",
                    hidden: false,
                  },
                  button_radius: {
                    input_type: "SELECT",
                    value: "rounded",
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

                  color: {
                    input_type: "",
                    value:
                      "linear-gradient(220.55deg, #8A88FB 0%, #D079EE 100%)",
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
                  button_target: {
                    input_type: "RADIO_BUTTON",
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
                  button_action: {
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
                    value:
                      "Find out your Zodiac compatibility and Love Intrest",
                  },
                  button_text: {
                    input_type: "TEXT_INPUT",
                    value: "your Zodiac Compatibility Report",
                    hidden: false,
                  },
                  button_radius: {
                    input_type: "SELECT",
                    value: "rounded",
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
                  button_target: {
                    input_type: "RADIO_BUTTON",
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
                  button_action: {
                    input_type: "TEXT_INPUT",
                    value: "/demo",
                    hidden: false,
                  },

                  card_color: {
                    input_type: "",
                    value:
                      "linear-gradient(220.55deg, #FF896D 0%, #D02020 100%)",
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
            value: "Cosmic Compass",
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
    ],
  },
  {
    type: "GRIDS",
    id: "grids",
    label: "Grid Calculators",
    config: {
      style: {
        type: "default",
        value: "",
      },
    },
    variants: {
      default: {
        label: "Default",
        value: "default",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
      gridCardsStyleTwo: {
        label: "Grid Cards Style Two",
        value: "gridCardsStyleTwo",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
    },
    currentVariant: "default",
    components: [
      {
        id: 1,
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "The power of the stars at your fingertips. From calculating your rising sign and moon phase to determining planetary transits and compatibility scores, our astrology calculators offer practical insights and invaluable guidance. Navigate the cosmos with ease and discover the magic of self-discovery through our range of free astrology calculators.",
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
                  heading: {
                    input_type: "TEXT_INPUT",
                    value: "Free Natal (Birth) Chart Report",
                  },
                  button_disaply: {
                    value: true,
                  },
                  button_text: {
                    input_type: "TEXT_INPUT",
                    value: "Calculate your birth chart",
                    hidden: false,
                  },
                  button_radius: {
                    input_type: "SELECT",
                    value: "rounded",
                    hidden: false,
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
                  button_color: {
                    input_type: "SELECT",
                    value: "white",
                  },
                  image: {
                    input_type: "FILE_UPLOAD",
                    value: "/imgs/birthChart.png",
                    hidden: false,
                  },

                  card_color: {
                    value:
                      "linear-gradient(to top,rgba(190,24,93,.8), #fef9c3)",
                  },
                  target: {
                    input_type: "RADIO_BUTTON",
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
                  heading: {
                    input_type: "TEXT_INPUT",
                    value: "Life Path Number",
                  },
                  content: {
                    value:
                      "Unveil the cosmic essence of your unique existence by calculating your Life Path Number, a powerful indicator of your life's purpose and destiny.",
                  },
                  border_display: {
                    value: true,
                  },
                  border_width: {
                    value: "medium",
                  },
                  border_color: {
                    value: "",
                  },
                  button_radius: {
                    input_type: "SELECT",
                    value: "rounded",
                    hidden: false,
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
                    input_type: "RADIO_BUTTON",
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
                  heading: {
                    input_type: "TEXT_INPUT",
                    value: "Life Path Number",
                  },
                  content: {
                    value:
                      "Unveil the cosmic essence of your unique existence by calculating your Life Path Number, a powerful indicator of your life's purpose and destiny.",
                  },
                  border_display: {
                    value: true,
                  },
                  border_width: {
                    value: "medium",
                  },
                  border_color: {
                    value: "",
                  },
                  button_radius: {
                    input_type: "SELECT",
                    value: "rounded",
                    hidden: false,
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
                    input_type: "RADIO_BUTTON",
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
            value: "Free Astro Tools",
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
    ],
  },
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
            value: "bounce",
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
            value: "#00b894",
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
            value: "<p>What is Lorem Ipsum?</p>",
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
            value: "center",
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
    type: "BIRTH_CHART",
    id: "birth-chart",
    label: "Birth Chart",
    config: {
      style: {
        type: "default",
        value: "",
      },
    },
    variants: {
      default: {
        label: "Default",
        value: "default",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "BIRTH_CHART_FORM",
          "BIRTH_CHART_FORM_RESPONSE",
        ],
      },
      BirthChartStyleTwo: {
        label: "Birth Chart With Image",
        value: "BirthChartStyleTwo",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "BIRTH_CHART_FORM",
          "BIRTH_CHART_FORM_RESPONSE",
          "IMAGE",
        ],
      },
      BirthChartWithoutContent: {
        label: "Birth Chart Without Content",
        value: "BirthChartWithoutContent",
        allowedComponents: ["BIRTH_CHART_FORM"],
      },
    },
    currentVariant: "default",
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
          email_status: {
            input_type: "TOGGLE_BUTTON",
            value: true,
          },
          label_status: {
            input_type: "TOGGLE_BUTTON",
            value: true,
          },
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
          },
          date_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Date",
          },
          name_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Full Name",
          },
          time_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Time",
          },
          place_label: {
            input_type: "TEXT_INPUT",
            value: "Select Your Birth Place",
          },
          email_label: {
            input_type: "TEXT_INPUT",
            value: "Enter Your Email",
          },
        },
      },
      {
        id: 4,
        type: "BIRTH_CHART_FORM_RESPONSE",
        label: "Birth Chart Response",
        props: {
          response_type: {
            input_type: "SELECT",
            value: "default",
            options: [
              {
                label: "Default",
                value: "default",
              },
              {
                label: "Tabbed",
                value: "tab",
              },
            ],
          },
          response_headline: {
            input_type: "RICHTEXT_AREA",
            value: "Natal Chart",
          },
          response_content_text: {
            input_type: "RICHTEXT_AREA",
            value:
              "Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today",
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
      pageSection: data?.success ? data?.response?.page_skeleton : {},
    },
  };
}
