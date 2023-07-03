import styled from "styled-components";
import { FEEDBACK } from "../../../../constants/feedback";
import { COLORS } from "../../../../constants/colors";

const NotFoundMessage = styled.div`
  margin-top: 20px;
  & p {
    color: ${COLORS.DARK};
  }
`;

const Index = () => {
  return (
    <NotFoundMessage>
      <p>{FEEDBACK.NOT_FOUND}</p>
    </NotFoundMessage>
  );
};

export default Index;
