import styled from "styled-components";
import { COLORS } from "../../../../constants/colors";
import { FEEDBACK } from "../../../../constants/feedback";
import { type Error } from "../../../../types";

const ErrorMessage = styled.div`
  margin-top: 20px;
  & p {
    color: ${COLORS.ERROR};
  }
`;

const Index = ({ message }: Error) => {
  return (
    <ErrorMessage>
      <p>{message ? message : FEEDBACK.DEFAULT_ERROR}</p>
    </ErrorMessage>
  );
};

export default Index;
