import PropTypes from "prop-types";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import addProductToCart from "../../../util/addProductToCart";
import AmountSetter from "../../shared/AmountSetter";
import Button from "../../shared/Button";

export default function CheckedOutProductCard({ product, onDelete, productAmount }) {
  const [amount, setAmount] = useState(parseInt(productAmount));
  const [, , cart, setCart] = useOutletContext();

  const addToCart = () => {
    addProductToCart(product, amount, cart, setCart);
  };

  return (
    <article>
      <button onClick={() => onDelete(product)}>x</button>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <AmountSetter amount={amount} setAmount={setAmount} />
      <Button type="normal" text="Update Bill" onClick={addToCart} />
    </article>
  );
}

CheckedOutProductCard.propTypes = {
  product: PropTypes.object,
  onDelete: PropTypes.func,
  productAmount: PropTypes.number,
};
