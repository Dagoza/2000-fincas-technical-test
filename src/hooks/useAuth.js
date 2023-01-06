import { useLocalStorage } from "./useLocalStorage";

import { useRequest } from "./useRequest";
import { endpoints } from "../constants/endpoints";

export const useAuth = () => {
  const [tokenSaved, saveToken] = useLocalStorage("token", "");
  const [postRequest] = useRequest("token", "");

  const createSession = (payload) => {
    const { token } = postRequest(endpoints.login, payload);
    console.log(token);
    // saveToken(token);
  };

  return {
    createSession,
  };
};
