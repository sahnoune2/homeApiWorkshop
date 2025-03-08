import React, { useEffect } from "react";
import { CiTrash } from "react-icons/ci";

export const Cart = ({ cart, count }) => {
  useEffect(() => {
    console.log("Cart component: Received cart:", cart);
  }, [cart]);

  return (
    <div style={{ display: "flex", gap: "10%" }}>
      <div style={{ width: "55%", height: "40rem", border: "1px solid red" }}>
        <table style={{ width: "100%" }}>
          <tr>
            <th>image</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>delete</th>
          </tr>

          {cart.map((product) => (
            <tr>
              <th>
                <img
                  style={{ height: "5rem", margin: "0 auto" }}
                  src={product.images[0]}
                  alt=""
                />{" "}
              </th>
              <th> {product.name} </th>
              <th> {count} </th>
              <th>
                
                {product.price*count}
              </th>
              <th>
                <CiTrash
                  className="p-2 rounded hover:bg-gray-300 cursor-pointer transition"
                  style={{ fontSize: "2.2rem", margin: "0 auto" }}
                />
              </th>
            </tr>
          ))}
        </table>
      </div>
      <div
        style={{ width: "35%", height: "40rem", border: "1px solid green" }}
      ></div>
    </div>
  );
};
