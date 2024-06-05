import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/shared/Navbar";
import { GlobalStyle } from "./globalStyles";
import useFetchStoreData from "./hooks/useFetchStoreData";

export default function App() {
  const [data, loading, error] = useFetchStoreData();
  const [cart, setCart] = useState([]);
  const outletContext = [data, loading, cart, setCart, error];

  return (
    <>
      <GlobalStyle />
      <NavBar cart={cart} />
      <main>
        <Outlet context={outletContext} />
      </main>
    </>
  );
}
