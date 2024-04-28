/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarButton = styled.button`
  background: #022c22;
  border-radius: 24px;
  padding: 8px 20px 8px 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.004em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #ffffff;
  outline: none;
  border: none;
  white-space: nowrap;

  transition: all 0.3s ease;
  &:hover,
  &:focus {
    background: white;
    color: #022c22;
    border: 1px solid #022c22;
  }
  @media screen and (max-width: 403px) {
    height: 32px;
    font-size: 12px;
    line-height: 16px;
  }
`;

const SubmitBtn = styled.button`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  padding: 12px 24px 12px 24px;
  border-radius: 2.4rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.004em;
  border: none;
  background-color: #022c22;
  color: white;

  &:hover,
  &:focus {
    background: white;
    color: #022c22;
    border: 1px solid #022c22;
  }
`;

const JoinBtn = styled.button`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  padding: 8px 20px 8px 20px;
  border-radius: 0rem 2.2rem 2.2rem 0rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.004em;
  border: none;
  text-align: center;
  background-color: rgba(2, 44, 34, 1);
  background-color: #eff87a;

  color: rgba(2, 44, 34, 1);
  width: 100%;

  &:hover,
  &:focus {
    background: white;
    color: #022c22;
    border: 1px solid #022c22;
  }
`;

function Button({ children, disabled, to, type, onClick }) {
  // if (to)
  //   return (
  //     <Link to={to} >
  //       {children}
  //     </Link>
  //   );

  // if (onClick)
  //   return (
  //     <button onClick={onClick} disabled={disabled} className={styles[type]}>
  //       {children}
  //     </button>
  //   );

  // return (
  //   <button disabled={disabled} className={styles[type]}>
  //     {children}
  //   </button>
  // );
  if (type === "join")
    return (
      <NavbarButton>
        <Link to="/join">Join Waitlist</Link>
      </NavbarButton>
    );
  if (type === "submit") return <SubmitBtn type="submit">{children}</SubmitBtn>;
  if (type === "joinHero") return <JoinBtn type="submit">{children}</JoinBtn>;
}

// Button.prototype = {
//   type: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
// }

export default Button;
