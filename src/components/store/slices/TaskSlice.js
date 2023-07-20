import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  searchInputValue: '',
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    addInnerTask: (state, action) => {
      const { id, innerTask } = action.payload;
      const find = state.tasks.find((el) => el.id === id);
      find.innerTask = [...find.innerTask, action.payload];
    },
    toggleInnerTask: (state, action) => {
      const { parentId, id, editingValue } = action.payload;
      console.log(editingValue);
      const parent = state.tasks.find((el) => el.id === parentId);
      const innerTaskk = parent.innerTask.find(el => el.id === id) 
      innerTaskk.innerTask = editingValue
    },
    filterTask: (state, action) => {
      console.log(action);
      state.searchInputValue = action.payload
    } 
  },
});

export const { addTask, addInnerTask, toggleInnerTask, filterTask } = TaskSlice.actions;
export default TaskSlice.reducer;
