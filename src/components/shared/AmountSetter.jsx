import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAmountSetter from "../../hooks/useAmountSetter";
import Button from "./Button";

export default function AmountSetter({ amount, setAmount }) {
  const [displayAmount, setDisplayAmount] = useState(amount);
  const { error, incrementAmount, decrementAmount, setCustomAmount } = useAmountSetter(amount, setDisplayAmount);

  useEffect(() => {
    setAmount(displayAmount);
  }, [setAmount, displayAmount]);

  return (
    <div>
      {error && <p>{error}</p>}
      <Button type="normal" text="-" onClick={decrementAmount} />
      <input value={displayAmount.toString()} onChange={(e) => setCustomAmount(e.target.value)} pattern="\d+" />
      <Button type="normal" text="+" onClick={incrementAmount} />
    </div>
  );
}

AmountSetter.propTypes = {
  setAmount: PropTypes.func,
  amount: PropTypes.number,
};
