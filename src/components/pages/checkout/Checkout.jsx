import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Summary from "./Summary";

export default function Checkout() {
  const [storeData, , cart, setCart] = useOutletContext();
  const [billTotal, setBillTotal] = useState(0);

  useEffect(() => {
    const total = cart.map(product => product.price * product.amount)
      .reduce((prev, curr) => prev + curr, 0);
    setBillTotal(total);
  }, [cart]);

  const onPlaceOrder = () => {
    setCart([]);
  };

  return <Summary billTotal={billTotal} onPlaceOrder={onPlaceOrder} />;
}
