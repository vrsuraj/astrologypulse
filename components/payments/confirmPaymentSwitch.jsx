import React, { useEffect, useState } from "react";
import PaymentPage2 from "./confirmPaymentPage2";
import ConfirmPayment from "./confirmPaymentPage1";
import { useRouter } from "next/router";
import { getParameterByName } from "@/utils/urlParam";
import { Decode } from "@/utils/encodeDecode";

export default function ConfirmPaymentSwitch({ page_type }) {
  const [title, setTitle] = useState("");

  const router = useRouter();

  useEffect(() => {
    const queryString = getParameterByName("title", router.asPath);
    if (queryString) {
      const decode = Decode(queryString);
      setTitle(decode ? decode : "");
    }
  }, []);

  return (
    <div>
      {page_type !== "page2" ? (
        <PaymentPage2 title={title} />
      ) : (
        <ConfirmPayment title={title} />
      )}
    </div>
  );
}
