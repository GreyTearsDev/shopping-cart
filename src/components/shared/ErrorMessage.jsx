import PropTypes from "prop-types";

export default function ErrorMessage({ message = "Error 404: Page not found" }) {
  return <h2>{message}</h2>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
