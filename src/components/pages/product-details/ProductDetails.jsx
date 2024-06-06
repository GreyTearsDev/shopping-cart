import { useState } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import addProductToCart from "../../../util/addProductToCart";
import findProduct from "../../../util/findProduct";
import getStars from "../../../util/getStars";
import AmountSetter from "../../shared/AmountSetter";
import Button from "../../shared/Button";

const Wrapper = styled.section`
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: minmax(20vh, 50vh);
  gap: 5.5rem;

`;
const ImageWrapper = styled.div`
  max-width: 60%;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-self: center;
  align-self: center;

  img {
    object-fit: contain;
  }
`;

const DescriptionWrapper = styled.div`
  margin: calc(10px, 2vw, 30px) 0;
`;

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin: 0;
    font-size: clamp(8px, 5vw, 34px);
  }

  div > p {
    margin:0.3vw 0 ;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 3vw;  
  margin: (10px, 2vw, 30px) 0;
`;

export default function ProductDetails() {
  const [storeData, , cart, setCart] = useOutletContext();
  const { productId } = useParams();
  const product = findProduct(parseInt(productId), storeData);
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    addProductToCart(product, amount, cart, setCart);
  };

  return (
    product && (
      <Wrapper>
        <ImageWrapper>
          <img src={product.image} alt={product.title} />
        </ImageWrapper>

        <InfoWrapper>
          <h2>${product.price}</h2>
          <h3>{product.title}</h3>
          <div>
            <p>{`${getStars(product.rating.rate)} (${product.rating.count} reviews)`}</p>
          </div>
          <DescriptionWrapper>
            <p>{product.description}</p>
          </DescriptionWrapper>

          <AmountSetter
            setAmount={setAmount}
            amount={amount}
          />
          <ButtonsWrapper>
            <Button type="normal" text="Add to Cart" onClick={addToCart} />
            <Button type="link" path="/checkout" text="Checkout Now" />
          </ButtonsWrapper>
        </InfoWrapper>
      </Wrapper>
    )
  );
}
