import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import WindowPaypal from "./paypal";
import { Loader2 } from "../../utils/loader";
import { DBEntry } from "@/utils/fetchAPI";
import { ErrorPopup } from "@/utils/authenticationUtils";

export default function PaymentButton({ token, name }) {
  const [error, seterror] = useState();
  const [paypal, setpaypal] = useState({ display: false });
  const [loader, setloader] = useState(false);

  const router = useRouter();

  const dbstore = async (merchand) => {
    setloader(true);
    let updateobj = {
      payment_channel: merchand == "paypal" ? "PAYPAL" : "STRIPE",
    };
    const updatePaymentChannel = await updateUserDetailBasedOnToken(
      token,
      updateobj
    );
    if (updatePaymentChannel) {
      if (merchand === "paypal") {
        setpaypal({ display: true });
      } else {
        const initiate_Payment = await initiatePayment(token);
        // console.log("update", initiate_Payment);

        if (initiate_Payment?.success) {
          router.push(initiate_Payment?.response?.session?.url);
        }
      }
    }
  };

  // update payment intent
  async function updateUserDetailBasedOnToken(token, detail) {
    try {
      const req = await DBEntry({
        method: "PUT",
        url: `services/payment/channel/${token}`,
        body: detail,
      });
      //return req;
      return req?.success;
    } catch (err) {
      return {
        staus: false,
        msg: `${err.message}`,
      };
    }
  }

  // initiate payment
  async function initiatePayment(token, detail) {
    try {
      const req = await DBEntry({
        method: "POST",
        url: `services/payment/initiate/${token}`,
        body: detail,
      });
      //return req;
      return req;
    } catch (err) {
      return {
        staus: false,
        msg: `${err.message}`,
      };
    }
  }

  const handleStripePayment = async () => {
    await dbstore("stripe");
  };

  const handlePaypal = async () => {
    await dbstore("paypal");
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => seterror(null), 4000);
    }
    if (loader) {
      setTimeout(() => setloader(null), 4000);
    }
  }, [error]);

  return (
    <>
      {paypal.display && <WindowPaypal token={token} />}
      {loader ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5 mt-7">
          <ErrorPopup text={error} />
          <PaymentButtonSwitch
            name={name}
            handlePaypal={handlePaypal}
            handleStripePayment={handleStripePayment}
          />
        </div>
      )}
    </>
  );
}

function PaymentButtonSwitch({ handlePaypal, name, handleStripePayment }) {
  switch (name) {
    case "page2":
      return (
        <div className="flex max-w-lg w-full mx-auto flex-col gap-5">
          <button
            onClick={handlePaypal}
            // disabled={loader}
            className="max-w-lg hover:bg-yellow-400 duration-100 ease-in flex justify-center mx-auto py-3 rounded-md px-10 w-full bg-yellow-500 "
          >
            <img className="h-[30px]" src="/imgs/paypal.png" alt="Paypal" />
          </button>
          <button
            onClick={handleStripePayment}
            // disabled={loader}
            className="max-w-lg hover:bg-indigo-600 duration-100 ease-in flex justify-center mx-auto py-[2px] rounded-md px-10 w-full bg-indigo-500 "
          >
            <svg
              className="w-[200px] h-[50px] fill-white"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3.6-11.6.6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4.1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6.1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4.1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z" />
            </svg>{" "}
          </button>
          <div className="flex gap-2 justify-center  items-center text-zinc-500">
            <svg
              version="1.0"
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M186 572 l-118 -66 4 -131 c3 -118 6 -136 31 -187 34 -70 101 -137
166 -167 l49 -23 61 32 c74 40 124 93 159 169 23 48 27 73 30 181 l4 126 -126
67 c-69 37 -129 67 -133 66 -4 -1 -61 -31 -127 -67z m245 -19 l109 -57 0 -113
c0 -138 -20 -200 -84 -267 -45 -46 -112 -86 -144 -86 -23 0 -99 49 -134 86
-15 16 -39 56 -54 89 -25 53 -28 71 -28 174 l-1 114 105 58 c58 32 109 58 114
59 5 0 58 -26 117 -57z"
                />
                <path
                  d="M357 334 l-68 -57 -35 34 c-18 18 -37 30 -40 26 -8 -8 43 -76 62 -84
14 -5 164 111 164 128 0 18 -16 9 -83 -47z"
                />
              </g>
            </svg>
            <p>Secure Payment Guaranteed</p>
          </div>
          <div className="max-w-sm mx-auto w-full">
            <img src="/imgs/solution-graphics.png" className="w-full" />
          </div>
        </div>
      );
    default:
      return (
        <div className="flex   flex-col items-start w-full ">
          <button
            onClick={handleStripePayment}
            className="flex w-full  border-b-transparent   bg-zinc-100  rounded-t-md gap-5 hover:border-green-700 hover:bg-green-300/20 border border-zinc-300  p-3.5 justify-between items-center"
          >
            <div className="flex gap-4 items-center">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex justify-start text-left flex-col">
                <h6 className="text-lg ">Card</h6>
                <p className="text-sm ">Powered by Stripe</p>
              </div>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
          <button
            onClick={handlePaypal}
            className="flex w-full bg-zinc-100    rounded-b-md gap-5  hover:border-green-700 hover:bg-green-300/20 border border-zinc-300  p-3.5 justify-between items-center"
          >
            <div className="flex gap-4 items-center">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 41 48"
                >
                  <path
                    fillRule="evenodd"
                    d="M838.912 663.62c-2.241-2.534-6.29-3.62-11.472-3.62h-15.035a2.15 2.15 0 0 0-2.128 1.801l-6.26 39.393a1.284 1.284 0 0 0 1.275 1.48h9.282l2.332-14.67-.073.46a2.143 2.143 0 0 1 2.12-1.802h4.41c8.668 0 15.452-3.492 17.434-13.593.06-.3.154-.874.154-.874.563-3.738-.004-6.275-2.04-8.576zm4.389 10.488c-2.156 9.945-9.03 15.208-19.937 15.208h-3.956L816.458 708h6.416c.927 0 1.714-.669 1.86-1.576l.075-.396 1.476-9.273.095-.512a1.877 1.877 0 0 1 1.858-1.576h1.172c7.58 0 13.516-3.056 15.25-11.89.696-3.547.362-6.52-1.359-8.669z"
                    transform="translate(-804 -660)"
                  />
                </svg>
              </div>
              <div className="flex truncate  justify-start text-left flex-col">
                <h6 className="text-lg ">Paypal</h6>
                <p className="text-sm ">Pay with Paypal</p>
              </div>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      );
  }
}
