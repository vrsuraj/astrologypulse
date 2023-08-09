import React from "react";
import CallToActionSectionStyle1 from "../components/sections/callToAction.tsx/callToActionStyle1";
export default function Test() {
  return (
    <div>
      <CallToActionSectionStyle1
        data={pageSection?.page_skeleton?.sections[0]}
      />
    </div>
  );
}

const pageSection = {
  page_name: "yes no tarot",
  page_route: "yes-no-tarot",
  page_skeleton: {
    page_name: "yes no tarot",
    page_id: "birth_chart",
    seo: {
      meta_title: "",
      meta_keywords: [],
      meta_description: "",
    },
    sections: [
      {
        type: "CTA",
        id: "cta",
        label: "CTA Section",
        config: {
          style: {
            type: "color",
            value: "red",
          },
        },
        variants: {
          Color: {
            label: "Default",
            value: "Color",
            allowedComponents: ["CONTENT", "HEADLINE", "BUTTON"],
          },
          Image: {
            label: "CTA Section With Background Image",
            value: "Image",
            allowedComponents: ["CONTENT", "HEADLINE", "BUTTON"],
          },
          CTAStyleThree: {
            label: "CTA Section With Sub Text",
            value: "CTAStyleThree",
            allowedComponents: ["SUB_TEXT", "CONTENT", "HEADLINE", "BUTTON"],
          },
          CTAStyleFour: {
            label: "CTA Section With Two Button",
            value: "CTAStyleFour",
            allowedComponents: [
              "SUB_TEXT",
              "HEADLINE",
              "BUTTON",
              "EXTRA_BUTTON",
            ],
          },
          CTAStyleFive: {
            label: "CTA Section With Image",
            value: "CTAStyleFive",
            allowedComponents: ["CONTENT", "HEADLINE", "BUTTON", "IMAGE"],
          },
          CTAStyleSix: {
            label: "CTA Section With All Components",
            value: "CTAStyleSix",
            allowedComponents: [
              "CONTENT",
              "HEADLINE",
              "BUTTON",
              "IMAGE",
              "SUB_TEXT",
            ],
          },
        },
        currentVariant: "CTAStyleFour",
        components: [
          {
            id: 1,
            type: "CONTENT",
            label: "Content",
            props: {
              content: {
                input_type: "RICH_TEXTAREA",
                value:
                  '<p>helo by<a href="https://google.com">ebybey</a>&nbsp;sjdhfhdsf<br><span style="background-color: rgb(163, 102, 255);color: rgb(241, 241, 241)">sjkdnfdshjf</span></p>',
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
            id: 2,
            type: "HEADLINE",
            label: "Headline",
            props: {
              content: {
                input_type: "RICH_TEXTAREA",
                value: "<p>dfjhdbfjhb</p>",
                hidden: false,
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
            id: 3,
            type: "BUTTON",
            label: "CTA Button",
            props: {
              button_text: {
                input_type: "TEXT_INPUT",
                value: "Hero Alom",
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

              target: {
                input_type: "SELECT",
                value: "current",
                options: [
                  {
                    label: "Current Tab",
                    value: "self",
                  },
                  {
                    label: "New Tab",
                    value: "self",
                  },
                ],
                hidden: false,
              },

              action: {
                input_type: "ACTION_BUTTON",
                value: "transit-chart",
                hidden: false,
              },
            },
          },
          {
            id: 4,
            type: "EXTRA_BUTTON",
            label: "Second Button",
            props: {
              button_text: {
                input_type: "TEXT_INPUT",
                value: "Hero Alom",
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

              target: {
                input_type: "SELECT",
                value: "current",
                options: [
                  {
                    label: "Current Tab",
                    value: "self",
                  },
                  {
                    label: "New Tab",
                    value: "self",
                  },
                ],
                hidden: false,
              },

              action: {
                input_type: "ACTION_BUTTON",
                value: "transit-chart",
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
                  "https://astropages.s3.ap-south-1.amazonaws.com/test_db/Screenshot 2023-07-17 at 11.23.11 PM.png",
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
            id: 6,
            type: "SUB_TEXT",
            label: "Sub Text",
            props: {
              content: {
                input_type: "RICH_TEXTAREA",
                value:
                  '<p>helo by<a href="https://google.com">ebybey</a>&nbsp;sjdhfhdsf<br><span style="background-color: rgb(163, 102, 255);color: rgb(241, 241, 241)">sjkdnfdshjf</span></p>',
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
        ],
      },
    ],
  },
  page_id: "yes_no_tarot",
  page_type: null,
  page_visibility: true,
};
