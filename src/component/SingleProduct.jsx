import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleProduct({ cart, setCart, list }) {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const productFound = list.filter((el) => el.id == id);
  console.log("singleproduct productfound testing:", productFound);
  const [impagep, setImage] = useState(productFound[0].images[0]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const pushCart = () => {
    const found = cart.some((el) => el.id === productFound[0].id);
    if (!found) {
      cart.push(productFound[0]);
      setCart(cart);
      console.log(" cart state:", cart);
    } else {
      console.log("product already exixts ");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className=" bg-white border border-blue-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex w-[60rem] h-[36rem]">
        <div style={{ width: "40%" }}>
          <div style={{ width: "100%" }}>
            <div href="#">
              <img
                className="rounded-t-lg  w-[100%] h-[25rem] "
                src={impagep}
                alt=""
              />
            </div>
          </div>
          <div
            style={{
              display: "flex ",

              alignItems: "stretch",
              border: "1px solid blue",
            }}
          >
            <div>
              <img
                // hover:scale-[1.2]
                className="hover:opacity-55  cursor-pointer transition"
                style={{
                  width: "20rem",
                  border: "1px solid green",
                  height: "100%",
                }}
                src={productFound[0].images[0]}
                onClick={() => setImage(productFound[0].images[0])}
                alt=""
              />
            </div>
            <div>
              <img
                // hover:scale-[1.2]
                className="hover:opacity-55 cursor-pointer transition "
                style={{ width: "34rem", height: "100%" }}
                src={productFound[0].images[1]}
                alt=""
                onClick={() => setImage(productFound[0].images[1])}
              />
            </div>
            <div>
              <img
                // hover:scale-[1.2]
                className="hover:opacity-55 cursor-pointer transition "
                style={{ width: "26rem", height: "100%" }}
                src={productFound[0].images[2]}
                alt=""
                onClick={() => setImage(productFound[0].images[2])}
              />
            </div>
          </div>
        </div>

        <div className="p-5 w-[60%] ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-6 h-[6rem]">
              {productFound[0].name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[10rem]">
            {productFound[0].description}
          </p>
          <p
            style={{ fontWeight: "bold" }}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[3rem] text-[1.3rem] "
          >
            price:${productFound[0].price}
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div className="bg-blue-700 rounded-lg w-[7rem] flex justify-around">
              <button
                onClick={decrement}
                style={{
                  padding: "2px 10px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                -
              </button>
              <button disabled className="bg-blue-800 px-2">
                {(productFound[0].quantity = count)}
              </button>
              <button
                onClick={increment}
                style={{
                  padding: "2px 10px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                +
              </button>
            </div>
            <div onClick={pushCart}>
              <a
                href="#"
                className="  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
                <GiShoppingCart className="text-[1.5rem]" />
              </a>
            </div>
            <Link
              to={"/cart"}
              className="  h-[2.4rem] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              go to cart
            </Link>
            <Link
              to={"/products"}
              className="  h-[2.4rem] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              return to products page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
