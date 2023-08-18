export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
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

export const validate = (values, solar, transit, email) => {
  let error = "";
  if (!values.name) {
    error = "please enter your name";
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
  } else if (email && values.email == "") {
    error = "Please enter your email";
  }
  return error;
};
