import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { BorderSelect, InputStyle2 } from "./commonInputComponent";
// import { Paragraph } from "../text";
import { SolarPlaceInput, validate, daysInMonth } from "../forms/utils";
import { LoginLoader } from "../../../utils/loader";
import { FetchApi } from "../../../utils/fetchAPI";

const DynamicSample = dynamic(() => import("../forms/typehead"), {
  loading: () => "",
  ssr: false,
});

export default function PaymentForm(props) {
  const date = new Date();
  const [error, seterror] = useState(null);
  const [reqdate, setreqdate] = useState(false);
  const [solarYear, setSolarYear] = useState({
    solar_year: date.getFullYear(),
  });

  const [formValues, setFormValues] = useState(
    CheckUserdataLength(props.userdata, props.initialvalue)
  );

  useEffect(() => {
    setFormValues(CheckUserdataLength(props.userdata, props.initialvalue));
  }, [props.userdata]);

  const handleRadio = (e) => {
    const { value } = e.target;
    setSolarYear({ solar_year: value });
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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
      validate(formValues, props.solar, props.transit, props.email) !== ""
    ) {
      seterror(validate(formValues, props.solar, props.transit, props.email));
    } else if (
      validate(formValues, props.solar, props.transit, props.email) === "" &&
      !reqdate
    ) {
      let rea = Object.assign({}, formValues);
      props.passData ? props.passData(rea) : "";
      //props.link ? router.push(props.link) : "";
    } else {
      seterror("");
    }
  };

  const Timezone = async (input) => {
    const date =
      formValues.month + "-" + formValues.day + "-" + formValues.year;
    if (input.country !== "India") {
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
      return 5.5;
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
    <div className={`flex rounded-lg bg-white pb-4 flex-col w-full`}>
      <form
        onSubmit={submitingform}
        className={`px-5 md:px-7  py-3 flex mt-5 flex-col md:gap-y-7 gap-y-5 w-full max-w-lg mx-auto`}
      >
        <div className=" flex flex-col gap-3">
          <InputStyle2
            style="bg-zinc-200 text-zinc-800 "
            type="text"
            name="name"
            onChange={handleinput}
            value={formValues.name}
            placeholder={props?.formKeys?.props?.name_label?.value}
          />
          {props.email_status == "1" && (
            <InputStyle2
              style="bg-zinc-100 text-zinc-800"
              type="email"
              name="email"
              onChange={handleinput}
              value={formValues.email}
              placeholder={props?.formKeys?.props?.email_label?.value}
            />
          )}
          {/* <Paragraph
            style="text-[15px] text-zinc-800/80"
            text="We will be emailing your free report. Please confirm your email address."
          /> */}
        </div>
        <div className="flex flex-col gap-2">
          {props.label && (
            <label className={`text-left text-zinc-800 text-lg`}>
              {props?.formKeys?.date ||
                props?.formKeys?.props?.date_label?.value}{" "}
            </label>
          )}
          <div className="flex gap-3 items-center">
            <div className="inputbox">
              <BorderSelect
                style="bg-zinc-100 text-zinc-800"
                extra="min-w-[200px]"
                name="month"
                value={formValues.month}
                handleinput={handleinput}
              >
                <option value>Birth Month</option>
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
              </BorderSelect>
            </div>
            <div className="text-xl text-primary/40">/</div>
            <div className="inputbox">
              <InputStyle2
                style="bg-zinc-100 text-zinc-800"
                type="number"
                name="day"
                onChange={handleNumber}
                value={formValues.day}
                placeholder="DD"
              />
            </div>
            <div className="text-xl text-primary/40">/</div>
            <div className="inputbox">
              <InputStyle2
                style="bg-zinc-100 text-zinc-800"
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
        <div className="flex flex-col gap-2">
          {props.label && (
            <label className={`text-left   text-zinc-800 text-lg`}>
              {props?.formKeys?.time ||
                props?.formKeys?.props?.time_label.value}{" "}
            </label>
          )}
          <div className="flex gap-3 items-center">
            <BorderSelect
              style="bg-zinc-100 text-zinc-800"
              name="hour"
              value={formValues.hour}
              handleinput={handleNumber}
            >
              <option value disable>
                HH
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
            </BorderSelect>

            <div className="text-xl text-primary/40">:</div>
            <BorderSelect
              style="bg-zinc-100 text-zinc-800"
              name="min"
              value={formValues.min}
              handleinput={handleNumber}
            >
              <option value>MM</option>
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
            </BorderSelect>
            {/* <div className="inputbox ml-2">
              <BorderSelect
                name="ampm"
                value={formValues.month}
                handleinput={handleinput}
              >
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </BorderSelect>
            </div> */}
          </div>
        </div>
        <div className="w-full flex flex-col !gap-y-2 inputbox">
          {props.label && (
            <label className={`text-left  text-zinc-800  text-lg`}>
              {props?.formKeys?.place ||
                props?.formKeys?.props?.place_label?.value}{" "}
            </label>
          )}
          <DynamicSample
            type={"payment_form"}
            style={""}
            typeheadStyle={`bgInput bg-white  py-1 rounded-lg bg-zinc-100 text-zinc-800`}
            defaultPlace={[
              { name: formValues?.place, country: formValues?.country },
            ]}
            passdata={handle}
            clear={reqdate}
          />
        </div>

        {(props?.solar || props?.transit) && (
          <>
            {props.solar && (
              <div className="w-full flex-col flex gap-3">
                {props.label && (
                  <label className={`text-left text-lg text-zinc-800`}>
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
                    <label className="text-zinc-800" htmlFor="current">
                      Current Year
                    </label>
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
                    <label className="text-zinc-800" htmlFor="next">
                      Next Year
                    </label>
                  </div>
                </div>
              </div>
            )}
            <div className="w-full flex flex-col !gap-y-2 inputbox">
              {props.label && (
                <label className={`text-left text-zinc-800`}>
                  {props?.formKeys?.current_place}
                </label>
              )}
              <DynamicSample
                type={"payment_form"}
                style={""}
                typeheadStyle={`bgInput bg-white  py-1 rounded-lg bg-zinc-100 text-zinc-800`}
                defaultPlace={[
                  {
                    name: formValues?.current_location,
                    country: formValues?.country2,
                  },
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
            } text-white capitalize py-2 bg-red-500 rounded-md w-full pl-3`}
          >
            {error}
          </span>
        )}
        <div>
          <button
            disabled={props.loader}
            style={{
              background:
                "radial-gradient(circle at center ,rgb(240,238,180) 0%,rgb(221,158,68)60%,rgb(179,125,41)100%)",
            }}
            type="submit"
            className={`w-full capitalize hover:scale-[1.04] ease-in cursor-pointer text-[17px] rounded-lg px-10 py-4   text-zinc-800 font-bold mt-3 md:float-right`}
          >
            {props.loader ? (
              <LoginLoader />
            ) : (
              props?.formKeys?.button_config?.button_text ||
              props?.formKeys?.props.button_text?.value
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function CheckUserdataLength(data, initialValue) {
  return Object.keys(data).length > 0 ? data : initialValue;
}
