import {
    SET_USER,
    SET_LOADING,
    SET_ERROR,
    SET_TOKEN,
    SET_LOGOUT,
    CHANGE_PASSWORD,
    PASSWORD_OTP,
} from "./UserTypes";

const initialState = {
    data: {},
    loading: false,
    updating: false,
    logged: false,
    error: null,
    authToken: "",
    passwordOtp:"",
    users:{}
};


const userReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_USER:
            return {
                ...state,
                data: payload,
                authToken: payload.token,
                updating: false,
                logged: true,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: !state.loading,
                error: null,
            };
        case SET_ERROR:
            return {
                ...state,
                error: payload,
            };
        case SET_TOKEN:
            return {
                ...state,
                authToken: payload,
            };
        case SET_LOGOUT:
            return {
                ...state,
                data: {},
                updating: false,
                logged: false,
                loading: false,
            };
        case CHANGE_PASSWORD:
            return{
                ...state,
                loading:false
            }
        case PASSWORD_OTP:
            return{
                ...state,
                passwordOtp:payload,
                loading:false
            }
        default:
            return state;
    }
};

export default userReducer;