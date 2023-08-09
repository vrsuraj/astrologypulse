import React from "react";
import CommonForm from "./commonInput";
import { formInitialValue } from "@/utils/const/formInitialValue";

export default function FormWrapper({
  transit,
  solar,
  bgColor,
  userData,
  handleData,
  formLabel,
  label_status,
  email_status,
  disclaimer,
}) {
  return (
    <div
      className={`${
        bgColor ? "" : "bg-third/50 "
      } border border-third p-[2px] w-full max-w-max  rounded-md `}
    >
      <div className="max-w-lg w-full rounded-md ">
        <CommonForm
          bgColor={bgColor}
          solar={transit ? transit : false}
          transit={solar ? solar : false}
          handleData={handleData}
          formKeys={formLabel}
          label={label_status ? true : false}
          email_status={email_status ? email_status : false}
          initialvalue={formInitialValue()}
          userData={userData}
          disclaimer={disclaimer}
        />
      </div>
    </div>
  );
}
