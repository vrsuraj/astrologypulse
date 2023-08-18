import { DBEntry } from "@/utils/fetchAPI";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function WindowPaypal({ token }) {
  const [response, setResponse] = useState({});

  const router = useRouter();

  useEffect(() => {
    getPaymentDetail(token);
  }, []);

  async function getPaymentDetail(token) {
    try {
      const req = await DBEntry({
        method: "POST",
        url: `services/payment/initiate/${token}`,
      });
      if (req.success) {
        setResponse(req?.response);
        setTimeout(() => handleSubmit(), 4000);
      } else {
        router.push("/");
      }
    } catch (err) {
      return {
        staus: false,
        msg: `${err.message}`,
      };
    }
  }

  const handleSubmit = () => {
    document.redirect.submit();
  };

  //const live = "https://www.paypal.com/cgi-bin/webscr";

  const test = "https://www.sandbox.paypal.com/cgi-bin/webscr";

  return (
    <div>
      <form action={test} method="post" name="redirect" target="_top">
        <input type="hidden" name="cmd" value="_xclick" />
        <input type="hidden" name="business" value={response?.business_email} />
        <input type="hidden" name="item_name" value={response?.item_name} />
        <input type="hidden" name="no_note" value="1" />
        <input type="hidden" name="no_shipping" value="1" />
        <input type="hidden" name="landing_page" value="billing" />
        <input type="hidden" name="solution_type" value="Sole" />
        <input type="hidden" name="rm" value="1" />
        <input type="hidden" name="return" value={response?.success_url} />
        <input
          type="hidden"
          name="cancel_return"
          value={response?.failed_url}
        />
        <input type="hidden" name="src" value="1" />
        <input type="hidden" name="amount" value={response?.amount} />
      </form>
    </div>
  );
}
