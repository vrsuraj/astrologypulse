import { a, useSpring } from "@react-spring/web";

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function commonAuthValidate(inputObject) {
  let error = "";
  const validationRules = {
    name: {
      errorMessage: "Please fill in the name.",
      validate: (value) => value.trim() !== "",
    },
    email: {
      errorMessage: "Please fill in a valid email address.",
      validate: (value) => value.trim() !== "" && isValidEmail(value),
    },
    password: {
      errorMessage: "Password must contain at least 6 characters.",
      validate: (value) => value.trim().length >= 6,
    },
    confirm_password: {
      errorMessage:
        "Confirm password must contain at least 6 characters and match the password.",
      validate: (value, inputObject) => {
        return value.trim().length >= 6 && value === inputObject.password;
      },
    },
    // Add more keys and validation rules as needed
  };

  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key) && validationRules[key]) {
      const rule = validationRules[key];
      const value = inputObject[key];
      if (!value || !rule.validate(value, inputObject)) {
        error = rule.errorMessage;
        break;
      }
    }
  }

  return error;
}

export function ErrorText({ text }) {
  return (
    <>
      {text && (
        <span className="text-white bg-red-500 px-5 py-2 rounded w-full text-[15px]">
          {text}
        </span>
      )}
    </>
  );
}

export function SuccessText({ text }) {
  return (
    <>
      {text && (
        <span className="text-white bg-green-600 px-5 py-2 rounded w-full text-[15px]">
          {text}
        </span>
      )}
    </>
  );
}

export function ErrorPopup({ text }) {
  return (
    <>
      {text && (
        <span className="bg-red-100 border border-red-500 text-red-500 px-5 py-2 rounded w-full text-[15px]">
          {text}
        </span>
      )}
    </>
  );
}

export function ErrorPopupModel({ text, passclose }) {
  const { y, opacity } = useSpring({
    from: { y: -10, opacity: 0 },
    to: {
      y: text ? -50 : 0,
      // Transition 50px upwards from the bottom
      opacity: text ? 1 : 0,
    },
  });

  return (
    <a.div
      style={{
        opacity,
        transform: y.to((value) => `translate3d(-50%, ${value}px, 0)`),
        bottom: "0px", // Ensure the div is at the bottom of the page
      }}
      className={`bg-red-500 fixed z-40 left-1/2 text-center  w-full duration-200 ease-in-out rounded-md flex items-center justify-between gap-8 text-white text-xl py-2.5 px-10 max-w-max mx-auto`}
    >
      {text}
      <button onClick={passclose} className="text-white hover:text-zinc-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </a.div>
  );
}
