import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

import { CiTrash } from "react-icons/ci";

function ProductsDash({ list, setList }) {
  const change = (index) => {
    const updated = [...list];
    updated.splice(index, 1);
    setList(updated);
  };

  return (
    <div>
      <table style={{ width: "100%" }}>
        <tr>
          <th>image</th>
          <th>product</th>
          <th>price</th>
          <th>description</th>
          <th>delete</th>
        </tr>

        {list.map((product, index) => (
          <tr>
            <th>
              <Link to={"/prod/" + product.id}>
                <img
                  style={{ height: "70px", display: "block", margin: "0 auto" }}
                  className="rounded-t-lg"
                  src={product.images[0]}
                  alt=""
                />
              </Link>
            </th>

            <th href="#">
              <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </th>
            <th
              style={{}}
              className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            >
              {product.description}
            </th>
            <th
              style={{}}
              className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            >
              Price :${product.price}
            </th>
            <th>
              <CiTrash
                className="p-2 rounded hover:bg-gray-300 cursor-pointer transition"
                onClick={() => change(index)}
                style={{ fontSize: "2.2rem", margin: "0 auto" }}
              />
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}
//  <Link to={"/prod/" + product.id}></Link>;

export default ProductsDash;
