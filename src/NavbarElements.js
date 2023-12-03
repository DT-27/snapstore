import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  /* Your existing styles for the navigation bar */
  /* ... */
`;
export const Search = styled.nav`
  margin: 3.5rem 0 .5rem;

`;


export const StyledNavLink = styled(NavLink)`
  /* Your styling for the navigation links */
  color: #000000;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  transition: color 0.3s ease;
margin-bottom:50px;
font-family:cursive;

  &:hover {
    color: #808080; /* Change color on hover */
  }

  &.active {
    color: #0000FF; /* Change color for active route */
  }
`;

export const NavMenu = styled.nav`
  /* Your existing styles for the navigation menu */
  /* ... */
margin-bottom:70px;
display:flex;
justify-content:center;
margin-top:30px;
font-size: 20px;

  @media screen and (max-width: 768px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #333;
    z-index: 1;
    text-align:center;
    padding-top:20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;
    margin-right: 70px;
    margin-top:15px;
    margin-bottom:70px;
  justify-content:center;
  }
`;
