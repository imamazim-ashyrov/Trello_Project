import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";
import BackgroundSlice from "./slices/BackgroundSlice";

const rootReduser = combineReducers({
    todo: TodoSlice,
    backgroundImage: BackgroundSlice,
})

export const store = configureStore({
    reducer: rootReduser
})