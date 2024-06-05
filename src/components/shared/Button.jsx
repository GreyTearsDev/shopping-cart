import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyles = css`
  background: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 5px;
  font-size: inherit;
  display: inline-block;
  transition: all 200ms ease;

  background-color: ${({ theme, type, active }) =>
  type === "normal" && active === "false" || active === "true"
    ? theme.colors.primary
    : theme.colors.secondary};

  color: ${({ theme, type, active }) =>
  type === "filter" && active === "true"
    ? theme.colors.secondary
    : type === "normal"
    ? theme.colors.secondary
    : theme.colors.primary};

  outline: 2px solid
    ${({ theme, type, active }) =>
  (type === "link" || active === "false")
    ? theme.colors.primary
    : "transparent"};

  padding: ${({ type }) => type === "normal" ? "10px 20px" : "8px 18px"};

   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const StyledLinkButton = styled(Link)`

  & > ${StyledButton} {

    ${buttonStyles}
  }
`;

export default function Button({ active, type, path, text, onClick }) {
  return type === "link"
    ? (
      <StyledLinkButton to={path}>
        <StyledButton>{text}</StyledButton>
      </StyledLinkButton>
    )
    : (
      <StyledButton active={active ? "true" : "false"} type={type} onClick={onClick}>
        {text}
      </StyledButton>
    );
}

Button.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.string.isRequired,
  path: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
