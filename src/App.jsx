import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import ItemDetails from "./pages/ItemDetails";

function App() {

  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <div
      className={
        darkMode ? "dark" : ""
      }
    >

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/item/:id"
            element={
              <ItemDetails
                darkMode={darkMode}
              />
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;