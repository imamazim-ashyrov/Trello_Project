import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: ( state, action) => {
      console.log(action);
      state.tasks = [...state.tasks, action.payload];
    },
    addInnerTask: (state, action) => {
      const { id, innerTask } = action.payload;
      const find = state.tasks.find((el) => el.id === id);
      find.innerTask = [...find.innerTask, innerTask];
    },
  },
});

export const { addTask, addInnerTask } = TaskSlice.actions;
export default TaskSlice.reducer;
