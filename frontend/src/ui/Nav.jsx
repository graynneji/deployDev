import Aos from "aos";
import { toggleMenu } from "../store/menuModalSlice";
import styled, { keyframes, css } from "styled-components";
import Hamburger from "/img/Hamburger menu.svg";
import Close from "/img/Close.svg";
import Logo from "/img/Company Logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "./Button";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(45deg);
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const StyledNav = styled.nav`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  background-color: #ffffff;
  border-bottom: 1px solid #eaebf0;
  display: flex;
  height: 80px;
  align-items: center;
  gap: 10px;

  padding: 20px 160px 20px 160px;
  @media screen and (max-width: 1270px) {
    padding: 20px 60px 20px 60px;
  }
  @media screen and (max-width: 992px) {
    padding: 16px;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0 32px 0 32px; */
  width: 100%;
  align-items: center;
  /* gap: 24px; */
  @media screen and (max-width: 992px) {
    padding: 0;
  }
`;

const NavbarContent = styled(NavbarContainer)`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItems = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 32px;

  padding: 0;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const NavToggle = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 16px;
  @media screen and (max-width: 992px) {
    display: flex;
  }
`;

const NavItem = styled.li`
  display: flex;
  gap: 6px;
`;

const MenuIcon = styled.img.attrs({
  src: Hamburger,
  alt: "Menu Icon",
})`
  width: 50px;
  height: 50px;
  color: #022c22;
`;

const CloseIcon = styled.img.attrs({
  src: Close,
  alt: "Close Icon",
})`
  width: 50px;
  height: 50px;
  color: #022c22;
  animation: ${spin} 0.3s ease-in-out;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  z-index: 99999;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px #1018281a;
  box-shadow: 0px 1px 2px -1px #1018281a;
  width: 100%;
  border-top: 1px solid #eaebf0;
  transition: all 0.4s ease-in-out;
  top: ${({ isopen }) => (isopen ? "80px" : "-100%")};
  margin-left: -16px;
  padding-left: 16px;
  max-height: ${({ isopen }) => (isopen ? "200px" : "0")};
  overflow-y: auto;
  ${({ isopen }) =>
    isopen &&
    css`
      animation: ${fadeInDown} 0.4s ease-in-out;
    `}
`;

const NavMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const MenuItem = styled.li`
  display: flex;
  border-radius: 5px;
  padding: 10px;
  gap: 12px;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.004em;
  text-align: left;
  color: #022c22;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    border-bottom: 2px solid #022c22;
  }
`;

const NavMenuLink = styled(NavLink)`
  &:hover,
  &:focus {
    border: none;
  }
`;

const NavbarButtonContainer = styled.div`
  display: flex;
  padding: 0 0 0 32px;
  gap: 24px;
`;

// const NavbarButton = styled.button`
//   background: #022c22;
//   border-radius: 24px;
//   padding: 8px 20px 8px 20px;
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 24px;
//   letter-spacing: -0.004em;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: left;
//   color: #ffffff;
//   outline: none;
//   border: none;
//   white-space: nowrap;
//   /* text-wrap: nowrap; */
//   transition: all 0.3s ease;
//   &:hover,
//   &:focus {
//     background: white;
//     color: #022c22;
//     border: 1px solid #022c22;
//   }
//   @media screen and (max-width: 403px) {
//     height: 32px;
//     font-size: 12px;
//     line-height: 16px;
//   }
// `;

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

function Nav() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menuModal.isMenuOpen);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <StyledNav>
      <NavbarContainer>
        <NavbarContent>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <NavbarItems>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pricing">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavbarItems>
        </NavbarContent>
        <NavbarButtonContainer>
          <Button to="/join" type="join">
            Join waitlist
          </Button>
        </NavbarButtonContainer>
        <NavToggle
          onClick={handleMenuClick}
          {...(isMenuOpen ? { isopen: "true" } : {})}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </NavToggle>
      </NavbarContainer>
      <NavMenu {...(isMenuOpen ? { isopen: "true" } : {})}>
        <NavMenuContainer>
          <MenuItem>
            <NavMenuLink>About</NavMenuLink>
          </MenuItem>
          <MenuItem>
            <NavMenuLink>Pricing</NavMenuLink>
          </MenuItem>
          <MenuItem>
            <NavMenuLink>Contact</NavMenuLink>
          </MenuItem>
        </NavMenuContainer>
      </NavMenu>
    </StyledNav>
  );
}

export default Nav;
