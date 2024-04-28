/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

const StyledWhy = styled.section`
  background-color: rgba(248, 244, 240, 1);
`;

const WhyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 6.4rem 20rem 6.4rem 20rem;
  flex-direction: column;

  align-items: center;

  width: 100vw;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  @media screen and (max-width: 990px) {
    padding: 40px 16px 40px 16px;
    justify-content: center;
    align-items: center;
  }
`;

const WhyBoldText = styled.span`
  font-family: Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: -0.01em;
  text-align: center;
  line-height: 4.8rem;
  color: rgba(2, 44, 34, 1);
  /* padding: 64px 120px 64px 120px; */
  @media screen and (max-width: 687.2px) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;
const WhyTinyText = styled.span`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: -0.004em;
  text-align: center;
  line-height: 2.6rem;
  color: rgba(2, 44, 34, 1);
  /* padding: 64px 120px 64px 120px; */
  @media screen and (max-width: 687.2px) {
    font-size: 1.6rem;

    line-height: 2.4rem;
  }
`;

function Why() {
  return (
    <StyledWhy>
      <WhyContainer>
        <WhyBoldText>Why betterspace?</WhyBoldText>

        <WhyTinyText>
          Life can be challenging, but your mental health journey doesn’t have
          to be. At BetterSpace, we understand the importance of prioritizing
          your well-being. Whether you're seeking support for stress, anxiety,
          or just need a safe space to express yourself, we're here for you. Our
          mission is simple: to empower you on your path to a happier, healthier
          life.
        </WhyTinyText>
      </WhyContainer>
    </StyledWhy>
  );
}

export default Why;
