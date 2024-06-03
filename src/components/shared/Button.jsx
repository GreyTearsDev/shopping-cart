import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ active, type = "normal", path, text, onClick }) {
  return (
    <>
      {type == "link"
        ? (
          <Link to={path}>
            <button className={active ? "active" : null}>{text}</button>
          </Link>
        )
        : <button onClick={onClick}>{text}</button>}
    </>
  );
}

Button.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
