import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

interface BankList {
  children: React.ReactNode;
}

const Index = ({ children }: BankList) => {
  return <List>{children}</List>;
};

export default Index;
