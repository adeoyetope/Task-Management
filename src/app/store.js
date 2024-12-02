import { configureStore } from "@reduxjs/toolkit";
import petSlice from "../slices/petSlice";
import taskSlice from "../components/task/taskSlice";

export const store = configureStore({
  reducer: {
    pets: petSlice,
    task: taskSlice,
  },
});
