import CenterVideoSection from "@/components/sections/video/centerVideo";
import React from "react";

type Props = {};

export default function VideoSection({}: Props) {
  return (
    <div>
      <CenterVideoSection data={pageSection} />
    </div>
  );
}

const pageSection = {
  type: "VIDEO",
  id: "video",
  label: "Video Section",
  config: {
    background: {
      type: "COLOR",
      value: "#1E1F24",
    },
    style: {
      type: "video_stlye_one",
      value: "",
    },
  },
  variants: {
    video_stlye_one: {
      label: "Video Style 1",
      value: "video_stlye_one",
      allowedComponents: ["VIDEO"],
    },
    video_style_two: {
      label: "Video Style 2",
      value: "video_stlye_two",
      allowedComponents: ["CONTENT", "HEADLINE", "BUTTON", "VIDEO", "SUB_TEXT"],
    },
    video_style_three: {
      label: "Video Style 3",
      value: "video_stlye_three",
      allowedComponents: ["CONTENT", "HEADLINE", "BUTTON", "VIDEO", "SUB_TEXT"],
    },
  },
  currentVariant: "video_style_three",
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
          value: "Lorem Ipsum Text",
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
          value: "solid",
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
        tab: {
          input_type: "RADIO",
          value: "current", //blank
          options: [
            {
              label: "Current Tab",
              value: "current",
            },
            {
              label: "New Tab",
              value: "new",
            },
          ],
          hidden: false,
        },

        action: {
          input_type: "ACTION_BUTTON",
          value: "transit-chart", // or external link
          hidden: false,
        },
      },
    },

    {
      id: 4,
      type: "VIDEO",
      label: "Video",
      props: {
        thumbnail_image: {
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
        video_src: {
          input_type: "TEXT_INPUT",
          value: "https://www.youtube.com/",
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
      },
    },
    {
      id: 5,
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
};
