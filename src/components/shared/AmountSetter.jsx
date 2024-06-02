import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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

function useAmountSetter(amount, setAmount) {
  const [error, setError] = useState(null);

  const amountIsValid = (action, amount) => {
    switch (action) {
      case "increment":
        return amount <= 1000000;
      case "decrement":
        return amount > 1;
      case "setCustom":
        return amount > 0 && amount <= 1000000;
      default:
        return false;
    }
  };

  const incrementAmount = () => {
    if (amountIsValid("increment", amount)) {
      setAmount(amount + 1);
      setError(null);
    } else {
      setError("Maximum amount exceeded. You can only purchase up to 1.000.000 (one million) items at a time");
    }
  };

  const decrementAmount = () => {
    if (amountIsValid("decrement", amount)) {
      setAmount(amount - 1);
      setError(null);
    } else {
      setError("The minimum amount for purchasing is 1");
    }
  };

  const setCustomAmount = (value) => {
    if (value === "") {
      setError("The minimum amount for purchasing is 1");
      return;
    }

    if (!(/^\d+$/.test(value))) {
      setError("Only numbers are allowed");
      return;
    } else {
      setError(null);
    }

    const parsedAmount = parseInt(value, 10);

    if (amountIsValid("setCustom", parsedAmount)) {
      setAmount(parsedAmount);
      setError(null);
    } else {
      setError("Invalid amount. Type a number from 1 to 1.000.000");
    }
  };

  return { error, incrementAmount, decrementAmount, setCustomAmount };
}
