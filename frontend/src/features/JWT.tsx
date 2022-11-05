import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IJWT } from "../interfaces";

const initialState:IJWT = {
    token: "",
    refreshToken: "",
};

const JWTSlice = createSlice({
    name: "jwt",
    initialState,
    reducers:{
        setToken(state:IJWT, action: PayloadAction<string>){
            state.token = action.payload;
        },
        setRefreshToken(state:IJWT, action: PayloadAction<string>){
            state.refreshToken = action.payload;
        }
    }
})

export const {setToken, setRefreshToken} = JWTSlice.actions;
export default JWTSlice.reducer;