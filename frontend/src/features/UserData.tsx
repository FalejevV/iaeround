import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IUser } from "../interfaces";

let initialState:IUser = {
    login:"",
    email:"",
    avatar:"",
    about:"",
    id:""
}   

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser(state:IUser, action:PayloadAction<IUser>){
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
            state.about = action.payload.about;
            state.id = action.payload.id;
        }
    }
})

export const {setUser } = UserSlice.actions;
export default UserSlice.reducer;