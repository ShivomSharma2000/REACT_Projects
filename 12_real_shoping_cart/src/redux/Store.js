import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./Slices/CartSlice";

export const Store = configureStore({
    reducer : {
        cart : CartSlice            //key always same as their slice name and value should always be same as slice function
    }
})