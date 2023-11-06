import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios"
import { showSnackbar } from "./app";
const initialState={
    isLoggedIn: false,
    token:"",
    isLoading:false,
}
const slice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action){
            state.isLoggedIn=action.payload.isLoggedIn;
            state.token=action.payload.token;
        },
        signout(state,action){
            state.isLoggedIn=false;
            state.token="";
        }
    }
})
export default slice.reducer;

export function LoginUser(formvalues){
return async (dispatch,getState) => {
    // * syntax => axios.post(url, data, config)
    await axios.post("/auth/login",{
        ...formvalues
    },{
        headers:{
            "Content-Type":"application/json"
        }
    }).then((response)=> { 
        console.log(response);
       dispatch(slice.actions.login({
        isLoggedIn:true,
        token:response.data.token,
       }))


     }).catch((error)=> {
        console.log(error);
     });
}
}


export function LogoutUser(){
    return async (dispatch, getState)=>{
        dispatch(slice.actions.signout())
    }
}
export function ForgotPassword(formvalues){
    return async (dispatch, getState)=>{
       await axios.post("/auth/forgot-password",{
        ...formvalues
       },{
        headers:{
            "Content-Type":"application/json"
        }
       }).then((response)=>{
        console.log(response);
       }).catch((error)=>{
        console.log(error);
       });
    }
}

export  function NewPassword(formvalues){
return async (dispatch,getState)=>{
await axios.post("/auth/reset-password",{
    ...formvalues,
},{
    headers:{
        "Content-Type":"application/json"
    }
}
).then((response)=>{
    console.log(response);
    dispatch(slice.actions.login({
        isLoggedIn:true,
        token:response.data.token,
    }))
}).catch((error)=>{
    console.log(error);
});
}
}
export function VerifyEmail(formValues) {
    return async (dispatch, getState) => {
      dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
  
      await axios
        .post(
          "/auth/verify",
          {
            ...formValues,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          dispatch(slice.actions.updateRegisterEmail({ email: "" }));
          window.localStorage.setItem("user_id", response.data.user_id);
          dispatch(
            slice.actions.logIn({
              isLoggedIn: true,
              token: response.data.token,
            })
          );
  
  
          dispatch(
            showSnackbar({ severity: "success", message: response.data.message })
          );
          dispatch(
            slice.actions.updateIsLoading({ isLoading: false, error: false })
          );
        })
        .catch(function (error) {
          console.log(error);
          dispatch(showSnackbar({ severity: "error", message: error.message }));
          dispatch(
            slice.actions.updateIsLoading({ error: true, isLoading: false })
          );
        });
    };
  }