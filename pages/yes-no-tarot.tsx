import YesNoTarotCalculator from "@/src/component/tarot/yes-no-tarot";
import React, { useState } from "react";

export default function YesNoTarot() {
  return (
    <>
      <YesNoTarotCalculator data={pageSection[0]} />
    </>
  );
}

const pageSection = [
  {
    type: "SPLIT",
    id: "yes_no_tarot_calculator",
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
        allowedComponents: [
          "PARAGRAPH",
          "HEADLINE",
          "SUB_HEADING",
          "YES_NO_TAROT",
        ],
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
              "Tarot Magic in Seconds: Your Free Yes/No Tarot Reading Awaits",
          },
        },
      },
      {
        id: 1,
        type: "SUB_HEADING",
        label: "Content",
        props: {
          content: {
            input_type: "TEXT_INPUT",
            value: "SELECT A CARDS FROM THE DECK BELOW",
          },
        },
      },
      {
        id: 4,
        type: "SUB_HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "SELECT A CARDS FROM THE DECK BELOW",
            hidden: false,
          },
          size: {
            value: "xl",
          },

          variant: {
            input_type: "SELECT",
            value: "h1",
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
            value: "Yes No Tarot Prediction",
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
