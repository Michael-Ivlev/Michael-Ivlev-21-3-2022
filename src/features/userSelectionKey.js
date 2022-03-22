import { createSlice } from "@reduxjs/toolkit";

export const userSelectionKeySlice = createSlice({
  name: "userSelectionKey",
  initialState: {
    value: {
      name: "",
      key: "",
    },
  },
  reducers: {
    changeUserSelectionKey: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeUserSelectionKey } = userSelectionKeySlice.actions;

export default userSelectionKeySlice.reducer;
