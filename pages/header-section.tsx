import CenterContentHeader from "@/components/sections/header/centerContentHeader";
import React from "react";

type Props = {};

export default function HeaderSection({}: Props) {
  return (
    <div>
      <CenterContentHeader data={pageSection} />
    </div>
  );
}

const pageSection = {
  type: "HERO",
  id: "hero-section",
  label: "Hero Section 1",
  config: {
    background: {
      type: "IMAGE",
      value: "https://purple-nebula.vercel.app/imgs/third.png",
    },
    style: {
      type: "Color",
      value: "#ffffff",
    },
  },
  variants: {
    hero_style_one: {
      label: "Hero Style 1",
      value: "hero_style_one",
      allowedComponents: ["HEADLINE", "CARDS", "CONTENT"],
    },
    hero_style_two: {
      label: "Hero Style 2",
      value: "hero_style_two",
      allowedComponents: ["HEADLINE", "BUTTON", "CONTENT"],
    },
    hero_style_three: {
      label: "Hero Style 3",
      value: "hero_style_three",
      allowedComponents: ["HEADLINE", "BUTTON", "CONTENT", "IMAGE"],
    },
  },
  currentVariant: "hero_style_three",
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
              label: "Card",
              props: {
                sub_heading: {
                  input_type: "TEXT_INPUT",
                  value: "Bye bye",
                },
                heading: {
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
                  value: "https://astraldust.vercel.app/imgs/birthChart.png",
                  hidden: false,
                },
                content: {
                  input_type: "RICH_TEXTAREA",
                  value: "Hello bro",
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
                  value: "", // or external link
                  hidden: false,
                },
              },
            },
            {
              type: "CARD",
              label: "Card",
              props: {
                sub_heading: {
                  input_type: "TEXT_INPUT",
                  value: "Second card",
                },
                heading: {
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
                  value: "https://astraldust.vercel.app/imgs/birthChart.png",
                  hidden: false,
                },
                content: {
                  input_type: "RICH_TEXTAREA",
                  value: "Hello bro",
                },
                bordered: {
                  input_type: "TOGGLE_BUTTON",
                  value: false,
                  hidden: false,
                },
                divider: {
                  input_type: "TOGGLE_BUTTON",
                  value: false,
                },
                size: {
                  input_type: "SELECT",
                  value: "md",
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
              label: "Card",
              props: {
                sub_heading: {
                  input_type: "TEXT_INPUT",
                  value: "THIRD",
                },
                heading: {
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
                    "https://astropages.s3.ap-south-1.amazonaws.com/test_db/Screenshot 2023-07-02 at 9.13.58 PM.png",
                  hidden: false,
                },
                content: {
                  input_type: "RICH_TEXTAREA",
                  value: "Hello bro",
                },
                bordered: {
                  input_type: "TOGGLE_BUTTON",
                  value: false,
                  hidden: false,
                },
                divider: {
                  input_type: "TOGGLE_BUTTON",
                  value: false,
                  hidden: false,
                },
                size: {
                  input_type: "SELECT",
                  value: "small",
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
    {
      id: 5,
      type: "IMAGE",
      label: "Image",
      props: {
        src: {
          input_type: "FILE_UPLOAD",
          value: "https://purple-nebula.vercel.app/imgs/bg.png",
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
};
