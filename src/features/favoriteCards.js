import { createSlice } from "@reduxjs/toolkit";
// the user favorite cards state
export const favoriteCardsSlice = createSlice({
  name: "favoriteCards",
  initialState: {
    value: [],
  },
  reducers: {
    // if the key of the location exist its delete it if not adds it
    changeFavoriteCards: (state, action) => {
      const findIndex = state.value.findIndex((card) => {
        return card.key === action.payload.key;
      });
      if (findIndex === -1) {
        state.value.push(action.payload);
      }
      if (findIndex > -1) {
        state.value.splice(findIndex, 1);
      }
    },
    initialFavoriteCards: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFavoriteCards } = favoriteCardsSlice.actions;
export const { initialFavoriteCards } = favoriteCardsSlice.actions;

export default favoriteCardsSlice.reducer;
