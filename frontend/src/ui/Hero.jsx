/* eslint-disable no-unused-vars */
import styled from "styled-components";
import RightHeroImage from "/img/IMg.svg";
import Input from "./Input";
import { Form, useForm } from "react-hook-form";
import Button from "./Button";
import Flower from "/img/Elements-geometric-shape-flower-marigold-nature.svg";
import Line from "/img/Line 1.svg";
import Star from "/img/Elements-geometric-shape-star-cosmos.svg";

export const HeroContainer = styled.section`
  padding: 64px 120px 64px 120px;
  width: 100vw;
  overflow-x: hidden;

  @media screen and (max-width: 1270px) {
    padding: 64px 16px 64px 16px;
  }
  @media screen and (max-width: 990px) {
    padding: 32px 16px 32px 16px;

    justify-content: center;
    flex-direction: column;
  }
`;

const StyledHero = styled.div`
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;
  padding: 0px 40px 0px 40px;

  @media screen and (max-width: 1270px) {
    /* flex-direction: column; */
    /* padding: 16px 60px 16px 60px; */

    /* padding: 0px 40px 0px 40px; */
    gap: 3.2rem;
    /* justify-content: center;
    align-items: center; */
  }
  @media screen and (max-width: 990px) {
    padding: 0px 0px 0px 0px;
    flex-direction: column;
  }
`;

const LeftHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  align-self: center;
  width: 100%;
`;

const LeftTextHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const LeftTextBold = styled.h1`
  font-family: "Poppins", sans-serif;
  position: relative;
  color: rgba(2, 44, 34, 1);
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 6.8rem;
  letter-spacing: -0.04em;
  @media screen and (max-width: 990px) {
    font-size: 3.6rem;
    line-height: 4.8rem;
    letter-spacing: -0.01em;
  }
`;

const LeftTextLight = styled.h5`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: -0.004em;

  color: rgba(2, 44, 34, 1);
`;

const RightHero = styled.picture`
  flex: 1;
  position: relative;
  width: 100%;
  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;
const StyledForm = styled.form`
  display: flex;
  border: 0.2rem solid rgba(2, 44, 34, 0.1);
  padding: 0px 0px 0px 24px;
  border-radius: 4.8rem;
  justify-content: space-between;
  /* flex-shrink: 1; */
  max-width: 40.5rem;
  max-height: 40.5rem;
  overflow: hidden;
  &:hover,
  &:focus {
    background: white;
    color: #022c22;
    border: 1px solid #022c22;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    max-width: none;
    max-height: none;
  }
  @media screen and (max-width: 695.2px) {
    width: 100%;
    max-width: none;
    max-height: none;
  }
`;

const StyledFlower = styled.div`
  position: absolute;
  top: -2em;
  right: -3em;
  z-index: 9999;
  img {
    max-width: 90%;
    height: auto;
  }
  @media screen and (max-width: 687.2px) {
    top: -1.2em;
    right: -5.5em;

    img {
      max-width: 60%;
      height: auto;
    }
  }
`;

const StyledStar = styled.picture`
  position: absolute;
  bottom: -3em;
  left: -2.5em;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 687.2px) {
    bottom: -3em;
    left: -1.8em;
    img {
      max-width: 70%;
      height: auto;
    }
  }
`;
const StyledLine = styled.picture`
  position: absolute;
  bottom: -0.3em;
  left: 12px;
  /* img {
    width: 100%;
    height: 100%;
  } */
  /* @media screen and (max-width: 1496.8px) {
    top: 293px;
  } */
  @media screen and (max-width: 989.6px) {
    bottom: -0.4em;
  }
`;
function Hero() {
  const {
    register,
    reset,
    formState: { errors },
    onSubmit,
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <HeroContainer>
      <StyledHero>
        <LeftHero>
          <LeftTextHero>
            <LeftTextBold>
              Reclaim your mental wellbeing with betterspace
              <StyledLine>
                <img src={Line} alt="Star svg" />
              </StyledLine>
            </LeftTextBold>
            <LeftTextLight>
              Get matched with a professional therapist, you deserve the support
              you need.
            </LeftTextLight>
          </LeftTextHero>
          {/* <InputContainer> */}
          <StyledForm onSubmit={handleSubmit}>
            <Input
              inputType="join"
              type="email"
              id="email"
              placeholder="Email Address"
              register={register}
              error={errors.email}
            />
            <Button type="joinHero">Join</Button>
          </StyledForm>
          {/* </InputContainer> */}
        </LeftHero>
        <RightHero>
          <StyledFlower>
            <img src={Flower} alt="flower" />
          </StyledFlower>
          <img
            src={RightHeroImage}
            alt="Hero Image man and a woman hugging sign of peace"
          />
          <StyledStar>
            <img src={Star} alt="Star svg" />
          </StyledStar>
        </RightHero>
      </StyledHero>
    </HeroContainer>
  );
}

export default Hero;
