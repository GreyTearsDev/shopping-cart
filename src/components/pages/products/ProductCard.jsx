import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import addProductToCart from "../../../util/addProductToCart";
import getStars from "../../../util/getStars";
import Button from "../../shared/Button";

export default function ProductCard({ product }) {
  const [, , cart, setCart] = useOutletContext();

  const addToCart = () => {
    addProductToCart(product, 1, cart, setCart);
  };

  return (
    <article>
      <Link to={`/product-details/${product.id}`}>
        <div>
          <div>
            <img src={product.image} alt={product.title} />
          </div>
          <h2>{product.title}</h2>
          <div>
            <p>{`${getStars(product.rating.rate)} (${product.rating.count} reviews)`}</p>
          </div>
          <h3>${product.price}</h3>
        </div>
      </Link>
      <Button type="normal" text="Add to cart" onClick={addToCart} />
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
