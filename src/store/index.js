import spanProyect from "./slices/spanProyect.slice";
import seeSection from "./slices/seeSection.slice";
import { configureStore } from "@reduxjs/toolkit";
import message from "./slices/message.slice";

export default configureStore({
  reducer: {
    spanProyect,
    seeSection,
    message,
  },
});
