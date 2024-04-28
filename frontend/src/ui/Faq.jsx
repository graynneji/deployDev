import styled from "styled-components";
import Arrow from "/img/Icon.svg";
import Vector from "/img/Vector.svg";
const StyledFaq = styled.section`
  background-color: #ffffff;
`;

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 64px 200px 64px 200px;
  color: rgba(2, 44, 34, 1);
  @media screen and (max-width: 685px) {
    padding: 40px 16px 40px 16px;
  }
`;

const BoldText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 5.2rem;
  letter-spacing: -0.01em;
  text-align: center;

  @media screen and (max-width: 685px) {
    font-size: 3.2rem;
    line-height: 4rem;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;

const MainFaq = styled.div`
  max-width: 79.3rem;
  width: 100%;
  align-self: center;
`;
const IndividualFaq = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(246, 246, 246, 1);
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  word-wrap: break-word;
  img {
    color: rgba(2, 44, 34, 1);
  }

  /* &:first-child {
    border-top: none;
  } */
`;

const TextFaq = styled.span`
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: -0.01em;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

const SpanRound = styled.span`
  position: relative;
  img {
    position: absolute;
    right: 0.2em;
    top: -0.4em;
  }
`;

function Faq() {
  const faq = [
    "What is betterspace?",
    "Who is betterspace for?",
    "Can I choose my own therapist?",
  ];
  return (
    <StyledFaq>
      <FaqContainer>
        <BoldText>
          Your questions,{" "}
          <SpanRound>
            answered.
            <img src={Vector} alt="Vector" />
          </SpanRound>
        </BoldText>

        <MainFaq>
          {Array.from({ length: 3 }, (_, i) => (
            <IndividualFaq key={i}>
              <TextFaq>{faq[i]}</TextFaq>
              <img src={Arrow} alt="arrow" />
            </IndividualFaq>
          ))}
        </MainFaq>
      </FaqContainer>
    </StyledFaq>
  );
}

export default Faq;
