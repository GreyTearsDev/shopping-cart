import styled from "styled-components";
import Button from "../../shared/Button";

const Wrapper = styled.main`
padding: 6vw 0;
height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
  margin-top: 1vw;
}
`;

export default function Home() {
  return (
    <Wrapper>
      <h1>EXPLORE OUR STORE</h1>

      <Button type="link" path="products" text="Shop now" />
    </Wrapper>
  );
}
