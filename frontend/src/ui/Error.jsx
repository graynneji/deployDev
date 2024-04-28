import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorMessageTitle = styled.h1`
  font-size: 3rem;
  color: #022c22;
  margin-bottom: 20px;
`;

const ErrorMessageText = styled.p`
  font-size: 1.5rem;
  color: #444;
`;
function NotFound() {
  const error = useRouteError();
  return (
    <ErrorMessageContainer>
      <ErrorMessageTitle>Something went wrong 😢</ErrorMessageTitle>
      <ErrorMessageText>{error.data || error.message}</ErrorMessageText>
      {/* <LinkButton to="-1">&larr; Go back</LinkButton> */}
    </ErrorMessageContainer>
  );
}

export default NotFound;
