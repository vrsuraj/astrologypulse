import React from "react";
import Natal from "../src/component/calculator/natalChartResponse";

export default function BirthChartReponse({}) {
  return (
    <div>
      <Natal pageData={pageSection[0]} />
    </div>
  );
}

const pageSection = [
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
];
