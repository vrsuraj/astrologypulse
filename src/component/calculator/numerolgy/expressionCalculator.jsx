import useForm from "../../context/useFormValue";
import NumerologyForm from "../../forms/numerologyForm";
import { Paragraph } from "../../text";
import { DynamicText } from "../../textComponent/dynamicText";
import { FetchApi } from "../../utils/fetchapi";
import { Loader2 } from "../../utils/loader";
import { addExtraPadding } from "../../utils/styleUtils";
import React, { useEffect, useState } from "react";

export default function ExpressionCalculator({
  jsonData,
  component_id,
  component_index,
}) {
  const defaultFormData = useForm();
  const [userData, setUserData] = useState({});
  const [response, setResponse] = useState({});

  const handlePassData = async (data) => {
    setUserData(data);
    handleData(data);
    // setLoader(true);
    await fetchdata(data);
  };

  useEffect(() => {
    if (defaultFormData["numerology"]) {
      setUserData(defaultFormData["numerology"]);
      fetchdata(defaultFormData["numerology"]);
    }
  }, [defaultFormData["numerology"]]);

  const handleData = (data) => {
    defaultFormData["adduserdata"]({ numerology: data });
  };
  const fetchdata = async (e) => {
    const ApiCall = await FetchApi({
      apiName: "expression_number",
      userData: e,
    });
    setResponse(ApiCall ? ApiCall : null);
    // setLoader(false);
  };

  const handleUserData = (val) => {
    defaultFormData["deleteuserdata"]({ ["numerology"]: null });
    setResponse({});
    setUserData({});
  };

  return (
    <div id={component_id} className={`${addExtraPadding(component_index)}`}>
      {Object.keys(userData).length == 0 ? (
        <div className="md:py-44 py-24 px-5 flex flex-col gap-10">
          <DynamicText value={jsonData?.content?.title}>
            <h1
              dangerouslySetInnerHTML={{ __html: jsonData?.content?.title }}
              className="md:text-6xl text-5xl text-white text-center font-semibold"
            ></h1>
          </DynamicText>
          <Paragraph
            text={jsonData?.content?.description}
            style="max-w-2xl text-zinc-300 text-center md:text-lg mx-auto"
          />
          <NumerologyForm
            label={jsonData?.config?.label_status == "1" ? true : false}
            formKeys={jsonData?.config?.form_label}
            passdata={handlePassData}
          />
        </div>
      ) : (
        <>
          {Object.keys(response).length > 0 ? (
            <div className="px-5 md:py-44 py-24 flex flex-col gap-14 w-full">
              <div className="flex  max-w-3xl mx-auto border-b border-secondary/50  w-full pb-10 gap-6  items-start">
                <div className="flex flex-col gap-4">
                  <h6 className=" text-zinc-200 md:text-lg">
                    {response?.name}
                  </h6>
                  <h6 className="text-zinc-200">
                    {Callculatedate(response?.birth_date)}
                  </h6>
                </div>
                <button
                  onClick={handleUserData}
                  className="duration-100 ease-in hover:bg-white hover:text-zinc-800  text-secondary/70 p-1 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              <div className="max-w-4xl mx-auto ">
                <h6
                  style={{ lineHeight: 1.5 }}
                  className="text-white mb-5 flex gap-2 items-center md:text-4xl text-3xl font-semibold"
                >
                  {response?.name}, your life path number is :{" "}
                  {response?.expression_number}
                </h6>
                <div className="flex flex-col max-w-3xl gap-10">
                  {response?.report.slice(0, 3).map((item, i) => (
                    <p className="md:text-lg text-zinc-200" key={i}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-[100px]">
              <Loader2 />
            </div>
          )}
        </>
      )}
    </div>
  );
}
