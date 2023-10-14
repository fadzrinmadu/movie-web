import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Movies } from "./pages";
import { GuardRoute } from "./components";
import GuestOnlyRoute from "./components/GuestOnlyRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <GuestOnlyRoute>
              <Login />
            </GuestOnlyRoute>
          }
        />
        <Route
          path="movies"
          element={
            <GuardRoute>
              <Movies />
            </GuardRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
