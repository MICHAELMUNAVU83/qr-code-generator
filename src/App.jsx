import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
