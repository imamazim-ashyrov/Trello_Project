import { createSlice } from "@reduxjs/toolkit";
import BackgroundImg from "../../assets/images/BackgroundImg.jpg";

const BackgrounSlice = createSlice({
  name: "backgroundImage",
  initialState: BackgroundImg,
  reducers: {
    changeBackground: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeBackground } = BackgrounSlice.actions;
export default BackgrounSlice.reducer;
