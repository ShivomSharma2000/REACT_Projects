import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add : (state, action) => {                  //every reducers function has two parameter's inbuilt (state,action).'state' target initialState and action target the value where they are exist or used.
            state.push(action.payload)              // by using 'action.payload' they are fetching all the values where add function will call(reducers function's always calling by dispatch function)
        },                                          //in above line, we push all the values in state which is 'inititalState'
        remove : (state, action) => {
            return state.filter((item)=> item.id !== action.payload)           //in this case: we filter the value which is exist in action.payload
        }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer