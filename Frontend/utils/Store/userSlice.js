import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        userData:null,
    },
    reducers:{
        login:(state,action)=>{
            state.userData=action.payload;
        },
        logout:(state,action)=>{
            state.userData=action.payload;
        }
    }

});
export const {login,logout}=userSlice.actions;
export default userSlice.reducer;