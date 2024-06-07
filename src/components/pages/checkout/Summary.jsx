import PropTypes from "prop-types";
import styled from "styled-components";
import roundNumber from "../../../util/roundNumber";
import Button from "../../shared/Button";

const StyledSummary = styled.section`
  position: sticky;
  top: 6vw ;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  z-index: 0;

  h2, h3 {
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }
  @media (max-width: 920px) {
    border: none;
  }
`;

export default function Summary({ billTotal, taxesTotal, onPlaceOrder }) {
  return (
    <StyledSummary>
      <h2>Summary</h2>
      <p>Subtotal: ${roundNumber(billTotal)}</p>
      <p>Taxes: ${roundNumber(taxesTotal)}</p>
      <h3>Total: ${roundNumber(billTotal + taxesTotal)}</h3>
      <Button type="normal" text="Place Order" onClick={onPlaceOrder} />
    </StyledSummary>
  );
}

Summary.propTypes = {
  billTotal: PropTypes.number,
  taxesTotal: PropTypes.number,
  onPlaceOrder: PropTypes.func,
};
