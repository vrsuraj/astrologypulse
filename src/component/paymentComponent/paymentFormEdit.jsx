import React from "react";
import PaymentBirthForm from "./paymentBirthForm";
import PaymentSynastryCalculator from "./paymentSynastryForm";
import { formInitialValue } from "@/utils/const/formInitialValue";
import PopupModel from "../../../components/animation/model";

export default function PaymentFormEdit({
  active,
  handleEdit,
  form_label,
  form_type,
  handleModel,
  userData,
  loader,
}) {
  return (
    <>
      <div
        onClick={handleModel}
        className="bg-zinc-900/60 min-h-screen absolute z-[2] top-0 w-full left-0"
      />

      <PopupModel active={active}>
        <div className="bg-white  max-w-lg pt-5 mx-auto rounded-[10px]">
          <button
            onClick={handleModel}
            className="flex items-center gap-1 pl-5 text-blue-500 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>{" "}
            Back
          </button>
          <div className="w-full">
            {form_type == "synastry" ? (
              <PaymentSynastryCalculator
                loader={loader}
                userData={{ female: {}, male: {} }}
                handleData={handleEdit}
                bgTransparent={true}
                formLabel={form_label}
                initialvalue={formInitialValue[form_type]}
              />
            ) : (
              <PaymentBirthForm
                loader={loader}
                userData={userData}
                transit={form_type == "transit"}
                solar={form_type == "solar"}
                handleData={handleEdit}
                bgTransparent={true}
                formLabel={form_label}
                initialvalue={formInitialValue[form_type]}
              />
            )}
          </div>
        </div>
      </PopupModel>
    </>
  );
}
