import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListProducts from "./ListProducts";

function SingleProduct({ cart, setCart, count, setCount }) {
  const { id } = useParams();
  const [impagep, setImage] = useState(ListProducts[id].images[0]);

  const productFound = ListProducts.filter((el) => el.id == id);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const pushCart = () => {
    const found = cart.some((el) => el.id === ListProducts[id].id);
    if (!found) {
      cart.push(ListProducts[id]);
      setCart(cart);
      console.log("singleProduct cart state:", cart);
    } else {
      console.log("product already exixts ");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex w-[60rem] h-[36rem]">
        <div style={{ width: "40%" }}>
          <div style={{ width: "100%" }}>
            <a href="#">
              <img
                className="rounded-t-lg  w-[100%] h-[25rem] "
                src={impagep}
                alt=""
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <div>
              <img
                className="hover:opacity-55 hover:scale-[1.2]"
                style={{ width: "20rem" }}
                src={ListProducts[id].images[0]}
                onClick={() => setImage(ListProducts[id].images[0])}
                alt=""
              />
            </div>
            <div>
              <img
                className="hover:opacity-55 hover:scale-[1.2]"
                style={{ width: "34rem" }}
                src={ListProducts[id].images[1]}
                alt=""
                onClick={() => setImage(ListProducts[id].images[1])}
              />
            </div>
            <div>
              <img
                className="hover:opacity-55 hover:scale-[1.2]"
                style={{ width: "26rem" }}
                src={ListProducts[id].images[2]}
                alt=""
                onClick={() => setImage(ListProducts[id].images[2])}
              />
            </div>
          </div>
        </div>

        <div className="p-5 w-[60%] ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-6 h-[6rem]">
              {ListProducts[id].name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[10rem]">
            {ListProducts[id].description}
          </p>
          <p
            style={{ fontWeight: "bold" }}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[3rem] text-[1.3rem] "
          >
            price:${ListProducts[id].price}
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
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
                {count}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
