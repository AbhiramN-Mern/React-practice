import { createSlice } from "@reduxjs/toolkit";

const CounterSlice=createSlice({
    name:"counter",
    initialState:{count:0},
    reducers:{
        plus(state){
            state.count+=1
        },
        minus(state){
            state.count-=1
        }
    }
})
export const {plus,minus}=CounterSlice.actions
export default CounterSlice.reducer;