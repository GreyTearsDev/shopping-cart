import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import useBillAndTaxes from "../../../hooks/useBillAndTaxes";
import CheckedOutProductsContainer from "./CheckedOutProductsContainer";
import Summary from "./Summary";

const Wrapper = styled.main`
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(400px, 3fr) minmax(200px, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;

  }`;

export default function Checkout() {
  const [, , cart, setCart] = useOutletContext();
  const { billTotal, taxesTotal } = useBillAndTaxes(cart);

  const onPlaceOrder = () => {
    setCart([]);
  };

  return (
    <Wrapper>
      <CheckedOutProductsContainer />
      <Summary billTotal={billTotal} taxesTotal={taxesTotal} onPlaceOrder={onPlaceOrder} />
    </Wrapper>
  );
}
