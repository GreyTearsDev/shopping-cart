import { useOutletContext } from "react-router-dom";
import useBillAndTaxes from "../../../hooks/useBillAndTaxes";
import CheckedOutProductsContainer from "./CheckedOutProductsContainer";
import Summary from "./Summary";

export default function Checkout() {
  const [, , cart, setCart] = useOutletContext();
  const { billTotal, taxesTotal } = useBillAndTaxes(cart);

  const onPlaceOrder = () => {
    setCart([]);
  };

  return (
    <main>
      <CheckedOutProductsContainer />
      <Summary billTotal={billTotal} taxesTotal={taxesTotal} onPlaceOrder={onPlaceOrder} />
    </main>
  );
}
