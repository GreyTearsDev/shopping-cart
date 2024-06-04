import PropTypes from "prop-types";
import Button from "../../shared/Button";

export default function Summary({ billTotal, taxesTotal, onPlaceOrder }) {
  return (
    <section>
      <h2>Summary</h2>
      <p>Subtotal: ${billTotal}</p>
      <p>Taxes: ${taxesTotal}</p>
      <h3>Total: ${Math.round(((billTotal + taxesTotal) + Number.EPSILON) * 100) / 100}</h3>
      <Button text="Place Order" onClick={onPlaceOrder} />
    </section>
  );
}

Summary.propTypes = {
  billTotal: PropTypes.number,
  taxesTotal: PropTypes.number,
  onPlaceOrder: PropTypes.func,
};
