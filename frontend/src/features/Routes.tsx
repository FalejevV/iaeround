import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoute } from "../interfaces";


const initialState:IRoute[] = []

const routesSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {
        addRoute(state:IRoute[], action: PayloadAction<IRoute>){
            state.push(action.payload);
        },

        editRoute(state:IRoute[], action: PayloadAction<IRoute>){
            let routeFound = state.find((item:IRoute) => item.id === action.payload.id)
            if (routeFound){
                routeFound = action.payload;
            }
        },

        removeRoute(state:IRoute[], action: PayloadAction<string>){
            return state.filter(item => item.id !== action.payload);
        }
    }
});


export const {addRoute, editRoute, removeRoute} = routesSlice.actions;
export default routesSlice.reducer;