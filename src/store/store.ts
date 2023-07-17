import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/slice/counterSlice"

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})

