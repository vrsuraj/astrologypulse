import Cookies from "js-cookie";

export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage(state),
      };

    case "DELETE":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage(state),
      };

    case "ADD_USERDATA":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage(state),
      };
  }
};

export const storage = (val) => {
  Cookies.set("ap_form", JSON.stringify(val));
};

export const ProfileReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage2(state),
      };

    case "DELETE":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage2(state),
      };

    case "ADD_USERDATA":
      state = { ...state, ...action.payload };
      return {
        ...state,
        ...storage2(state),
      };
  }
};

export const storage2 = (val) => {
  Cookies.set("profile", JSON.stringify(val));
};
