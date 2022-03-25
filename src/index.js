import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSelectionKeyReducer from "./features/userSelectionKey";
import weatherToShowReducer from "./features/weatherToShow";
import favoriteCardsReducer from "./features/favoriteCards";
import favoriteCardsRenderReducer from "./features/favoriteCardsRender";
const store = configureStore({
  reducer: {
    userSelectionKey: userSelectionKeyReducer,
    weatherToShow: weatherToShowReducer,
    favoriteCards: favoriteCardsReducer,
    favoriteCardsRender: favoriteCardsRenderReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
