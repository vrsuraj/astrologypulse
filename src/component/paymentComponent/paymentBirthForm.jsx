import PaymentForm from "../forms/paymentForm";
import React from "react";

export default function PaymentBirthForm({
  solar,
  loader,
  transit,
  handleData,
  userData,
  formLabel,
  initialvalue,
  email_status,

  bgTransparent,
}) {
  return (
    <>
      <PaymentForm
        bgTransparent={bgTransparent}
        solar={solar}
        loader={loader}
        transit={transit}
        passData={handleData}
        userdata={userData}
        label="1"
        style=""
        email_status={email_status ? email_status : "1"}
        formKeys={formLabel}
        initialvalue={initialvalue}
      />
    </>
  );
}
