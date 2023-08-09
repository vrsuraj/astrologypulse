import BirthChartSection from "@/components/sections/forms/birthChart";
import React from "react";

type Props = {};

export default function BirthChart({}: Props) {
  return (
    <div>
      <BirthChartSection data={pageSection[0]}></BirthChartSection>
    </div>
  );
}

const pageSection = [
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
        allowedComponents: ["HEADLINE", "CONTENT", "BIRTH_CHART_FORM"],
      },
      BirthChartStyleTwo: {
        label: "Birth Chart With Image",
        value: "BirthChartStyleTwo",
        allowedComponents: ["HEADLINE", "CONTENT", "BIRTH_CHART_FORM", "IMAGE"],
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
            value: "Birth Chart Calculator",
          },
          weight: {
            input_type: "SELECT",
            value: "semibold",
            hidden: false,
          },
          variant: {
            input_type: "SELECT",
            value: "h1",
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
              "Calculate the position of the planets at your birth and unlock the hidden patterns and potentials that shape your life's journey. Gain valuable insight into your purpose, personality, and opportunities for growth and transformation today",
          },
          weight: {
            input_type: "SELECT",
            value: "light",
            hidden: false,
          },
        },
      },
      {
        id: 3,
        type: "BIRTH_CHART_FORM",
        label: "Birth Chart Form",
        props: {
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
          button_disaply: {
            value: true,
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
            value: "/birth-chart-response", // or external link
            hidden: false,
          },
        },
      },
    ],
  },
];
