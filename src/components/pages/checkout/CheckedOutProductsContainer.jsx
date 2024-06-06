import { useOutletContext } from "react-router-dom";
import findProduct from "../../../util/findProduct";
import Button from "../../shared/Button";
import CheckedOutProductCard from "./CheckedOutProductCard";

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
          <>
            <h2>Your cart is empty!</h2>

            <Button type="link" path="products" text="Shop now" />
          </>
        )}
    </section>
  );
}
