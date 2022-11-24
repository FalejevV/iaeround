import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchAddress } from "../DeveloperData";
import { IUser } from "../interfaces";

let initialState:IUser = {
    login:"",
    email:"",
    avatar:"",
    about:"",
    id:"",
    name: ""
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
            state.name = action.payload.name;
        },
        dropUser(state:IUser, action:PayloadAction<string>){
            state.login = "";
            state.email = "";
            state.avatar = "";
            state.about = "";
            state.id = "";
            state.name = "";
        },
        updateUserData(state:IUser, action:PayloadAction<string>){
            if(state.id !== ""){
                fetch(fetchAddress + '/api/usertoken',{
                    method: "GET",
                    credentials: 'include',
                })
                .then(response => response.json())
                .then(data => {
                    state = data;
                });
            }   
        }
    }
})

export const {setUser, updateUserData, dropUser } = UserSlice.actions;
export default UserSlice.reducer;