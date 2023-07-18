import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/slice/counterSlice"
import modalReducer from "../components/slice/modalSlice"
import modalHeaderReducer from "../components/slice/modalHeaderSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        modal: modalReducer,
        modalHeader: modalHeaderReducer,
    }
})

