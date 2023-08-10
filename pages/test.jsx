import React from "react";
import CallToActionSectionStyle1 from "../components/sections/callToAction.tsx/callToActionStyle1";
import CenterContentHeader from "../components/sections/header/centerContentHeader";
import GridCardCalculator from "../components/sections/calculators/grid-card-calculator";
import FeturedCardStyle1 from "../components/sections/featuredCard/feturedCardstyle1";
import VideoPlayer from "../src/component/video";
export default function Test() {
  return (
    <div>
      {/* <CenterContentHeader data={pageSection?.page_skeleton?.sections[0]} /> */}
      <FeturedCardStyle1 data={pageSection} />
      {/* <CallToActionSectionStyle1 data={pageSection} /> */}
    </div>
  );
}

const pageSection = {
  type: "FEATURED",
  id: "featured",
  label: "Featured Card",
  config: {
    background: {
      type: "COLOR",
      value: "",
    },
    style: {
      type: "FeaturedCardWithIconAndImage",
      value: "",
    },
  },
  variants: {
    Color: {
      label: "Default",
      value: "Color",
      allowedComponents: ["CONTENT", "HEADLINE", "BUTTON"],
    },
    Image: {
      label: "Featured Card With Background Image",
      value: "Image",
      allowedComponents: ["CONTENT", "HEADLINE", "BUTTON"],
    },
    FeaturedCardWithIcon: {
      label: "Featured Card With Icon",
      value: "FeaturedCardWithIcon",
      allowedComponents: ["CONTENT", "HEADLINE", "BUTTON", "IMAGE"],
    },
    FeaturedCardWithIconAndImage: {
      label: "Featured Card With Icon And Image",
      value: "FeaturedCardWithIconAndImage",
      allowedComponents: ["CONTENT", "HEADLINE", "BUTTON", "ICON", "IMAGE"],
    },
  },
  currentVariant: "FeaturedCardWithIconAndImage",
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
      type: "BUTTON",
      label: "Button",
      props: {
        button_text: {
          input_type: "TEXT_INPUT",
          value: "Hero Alom",
          hidden: false,
        },
        animation: {
          input_type: "SELECT",
          value: "pulse",
          options: [
            {
              label: "none",
              value: "none",
            },
            {
              label: "pulse",
              value: "pulse",
            },
            {
              label: "bounce",
              value: "bounce",
            },
          ],
          hidden: false,
        },
        color: {
          input_type: "COLOR_PICKER",
          value: "none",
          hidden: false,
        },
        disabled: {
          input_type: "SELECT",
          value: "false",
          options: [
            {
              label: "Yes",
              value: true,
            },
            {
              label: "No",
              value: false,
            },
          ],
          hidden: false,
        },
        loading: {
          input_type: "SELECT",
          value: "true",
          options: [
            {
              label: "Yes",
              value: true,
            },
            {
              label: "No",
              value: false,
            },
          ],
          hidden: false,
        },
        radius: {
          input_type: "SELECT",
          value: "lg",
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
        shadow_size: {
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
        shadow_color: {
          input_type: "COLOR_PICKER",
          value: "#d63031",
          hidden: false,
        },
        size: {
          input_type: "SELECT",
          value: "lg",
          options: [
            {
              label: "Extra small",
              value: "xs",
            },
            {
              label: "Small",
              value: "sm",
            },
            {
              label: "Medium",
              value: "md",
            },
            {
              label: "Large",
              value: "lg",
            },
          ],
          hidden: false,
        },
        tone: {
          input_type: "SELECT",
          value: "outline",
          options: [
            {
              label: "Solid",
              value: "solid",
            },
            {
              label: "Light",
              value: "light",
            },
            {
              label: "Outline",
              value: "outline",
            },
            {
              label: "Transparent",
              value: "transparent",
            },
          ],
          hidden: false,
        },
        target: {
          input_type: "SELECT",
          value: "self",
          options: [
            {
              label: "Current Tab",
              value: "self",
            },
            {
              label: "New Tab",
              value: "blank",
            },
          ],
          hidden: false,
        },
        action: {
          input_type: "ACTION_BUTTON",
          value: "numerology",
          hidden: false,
        },
      },
    },
    {
      id: 4,
      type: "ICON",
      label: "Icon",
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
    {
      id: 5,
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
};
