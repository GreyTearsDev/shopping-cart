import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ type = "normal", path, text }) {
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

Button.propTypes = {
  type: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
};
