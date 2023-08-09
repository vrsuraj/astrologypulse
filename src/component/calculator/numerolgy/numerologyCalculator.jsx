import useForm from "../../context/useForm";
import NumerologyForm from "../../forms/numerologyForm";
import { Paragraph } from "../../text";
import { DynamicText } from "../../textComponent/dynamicText";
import { FetchApi } from "../../utils/fetchapi";
import { Loader2 } from "../../utils/loader";
import { addExtraPadding } from "../../utils/styleUtils";
import React, { useEffect, useState } from "react";

export default function NumerologyCalculator({
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
      apiName: "numerological_numbers",
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
        <div className={` px-5 flex flex-col gap-10`}>
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
            <div className="px-5 flex flex-col gap-14 w-full">
              <div className="flex max-w-3xl mx-auto border-b border-secondary/50  w-full pb-10 gap-6  items-start">
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
              <div className="max-w-3xl w-full mx-auto flex flex-col gap-5 ">
                <FavorableTable
                  bg="bg-gradient-to-r from-blue-400/80 to-blue-300"
                  name="Life path number"
                  color="bg-gradient-to-r from-blue-200 to-blue-300"
                  desc={`Your life path number is ${response?.lifepath_number}. It represents both the situation and opportunities that are attracted to you as the result of your actions.`}
                  value={response?.lifepath_number}
                />
                <FavorableTable
                  name="Personality Number"
                  bg="bg-gradient-to-r from-pink-400/80 to-pink-300"
                  color="bg-gradient-to-r from-pink-200 to-pink-300"
                  desc={`Your Personality number also called as Persona is ${response?.personality_number}. Personality Number is compliment to the inner aspect of the self.`}
                  value={response?.personality_number}
                />
                <FavorableTable
                  name="Expression Number"
                  bg="bg-gradient-to-r from-purple-400/80 to-purple-300"
                  color="bg-gradient-to-r from-purple-200 to-purple-300"
                  desc={`Your Expression Number or Total Name Number is ${response?.expression_number}. It describes the magic that you bring into the world.`}
                  value={response?.expression_number}
                />
                <FavorableTable
                  name="Challenge Numbers"
                  color="bg-gradient-to-r from-red-200 to-red-300"
                  value={response?.challenge_numbers.join(",")}
                />
                <FavorableTable
                  name=" Soul Urge Number "
                  bg="bg-gradient-to-r from-yellow-400/80 to-yellow-300"
                  color="bg-gradient-to-r from-yellow-100 to-yellow-300"
                  value={response?.subconscious_self_number}
                />
                <FavorableTable
                  bg="bg-gradient-to-r from-indigo-400/80 to-indigo-300"
                  name="Subconscious Self Number"
                  color="bg-gradient-to-r from-indigo-200 to-indigo-300"
                  value={response?.subconscious_self_number}
                />
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

export function FavorableTable(props) {
  const color = props.color || "";
  return (
    <div
      className={`${color} w-full relative overflow-hidden z-[1] flex rounded-[10px] md:p-10 p-5 text-left justify-between text-sm`}
    >
      <div className="flex flex-col gap-4">
        <h6 className=" font-semibold text-gray-800 md:text-2xl text-xl w-full">
          {props.name}
        </h6>
        {props.desc && (
          <p
            className="md:text-lg max-w-xl"
            dangerouslySetInnerHTML={{ __html: props.desc }}
          ></p>
        )}
      </div>
      <div
        className={`${props.bg} z-[-1] absolute w-[150px] rounded-full h-[150px] right-[-60px] top-[-60px] sm:right-[-30px] sm:top-[-30px]`}
      ></div>
      <p className="text-center md:text-4xl text-2xl sm:text-3xl text-gray-800">
        {props.value}
      </p>
    </div>
  );
}

export const Callculatedate = (d) => {
  const s = d.split("-");
  return monthobj2[s[1]] + " " + s[2] + ", " + s[0];
};

export let monthobj2 = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
