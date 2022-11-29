import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: null,
  reducers: {
    setMessage: (state, action) => action.payload,
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;
