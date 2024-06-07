import PropTypes from "prop-types";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import addProductToCart from "../../../util/addProductToCart";
import AmountSetter from "../../shared/AmountSetter";
import Button from "../../shared/Button";

const ArticleWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: grid;
  grid-template-columns: minmax(200px, 25%) 1fr;
  border: 1px solid ${({ theme }) => theme.colors.ternary};
  padding: 0.5rem 1rem;
  margin: clamp(20px, 2vw, 40px) 0;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-self: center;
  max-width: 60%;
  align-self: center;

  img {
    object-fit: contain;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 3vw;  
`;

const InfoWrapper = styled.div`
  height: max-content;
  display: grid;
  grid-template-rows: repeat(auto-fill, max-content);
  marign-bottom: 200px;

  p {
    margin: 0 0 1rem 0;
  }

  @media (max-width: 920px) {
      align-items: center;
  }
`;

export default function CheckedOutProductCard({ product, onDelete, productAmount }) {
  const [amount, setAmount] = useState(parseInt(productAmount));
  const [, , cart, setCart] = useOutletContext();

  const addToCart = () => {
    addProductToCart(product, amount, cart, setCart);
  };

  return (
    <ArticleWrapper>
      <ImageWrapper>
        <img src={product.image} alt={product.title} />
      </ImageWrapper>

      <InfoWrapper>
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <AmountSetter amount={amount} setAmount={setAmount} />

        <ButtonsWrapper>
          <Button type="normal" text="Update Bill" onClick={addToCart} />
          <Button type="normal" text="Remove Item" onClick={() => onDelete(product)} />
        </ButtonsWrapper>
      </InfoWrapper>
    </ArticleWrapper>
  );
}

CheckedOutProductCard.propTypes = {
  product: PropTypes.object,
  onDelete: PropTypes.func,
  productAmount: PropTypes.number,
};
