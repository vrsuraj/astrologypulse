import React, { useState } from "react";
import Payment from "../components/payments";
import { findComponent } from "../utils/arrayFunc";

export default function DoanloadNatalPdf() {
  const data = pageSection?.page_skeleton?.sections[0];
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  //   const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("CONTENT", components);
  const formCompoennt = findComponent("BIRTH_CHART_FORM", components);

  return (
    <div>
      <Payment
        formType="TRANSIT"
        formCompoennt={formCompoennt}
        paragraphComponent={paragraphComponent}
        allowedComponents={allowedComponents}
        headlineComponent={headlineComponent}
      />
    </div>
  );
}

DoanloadNatalPdf.getLayout = function getLayout(page) {
  return <>{page}</>;
};

const pageSection = {
  id: 27,
  page_name: "Natal Payment Page",
  page_route: "natal-payment",
  page_skeleton: {
    page_name: "Natal Payment Page",
    page_id: "natal_payment",
    seo: {
      meta_title: "",
      meta_keywords: ["new,fresh,hello"],
      meta_description: "",
    },
    sections: [
      {
        type: "PAYMENT",
        id: "payment",
        label: "Payment Section",
        config: {
          background: {
            type: "COLOR",
            value: "",
          },
          style: {
            type: "payment_section_style_one",
            value: "",
          },
        },
        variants: {
          payment_section_style_one: {
            label: "Payment Section Style 1",
            value: "payment_section_style_one",
            allowedComponents: ["CONTENT", "HEADLINE", "BIRTH_CHART_FORM"],
          },
        },
        currentVariant: "payment_section_style_one",
        components: [
          {
            id: 1,
            type: "CONTENT",
            label: "Content",
            props: {
              content: {
                input_type: "RICH_TEXTAREA",
                value:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
                value: "<p>What is Lorem Ipsum$35</p>",
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
            type: "BIRTH_CHART_FORM",
            label: "Birth Chart",
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
        ],
      },
    ],
  },
  page_visibility: true,
  page_id: "natal_payment",
  page_type: null,
};
