import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useFetchStoreData from "./hooks/storeData";

export default function App() {
  const [data, loading, error] = useFetchStoreData();
  const [cart, setCart] = useState([]);
  const outletContext = [data, loading, cart, setCart, error];

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
          <li>
            <NavLink to="checkout">Checkout</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet context={outletContext} />
      </main>
    </>
  );
}
