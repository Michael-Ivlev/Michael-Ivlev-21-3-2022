import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Favorites from "../Favorites/Favorites";
import GlobalStateInitialSetters from "../../utils/GlobalStateInitialSetters";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStateInitialSetters />
      <BrowserRouter basename="/Michael-Ivlev-21-3-2022">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main /> <Footer />
              </>
            }
          >
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
