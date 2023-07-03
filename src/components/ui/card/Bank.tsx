import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { type Bank } from "../../../types";

const Card = styled.div`
  padding: 15px 20px;
  background: #fff;
  backdrop-filter: blur(135px);
  background-color: rgba(247, 247, 242, 0.44);
  box-shadow: 0 16px 32px -2px rgba(0, 0, 0, 0.1),
    0 8px 16px -2px rgba(0, 0, 0, 0);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Stack = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Photo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 7px;
  margin-right: 10px;
`;

const BankName = styled.h3`
  margin: 0;
  font-size: 17px;
  color: ${COLORS.PRIMARY};
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 7px 0 0;
  font-size: 14px;
  color: ${COLORS.DARK};
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
`;

const Index = (bank: Bank) => {
  return (
    <li>
      <Card>
        <Stack>
          <div>
            <Photo src={bank.url} alt={bank.bankName} />
          </div>
          <div>
            <BankName>{bank.bankName}</BankName>
            <Description>{bank.description}</Description>
          </div>
        </Stack>
      </Card>
    </li>
  );
};

export default Index;
