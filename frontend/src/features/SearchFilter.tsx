import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../enums";
import { ISearchFilter } from "../interfaces";

const initialState:ISearchFilter = {
    searchInput: "",
    tags: [],
    order: Order.NEW,
    routesLimit : 6,
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
        clearTags(state:ISearchFilter, action:PayloadAction){
            state.tags = [];
        },
        setOrder(state:ISearchFilter, action:PayloadAction<Order>){
            state.order = action.payload;
        },
        setRoutesLimit(state:ISearchFilter, action:PayloadAction<number>){
            state.routesLimit = action.payload;
        }
    }
});

export const {setSearchInput, addTag, removeTag, clearTags, setOrder, setRoutesLimit} = searchFilterSlice.actions;
export default searchFilterSlice.reducer;