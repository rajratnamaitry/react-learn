import { createSlice, configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserStore"
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    reset: (state) => {
      state.value = 0;
    },
    incremental: (state) => {
      state.value += 1;
    },
    decremental: (state) => {
      state.value -= 1;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter : counterSlice.reducer,
    user    : userSlice.reducer
  },
});
