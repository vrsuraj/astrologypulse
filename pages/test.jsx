import React from "react";
import CallToActionSectionStyle1 from "../components/sections/callToAction.tsx/callToActionStyle1";
export default function Test() {
  return (
    <div>
      <CallToActionSectionStyle1 data={pageSection[0]} />
    </div>
  );
}

const pageSection = [
  {
    type: "GRIDS",
    id: "grids",
    label: "Grid Cards Calculator",
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
      default: {
        label: "Default",
        value: "default",
        allowedComponents: ["CONTENT", "HEADLINE", "CARDS"],
      },
    },
    currentVariant: "default",
    components: [
      {
        id: 1,
        type: "CONTENT",
        label: "Content",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value:
              "Prepare to delve into the fascinating realm of the stars and unlock the secrets they hold. Embark on a personal astrology exploration today and experience a transformative cosmic adventure that will shed light on your path, like a steadfast guiding North Star.",
          },
        },
      },
      {
        id: 3,
        type: "HEADLINE",
        label: "Headline",
        props: {
          content: {
            input_type: "RICH_TEXTAREA",
            value: "Unlock the Secrets of Your Destiny with AstrologyPulse",
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
