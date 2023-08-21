import styles from "../../../styles/Home.module.css";

export function BorderInput({
  name,
  type,
  placeholder,
  handle,
  active,
  min,
  max,
}) {
  return (
    <>
      {min ? (
        <input
          id={name}
          className={`input w-full outline-none text-black border-b border-primary_1  py-2 px-4  bg-transparent `}
          type={type ? type : "text"}
          name={name}
          onChange={handle}
          min={min}
          max={max}
          value={active}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={name}
          className={` w-full outline-none text-zinc-800 placeholder:text-zinc-800 border-b border-primary py-2 px-4   bg-transparent `}
          type={type ? type : "text"}
          name={name}
          onChange={handle}
          value={active}
          placeholder={placeholder}
        />
      )}
    </>
  );
}

export function InputStyle2({
  min,
  max,
  type,
  name,
  onChange,
  value,
  placeholder,
  style,
}) {
  return (
    <>
      {min ? (
        <input
          className={`text-lg w-full outline-none bg-zinc-100 px-4 py-3 rounded-lg`}
          type={type}
          name={name}
          min={min}
          max={max}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={`text-lg w-full outline-none  py-3 px-5 rounded-lg bg-zinc-100`}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    </>
  );
}

export function BorderSelect({
  name,
  style,
  value,
  handleinput,
  children,
  extra,
}) {
  return (
    <>
      <select
        id={name}
        name={name}
        value={value}
        className={`text-lg ${styles.select2} ${extra}  w-full outline-none ${
          style ? style : "text-white"
        }   px-5 py-3 rounded-lg`}
        onChange={handleinput}
      >
        {children}
      </select>
    </>
  );
}

export function BorderSelect2({ name, handle, active, children }) {
  return (
    <>
      <select
        id={name}
        name={name}
        value={active}
        className={`${styles.select2} w-full  text-zinc-800  border-b  border-zinc-800 px-3 py-2 bg-transparent`}
        onChange={handle}
      >
        {children}
      </select>
    </>
  );
}

export function Label({ text, htmlfor }) {
  return (
    <label
      htmlFor={htmlfor}
      className={`text-left md:text-[17px] text-lg font-medium  whitespace-nowrap`}
    >
      {text}:
    </label>
  );
}
