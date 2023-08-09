import ImageText from "@/components/sections/image-text";
import TarotPrediction from "@/src/component/tarot/tarot-prediction";
import React from "react";

export default function TarotPredictionCalculator() {
  return (
    <>
      <TarotPrediction data={pageSection[0]} />
      <ImageText data={pageSection[1]} />
    </>
  );
}

const pageSection = [
  {
    type: "SPLIT",
    id: "tarot_prediction",
    label: "yes_no_tarot_calculator",
    config: {
      background: {
        value: "",
      },
      style: {
        type: "ContentImageLeft",
        value: "",
      },
    },
    variants: {
      yes_no_tarot_calculator: {
        label: "grid card calculator",
        value: "yes_no_tarot_calculator",
        allowedComponents: ["PARAGRAPH", "HEADLINE", "TAROT_PREDICTION"],
      },
    },
    currentVariant: "yes_no_tarot_calculator",
    components: [
      {
        id: 1,
        type: "PARAGRAPH",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "Insight into Your Future: Get a Free Tarot Reading for Your Love, Career, and Financial Path",
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
            value: "Tarot Prediction",
            hidden: false,
          },
          size: {
            value: "6xl",
          },

          variant: {
            input_type: "SELECT",
            value: "h1",
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
        type: "ContentImageLeft",
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
        allowedComponents: ["PARAGRAPH", "HEADLINE", "IMAGE"],
      },
      HeadlineContentImageLeft: {
        label: "Headline Content Image Left",
        value: "HeadlineContentImageLeft",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE"],
      },
      HeadlineContentImageRight: {
        label: "Headline Content Image Right",
        value: "HeadlineContentImageRight",
        allowedComponents: ["HEADLINE", "CONTENT", "IMAGE"],
      },
      HeadlineContentButtonImageLeft: {
        label: "Headline Content Button Image Left",
        value: "HeadlineContentButtonImageLeft",
        allowedComponents: ["HEADLINE", "PARAGRAPH", "IMAGE", "BUTTON"],
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
        type: "PARAGRAPH",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "Based on the classic Celtic Cross spread, this Free Tarot Reading is designed to help you move through whatever issues you're facing with greater clarity and confidence. From personal matters to questions about love, career, finances, or a major decision you need to make, this versatile spread has advice for any area of your life.​<br/> <br/> When you need more guidance than just one card can provide, a 3-card Tarot spread is just right. In this free reading you'll get a card that represents your feelings and mindset in this moment, another that represents your current situation, and one that represents the challenges you may experience. With this new knowledge, you'll have a greater understanding of your circumstances and influences, as well as a better idea of the tools and solutions currently available to you.",
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
          disabled: {
            input_type: "SELECT",
            value: "false",

            hidden: false,
          },

          radius: {
            input_type: "SELECT",
            value: "lg",
            hidden: false,
          },
          size: {
            input_type: "SELECT",
            value: "lg",

            hidden: false,
          },

          tab: {
            input_type: "RADIO",
            value: "blank", //blank
            options: [
              {
                label: "Current Tab",
                value: "current",
              },
              {
                label: "New Tab",
                value: "_blank",
              },
            ],
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
            value: "About This Free Tarot Reading",
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
            value: "/",
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
