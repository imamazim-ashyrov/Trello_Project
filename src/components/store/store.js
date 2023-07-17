import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BackgroundSlice from "./slices/BackgroundSlice";
import TaskSlice from "./slices/TaskSlice";

const rootReduser = combineReducers({
    backgroundImage: BackgroundSlice,
    task: TaskSlice,
})

export const store = configureStore({
    reducer: rootReduser
})