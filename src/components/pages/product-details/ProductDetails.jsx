import { useState } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import addProductToCart from "../../../util/addToProductToCart";
import findProduct from "../../../util/findProduct";
import getStars from "../../../util/getStars";
import AmountSetter from "../../shared/AmountSetter";
import Button from "../../shared/Button";

export default function ProductDetails() {
  const [storeData, , cart, setCart] = useOutletContext();
  const { productId } = useParams();
  const product = findProduct(parseInt(productId), storeData);
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    addProductToCart(product, amount, cart, setCart);
  };

  return (
    <main className="product-details">
      {product && (
        <>
          <div className="img-container product-details__img-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info product-info__product-details">
            <h2 className="font-xl">${product.price}</h2>
            <h3 className="font-l">{product.title}</h3>
            <div className="rating">
              <p className="font-m">{`${getStars(product.rating.rate)} (${product.rating.count} reviews)`}</p>
            </div>
            <p className="font-s">{product.description}</p>
          </div>
          <AmountSetter
            setAmount={setAmount}
            amount={amount}
          />
          <div>
            <Button type="normal" text="Add to Cart" onClick={addToCart} />
            <Button type="link" path="/checkout" text="Checkout Now" />
          </div>
        </>
      )}
    </main>
  );
}
