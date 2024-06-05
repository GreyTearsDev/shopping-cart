import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./globalStyles";
import useFetchStoreData from "./hooks/useFetchStoreData";

export default function App() {
  const [data, loading, error] = useFetchStoreData();
  const [cart, setCart] = useState([]);
  const outletContext = [data, loading, cart, setCart, error];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
              <NavLink to="checkout">Checkout({cart.length})</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet context={outletContext} />
        </main>
      </>
    </ThemeProvider>
  );
}
