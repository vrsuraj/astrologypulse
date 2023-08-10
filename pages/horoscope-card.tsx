import HoroscopeBarCardCalculator from "@/components/sections/horoscope/horoscope-bar";
import HoroscopeCardCalculator from "@/components/sections/horoscope/horoscope-grid-card-with-icon";
import React from "react";

type Props = {};

export default function HoroscopeCard() {
  return (
    <div>
      <HoroscopeCardCalculator data={test?.page_skeleton?.sections[0]} />
      <HoroscopeBarCardCalculator data={test?.page_skeleton?.sections[0]} />
    </div>
  );
}

const test = {
  page_name: "monthly horoscope",
  page_route: "monthly-horoscope",
  page_skeleton: {
    page_name: "monthly horoscope",
    page_id: "birth_chart",
    seo: {
      meta_title: "",
      meta_keywords: [],
      meta_description: "",
    },
    sections: [
      {
        type: "HOROSCOPE",
        id: "monthly-horoscope",
        label: "Monthly Horoscope Card",
        config: {
          background: {
            type: "COLOR",
            value: "",
          },
          style: {
            type: "horoscope_style_one",
            value: "",
          },
        },
        variants: {
          horoscope_style_one: {
            label: "Horoscope Style 1",
            value: "horoscope_style_one",
            allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
          },
          horoscope_style_two: {
            label: "Horoscope Style 2",
            value: "horoscope_style_two",
            allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
          },
          horoscope_style_three: {
            label: "Horoscope Style 3",
            value: "horoscope_style_three",
            allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
          },
          horoscope_style_four: {
            label: "Horoscope Style 4",
            value: "horoscope_style_four",
            allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
          },
        },
        currentVariant: "horoscope_style_four",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
                        input_type: "ACTION_BUTTON",
                        value: "",
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
  page_id: "monthly_horoscope",
  page_type: null,
  page_visibility: true,
};
