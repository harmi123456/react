import { configureStore } from "@reduxjs/toolkit";
import  todo  from "../Feature/Slice";

export const store = configureStore({
    reducer : {
        todoKey: todo
    }
})