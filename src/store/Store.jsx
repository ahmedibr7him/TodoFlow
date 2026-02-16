import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './Slice'
export const store =configureStore({
    reducer:{
        todos:dataSlice
    }
})