import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsScreen from "./screens/ProductsScreen/ProductsScreen.js";
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
