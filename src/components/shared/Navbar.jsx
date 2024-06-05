import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: clamp(20px, 2vw, 40px) clamp(10px, 4vw, 40px);
  position: sticky;
  top: 0;
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(5px, 5vw, 50px);
    margin: 0;
    padding: 0;
  }
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  border-radius: 5px;
  transition: all 150ms ease-in-out;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  &:hover ${NavItem} {
    outline: 1px solid ${({ theme }) => theme.colors.secondary};
    transform: scale(1.1);
  }
  &.active ${NavItem} {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function NavBar({ cart }) {
  return (
    <Nav>
      <ul>
        <NavLinkStyled to="/">
          <NavItem>Home</NavItem>
        </NavLinkStyled>
        <NavLinkStyled to="products">
          <NavItem>Products</NavItem>
        </NavLinkStyled>
        <NavLinkStyled to="checkout">
          <NavItem>Checkout({cart.length})</NavItem>
        </NavLinkStyled>
      </ul>
    </Nav>
  );
}

NavBar.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
};
