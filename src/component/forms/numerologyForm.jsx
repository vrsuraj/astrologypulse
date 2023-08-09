import React, { useState } from "react";
const style = require("../../styles/Home.module.css");
export default function NumerologyForm({ formKeys, passdata }) {
  const [error, seterror] = useState(null);
  const [loader, setloader] = useState(false);

  let initialValue = {
    name: "",
    day: "",
    month: "",
    year: "",
  };
  const [formValue, setformValue] = useState(initialValue);
  const [formError, setformError] = useState(initialValue);

  if (error) {
    setTimeout(() => seterror(null), 2000);
  }
  const submitingform = (e) => {
    e.preventDefault();
    setformError(validay(formValue));

    if (Object.keys(validay(formValue)).length !== 0) {
      seterror("All detailed are must be filled");
      setformValue(formValue);
    } else if (Object.keys(validay(formValue)).length === 0) {
      setloader(true);
      let rea = Object.assign(
        {},
        {
          full_name: formValue.name,
          date: formValue.day,
          month: formValue.month,
          year: formValue.year,
        }
      );
      passdata(rea);
      seterror(null);
    } else {
      setformError(validay(formValue));
      seterror("Please enter correct day");
    }
  };
  const validay = (values) => {
    let error = {};
    if (!values.name) {
      error.name = "*required";
    }
    if (!values.year) {
      error.year = "*required";
    }
    if (!values.month) {
      error.month = "*required";
    }
    if (!values.day) {
      error.day = "*required";
    }
    return error;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumber = (e) => {
    const { name, value } = e.target;
    setformValue((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <form
        id='numerology'
        onSubmit={submitingform}
        className='max-w-xl mx-auto bg-secondary shadow-lg p-6 sm:p-10 rounded-md w-full flex  flex-col gap-8 md:gap-12 dark:text-zinc-100'>
        <div className='inputbox'>
          {/* {label && <label className={`text-left`}>{formKeys?.name}</label>} */}
          <div className=''>
            <input
              className={`placeholder:text-current input2`}
              type='text'
              name='name'
              order
              onChange={handleInput}
              value={formValue.name}
              placeholder={formKeys?.props.name_label.value}
            />
          </div>
        </div>

        <div className='w-full flex   flex-col gap-4 '>
          <div className='grid grid-cols-4 gap-5 sm:items-center w-full dark:text-zinc-200'>
            <div className='flex col-span-2 items-center w-full gap-5'>
              <select
                name='month'
                value={formValue.month}
                className={`${style.select2} input2`}
                onChange={handleNumber}>
                <option value>Birth Month</option>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
            </div>
            <div className='inputbox'>
              <div className=''>
                <input
                  className={`input2`}
                  type='number'
                  name='day'
                  onChange={handleInput}
                  value={formValue.day}
                  placeholder='DD'
                />
              </div>
            </div>

            <div className='inputbox'>
              <div className=''>
                <input
                  className={`input2`}
                  type='number'
                  name='year'
                  onChange={handleInput}
                  value={formValue.year}
                  placeholder='YYYY'
                />
              </div>
            </div>
          </div>
        </div>

        <button
          className={`w-full  capitalize  cursor-pointer text-[17px] rounded-md px-10 py-3 bg-gradient-to-r from-highlight  to-third  hover:from-third hover:to-highlight  duration-100 ease-in text-zinc-800`}>
          {formKeys?.props.button_text.value}
        </button>
      </form>
    </>
  );
}
