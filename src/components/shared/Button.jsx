import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ type, path, text }) {
  return (
    <>
      {type == "link"
        ? (
          <Link to={path}>
            <button>{text}</button>
          </Link>
        )
        : <button>{text}</button>}
    </>
  );
}

Button.defaultProps = {
  type: "normal",
};

Button.propTypes = {
  type: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
};
