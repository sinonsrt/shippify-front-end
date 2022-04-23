import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavBarLink = styled(Link)`
  color: white;
  font-size: large;
  margin: 10px;
  text-decoration: none;
`;

export const Logo = styled.img`
  margin: 20px;
  max-width: 180px;
  height: auto;
`;
