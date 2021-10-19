import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_ERROR,
} from "../constant/userConstants";
export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };
    case USER_LIST_SUCCESS:
      return { users: action.payload, loading: false };
    case USER_LIST_ERROR:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
