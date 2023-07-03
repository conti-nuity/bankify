import axios, { AxiosResponse } from "axios";
import { type Bank } from "../../types";

export const getBankList = (): Promise<AxiosResponse<Bank>> => {
  return new Promise<AxiosResponse<Bank>>((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/challenge/banks`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });
};
