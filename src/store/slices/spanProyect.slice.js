import { createSlice } from "@reduxjs/toolkit";

export const spanProyectSlice = createSlice({
  name: "spanProyect",
  initialState: "all",
  reducers: {
    setSpanProyect: (state, action) => action.payload,
  },
});

export const { setSpanProyect } = spanProyectSlice.actions;

export default spanProyectSlice.reducer;
