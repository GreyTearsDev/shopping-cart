import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAmountSetter from "../../hooks/useAmountSetter";

export default function AmountSetter({ amount, setAmount }) {
  const [displayAmount, setDisplayAmount] = useState(amount);
  const { error, incrementAmount, decrementAmount, setCustomAmount } = useAmountSetter(amount, setDisplayAmount);

  useEffect(() => {
    setAmount(displayAmount);
  }, [setAmount, displayAmount]);

  return (
    <div>
      {error && <p>{error}</p>}
      <button onClick={decrementAmount}>-</button>
      <input value={displayAmount.toString()} onChange={(e) => setCustomAmount(e.target.value)} pattern="\d+" />
      <button onClick={incrementAmount}>+</button>
    </div>
  );
}

AmountSetter.propTypes = {
  setAmount: PropTypes.func,
  amount: PropTypes.number,
};
