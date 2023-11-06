import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    sidebar:{
        open:false, 
        type:"CONTACT",
    }
}
const slice=createSlice({
    name:"app",
    initialState,
    reducers:{
        toggleSiderbar(state,action){
                     state.sidebar.open=!state.sidebar.open;
        },
        updateSidebarType(state,action){
            state.sidebar.type=action.payload.type;
        }
    }
})
export default slice.reducer
export function toggleSiderbar(){
  return async (dispatch, getState)=>{
    dispatch(slice.actions.toggleSiderbar())
  }
}
export function updateSidebarType(type){
return async (dispatch, getState)=>{
    dispatch(slice.actions.updateSidebarType({
        type,
    }))
}
}
export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackBar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(slice.actions.closeSnackBar());
    }, 4000);
  };
