import Cookies from "js-cookie";
import React, { createContext, useEffect, useReducer } from "react";
import { formReducer } from "./formReducer";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  let storage;
  let initialValue = {};
  const [state, dispatch] = useReducer(formReducer, initialValue);

  useEffect(() => {
    let mouted = true;
    if (mouted) {
      const cookie = Cookies.get("ap_form");
      if (cookie !== null && cookie !== "" && cookie !== undefined) {
        storage = JSON.parse(cookie);
      } else {
        storage = {};
      }
      dispatch({ type: "UPDATE", payload: storage });
    }
    return () => {
      mouted = false;
    };
  }, []);

  const adduserdata = (payload) => {
    dispatch({ type: "ADD_USERDATA", payload });
  };

  const deleteuserdata = (payload) => {
    dispatch({ type: "DELETE", payload });
  };

  const contextValues = {
    adduserdata,
    deleteuserdata,
    ...state,
  };
  return (
    <FormContext.Provider value={contextValues}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
