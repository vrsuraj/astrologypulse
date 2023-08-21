import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FetchApi } from "@/utils/fetchAPI";
const style = require("../../../styles/Home.module.css");
const DynamicSample = dynamic(() => import("./typehead"), {
  loading: () => "",
  ssr: false,
});

export default function CommonForm(props) {
  const date = new Date();
  const [error, seterror] = useState(null);
  const [reqdate, setreqdate] = useState(false);
  const [solarYear, setSolarYear] = useState({
    solar_year: date.getFullYear(),
  });
  const [formValues, setFormValues] = useState(props.initialvalue);
  useEffect(() => {
    const obj = {
      place: "",
    };
    if (props.transit || props.solar) {
      obj["current_location"] = "";
    }
    if (Object.keys(props.userData).length > 0) {
      setFormValues({ ...props.userData, ...obj });
    }
  }, [props.userData]);

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleRadio = (e) => {
    const { value } = e.target;
    setSolarYear({ solar_year: value });
  };

  setTimeout(function () {
    seterror(null);
    setreqdate(false);
  }, 4000);

  const handleNumber = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: parseInt(value) });
  };

  const submitingform = async (e) => {
    e.preventDefault();
    if (
      daysInMonth(formValues.month, formValues.year) < parseInt(formValues.day)
    ) {
      setreqdate(true);
      setFormValues((prev) => ({ ...prev, birth: "" }));
      seterror("Please enter correct date");
    } else if (
      validate(formValues, props.solar, props.transit, props.email_status) !==
      ""
    ) {
      seterror(
        validate(formValues, props.solar, props.transit, props.email_status)
      );
    } else if (
      validate(formValues, props.solar, props.transit, props.email_status) ===
        "" &&
      !reqdate
    ) {
      let rea = Object.assign({}, formValues);
      props.handleData ? props.handleData(rea) : "";
    } else {
      seterror("");
    }
  };

  const Timezone = async (input) => {
    const date =
      formValues.month + "-" + formValues.day + "-" + formValues.year;
    if (input.country !== "United States") {
      const timezone = await FetchApi({
        apiName: "timezone_with_dst",
        userData: {
          latitude: parseFloat(input.lat),
          longitude: parseFloat(input.lon),
          date: date,
        },
      });
      return timezone.timezone;
    } else {
      return -4;
    }
  };

  const handle = async (input, solar) => {
    if (input) {
      if (
        isNaN(formValues.day) ||
        formValues.day === "" ||
        isNaN(formValues.month) ||
        formValues.month === "" ||
        isNaN(formValues.year) ||
        formValues.year === ""
      ) {
        setreqdate(true);
        setFormValues((prev) => ({ ...prev, place: "" }));
        seterror("Please enter correct Date");
      } else {
        const tzone = await Timezone(input);
        const inputObject = SolarPlaceInput(input, tzone);
        const solarReturn = solar ? inputObject.obj2 : inputObject.obj;
        setFormValues((prev) => ({
          ...prev,
          ...solarReturn,
        }));
      }
    }
  };

  return (
    <div
      style={{ background: props.bgColor ? props.bgColor : "" }}
      className={`flex bg-primary pb-4 flex-col w-full`}
    >
      {props?.children}
      <form
        onSubmit={submitingform}
        className={`px-3 md:px-7 py-3 flex mt-3 flex-col md:gap-y-8 gap-y-6 w-full`}
      >
        {props?.email_status && (
          <div className="flex flex-col gap-0 inputbox">
            <input
              className={`${getInputStyle(props?.type, props?.style)} `}
              type="email"
              name="email"
              onChange={handleinput}
              value={formValues.email}
              placeholder={props?.formKeys?.props?.email_label?.value}
            />
          </div>
        )}
        <div className="inputbox">
          {/* {props.label && (
            <label className={`text-left`}>{props.formKeys.name}</label>
          )} */}
          <div className="">
            <input
              className={`${getInputStyle(props?.type, props?.style)} `}
              type="text"
              name="name"
              onChange={handleinput}
              value={formValues.name}
              placeholder={props?.formKeys?.props?.name_label?.value}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 inputbox">
          {props?.label && (
            <label className={`text-left`}>
              {props?.formKeys?.date ||
                props?.formKeys?.props?.date_label?.value}
            </label>
          )}
          <div className="flex gap-5 flex-grow-0">
            <div className="inputbox">
              <select
                name="month"
                value={formValues.month}
                className={`${style.select2} ${getSelectStyle(
                  props?.type,
                  props?.style
                )}`}
                onChange={handleNumber}
              >
                <option value="" disable={"true"}>
                  Birth Month
                </option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div className="inputbox">
              <input
                className={`${getInputStyle(props?.type, props?.style)} `}
                type="number"
                name="day"
                min={1}
                max={31}
                onChange={handleNumber}
                value={formValues.day}
                placeholder="DD"
              />
            </div>

            <div className="inputbox">
              <input
                className={`${getInputStyle(props?.type, props?.style)} `}
                type="number"
                name="year"
                min={1940}
                max={2050}
                onChange={handleNumber}
                value={formValues.year}
                placeholder="YYYY"
              />
            </div>
          </div>
        </div>
        <div className="inputbox">
          {props?.label && (
            <label className={`text-left`}>
              {props?.formKeys?.time ||
                props?.formKeys?.props?.time_label.value}
            </label>
          )}
          <div className="flex gap-5 ">
            <div className="inputbox">
              <select
                name="hour"
                value={formValues.hour}
                className={`${style.select2} ${getSelectStyle(
                  props?.type,
                  props?.style
                )}`}
                onChange={handleNumber}
              >
                <option value="" disable={"true"}>
                  Birth Hour
                </option>
                <option value="0">00 (12 midnight)</option>
                <option value="1">01 (am)</option>
                <option value="2">02 (am)</option>
                <option value="3">03 (am)</option>
                <option value="4">04 (am)</option>
                <option value="5">05 (am)</option>
                <option value="6">06 (am)</option>
                <option value="7">07 (am)</option>
                <option value="8">08 (am)</option>
                <option value="9">09 (am)</option>
                <option value="10">10 (am)</option>
                <option value="11">11 (am)</option>
                <option value="12">12 (noon)</option>
                <option value="13">13 (1 pm)</option>
                <option value="14">14 (2 pm)</option>
                <option value="15">15 (3 pm)</option>
                <option value="16">16 (4 pm)</option>
                <option value="17">17 (5 pm)</option>
                <option value="18">18 (6 pm)</option>
                <option value="19">19 (7 pm)</option>
                <option value="20">20 (8 pm)</option>
                <option value="21">21 (9 pm)</option>
                <option value="22">22 (10 pm)</option>
                <option value="23">23 (11 pm)</option>
              </select>
            </div>
            <div className="inputbox">
              <select
                name="min"
                value={formValues.min}
                className={`${style.select2} ${getSelectStyle(
                  props?.type,
                  props?.style
                )}`}
                onChange={handleNumber}
              >
                <option value>Birth Minute</option>
                <option value="0">00</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-1 inputbox">
          {props?.label && (
            <label className={`text-left`}>
              {props?.formKeys?.place ||
                props?.formKeys?.props?.place_label?.value}
            </label>
          )}
          <DynamicSample
            type={props.type}
            style={props.style}
            typeheadStyle={`${getInputStyle(props?.type, props?.style)} ${
              props.style == "bg" ? "!p-[2px]" : "!p-0"
            } `}
            defaultPlace={[
              { name: formValues?.place, country: formValues?.country },
            ]}
            passdata={(d) => handle(d)}
            clear={reqdate}
          />
        </div>
        {(props?.solar || props?.transit) && (
          <>
            {props?.solar && (
              <div className="w-full flex-col flex gap-5">
                {props.label && (
                  <label className={`text-left`}>
                    {props?.formKeys?.solar_year}
                  </label>
                )}
                <div className="flex w-full gap-10">
                  <div className="flex gap-2  items-center">
                    <input
                      onChange={handleRadio}
                      defaultChecked={
                        solarYear.solar_year === date.getFullYear()
                      }
                      type="radio"
                      name="solar_year"
                      className="w-5 h-5 accent-primary"
                      id="current"
                      value={date.getFullYear()}
                    />
                    <label htmlFor="current">Current Year</label>
                  </div>
                  <div className="flex gap-2  items-center">
                    <input
                      onChange={handleRadio}
                      type="radio"
                      defaultChecked={
                        solarYear.solar_year ===
                        (date.getFullYear() + 1).toString()
                      }
                      name="solar_year"
                      className="w-5 h-5 accent-primary"
                      id="next"
                      value={date.getFullYear() + 1}
                    />
                    <label htmlFor="next">Next Year</label>
                  </div>
                </div>
              </div>
            )}
            <div className="w-full flex flex-col gap-y-1 inputbox">
              {props?.label && (
                <label className={`text-left`}>
                  {props?.formKeys?.current_place}
                </label>
              )}
              <DynamicSample
                type={props?.type}
                style={props?.style}
                typeheadStyle={`${getInputStyle(props?.type, props?.style)} ${
                  props.style == "bg" ? "!p-[2px]" : "!p-0"
                } `}
                defaultPlace={[
                  { name: formValues?.place, country: formValues?.country },
                ]}
                passdata={(d) => handle(d, true)}
                clear={reqdate}
              />
            </div>
          </>
        )}

        {error !== null && (
          <span
            className={`${
              error !== null ? "block " : "hidden"
            } text-white p-2 bg-red-500 rounded-md capitalize w-full pl-3`}
          >
            {error}
          </span>
        )}
        <div>
          <button
            type="submit"
            className={`w-full capitalize  cursor-pointer text-[17px] rounded-md px-10 py-3 bg-gradient-to-r from-highlight  to-third  hover:from-third hover:to-highlight  duration-100 ease-in text-zinc-800 mt-3   `}
          >
            {props?.formKeys?.button_config?.button_text ||
              props?.formKeys?.props.button_text?.value}
          </button>
          {props?.disclaimer && (
            <p className="text-zinc-400 text-[12px] mt-4 text-center">
              Disclaimer: {props.disclaimer}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export function SolarPlaceInput(input, tzone) {
  const obj = {
    place: input.name,
    lat: input.lat,
    lon: input.lon,
    country: input.country,
    tzone: tzone,
  };
  const obj2 = {
    current_location: input.name,
    current_lat: input.lat,
    current_lon: input.lon,
    current_country: input.country,
    current_tzone: tzone,
  };
  return { obj, obj2 };
}

export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export function getInputStyle(type, key) {
  if (type == "form-style-3") {
    return inputStyle["bottom_border"];
  } else if (type == "form-style-2") {
    return inputStyle["bg"];
  } else {
    if (inputStyle[key]) {
      return inputStyle[key];
    } else {
      return inputStyle["bottom_border"];
    }
  }
}

export function getSelectStyle(type, key) {
  if (type == "form-style-3") {
    return selectStyle["bottom_border"];
  } else if (type == "form-style-2") {
    return selectStyle["bg"];
  } else if (type == "payment_form") {
    return selectStyle["customBgSelect"];
  } else {
    if (selectStyle[key]) {
      return selectStyle[key];
    } else {
      return selectStyle["bottom_border"];
    }
  }
}

const inputStyle = {
  bg: "bgInput",
  border: "borderInput",
  bottom_border: "input2",
};

const selectStyle = {
  bg: "bgSelect",
  bottom_border: "input2",
  border: "borderSelect",
  customBgSelect: "customBgSelect",
};

export const validate = (values, solar, transit, email) => {
  let error = "";
  if (email && !values.email) {
    error = "Please enter your email";
  } else if (email && !emailValidate(values.email)) {
    error = "Please provide valid email";
  } else if (!values.name) {
    error = "Please enter your name";
  } else if (values.hour === "" || isNaN(values.hour) || values.hour === null) {
    error = "Please enter correct time";
  } else if (!values.year) {
    error = "Please enter your birth year";
  } else if (!values.month) {
    error = "Please enter your birth month";
  } else if (!values.day) {
    error = "Please enter your  birth day";
  } else if (values.min === "" || isNaN(values.min) || values.min === null) {
    error = "Please enter correct time";
  } else if (values.place == "") {
    error = "Please enter your  birth place";
  } else if ((solar || transit) && values.current_location == "") {
    error = "Please enter your current place";
  }
  return error;
};

function emailValidate(text) {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailFormat.test(text);
}
