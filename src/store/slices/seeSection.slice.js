import { createSlice } from "@reduxjs/toolkit";

export const seeSectionSlice = createSlice({
  name: "activeCard",
  initialState: null,
  reducers: {
    setSeeSection: (state, action) => action.payload,
  },
});

export const { setSeeSection } = seeSectionSlice.actions;

export const actionNav = () => (dispatch) => {
  if (window.screen.width <= 560) {
    if (window.scrollY <= 600) {
      dispatch(setSeeSection(null));
    } else if (window.scrollY >= 600 && window.scrollY <= 1100) {
      dispatch(setSeeSection("AbautMe"));
    } else if (window.scrollY >= 1100 && window.scrollY <= 2400) {
      dispatch(setSeeSection("Information"));
    } else if (window.scrollY >= 2460 && window.scrollY <= 3800) {
      dispatch(setSeeSection("Projects"));
    } else if (window.scrollY >= 4800) {
      dispatch(setSeeSection("Contact"));
    }
  }
  if (window.screen.width >= 560 && window.screen.width <= 1099) {
    if (window.scrollY <= 600) {
      dispatch(setSeeSection(null));
    } else if (window.scrollY >= 620 && window.scrollY <= 1080) {
      dispatch(setSeeSection("AbautMe"));
    } else if (window.scrollY >= 1080 && window.scrollY <= 2250) {
      dispatch(setSeeSection("Information"));
    } else if (window.scrollY >= 2250 && window.scrollY <= 2600) {
      dispatch(setSeeSection("Projects"));
    } else if (window.scrollY >= 2600) {
      dispatch(setSeeSection("Contact"));
    }
  }
  if (window.screen.width >= 1100) {
    dispatch(setSeeSection("AbautMe"));
  }
};

export default seeSectionSlice.reducer;
