import { Fragment, useEffect, useState } from "react";
import { getBankList } from "../../services/actions/banks";
import { useBanksStore } from "../../store";
import { type Bank } from "../../types";
import { FEEDBACK } from "../../constants/feedback";
import styled from "styled-components";
import BankList from "../../components/ui/list/BankList";
import BankCard from "../../components/ui/card/Bank";
import ErrorMessage from "../../components/ui/feedback/error";
import Loading from "../../components/ui/feedback/loading";
import NoData from "../../components/ui/feedback/no-data";

// Styled
const Wrapper = styled.section`
  background: radial-gradient(
    circle,
    rgba(148, 66, 226, 0.15) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  height: calc(100vh - 100px);
`;

const Index = () => {
  // Global Store
  const banks = useBanksStore<any>((state: any) => state.banks);
  const setBanks = useBanksStore<any>((state: any) => state.setBanks);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Local Storage
  // @ts-ignore
  const localStorageBanks = JSON.parse(localStorage.getItem("banks")) || [];

  // Get data
  useEffect(() => {
    setLoading(true);
    // Local
    if (localStorageBanks.length) {
      setBanks(localStorageBanks);
      setLoading(false);
    } else {
      // API
      getBankList()
        .then((res) => {
          localStorage.setItem("banks", JSON.stringify(res));
          setBanks(res);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          console.log("Ocurrio un error", error);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          {banks.length ? (
            <BankList>
              {banks.map((bank: Bank) => (
                <BankCard key={bank.bankName} {...bank} />
              ))}
            </BankList>
          ) : (
            <Fragment>{!error && <NoData />}</Fragment>
          )}
        </Fragment>
      )}
      {error && <ErrorMessage message={FEEDBACK.ERROR} />}
    </Wrapper>
  );
};

export default Index;
