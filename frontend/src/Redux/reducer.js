import { GET_WEBINAR_FAILURE, GET_WEBINAR_REQUEST, GET_WEBINAR_SUCCESS, LOGOUT_USER, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionTypes"

const initState = {
    data: [],
    loading: false,
    error: false,
    isAuth:false,
    username:""
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_WEBINAR_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_WEBINAR_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            }
        case GET_WEBINAR_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            }
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                username: payload,
                isAuth:true
            }
        case USER_REGISTER_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            }
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                username: payload,
                isAuth:true
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            }
            case LOGOUT_USER:
                return {
                    ...state,
                    username:"",
                    isAuth:false
                }
        default:
            return state
    }
}

export default reducer
