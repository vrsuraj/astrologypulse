import YesNoTarotCalculator from "@/src/component/tarot/yes-no-tarot";
import React, { useState } from "react";

export default function YesNoTarot() {
  return (
    <>
      <YesNoTarotCalculator data={pageSection?.page_skeleton?.sections[0]} />
    </>
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
        type: "YES_NO_TAROT",
        id: "yes-no-tarot",
        label: "Yes No Tarot",
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
            allowedComponents: ["HEADLINE", "CONTENT", "IMAGE"],
          },
          TarotCardWithoutContent: {
            label: "Tarot Card Without Content",
            value: "TarotCardWithoutContent",
            allowedComponents: ["HEADLINE", "IMAGE"],
          },
          OnlyTarotCards: {
            label: "Only Tarot Cards",
            value: "OnlyTarotCards",
            allowedComponents: ["IMAGE"],
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
            type: "IMAGE",
            label: "Tarot Card Image",
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
            id: 3,
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
        ],
      },
    ],
  },
  page_id: "yes_no_tarot",
  page_type: null,
  page_visibility: true,
};
