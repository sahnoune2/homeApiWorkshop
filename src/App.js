import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import About from "./component/About";
import Contact from "./component/Contact";
import Products from "./component/Products";
import SingleProduct from "./component/SingleProduct";
import SignUp from "./component/SignUp";
import { Login } from "./component/Login";
import { Dashboard } from "./component/Dashboard";
import { Users } from "./component/Users";
import ProductsDash from "./component/dashboard/ProductsDash";
import { useEffect, useState } from "react";
import { Cart } from "./component/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("App: Cart state updated:", cart);
  }, [cart]);

  return (
    <div>
      <Header />

      <div style={{ marginTop: "2rem" }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/prod/:id"
            element={
              <SingleProduct
                cart={cart}
                setCart={setCart}
                count={count}
                setCount={setCount}
              />
            }
          />
          <Route
            path="/cart"
            key={cart.length}
            element={<Cart cart={cart} count={count} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route index element={<ProductsDash />} />

            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
