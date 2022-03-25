import { createSlice } from "@reduxjs/toolkit";

export const favoriteCardsRenderSlice = createSlice({
  name: "favoriteCardsRender",
  initialState: {
    value: [],
  },
  reducers: {
    initialFavoriteCardsRender: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { initialFavoriteCardsRender } = favoriteCardsRenderSlice.actions;

export default favoriteCardsRenderSlice.reducer;
