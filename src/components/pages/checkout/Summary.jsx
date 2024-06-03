import PropTypes from "prop-types";
import Button from "../../shared/Button";

export default function Summary({ billTotal, onPlaceOrder }) {
  return (
    <section>
      <h2>Summary</h2>
      <p>Total: ${billTotal}</p>
      <Button text="Place Order" onClick={onPlaceOrder} />
    </section>
  );
}

Summary.propTypes = {
  billTotal: PropTypes.number,
  onPlaceOrder: PropTypes.func,
};
