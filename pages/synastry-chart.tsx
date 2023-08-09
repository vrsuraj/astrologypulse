import React from "react";
import SynastryCalculator from "../src/component/forms/synastryCalculator";
type Props = {};

export default function SynastryChart({}: Props) {
  return (
    <div>
      <SynastryCalculator
        pageData={pageSection?.page_skeleton?.sections[0]}
        withoutText={undefined}
      />
    </div>
  );
}

const pageSection = {
  page_name: "synastry chart",
  page_route: "synastry-chart",
  page_skeleton: {
    page_name: "synastry-chart",
    page_id: "birth_chart",
    seo: {
      meta_title: "",
      meta_keywords: [],
      meta_description: "",
    },
    sections: [
      {
        type: "SYNASTRY_CHART",
        id: "solar-return-chart",
        label: "Solar Return Chart",
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
              "SYNASTRY_CHART_PRIMARY_FORM",
              "SYNASTRY_CHART_SECONDARY_FORM",
              "SYNASTRY_CHART_FORM_RESPONSE",
            ],
          },
          SynastryChartStyleTwo: {
            label: "Synastry Chart With Image",
            value: "SynastryChartStyleTwo",
            allowedComponents: [
              "HEADLINE",
              "CONTENT",
              "SYNASTRY_CHART_PRIMARY_FORM",
              "SYNASTRY_CHART_SECONDARY_FORM",
              "SYNASTRY_CHART_FORM_RESPONSE",
              "IMAGE",
            ],
          },
          SynastryChartWithoutContent: {
            label: "Synastry Chart Without Content",
            value: "SynastryChartWithoutContent",
            allowedComponents: [
              "SYNASTRY_CHART_PRIMARY_FORM",
              "SYNASTRY_CHART_SECONDARY_FORM",
              "SYNASTRY_CHART_FORM_RESPONSE",
            ],
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
            type: "SYNASTRY_CHART_PRIMARY_FORM",
            label: "Synastry Chart Primary Form",
            props: {
              email_status: {
                input_type: "TOGGLE_BUTTON",
                value: true,
              },
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
            },
          },
          {
            id: 4,
            type: "SYNASTRY_CHART_SECONDARY_FORM",
            label: "Synastry Chart Secondary Form",
            props: {
              email_status: {
                input_type: "TOGGLE_BUTTON",
                value: false,
              },
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
              action: {
                input_type: "TEXT_INPUT",
                value: "/synastry-chart-response", // or external link
                hidden: false,
              },
            },
          },
          {
            id: 6,
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
        ],
      },
    ],
  },
  page_id: "synastry_chart",
  page_type: null,
  page_visibility: true,
};
