import { useContext } from "react";
import { DashboardFormContext } from "./dashboardFormContext";

const useProfile = () => {
  const context = useContext(DashboardFormContext);
  return {
    ...context,
  };
};

export default useProfile;
