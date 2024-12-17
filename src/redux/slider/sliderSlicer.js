import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[],
}

export const sliderSlice=createSlice({
   name:"slider",
   initialState,
   reducers:{
      setValue:(state,action)=>{
        state.value = [...state.value, action.payload]
      },

      clearValue:(state,action)=>{
        state.value=[]
      }
    
      }
   }
)

export const { setValue,clearValue } = sliderSlice.actions

export default sliderSlice.reducer