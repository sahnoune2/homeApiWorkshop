import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import ListProducts from "./ListProducts";

function Products() {
 


  

  return (
    <div className="flex gap-20 flex-wrap px-24">
      {ListProducts.map((product) => (
        <Link to={"/prod/" + product.id}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img
                style={{ height: "500px" }}
                className="rounded-t-lg"
                src={product.images[0]}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5
                  style={{ height: "100px", fontSize: "1.2rem" }}
                  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {product.title}
                </h5>
              </a>
              <p
                style={{ overflowY: "auto", height: "200px" }}
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
              >
                {product.description}
              </p>
              <p
                style={{ overflowY: "auto", height: "200px" }}
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
              >
                Price :${product.price}
              </p>
              {/* <ReactStars
                count={10}
                value={product.rating.rate}
                size={24}
                edit={false}
                color2={"#ffd700"}
              /> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
