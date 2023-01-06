import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../constants/endpoints";
import { routes } from "../constants/routes";
import { useRequest } from "./useRequest";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const createRequest = async (username) => {
  return {
    requestHeader: {
      client: "Daniel",
      ipAdress: (await axios.get("https://geolocation-db.com/json/")).data.IPv4,
      userName: username,
      sessionID: uuidv4(),
      requestID: uuidv4(),
      activeRecord: 1,
    },
    requestBody: {
      docNumber: "",
      name: "*",
      phoneNumber: "",
    },
  };
};

export const useProducers = () => {
  const [producers, setProducers] = useState([]);
  const [_, getRequest] = useRequest();
  const [tokenSaved] = useLocalStorage("token", "");
  const navigate = useNavigate();

  const getProducers = async () => {
    try {
      const request = await createRequest("test");
      const {
        responseRepAuthPro: { responseBody },
      } = await getRequest(endpoints.registers, {
        headers: { token: tokenSaved },
      });
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
