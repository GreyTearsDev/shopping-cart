import { useEffect, useState } from "react";
import roundNumber from "../util/roundNumber";

const useBillAndTaxes = (cart) => {
  const [billTotal, setBillTotal] = useState(0);
  const [taxesTotal, setTaxesTotal] = useState(0);

  useEffect(() => {
    const TAX_PERCENTAGE = 0.14;
    let taxesTotalArray = [];

    const billTotal = cart.map(product => {
      const total = product.price * product.amount;
      taxesTotalArray.push(roundNumber(total * TAX_PERCENTAGE));
      return total;
    }).reduce((prev, curr) => prev + curr, 0);

    const taxesTotal = taxesTotalArray.reduce((prev, curr) => prev + curr, 0);

    setBillTotal(billTotal);
    setTaxesTotal(taxesTotal);
  }, [cart]);

  return { billTotal, taxesTotal };
};

export default useBillAndTaxes;
