import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="products" activeClassName="active">Products</NavLink>
          </li>
          <li>
            <NavLink to="checkout" activeClassName="active">Checkout</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
