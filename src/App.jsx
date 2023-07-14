import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import "./bacgroundStyle.js";

const App = () => {
  const [isAuth, setIsAuth] = useState("");
  const checkIsAuth = localStorage.getItem("isauth") || "";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={checkIsAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
