import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../enums";
import { ISearchFilter } from "../interfaces";

const initialState:ISearchFilter = {
    searchInput: "",
    tags: [],
    order: Order.NEW,
}

const searchFilterSlice = createSlice({
    name: "searchFilter",
    initialState,
    reducers:{
        setSearchInput(state:ISearchFilter, action:PayloadAction<string>){
            state.searchInput = action.payload;
        },
        addTag(state:ISearchFilter, action:PayloadAction<string>){
            if(!state.tags.find((tag:string) => tag === action.payload)){
                state.tags.push(action.payload);
            }
        },
        removeTag(state:ISearchFilter, action:PayloadAction<string>){
            state.tags = state.tags.filter((tag:string) => tag !== action.payload);
        },
        setOrder(state:ISearchFilter, action:PayloadAction<Order>){
            state.order = action.payload;
        }
    }
});

export const {setSearchInput, addTag, removeTag, setOrder} = searchFilterSlice.actions;
export default searchFilterSlice.reducer;