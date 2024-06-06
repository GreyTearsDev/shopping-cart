import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useAmountSetter from "../../hooks/useAmountSetter";

export default function AmountSetter({ amount, setAmount }) {
  const [displayAmount, setDisplayAmount] = useState(amount);
  const { error, incrementAmount, decrementAmount, setCustomAmount } = useAmountSetter(amount, setDisplayAmount);

  useEffect(() => {
    setAmount(displayAmount);
  }, [setAmount, displayAmount]);

  return (
    <Wrapper>
      {error && <p>{error}</p>}
      <Button onClick={decrementAmount}>-</Button>
      <Input
        value={displayAmount.toString()}
        onChange={(e) => setCustomAmount(e.target.value)}
        pattern="\d+"
      />
      <Button onClick={incrementAmount}>+</Button>
    </Wrapper>
  );
}

AmountSetter.propTypes = {
  setAmount: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: minmax(40px, 25%) 1fr minmax(40px, 25%);
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 200ms ease, transform 100ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Input = styled.input`
  flex: 1;
  text-align: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
`;
