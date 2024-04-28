/* eslint-disable no-unused-vars */
import styled from "styled-components";
// import ContentImage from "/img/Content.svg";
import ImageHappy from "/img/IMGHappy.svg";
import StarFlower from "/img/starFlower.svg";

// Function to determine tab color based on index
const getTabColor = (index) => {
  switch (index) {
    case 0:
      return "rgba(239, 248, 122, 1)";
    case 1:
      return "rgba(248, 244, 240, 1)";
    case 2:
      return "rgba(207, 220, 255, 1)";
    default:
      return "pink";
  }
};

const StyledHappy = styled.section`
  background-color: rgba(2, 44, 34, 1);
  padding: 100px 200px 100px 200px;

  @media screen and (max-width: 990px) {
    padding: 40px 16px 40px 16px;
    justify-content: center;
    align-items: center;
  }
`;

const HappyContainer = styled.div`
  /* background-color: rgba(2, 44, 34, 1); */
  display: flex;

  gap: 2.4rem;
  @media screen and (max-width: 990px) {
    padding: 0px 0px 0px 0px;
    flex-direction: column;
  }
`;

const HappyImage = styled.picture`
  flex: 1;
  width: 100%;
  position: relative;

  img {
    border-radius: 1.6rem;
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
`;
const RightHappy = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
`;

const Tabs = styled.div`
  padding: 2.4rem;
  background-color: ${(props) => getTabColor(props.index)};
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: rgba(2, 44, 34, 1);
`;

const TabBoldText = styled.span`
  font-family: Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4rem;
  letter-spacing: -0.01em;
`;
const TabLightText = styled.span`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.004em;
`;

const StarFlow = styled.span`
  position: absolute;
  top: -4em;
  left: -4em;
  z-index: 9999;

  @media screen and (max-width: 990px) {
    top: -2em;
    left: -2em;
    img {
      width: 70%;
    }
  }
`;
function Happy() {
  const tabContent = [
    {
      header: "A safe haven",
      body: "Our platform provides a safe haven where you can share your thoughts, feelings, and experiences with others who understand.",
    },
    {
      header: "Expert guidance",
      body: "Betterspace provides access to a team of experienced mental health professionals and counselors who are committed to your well-being.",
    },
    {
      header: "Accessible care",
      body: "Our platform is available 24/7, ensuring that help is always within reach, whenever you need it.",
    },
  ];

  return (
    <StyledHappy>
      <HappyContainer>
        <HappyImage>
          <StarFlow>
            <img src={StarFlower} alt="star flower" />
          </StarFlow>
          <img src={ImageHappy} alt="content" />
        </HappyImage>

        <RightHappy>
          {Array.from({ length: 3 }, (_, i) => (
            <Tabs key={i} index={i}>
              <TabBoldText>{tabContent[i].header}</TabBoldText>
              <TabLightText>{tabContent[i].body}</TabLightText>
            </Tabs>
          ))}
        </RightHappy>
      </HappyContainer>
    </StyledHappy>
  );
}

export default Happy;
