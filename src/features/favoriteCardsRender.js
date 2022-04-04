import { createSlice } from "@reduxjs/toolkit";
// state that saves the favorite cards with there data from the api fetch request
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
