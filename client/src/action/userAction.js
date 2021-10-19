import axios from "axios";
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_ERROR,
} from "../constant/userConstants";

/* Redux Thunk will return a function(thunk) with dispatch as parameter*/
export const userList = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.get(
      "https://jsonsplaceholder.typicode.com/posts"
    );
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LIST_ERROR, payload: "error occured" });
  }
};
