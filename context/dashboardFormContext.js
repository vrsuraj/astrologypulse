import Cookies from "js-cookie";
import React, { createContext, useEffect, useReducer } from "react";
import { ProfileReducer } from "./formReducer";

export const DashboardFormContext = createContext();

const DashboardContextProvider = ({ children }) => {
  let storage;
  let initialValue = {};
  const [state, dispatch] = useReducer(ProfileReducer, initialValue);

  useEffect(() => {
    let mouted = true;
    if (mouted) {
      const cookie = Cookies.get("profile");
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
    <DashboardFormContext.Provider value={contextValues}>
      {children}
    </DashboardFormContext.Provider>
  );
};
export default DashboardContextProvider;
