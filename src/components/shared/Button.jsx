import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ type = "normal", path, text, onClick }) {
  return (
    <>
      {type == "link"
        ? (
          <Link to={path}>
            <button>{text}</button>
          </Link>
        )
        : <button onClick={onClick}>{text}</button>}
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
