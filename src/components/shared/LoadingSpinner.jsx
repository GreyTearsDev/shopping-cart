import styled from "styled-components";

const Wrapper = styled.main`
  padding: 6vw 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export default function LoadingSpinner() {
  return (
    <Wrapper>
      <h2>Loading...</h2>
    </Wrapper>
  );
}
