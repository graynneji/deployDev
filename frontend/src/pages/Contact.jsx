/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import styled, { css } from "styled-components";
import LinkedinCon from "/img/LinkedinCon.svg";
import InstagramCon from "/img/InstagramCon.svg";
import TwitterCon from "/img/TwittterCon.svg";
import FacebookCon from "/img/FacebookCon.svg";
import Button from "../ui/Button";
import { useLocation } from "react-router-dom";
import { useYupValidationResolver } from "../services/Resolver";
import { contactFormSchema } from "../services/validationSchema";

export const ContactContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  background-color: #f8f4f0;
  gap: 4.8rem;
  padding: 64px 200px 64px 200px;
  width: 100vw;
  /* Conditional styling for isJoinPage */
  ${({ $isJoinPage }) =>
    $isJoinPage &&
    css`
      /* Add your conditional styles here */
      justify-content: space-between;
    `}
  @media screen and (max-width: 990px) {
    padding: 40px 16px 40px 16px;
    justify-content: center;
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const TopText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const ContactBoldText = styled.h2`
  font-family: Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 4rem;
  line-height: 5.2rem;
  letter-spacing: -0.01em;
  color: #022c22;
`;
const ContactLightText = styled.h5`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: -0.004em;
  color: #022c22;
  /* text-wrap: balance; */
`;

const SocialContactCon = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: start;

  img {
    max-width: 48px;
    max-height: 48px;
    width: 100%;
    height: 100%;
  }
`;

const ContactForm = styled.div`
  background-color: white;
  padding: 3.2rem;
  border-radius: 1.6rem;
  gap: 2.4rem;
  display: flex;
  flex-direction: column;

  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  /* width: 100vw; */
  @media screen and (max-width: 600px) {
    width: 100%;
    /* display: flex;
    flex-direction: column;
    padding: 40px 16px 40px 16px; */
  }
`;

const MergeInput = styled.div`
  display: flex;
  gap: 2.4rem;
  /* width: 100%; */
  /* justify-content: space-between; */
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const PrivacyText = styled.span`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: center;
  color: rgba(2, 44, 34, 0.6);
`;

const Contact = () => {
  const location = useLocation();
  const resolver = useYupValidationResolver(contactFormSchema);
  const isContactPage = location.pathname === "/contact";
  const isJoinPage = location.pathname === "/join";

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <ContactContainer $isJoinPage={isJoinPage}>
        <LeftSide>
          {isContactPage && (
            <>
              <TopText>
                <ContactBoldText>Contact Us</ContactBoldText>
                <ContactLightText>
                  Get in touch with our team and we would get back to you as
                  soon as possible.
                </ContactLightText>
              </TopText>
              <SocialContactCon>
                <img src={LinkedinCon} alt="Contact us through LinkedIn " />
                <img src={InstagramCon} alt="Contact us through Instagram" />
                <img src={TwitterCon} alt="Contact us through Twitter" />
                <img src={FacebookCon} alt="Contact us through Facebook" />
              </SocialContactCon>
            </>
          )}

          {isJoinPage && (
            <>
              <TopText>
                <ContactBoldText>Join waitlist</ContactBoldText>
                <ContactLightText>
                  Be the first to take the first step towards better mental
                  health.
                </ContactLightText>
              </TopText>
            </>
          )}
        </LeftSide>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ContactForm>
            {isContactPage && (
              <>
                <MergeInput>
                  <Input
                    type="text"
                    inputType="text"
                    label="Name"
                    id="name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.name}
                  />

                  <Input
                    type="text"
                    label="Company"
                    inputType="text"
                    id="company"
                    placeholder="ABC Company (optional)"
                    register={register}
                    error={errors.company}
                  />
                </MergeInput>
                <MergeInput>
                  <Input
                    type="tel"
                    inputType="text"
                    label="Phone Number"
                    id="phone"
                    placeholder="(123) 456-7890"
                    register={register}
                    error={errors.phone}
                  />

                  <Input
                    type="email"
                    inputType="text"
                    label="Email Address"
                    id="email"
                    placeholder="example@example.com"
                    register={register}
                    error={errors.email}
                  />
                </MergeInput>

                <Input
                  type="textarea"
                  inputType="textarea"
                  label="Your Enquiry"
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  register={register}
                  error={errors.message}
                />
              </>
            )}
            {isJoinPage && (
              <>
                <Input
                  type="text"
                  inputType="text"
                  label="Name"
                  id="name"
                  placeholder="John Doe"
                  register={register}
                  error={errors.name}
                />
                <Input
                  type="email"
                  inputType="text"
                  label="Email Address"
                  id="email"
                  placeholder="example@example.com"
                  register={register}
                  error={errors.email}
                />
              </>
            )}
            <ButtonContainer>
              <Button type="submit">Submit</Button>
              <PrivacyText>
                By continuing you agree with betterspace Privacy Policy
              </PrivacyText>
            </ButtonContainer>
          </ContactForm>
        </form>
      </ContactContainer>
    </>
  );
};

export default Contact;
