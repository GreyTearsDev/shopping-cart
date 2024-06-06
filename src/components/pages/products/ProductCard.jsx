import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import addProductToCart from "../../../util/addProductToCart";
import getStars from "../../../util/getStars";
import Button from "../../shared/Button";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(4px, 1vw, 20px) clamp(4px, 2vw, 20px);
  background-color: ${({ theme }) => theme.colors.ternary};
  border-radius: 0.9rem;

  button {
  margin-top: 30px;
}
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  display: flex;
  border-radius: 0.9rem;
  justify-content: center;

  img {
    object-fit: contain;
  }
`;

const InfoWrapper = styled.div`
  height: max-content;
  display: grid;
  grid-template-rows: 300px repeat(3, max-content);
  marign-bottom: 200px;
`;

export default function ProductCard({ product }) {
  const [, , cart, setCart] = useOutletContext();

  const addToCart = () => {
    addProductToCart(product, 1, cart, setCart);
  };

  return (
    <Wrapper>
      <Link to={`/product-details/${product.id}`}>
        <InfoWrapper>
          <ImageWrapper>
            <img src={product.image} alt={product.title} />
          </ImageWrapper>
          <h2>{product.title}</h2>
          <div>
            <p>{`${getStars(product.rating.rate)} (${product.rating.count} reviews)`}</p>
          </div>
          <h3>${product.price}</h3>
        </InfoWrapper>
      </Link>
      <Button type="normal" text="Add to cart" onClick={addToCart} />
    </Wrapper>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
