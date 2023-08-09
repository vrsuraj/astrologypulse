export function formInitialValue(type) {
  let initialValue = {
    name: "",
    day: "",
    month: "",
    year: "",
    min: "",
    hour: "",
    gender: "male",
    tzone: -4,
    place: "",
    country: "United States",
    email: "",
  };

  switch (type) {
    case "solar":
      initialValue["current_country"] = "United States";
      initialValue["current_location"] = "";
      initialValue["current_tzone"] = "";
      initialValue["current_lat"] = "";
      initialValue["current_lon"] = "";
      initialValue["solar_year"] = "";
      return initialValue;
    case "transit":
      initialValue["current_country"] = "United States";
      initialValue["current_location"] = "";
      initialValue["current_tzone"] = "";
      initialValue["current_lat"] = "";
      initialValue["current_lon"] = "";
      return initialValue;
    default:
      return initialValue;
  }
}
