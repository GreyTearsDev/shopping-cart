import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useAmountSetter from "../../hooks/useAmountSetter";

const Wrapper = styled.div`
  width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
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
  width: 50px;
  text-align: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
`;

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
