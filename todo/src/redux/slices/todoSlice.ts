import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todo:"",
    todos:[]
}

export const todoSlice=createSlice({
name:"todo",
initialState,
reducers:{
    adder:(state, action){
console.log(action.payload)
state.todos=state.todos.push(action.payload)
    },
    deleter:(state, action){
        
    }
}

})

export const {adder} =todoSlice.reducers
export default todoSlice