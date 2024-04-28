import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
// import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import Nav from "./Nav";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  /* padding: 4rem 4.8rem 6.4rem; */
  /* overflow: scroll; */

  @media screen and (max-width: 990px) {
    /* padding: 40px 16px 40px 16px; */
    justify-content: center;
    align-items: center;
  }
`;

// const Container = styled.div`
/* max-width: 121.6rem; */
/* margin: 0 auto; */
/* background-color: white; */
/* display: flex;
  flex-direction: column;
  gap: 3.2rem; */
// width: 100%;
// `;

//CONTAINER

// const Container = styled.div`
/* max-width: 100%; */
/* background-color: white;
  display: flex;
  justify-content: center; */
/* 
  background-color: #f8f4f0;
  gap: 4.8rem; */
/* padding: 64px 200px 64px 200px; */
/* width: 100%; */
/* width: 100vw; */
/* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
/* grid-template-columns: repeat(auto-fit, minmax(min(60rem, 100%) 1fr)); */
/* grid-template-columns: repeat(auto-fit, minmax(min-content, 30rem)); */

/* @media screen and (max-width: 990px) {
    padding: 40px 16px 40px 16px;
    justify-content: center;
    flex-direction: column; */
/* align-items: center; */
/* } */
/* @media screen and (max-width: 400px) {
    font-size: 2rem;
    line-height: 2.4rem;
    flex-direction: column;

    padding: 40px 16px 40px 16px;
  } */
// `;

///////////////

const theme = {
  colors: {
    green950: "var(--color-green-950)",
    // Define other colors here if needed
  },
};

function AppLayout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledAppLayout>
          <Nav />
          <Main>
            {/* <Container> */}
            <Outlet />
            {/* </Container> */}
          </Main>
          <Footer />
        </StyledAppLayout>
      </ThemeProvider>
    </>
  );
}

export default AppLayout;
