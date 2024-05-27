import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import addProductToCart from "../../../util/addToProductToCart";
import Button from "../../shared/Button";

export default function ProductCard({ product }) {
  const [, , cart, setCart] = useOutletContext();

  const addToCart = () => {
    addProductToCart(product, cart, setCart);
  };
  return (
    <article>
      <h3>{product.title}</h3>
      <h3>{product.price} $</h3>
      <Button type="normal" text="Add to cart" onClick={addToCart} />
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
