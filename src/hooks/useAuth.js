import { useLocalStorage } from "./useLocalStorage";

import { useRequest } from "./useRequest";
import { useNavigate } from "react-router-dom";

import { routes } from "../constants/routes";
import { endpoints } from "../constants/endpoints";

export const useAuth = () => {
  const [tokenSaved, saveToken] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const [postRequest] = useRequest();

  const createSession = async (payload) => {
    const { token } = await postRequest(endpoints.login, payload);
    saveToken(token);
    navigate("/" + routes.registers);
  };

  const checkSession = async (payload) => {
    if (!tokenSaved) {
      navigate("/" + routes.login);
    }
  };

  return {
    createSession,
    checkSession,
  };
};
