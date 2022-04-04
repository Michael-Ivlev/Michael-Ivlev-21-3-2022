import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Favorites from "../Favorites/Favorites";
import GlobalStateInitialSetters from "../../utils/GlobalStateInitialSetters";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStateInitialSetters />
      <HashRouter>// HashRouter used to be compatible with gitHub Pages
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main /> <Footer />
              </>
            }
          ></Route>
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
