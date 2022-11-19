import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispach) => {
  try {
    const { data } = await api.signIn(formData);

    dispach({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, history) => async (dispach) => {
  try {
    const { data } = await api.signUp(formData);

    dispach({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
