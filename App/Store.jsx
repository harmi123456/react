
import { configureStore } from "@reduxjs/toolkit"
import Counter  from "../Feature/Slice"

export const store = configureStore({
    reducer : {
        counterKey: Counter
    }
})