import React from "react";
import Synastry from "../src/component/calculator/synastry";
type Props = {};

export default function SynastryChart({}: Props) {
  return (
    <div>
      <Synastry pageData={pageSection?.page_skeleton?.sections[0]} />
    </div>
  );
}

const pageSection = {
  page_name: "synastry chart response",
  page_route: "synastry-chart-response",
  page_skeleton: {
    page_name: "synastry-chart-response",
    page_id: "synastry_chart_response",
    seo: {
      meta_title: "",
      meta_keywords: [],
      meta_description: "",
    },
    sections: [
      {
        id: 1,
        type: "SYNASTRY_CHART_FORM_RESPONSE",
        label: "Synastry Chart Response",
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
    ],
  },
  page_id: "synastry_chart_response",
  page_type: null,
  page_visibility: true,
};
