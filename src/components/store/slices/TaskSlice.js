import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [

  ],
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = TaskSlice.actions;
export default TaskSlice.reducer;
