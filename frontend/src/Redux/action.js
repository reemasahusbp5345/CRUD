import { GET_WEBINAR_FAILURE, GET_WEBINAR_REQUEST, GET_WEBINAR_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE, LOGOUT_USER, DELETE_WEBINAR_REQUEST, DELETE_WEBINAR_SUCCESS, DELETE_WEBINAR_FAILURE, ADD_WEBINAR_REQUEST, ADD_WEBINAR_SUCCESS, ADD_WEBINAR_FAILURE, EDIT_WEBINAR_REQUEST, EDIT_WEBINAR_SUCCESS, EDIT_WEBINAR_FAILURE } from "./actionTypes";
import axios from "axios"

export const getWebinarRequest=()=>({
    type:GET_WEBINAR_REQUEST
})

export const getWebinarSuccess=(payload)=>({
    type:GET_WEBINAR_SUCCESS,
    payload
})

export const getWebinarFailure=()=>({
    type:GET_WEBINAR_FAILURE
})

export const getWebinarData=()=>dispatch=>{
    dispatch(getWebinarRequest())
    axios({
        method:"GET",
        url:"http://localhost:5000/api/webinar"
    })
    .then(res=>dispatch(getWebinarSuccess(res.data)))
    .catch(err=>dispatch(getWebinarFailure(err)))
}

export const userRegisterRequest=()=>({
    type:USER_REGISTER_REQUEST
})

export const userRegisterSuccess=(payload)=>({
    type:USER_REGISTER_SUCCESS,
    payload
})

export const userRegisterFailure=()=>({
    type:USER_REGISTER_FAILURE
})

export const userRegister=(payload)=>dispatch=>{
    dispatch(userRegisterRequest())
    axios({
        method:"POST",
        url:"http://localhost:5000/api/register",
        data:payload
    })
    .then(res=>dispatch(userRegisterSuccess(payload.name)))
    .catch(err=>dispatch(userRegisterFailure(err)))
}

export const userLoginRequest=()=>({
    type:USER_LOGIN_REQUEST
})

export const userLoginSuccess=(payload)=>({
    type:USER_LOGIN_SUCCESS,
    payload
})

export const userLoginFailure=()=>({
    type:USER_LOGIN_FAILURE
})

export const userLogin=(payload)=>dispatch=>{
    dispatch(userLoginRequest())
    axios({
        method:"POST",
        url:"http://localhost:5000/api/login",
        data:payload
    })
    .then(res=>dispatch(userLoginSuccess(payload.name)))
    .catch(err=>dispatch(userLoginFailure(err)))
}

export const logoutUser=()=>({
    type:LOGOUT_USER
})

export const deleteWebinarRequest=()=>({
    type:DELETE_WEBINAR_REQUEST
})

export const deleteWebinarSuccess=(payload)=>({
    type:DELETE_WEBINAR_SUCCESS,
    payload
})

export const deleteWebinarFailure=()=>({
    type:DELETE_WEBINAR_FAILURE
})

export const deleteWebinar=(payload)=>dispatch=>{
    dispatch(deleteWebinarRequest())
    axios({
        method:"DELETE",
        url:`http://localhost:5000/api/${payload}`,
    })
    .then(res=>dispatch(getWebinarData()))
    .catch(err=>dispatch(deleteWebinarFailure(err)))
}
export const addWebinarRequest=()=>({
    type:ADD_WEBINAR_REQUEST
})

export const addWebinarSuccess=(payload)=>({
    type:ADD_WEBINAR_SUCCESS,
    payload
})

export const addWebinarFailure=()=>({
    type:ADD_WEBINAR_FAILURE
})

export const addWebinar=(payload)=>dispatch=>{
    dispatch(addWebinarRequest())
    axios({
        method:"POST",
        url:`http://localhost:5000/api/webinar`,
        data:payload
    })
    .then(res=>dispatch(getWebinarData()))
    .catch(err=>dispatch(addWebinarFailure(err)))
}

export const editWebinarRequest=()=>({
    type:EDIT_WEBINAR_REQUEST
})

export const editWebinarSuccess=(payload)=>({
    type:EDIT_WEBINAR_SUCCESS,
    payload
})

export const editWebinarFailure=()=>({
    type:EDIT_WEBINAR_FAILURE
})

export const editWebinar=(payload)=>dispatch=>{
    console.log(payload)
    dispatch(editWebinarRequest())
    axios({
        method:"POST",
        url:`http://localhost:5000/api/update/${payload.id}`,
        data:payload.data
    })
    .then(res=>dispatch(getWebinarData()))
    .catch(err=>dispatch(editWebinarFailure(err)))
}

