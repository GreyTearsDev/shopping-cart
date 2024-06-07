import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import findProduct from "../../../util/findProduct";
import Button from "../../shared/Button";
import CheckedOutProductCard from "./CheckedOutProductCard";

const EmptyCartMessageWrapper = styled.div`
  padding: 6vw 0;
  height: 100%;
  align-items: center;
  padding: 4vw;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
  }

`;

export default function CheckedOutProductsContainer() {
  const [storeData, , cart, setCart] = useOutletContext();
  const cartIsEmpty = cart.length <= 0;

  const onDelete = (product) => {
    const newCart = cart.filter(p => p.id !== product.id);
    setCart(newCart);
  };

  return (
    <section>
      {!cartIsEmpty
        ? cart.map(checkedOutProduct => {
          const storedProduct = findProduct(checkedOutProduct.id, storeData);
          return (
            <CheckedOutProductCard
              key={storedProduct.id}
              product={storedProduct}
              onDelete={onDelete}
              productAmount={checkedOutProduct.amount}
            />
          );
        })
        : (
          <EmptyCartMessageWrapper>
            <h2>Your cart is empty!</h2>

            <Button type="link" path="/products" text="Shop now" />
          </EmptyCartMessageWrapper>
        )}
    </section>
  );
}
