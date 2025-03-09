import React, { useEffect } from "react";
import { CiTrash } from "react-icons/ci";

export const Cart = ({ cart, setCart }) => {
  useEffect(() => {
    console.log("Cart component: Received cart:", cart);
  }, [cart]);

  const change = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };
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

          {cart.map((product, index) => (
            <tr>
              <th>
                <img
                  style={{ height: "5rem", margin: "0 auto" }}
                  src={product.images[0]}
                  alt=""
                />{" "}
              </th>
              <th> {product.name} </th>
              <th> {product.quantity} </th>
              <th>{product.price * product.quantity}</th>
              <th>
                <CiTrash
                  onClick={() => change(index)}
                  className="p-2 rounded hover:bg-gray-300 cursor-pointer transition"
                  style={{ fontSize: "2.2rem", margin: "0 auto" }}
                />
              </th>
            </tr>
          ))}
        </table>
      </div>
      <div style={{ width: "35%", height: "40rem", border: "1px solid green" }}>
        total price :{" "}
        {cart.reduce((acc, el) => acc + el.quantity * el.price, 0)}
      </div>
    </div>
  );
};
