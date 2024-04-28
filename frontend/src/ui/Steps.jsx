import styled from "styled-components";
import Frame from "/img/Frame.svg";
import { Fragment } from "react";

const StyledSteps = styled.section`
  background-color: rgba(239, 248, 122, 1);
`;

const StepsContainer = styled.div`
  padding: 64px 200px 64px 200px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* justify-content: center;
  align-items: center; */

  @media screen and (max-width: 685px) {
    padding: 40px 16px 40px 16px;
  }
`;

const TextBold = styled.span`
  font-family: "Poppins", sans-serif;
  flex: 1;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 4.8rem;
  letter-spacing: -0.01em;
  color: rgba(2, 44, 34, 1);
  /* word-wrap: break-all; */
  @media screen and (max-width: 685px) {
    font-size: 3.2rem;
    line-height: 4rem;
    letter-spacing: -0.01em;
  }
`;

const StepsProper = styled.div`
  display: flex;
  gap: 3.2rem;
  /* justify-content: center;
  align-items: center; */
  @media screen and (max-width: 685px) {
    /* padding: 40px 16px 40px 16px; */
    flex-direction: column;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* max-width: 23.6rem; */
  width: 100%;
  height: auto;
  color: rgba(2, 44, 34, 1);
`;

const StepNumber = styled.span`
  font-weight: 800;
  font-size: 4rem;
  line-height: 4.2rem;
  position: relative;
  z-index: 9999;
  /* text-align: center; */
`;
const StepBoldText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: -0.01em;
  /* text-align: center; */
`;
const StepLightText = styled.span`
  font-family: "Ïnter", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;

  /* text-align: center; */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const NumberContainer = styled.div`
  position: relative;
`;

const RoundedImg = styled.div`
  /* position: absolute; */
  /* top: -0.8em;
  left: -0.8em; */
  img {
    position: absolute;
    top: -0.3em;
    left: -0.3em;
  }
`;

function Steps() {
  const stepsWords = [
    {
      head: "Sign Up",
      body: "Download the Betterspace app from the App Store or Google Play.",
    },
    {
      head: "Tell us about yourself",
      body: "Answer a few questions to help us understand your needs.",
    },
    {
      head: "Therapist Match",
      body: "We connect you with therapists suited to your needs.",
    },

    {
      head: "Start Your Therapy Journey",
      body: "Once a therapist is available, we'll connect you and help schedule your first session.",
    },
  ];

  return (
    <StyledSteps>
      <StepsContainer>
        <TextBold>
          Making the first step in your
          <br /> mental health journey easier.
        </TextBold>

        <StepsProper>
          {Array.from({ length: 4 }, (_, i) => (
            <Fragment key={i}>
              <Step>
                <NumberContainer>
                  <RoundedImg>
                    <StepNumber>{i + 1}</StepNumber>
                    <img src={Frame} alt="frame" />
                  </RoundedImg>
                </NumberContainer>
                <TextContainer>
                  <StepBoldText>{stepsWords[i].head}</StepBoldText>
                  <StepLightText>{stepsWords[i].body}</StepLightText>
                </TextContainer>
              </Step>
            </Fragment>
          ))}
        </StepsProper>
      </StepsContainer>
    </StyledSteps>
  );
}

export default Steps;
