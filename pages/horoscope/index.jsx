import { SignColor } from "../../utils/const/colors";
import { useRouter } from "next/router";
import { Sign } from "../../src/component/calculator/confirmBirthCard";
import React from "react";
import HoroscopeCalculator from "../../src/component/horoscope";

export default function Horoscope() {
  return (
    <>
      <HoroscopeCalculator data={pageSection?.page_skeleton?.sections[0]} />
    </>
  );
}

const pageSection = {
  page_name: "horoscope",
  page_route: "horoscope",
  page_skeleton: {
    page_name: "horoscope",
    page_id: "birth_chart",
    seo: {
      meta_title: "",
      meta_keywords: [],
      meta_description: "",
    },
    sections: [
      {
        type: "HOROSCOPE",
        id: "horoscope",
        label: "Horoscope Card",
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
            allowedComponents: ["HEADLINE", "CARDS"],
          },
          HoroscopeCardStyleTwo: {
            label: "Horoscope Card Style Two",
            value: "HoroscopeCardStyleTwo",
            allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
          },
          HoroscopeCardStyleThree: {
            label: "Horoscope Card Style Three",
            value: "HoroscopeCardStyleThree",
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
                  '<p>helo by<a href="https://google.com">ebybey</a>&nbsp;sjdhfhdsf<br><span style="background-color: rgb(163, 102, 255);color: rgb(241, 241, 241)">sjkdnfdshjf</span></p>',
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
            id: 2,
            type: "HEADLINE",
            label: "Headline",
            props: {
              content: {
                input_type: "RICH_TEXTAREA",
                value: "<p>dfjhdbfjhb</p>",
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
            id: 3,

            type: "CARDS",
            label: "Cards",
            props: {
              zodiac_signs: {
                input_type: "CARDS",
                card_limit: 12,
                value: [
                  {
                    type: "CARD",
                    label: "Aries",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "SELECT",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Taurus",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Gemini",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Cancer",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Leo",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Virgo",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Libra",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Scorpio",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Sagittarius",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Capricorn",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Aquarius",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                  {
                    type: "CARD",
                    label: "Pisces",
                    props: {
                      sub_text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                      },
                      text: {
                        input_type: "TEXT_INPUT",
                        value: "Bye bye",
                        hidden: false,
                      },
                      card_color: {
                        input_type: "COLOR_PICKER",
                        value: "#FD79A8",
                      },
                      image: {
                        input_type: "FILE_UPLOAD",
                        value:
                          "https://astraldust.vercel.app/imgs/birthChart.png",
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
                      target: {
                        input_type: "RADIO_BUTTON",
                        value: "self", //blank
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
                        value: "", // or external link
                        hidden: false,
                      },
                    },
                  },
                ],
                hidden: false,
              },
            },
          },
        ],
      },
    ],
  },
  page_id: "horoscope",
  page_type: null,
  page_visibility: true,
};

export function HomeCard({ data, duration }) {
  const router = useRouter();
  const customDuration = duration ? duration : "daily";
  return (
    <>
      <div className="max-w-6xl  w-full gap-x-5 gap-y-5 md:gap-6 mx-auto  grid sm:grid-cols-3 grid-cols-2 md:grid-cols-6">
        {/*<Trail3 open={isVisible}>*/}
        {data.map((item, i) => (
          <div className="flex w-full  flex-col gap-1 items-center">
            <div
              onClick={() =>
                router.push(
                  `/horoscope/${item.name.toLowerCase()}-${customDuration}-horoscope`
                )
              }
              key={i}
              className=" text-white  flex justify-center items-center w-full border-2 border-secondary hover:border-zinc-300 cursor-pointer rounded-[10px] group bg-gradient-to-bl from-primary to-secondary duration-150 ease-in p-1 md:p-2"
            >
              <div className="flex p-4 md:p-4 w-full  md:min-w-[150px] h-[100px] justify-center items-center ">
                <Sign
                  name={item.name}
                  size="md:text-[50px] text-[40px]"
                  color={`${SignColor[item.name.toLowerCase()]}`}
                />
                {/* <img
                  className="w-full h-full"
                  src={`/zodiac/${item.name.toLowerCase()}.svg`}
                /> */}
              </div>
            </div>
            <h6
              style={{ color: SignColor[item.name.toLowerCase()] }}
              className={`md:text-xl md:mt-2 text-lg `}
            >
              {item.name}
            </h6>
          </div>
        ))}
        {/*</Trail3>*/}
      </div>
    </>
  );
}
