import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ErrorMessage from "./components/shared/ErrorMessage";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import useFetchStoreData from "./hooks/storeData";

export default function App() {
  const [data, loading, error] = useFetchStoreData();
  const [cart, setCart] = useState([]);

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
        {loading
          ? <LoadingSpinner />
          : error
          ? <ErrorMessage message={"Ups! Something went wrong :("} />
          : <Outlet context={[data, loading, cart, setCart]} />}
      </main>
    </>
  );
}
