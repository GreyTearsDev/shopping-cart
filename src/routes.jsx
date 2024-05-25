import App from "./App";
import Checkout from "./components/pages/checkout/Checkout";
import Home from "./components/pages/home/Home";
import ProductDetails from "./components/pages/product-details/ProductDetails";
import Products from "./components/pages/products/Products";
import ErrorMessage from "./components/shared/ErrorMessage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "checkout", element: <Checkout /> },
    ],
    errorElement: <ErrorMessage />,
  },
  {
    path: "product-details/:id",
    element: <ProductDetails />,
    errorElement: <ErrorMessage message={"Error: Product not available"} />,
  },
];

export default routes;
