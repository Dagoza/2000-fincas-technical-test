import { useLocalStorage } from "./useLocalStorage";

import { useRequest } from "./useRequest";
import { useNavigate } from "react-router-dom";

import { routes } from "../constants/routes";
import { endpoints } from "../constants/endpoints";
import toast from "react-hot-toast";

export const useAuth = () => {
  const [tokenSaved, saveToken] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const [postRequest] = useRequest();

  const createSession = async (payload) => {
    try {
      const { token } = await postRequest(endpoints.login, payload);
      saveToken(token);
      navigate("/" + routes.registers);
    } catch (e) {
      toast.error(e.response?.data?.error || "Datos incorrectos");
    }
  };

  const checkSession = async (payload) => {
    if (!tokenSaved) {
      navigate("/" + routes.login);
      toast.error("Su sesión a expirado");
    }
  };

  return {
    createSession,
    checkSession,
  };
};
