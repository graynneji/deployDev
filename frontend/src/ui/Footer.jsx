/* eslint-disable no-unused-vars */
import Logo from "/img/Logo.svg";
import Linkedin from "/img/Linkedin.svg";
import Instagram from "/img/Instagram.svg";
import Twitter from "/img/Twittter.svg";
import Facebook from "/img/Facebook.svg";
import Chevron from "/img/arrow-right.svg";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  padding: 6.4rem 20rem 6.4rem 20rem;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  /* align-items: center; */
  background: #022c22;
  width: 100vw;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  @media screen and (max-width: 990px) {
    padding: 40px 16px 40px 16px;
    justify-content: center;
    align-items: center;
  }
`;

const FooterTopContainer = styled.div`
  display: grid;
  /* justify-content: space-between; */
  align-items: center;
  border-radius: 16px;
  padding: 32px;
  gap: 24px;
  /* max-width: 1040px; */
  width: 100%;
  background: #eff87a;

  /* grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%) 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(min-content, 30rem)); */
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    gap: 1.6rem;
  }
`;

const FooterTopContent = styled.div`
  display: flex;
  //display: grid;
  /* gap: 32px; */
  justify-content: space-between;
  align-items: center;
  /* @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: start;
  } */
`;

const FooterTopText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterTopTextBold = styled.h5`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.01em;
  /* text-align: left; */
  color: ${(props) => props.theme.colors.green950};
  @media screen and (max-width: 400px) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const FooterTopTextLight = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.004em;
  text-align: left;
  color: #022c22;
  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

const FooterTopField = styled.div`
  border: 1px solid #022c221a;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  border-radius: 48px;
  flex-shrink: 1;
  max-width: 100%;
  border: 1px;
  /* width: 50%; */
  /* height: 48px; */
  @media screen and (max-width: 400px) {
    padding: 0px 0px 0px 16px;
    max-height: 3.6rem;
    width: 100%;
  }
`;

const FooterTopFieldInput = styled.input`
  background: #ffffff;
  padding: 0px 0px 0px 24px;
  border-radius: 48px;
  border: none;
  color: #888888;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.004em;
  &:focus {
    outline: none;
    outline-offset: none;
  }
  @media screen and (max-width: 400px) {
    padding: 0px 0px 0px 16px;
    font-size: 12px;
    width: 100%;
    border-radius: 24px;
  }
`;

const FooterTopFieldButton = styled.button`
  background: #022c22;
  border-radius: 0px 48px 48px 0px;
  padding: 12px 20px 12px 20px;
  display: flex;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  /* letter-spacing: -0.004em; */
  text-align: center;
  color: white;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 8px 16px 8px 16px;
    width: 100%;
    line-height: 20px;
    text-align: center;
    max-width: 10.5rem;
    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const FooterBottomContainer = styled.div`
  display: flex;
  padding: 64px 0 64px 0;
  gap: 24px;
  flex-direction: column;
`;

const FooterBottomContent = styled(FooterTopContent)`
  gap: 24px;
  flex-direction: row;
  @media screen and (max-width: 400px) {
    gap: 14px;
  }
`;

const FooterBottomBlock = styled(FooterTopContent)`
  gap: 0;
  padding: 24px 0 0 0;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: row; */
  border: 0.1rem 0rem 0rem 0rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 24px;
    padding: 0;
  }
`;

const FooterBottomBlockText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.004em;
  text-align: left;
  color: white;
  @media screen and (max-width: 400px) {
    font-size: 10px;
    color: #d1d1d1;
  }
`;

const FooterBottomLink = styled(FooterBottomBlockText).attrs({
  as: "a",
})`
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    font-size: 11px;
  }
`;

const FooterSocials = styled(FooterTopContent)`
  gap: 16px;
  flex-direction: row;
`;

const FooterSocialsButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterTopContainer>
        {/* <FooterTopContent> */}
        <FooterTopText>
          <FooterTopTextBold>
            Your well-being deserves to be a priority.
          </FooterTopTextBold>
          <FooterTopTextLight>
            Be among the first to experience Betterspace
          </FooterTopTextLight>
        </FooterTopText>
        <FooterTopField>
          <FooterTopFieldInput placeholder="Email Address" type="email" />
          <FooterTopFieldButton>
            Submit
            <img src={Chevron} alt="Arrow Right" />
          </FooterTopFieldButton>
        </FooterTopField>
        {/* </FooterTopContent> */}
      </FooterTopContainer>
      <FooterBottomContainer>
        <FooterBottomContent>
          <img src={Logo} alt="Logo" width="100%" />
        </FooterBottomContent>
        <FooterBottomBlock>
          <FooterBottomContent>
            <FooterBottomLink>About</FooterBottomLink>
            <FooterBottomLink>Pricing</FooterBottomLink>
            <FooterBottomLink>Contact</FooterBottomLink>
            <FooterBottomLink>Privacy</FooterBottomLink>
            <FooterBottomLink>Terms</FooterBottomLink>
          </FooterBottomContent>
          <FooterSocials>
            <FooterSocialsButton>
              <img src={Linkedin} alt="Linkedin" />
            </FooterSocialsButton>
            <FooterSocialsButton>
              <img src={Instagram} alt="Instagram" />
            </FooterSocialsButton>
            <FooterSocialsButton>
              <img src={Twitter} alt="Twitter" />
            </FooterSocialsButton>
            <FooterSocialsButton>
              <img src={Facebook} alt="Facebook" />
            </FooterSocialsButton>
          </FooterSocials>
        </FooterBottomBlock>
        <FooterBottomBlock>
          <FooterBottomBlockText>
            © 2024 betterspace. All rights reserved.
          </FooterBottomBlockText>
        </FooterBottomBlock>
      </FooterBottomContainer>
    </StyledFooter>
  );
}

export default Footer;
