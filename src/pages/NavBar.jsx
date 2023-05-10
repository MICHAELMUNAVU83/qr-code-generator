import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-24  mx-auto px-4 text-white bg-black">
      <Link to="/" className="w-full text-3xl font-bold  text-orange-400">
        Value Asset Manager
      </Link>
      <ul className="hidden md:flex">
        <Link to="/" className="p-4 flex gap-2">
          {" "}
          <p>All</p> Products
        </Link>

        <Link to="/add-product" className="p-4 gap-2 flex ">
          {" "}
          Add
          <span>Product</span>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
