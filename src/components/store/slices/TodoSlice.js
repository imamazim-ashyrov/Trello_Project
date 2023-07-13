import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const TodoSlice = createSlice({
  name: "todo",
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

const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
