import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGIN_WILL_MOUNT,
  REGISTER_WILL_MOUNT,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_WILL_MOUNT:
      return { ...state, error: "" };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload.message,
        password: "",
        loading: false
      };
    case REGISTER_WILL_MOUNT:
      return { ...state, error: "" };
    case REGISTER_USER:
      return {
        ...state,
        loading: true
      };
    case REGISTER_USER_SUCCESS:
      return { INITIAL_STATE };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload.message,
        password: "",
        loading: false
      };
    default:
      return state;
  }
};
