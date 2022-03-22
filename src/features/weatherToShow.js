import { createSlice } from "@reduxjs/toolkit";

export const weatherToShowSlice = createSlice({
  name: "weatherToShow",
  initialState: {
    value: {
      current: {},
      days: [],
    },
  },
  reducers: {
    chnageWeatherCurrent: (state, action) => {
      state.value.current = action.payload;
    },
    chnageWeatherDays: (state, action) => {
      state.value.days = action.payload;
    },
  },
});

export const { chnageWeatherCurrent } = weatherToShowSlice.actions;
export const { chnageWeatherDays } = weatherToShowSlice.actions;

export default weatherToShowSlice.reducer;
