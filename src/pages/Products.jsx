import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products({ products }) {
  const [allProducts, setAllProducts] = useState(products);

  const [filterQuery, setFilterQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  useEffect(() => {
    if (!filterQuery && !filterCategory) {
      setAllProducts(products);
    } else if (filterQuery && !filterCategory) {
      setAllProducts(
        allProducts.filter((product) =>
          product.name.toLowerCase().includes(filterQuery.toLowerCase())
        )
      );
    } else if (!filterQuery && filterCategory) {
      setAllProducts(
        allProducts.filter((product) => product.category === filterCategory)
      );
    }
  }, [filterQuery, filterCategory]);

  useEffect(() => {
    if (filterCategory) {
      setFilterQuery("");
    }
  }, [filterCategory]);

  useEffect(() => {
    if (filterQuery) {
      setFilterCategory("");
    }
  }, [filterQuery]);

  return (
    <div className=" mx-auto">
      <h1 className="uppercase text-5xl  underline text-center font-bold ">
        ALl Products
      </h1>

      <div className="border-b-2 border-t-2 flex flex-col p-4 flex justify-center border-gray-200 w-[100%] text-center my-10">
        <p>
          You can filter either by category or search for a specific product by
          name
        </p>
        <div className="justify-around flex gap-4">
          <input
            type="text"
            className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[45%] p-2.5 "
            placeholder="Search for a product"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
          <select
            className=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[45%] p-2.5 "
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Furniture">Furniture</option>

            <option value="Electronics">Electronics</option>
            <option value="Cars">Cars</option>
            <option value="Bikes">Bikes</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Books">Books</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap justify-around py-8">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <div
              key={product.id}
              className="w-full w-[30%] p-4 bg-black flex hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <Link
                to={`/products/${product.id}`}
                className="p-4 flex-1 flex flex-col"
              >
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.description}
                    className="w-[350px] h-[350px]  mb-4"
                  />
                </div>
                <h2 className="text-lg font-bold mb-2 text-[#f2f3f4] text-center mt-10">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-center mb-2">
                  {product.description}
                </p>
                <p className="flex gap-2 justify-center text-white  mb-2">
                  Category:
                  <span className="text-gray-600">{product.category}</span>
                </p>
                {product.price && (
                  <div className="flex justify-center mt-auto ">
                    <p className="text-gray-600">
                      KSH {product.price.toLocaleString()}
                    </p>
                  </div>
                )}
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl">
            No products found that match the name or category
          </p>
        )}
      </div>
    </div>
  );
}

export default Products;
