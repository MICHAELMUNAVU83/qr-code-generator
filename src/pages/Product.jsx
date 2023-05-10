import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";

const Product = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <>
      {products.map(
        (product) =>
          product.id === parseInt(id) && (
            <div className="flex md:flex-row flex-col border-2 border-black rounded-2xl p-4 justify-center gap-4 md:w-[50%] w-[90%] h-[50%] mt-24 mx-auto items-center ">
              <div className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-white rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.description}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-3xl justify-center items-start">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-600 ">{product.description}</p>
                <p className="flex gap-2 text-md justify-center  mb-2">
                  Category:
                  <span className="text-gray-600">{product.category}</span>
                </p>
                {product.price && (
                  <p className="text-gray-600">
                    KSH {product.price.toLocaleString()}
                  </p>
                )}

                <div className="mt-4">
                  <QRCode
                    style={{ height: "auto", width: "200px", heigth: "200px" }}
                    value={`https://value-asset-management-v1.netlify.app//products/${id}`}
                  />
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default Product;
