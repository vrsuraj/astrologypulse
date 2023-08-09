import Spread9Tarot from "@/src/component/tarot/9SpreadTarot";
import TarotPrediction from "@/src/component/tarot/tarot-prediction";
import React from "react";

export default function TarotPredictionCalculator() {
  return (
    <>
      <Spread9Tarot data={pageSection[0]} />
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
        allowedComponents: ["PARAGRAPH", "HEADLINE", "9_SPREAD_TAROT"],
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
              "Tarot 9 cards method gives more detailed information about your past, present and future than 3 cards method.",
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
            value: "9 CARD TAROT SPREADS",
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
];
