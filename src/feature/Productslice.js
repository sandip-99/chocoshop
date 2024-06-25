import { createSlice } from "@reduxjs/toolkit";
import Productdata from "../component/Productdata";

const initialState={
    cart:[],
    items:Productdata,
};
export const Productslice=createSlice({
    name:'cart',
    initialState,
    reducers:{

    }
})
export default Productslice.reducer