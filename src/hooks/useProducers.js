import { useState } from "react";
import { endpoints } from "../constants/endpoints";
import { useRequest } from "./useRequest";

export const useProducers = () => {
  const [producers, setProducers] = useState([]);
  const [_, getRequest] = useRequest();

  const getProducers = async () => {
    const {
      responseRepAuthPro: { responseBody },
    } = await getRequest(endpoints.registers);

    setProducers(responseBody.repProList);
  };

  return {
    getProducers,
    producers,
    setProducers,
  };
};
