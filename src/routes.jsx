import App from "./App";
import Checkout from "./components/pages/checkout/Checkout";
import Home from "./components/pages/home/Home";
import ProductDetails from "./components/pages/product-details/ProductDetails";
import Products from "./components/pages/products/Products";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
  {
    path: "product-details/:id",
    element: <ProductDetails />,
  },
];

export default routes;
