import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios"
const initialState ={
    sidebar:{
        open:false, 
        type:"CONTACT",
    },
    snackbar:{
      open:null,
      message:null,
      severity:null,
    }, 
     users: [], // all users of app who are not friends and not requested yet
    all_users: [],
    friends: [], // all friends
    friendRequests: [], // all friend requests
    chat_type: null,
    // for every conversation there is a room id  I mean to say for every chat there is a room id
     room_id: null,
    call_logs: [],
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
        },
        openSnackBar(state, action){
          state.snackbar.open=true;
          state.snackbar.severity=action.payload.severity;
          state.snackbar.message=action.payload.message;
        },
        closeSnackBar(state, action){
          state.snackbar.open=false;
          state.snackbar.severity=null;
          state.snackbar.message=null;
        },  updateUsers(state, action) {
          state.users = action.payload.users;
        },
        updateAllUsers(state, action) {
          state.all_users = action.payload.users;
        },
        updateFriends(state, action) {
          state.friends = action.payload.friends;
        },
        updateFriendRequests(state, action) {
          state.friendRequests = action.payload.requests;
        },
        selectConversation(state, action) {
          state.chat_type="individual";
          state.room_id=action.payload.room_id;
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

export const closeSnackBar=()=> async(dispatch, getState)=>{
  dispatch(slice.actions.closeSnackBar());
} 

export function FetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchAllUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-all-verified-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateAllUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friends",
// here wer are using protect that's why we are doing this
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateFriends({ friends: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friend-requests",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.updateFriendRequests({ requests: response.data.data })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export const SelectConversation=({room_id})=>{
  return (dispatch, getState)=>{
    dispatch(slice.actions.selectConversation({room_id}))
  }
};