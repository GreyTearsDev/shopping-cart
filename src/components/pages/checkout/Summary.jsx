import PropTypes from "prop-types";
import roundNumber from "../../../util/roundNumber";
import Button from "../../shared/Button";

export default function Summary({ billTotal, taxesTotal, onPlaceOrder }) {
  return (
    <section>
      <h2>Summary</h2>
      <p>Subtotal: ${roundNumber(billTotal)}</p>
      <p>Taxes: ${roundNumber(taxesTotal)}</p>
      <h3>Total: ${roundNumber(billTotal + taxesTotal)}</h3>
      <Button type="normal" text="Place Order" onClick={onPlaceOrder} />
    </section>
  );
}

Summary.propTypes = {
  billTotal: PropTypes.number,
  taxesTotal: PropTypes.number,
  onPlaceOrder: PropTypes.func,
};
