import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cart/cartSlicer";
import sliderReducer from "./slider/sliderSlicer";
export const store = configureStore({


    reducer:{
        slider: sliderReducer,
    }

})