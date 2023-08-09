import SectionList from "@/components/sectionList";
import NumerologySection from "@/components/sections/forms/numerology";
import React from "react";

type Props = {};
const LifePathNumber = ({}: Props) => {
  return (
    <div>
      {pageSection?.map((item: any, i: number) => (
        <SectionList data={item} key={i} />
      ))}
    </div>
  );
};

export default LifePathNumber;

const pageSection = [
  {
    type: "LIFEPATH_NUMBER_CALCULATOR",
    id: "lifepath-number-calculator",
    label: "Life Path Number Calculator",
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
          "LIFEPATH_NUMBER_CALCULATOR_FORM",
        ],
      },
      LifePathNumberCalculatorStyleTwo: {
        label: "Life Path Number Calculator With Image",
        value: "LifePathNumberCalculatorStyleTwo",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "LIFEPATH_NUMBER_CALCULATOR_FORM",

          "IMAGE",
        ],
      },
      LifePathNumberCalculatorStyleThree: {
        label: "Split Lifepath Number Section",
        value: "LifePathNumberCalculatorStyleThree",
        allowedComponents: [
          "HEADLINE",
          "CONTENT",
          "LIFEPATH_NUMBER_CALCULATOR_FORM",
        ],
      },
      LifePathNumberCalculatorWithoutContent: {
        label: "Life Path Number Calculator Without Content",
        value: "LifePathNumberCalculatorWithoutContent",
        allowedComponents: ["LIFEPATH_NUMBER_CALCULATOR_FORM"],
      },
    },
    currentVariant: "LifePathNumberCalculatorStyleThree",
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
        },
      },
      {
        id: 4,
        type: "LIFEPATH_NUMBER_CALCULATOR_FORM_RESPONSE",
        label: "Life Path Number Calculator  Response",
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
            value: "Numerology",
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
  {
    type: "SPLIT",
    id: "split-section",
    label: "Split Section 1",
    config: {
      style: {
        type: "HeadlineContentButtonImageLeft",
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
    currentVariant: "HeadlineContentButtonImageLeft",
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
];
