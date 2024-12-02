import { createSlice } from "@reduxjs/toolkit";
import { ListTask } from "../components/ListTask";

const initialState = {
  //   value1: ListTask,
  value: [],
};

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    addPet(state, action) {
      state.value.push(action.payload);
    },
    deletePet(state, action) {
      state.value = state.value.filter(
        (pet) => pet.id !== action.payload.id
      );
      // state.value = updatedState;
    },
  },
});

export const { addPet, deletePet } = petSlice.actions;
export default petSlice.reducer;
