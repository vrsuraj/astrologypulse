import TransitSection from "@/components/sections/forms/transitForm";
import React from "react";

type Props = {};

export default function TransitChart({}: Props) {
  return (
    <div>
      <TransitSection data={test} />
    </div>
  );
}


const test = {
  type: "TRANSIT_CHART",
  id: "transit-chart",
  label: "Transit Chart",
  config: {
    background: {
      type: "COLOR",
      value: "",
    },
    style: {
      type: "transit_chart_style_one",
      value: "",
    },
  },
  variants: {
    transit_chart_style_one: {
      label: "Transit Chart Style 1",
      value: "transit_chart_style_one",
      allowedComponents: ["HEADLINE", "CONTENT", "TRANSIT_CHART_FORM"],
    },
    transit_chart_style_two: {
      label: "Transit Chart Style 2",
      value: "transit_chart_style_two",
      allowedComponents: ["HEADLINE", "CONTENT", "TRANSIT_CHART_FORM", "IMAGE"],
    },
    transit_chart_style_three: {
      label: "Transit Chart Style 3",
      value: "transit_chart_style_three",
      allowedComponents: ["TRANSIT_CHART_FORM"],
    },
    transit_chart_style_four: {
      label: "Transit Chart Style 4",
      value: "transit_chart_style_four",
      allowedComponents: ["HEADLINE", "CONTENT", "TRANSIT_CHART_FORM", "IMAGE"],
    },
  },
  currentVariant: "transit_chart_style_three",
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
      },
    },
    {
      id: 3,
      type: "TRANSIT_CHART_FORM",
      label: "Transit Chart Form",
      props: {
        form_style: {
          input_type: "SELECT",
          value: "default",
          options: [
            {
              label: "Default Form Style",
              value: "default",
            },
            {
              label: "Form With Animated Border",
              value: "stylishform",
            },
          ],
          hidden: false,
        },
        email_status: {
          input_type: "TOGGLE_BUTTON",
          value: false,
          hidden: false,
        },
        label_status: {
          input_type: "TOGGLE_BUTTON",
          value: true,
          hidden: false,
        },
        button_text: {
          input_type: "TEXT_INPUT",
          value: "Calculate Your Birth Chart",
          hidden: false,
        },
        date_label: {
          input_type: "TEXT_INPUT",
          value: "Select Your Birth Date",
          hidden: false,
        },
        name_label: {
          input_type: "TEXT_INPUT",
          value: "Enter Your Full Name",
          hidden: false,
        },
        time_label: {
          input_type: "TEXT_INPUT",
          value: "Select Your Birth Time",
          hidden: false,
        },
        place_label: {
          input_type: "TEXT_INPUT",
          value: "Select Your Birth Place",
          hidden: false,
        },
        email_label: {
          input_type: "TEXT_INPUT",
          value: "Enter Your Email",
          hidden: false,
        },
        action: {
          input_type: "ACTION_BUTTON",
          value: "/transit-chart-response",
          hidden: false,
        },
      },
    },
    {
      id: 4,
      type: "IMAGE",
      label: " Image",
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
