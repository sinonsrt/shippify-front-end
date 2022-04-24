import {
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavBarLink,
  Logo,
} from "./Navbar.style";

import ShippifyLogo from "../../assets/shippify-logo.png";

export const NavBar = () => {
  return (
    <NavBarContainer>
      {" "}
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavBarLink to={"/"}> Home </NavBarLink>
            <NavBarLink to={"/companiesList"}> Company </NavBarLink>
            <NavBarLink to={"/driversList"}> Driver </NavBarLink>
            <NavBarLink to={"/vehiclesList"}> Vehicle </NavBarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={ShippifyLogo} />
        </RightContainer>
      </NavbarInnerContainer>
    </NavBarContainer>
  );
};
