import React, { useState } from "react";
import PaymentBirthForm from "./paymentBirthForm";
import dynamic from "next/dynamic";
const DynamicForm = dynamic(() => import("./paymentBirthForm"), { ssr: false });

export default function PaymentSynastryCalculator({
  handleData,
  userData,
  initialvalue,
  formLabel,
  loader,
}) {
  const [femaleform, setfemaleform] = useState(false);
  const [userdata, setUserdata] = useState({
    female: initialvalue,
    male: initialvalue,
  });

  const handlepassdata = (e, key) => {
    if (Object.keys(e).length !== 0) {
      setUserdata((prev) => ({ ...prev, [key]: e }));
    }
    if (key == "male") {
      handleData({ ...userdata, [key]: e, email: e.email });
    } else {
      setfemaleform((prev) => !prev);
    }
  };

  return (
    <div className={`w-full  max-w-lg mx-auto`}>
      {!femaleform ? (
        <PaymentBirthForm
          userData={userData?.female}
          transit={false}
          solar={false}
          handleData={(val) => handlepassdata(val, "female")}
          bgTransparent={true}
          formLabel={formLabel?.female}
          initialvalue={initialvalue}
          email_status="0"
        />
      ) : (
        <DynamicForm
          userData={{}}
          transit={false}
          solar={false}
          handleData={(val) => handlepassdata(val, "male")}
          bgTransparent={true}
          formLabel={formLabel?.male}
          initialvalue={initialvalue}
          email_status="1"
          loader={loader}
          userdata={userData?.male}
        />
      )}
    </div>
  );
}
