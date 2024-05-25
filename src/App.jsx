import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Checkout</li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
