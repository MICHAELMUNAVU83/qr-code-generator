import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import NavBar from "./pages/NavBar";

function App() {
  const products = [
    {
      id: 1,
      name: "MacBook Air",
      price: 66998,
      image:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1683717864/p9205pxnoslsjpgacabk.jpg",
      description: "Macbook Air with 256gb RAM",
      category: "Electronics",
      created_at: "2023-05-10T11:24:48.973Z",
      updated_at: "2023-05-10T11:24:48.973Z",
    },
    {
      id: 2,
      name: "Iphone 11",
      price: 45000,
      image:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1683717929/kkmu7zdd49glaruly4ul.jpg",
      description: "Iphone 11 with 5 cameras",
      category: "Mobiles",
      created_at: "2023-05-10T11:25:47.696Z",
      updated_at: "2023-05-10T11:25:47.696Z",
    },
    {
      id: 3,
      name: "Chair",
      price: 6000,
      image:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1683717991/hcibnbkyuof3ghv0qibs.jpg",
      description: "Grey Chair ",
      category: "Furniture",
      created_at: "2023-05-10T11:27:00.623Z",
      updated_at: "2023-05-10T11:27:00.623Z",
    },
  ];
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route
            path="/products/:id"
            element={<Product products={products} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
