import { createSlice } from "@reduxjs/toolkit";

export const favoriteCardsSlice = createSlice({
  name: "favoriteCards",
  initialState: {
    value: [],
  },
  reducers: {
    changeFavoriteCards: (state, action) => {
      const findIndex = state.value.findIndex((card) => {
        return card.key === action.payload.key;
      });
      if (findIndex === -1) {
        state.value.push(action.payload);
      }
      if (findIndex > -1) {
        console.log(findIndex);
        state.value.splice(findIndex, 1);
      }
    },
  },
});

export const { changeFavoriteCards } = favoriteCardsSlice.actions;

export default favoriteCardsSlice.reducer;
