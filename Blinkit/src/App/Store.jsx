
import { configureStore } from "@reduxjs/toolkit";
import Api from "../Feature/Slice";

export const Store = configureStore({
    reducer: {
        apiKey: Api
    }
})