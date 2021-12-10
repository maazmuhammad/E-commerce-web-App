import axios from "axios";
import { baseUrl } from "../baseUrl";
import {
    SET_USER,
    SET_LOADING,
    SET_ERROR,
    SET_TOKEN,
    SET_LOGOUT,
    CHANGE_PASSWORD,
    PASSWORD_OTP,
} from "./UserTypes";
import Swal from "sweetalert2";


export const setUser = (user) => {
    return {
      type: SET_USER,
      payload: user,
    };
  };
  
  export const setLoading = () => {
    return {
      type: SET_LOADING,
    };
  };
  
  export const setErrors = (errors) => {
    return {
      type: SET_ERROR,
      payload: errors,
    };
  };
  
  
  export const setLogout = () => {
    return {
      type: SET_LOGOUT,
    };
  };
  
  export const setChangePassword = () => {
    return {
      type: CHANGE_PASSWORD,
    };
  };
  
  export const passwordOtp = (otp) => {
    return {
      type: PASSWORD_OTP,
      payload: otp,
    };
  };