import { DBEntry } from "@/utils/fetchAPI";
import { formInitialValue } from "@/utils/const/formInitialValue";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import PaymentBirthForm from "@/src/component/paymentComponent/paymentBirthForm";
import PaymentSynastryCalculator from "@/src/component/paymentComponent/paymentSynastryForm";
import Text from "@/src/component/text";
import Paragraph from "@/src/component/paragraph";
import { Decode, Encode } from "../../utils/encodeDecode";
import { getParameterByName } from "@/utils/urlParam";
import { ErrorPopupModel } from "@/utils/authenticationUtils";

type Props = {
  allowedComponents: any;
  headlineComponent: any;
  paragraphComponent: any;
  formType: string;
  formCompoennt: any;
};

export default function Payment({
  allowedComponents,
  headlineComponent,
  paragraphComponent,
  formType,
  formCompoennt,
}: Props) {
  const router = useRouter();
  const [userData, setUserData] = useState<any>({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const queryString = getParameterByName("session", router.asPath);
    const queryToken = getParameterByName("token", router.asPath);
    if (queryString) {
      const decode = Decode(queryString);
      setUserData(decode ? JSON.parse(decode) : {});
    }
    if (queryToken) {
      setToken(queryToken);
    }
  }, [router]);

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 4000);
    }
  }, [error]);

  const handleError = () => {
    setError(null);
  };

  const handleData = async (data: any) => {
    // console.log(data);
    setLoader(true);
    // fetch product
    const productType = "TRANSIT";
    //formCompoennt?.props?.product?.product_type;
    if (productType) {
      if (token) {
        const d: any = await updateUserDetailBasedOnToken(token, data);
        if (d?.success) {
          const obj = {
            token: token,
            title: Encode(headlineComponent?.props?.content?.value),
          };
          await router.push({
            pathname: "/confirm-payment",
            query: obj,
          });
        }
      } else {
        const getProductDetail = await getProductDetailBasedOnType(productType);
        if (getProductDetail?.success) {
          const callback = await handleCallback(data);
          setLoader(false);
          if (callback.success) {
            const obj = {
              token: callback?.response?.token,
              title: Encode(headlineComponent?.props?.content?.value),
            };
            await router.push({
              pathname: "/confirm-payment",
              query: obj,
            });
          }
        } else {
          setLoader(false);
          setError(getProductDetail?.message);
        }
      }
    }
  };

  const handleCallback = async (data: any) => {
    try {
      const req = await DBEntry({
        method: "POST",
        url: "services/payment/create-order",
        body: {
          user_details: data,
          email: data.email,
          order_for: 1,
        },
      });
      return req;
    } catch (err: any) {
      return {
        staus: false,
        msg: `${err.message}`,
      };
    }
  };

  // get product detail based on type
  async function getProductDetailBasedOnType(type: string) {
    try {
      const req = await DBEntry({
        method: "GET",
        url: `public/product/${type}`,
      });
      return req;
    } catch (err: any) {
      return {
        staus: false,
        msg: `${err.message}`,
      };
    }
  }

  // handle userdetail update
  async function updateUserDetailBasedOnToken(token: any, userDetail: any) {
    try {
      const req = await DBEntry({
        method: "PUT",
        url: `services/payment/user-details/${token}`,
        body: { user_details: userDetail },
      });
      return req;
    } catch (err: any) {
      return {
        staus: false,
        msg: `${err.message}`,
      };
    }
  }

  return (
    <>
      {error && <ErrorPopupModel passclose={handleError} text={error} />}
      <div className="py-14  overflow-hidden w-full min-h-screen  h-full bg-[rgb(224,231,255)] ">
        <div className="flex flex-col text-center  gap-10  items-center">
          <div className="flex flex-col gap-5 max-w-4xl mx-auto">
            {allowedComponents.includes("HEADLINE") && headlineComponent && (
              <Text
                size={headlineComponent?.props?.size?.value || "5xl"}
                variant={headlineComponent?.props?.variant?.value || "h2"}
                weight={headlineComponent?.props?.weight?.value || "bold"}
                color={headlineComponent?.props?.color?.value || "#000"}
              >
                {headlineComponent?.props.content.value}
              </Text>
            )}
            {allowedComponents.includes("CONTENT") && paragraphComponent && (
              <Paragraph
                extra="max-w-3xl mx-auto"
                size={paragraphComponent?.props?.size?.value || "lg"}
                color="#3f3f46"
              >
                {paragraphComponent?.props?.content?.value}
              </Paragraph>
            )}
          </div>
        </div>
        <div className="max-w-xl  mx-auto md:mt-10 mt-5 px-5">
          {formType == "SYNASTRY" ? (
            <PaymentSynastryCalculator
              userData={{ female: {}, male: {} }}
              handleData={handleData}
              formLabel={{
                female: formCompoennt?.female,
                male: formCompoennt?.male,
              }}
              initialvalue={formInitialValue()}
              loader={undefined}
            />
          ) : (
            <PaymentBirthForm
              loader={loader}
              userData={userData}
              transit={formType.toLowerCase() == "transit"}
              solar={formType.toLowerCase() == "solar"}
              handleData={handleData}
              bgTransparent={true}
              formLabel={formCompoennt}
              initialvalue={
                Object.keys(userData).length > 0
                  ? userData
                  : formInitialValue(formType.toLowerCase())
              }
              email_status={undefined}
            />
          )}
        </div>
      </div>
    </>
  );
}

Payment.getLayout = function getLayout(page: ReactNode) {
  return <>{page}</>;
};

const test: any = {
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
      allowedComponents: ["CONTENT", "HEADLINE", "PAYMENT_FORM"],
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
      type: "PAYMENT_FORM",
      label: "payment form",
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
        action: {
          input_type: "ACTION_BUTTON",
          value: "payment",
        },
        product_type: {
          input_type: "SELECT",
          value: "NATAL",
          json: {
            id: 1,
            name: "birth chart pdf",
            type: "DIGITAL",
            product_type: "NATAL",
            description: "Test",
            price: "49.00",
            strike_price: "999.00",
            currency: "inr",
            sku: "test",
            is_active: true,
            is_deleted: false,
            created_at: "2023-08-11T13:05:54.252Z",
            updated_at: null,
          },
        },
      },
    },
  ],
};
