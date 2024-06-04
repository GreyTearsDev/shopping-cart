import { useOutletContext } from "react-router-dom";
import useBillAndTaxes from "../../../hooks/useBillAndTaxes";
import CheckedOutProducts from "./CheckedOutProducts";
import Summary from "./Summary";

export default function Checkout() {
  const [storeData, , cart, setCart] = useOutletContext();
  const { billTotal, taxesTotal } = useBillAndTaxes(cart);
  const onPlaceOrder = () => {
    setCart([]);
  };

  return (
    <main>
      <CheckedOutProducts />
      <Summary billTotal={billTotal} taxesTotal={taxesTotal} onPlaceOrder={onPlaceOrder} />
    </main>
  );
}
