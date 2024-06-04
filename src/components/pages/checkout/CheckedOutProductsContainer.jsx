import { useOutletContext } from "react-router-dom";
import findProduct from "../../../util/findProduct";
import CheckedOutProductCard from "./CheckedOutProductCard";

export default function CheckedOutProductsContainer() {
  const [storeData, , cart, setCart] = useOutletContext();
  const onDelete = (product) => {
    const newCart = cart.filter(p => p.id !== product.id);
    setCart(newCart);
  };

  return (
    <section>
      {cart.map(checkedOutProduct => {
        const storedProduct = findProduct(checkedOutProduct.id, storeData);
        return (
          <CheckedOutProductCard
            key={storedProduct.id}
            product={storedProduct}
            onDelete={onDelete}
            productAmount={checkedOutProduct.amount}
          />
        );
      })}
    </section>
  );
}
