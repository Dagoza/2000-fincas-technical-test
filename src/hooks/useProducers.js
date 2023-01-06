import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../constants/endpoints";
import { routes } from "../constants/routes";
import { useRequest } from "./useRequest";

export const useProducers = () => {
  const [producers, setProducers] = useState([]);
  const [_, getRequest] = useRequest();
  const navigate = useNavigate();

  const getProducers = async () => {
    try {
      const {
        responseRepAuthPro: { responseBody },
      } = await getRequest(endpoints.registers);
      setProducers(responseBody.repProList);
    } catch (e) {
      navigate("/" + routes.login);
      toast.error(e.response?.data?.error || " Su sesión a expirado");
    }
  };

  return {
    getProducers,
    producers,
    setProducers,
  };
};
