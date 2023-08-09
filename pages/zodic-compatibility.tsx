import ZodiacComatibilityCalculator from "@/src/component/zodiac-compatibility";
import React from "react";

type Props = {};

export default function ZodicCompatibilityForm({}: Props) {
  return (
    <div>
      <ZodiacComatibilityCalculator data={pageSection[0]} />
    </div>
  );
}

const pageSection = [
  {
    type: "SPLIT",
    id: "tarot_prediction",
    label: "zodic_compatibility",
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
      zodic_compatibility: {
        label: "grid card calculator",
        value: "zodic_compatibility",
        allowedComponents: ["PARAGRAPH", "HEADLINE", "ZODIAC_COMPATIBILITY"],
      },
    },
    currentVariant: "zodic_compatibility",
    components: [
      {
        id: 1,
        type: "PARAGRAPH",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "Find out if you and your love interest or partner are soul mates, best friends, or a recipe for disaster. But no fear - even opposites can attract. Find out how you fare now",
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
            value: "Zodiac Comaptibility",
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
      {
        id: 3,
        type: "ZODIAC_COMPATIBILITY_FORM",
        label: "Zodiac Compatibility Form",
        props: {
          button_text: {
            input_type: "TEXT_INPUT",
            value: "Calculate Your Birth Chart",
          },
          button_radius: {
            input_type: "SELECT",
            value: "rounded",
            hidden: false,
          },
          button_color: {
            input_type: "COLOR_COMPONENT",
            value: "white",
          },
          target: {
            input_type: "RADIO_BUTTON",
            value: "self", //blank
            hidden: false,
          },

          action: {
            input_type: "TEXT_INPUT",
            value: "/zodiac-compaitbility-response", // or external link
            hidden: false,
          },
        },
      },
    ],
  },
];
