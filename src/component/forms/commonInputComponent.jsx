import styles from "../../styles/Home.module.css";

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
          className={`input w-full outline-none text-black border-b border-primary_1 px-3 py-2   bg-transparent `}
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
          className={` w-full outline-none text-zinc-800 placeholder:text-zinc-800 border-b border-primary px-1 py-2   bg-transparent `}
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
