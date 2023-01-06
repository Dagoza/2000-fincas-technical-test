import axios from "axios";

export const useRequest = () => {
  const postRequest = async (endpoint, req) => {
    const resp = await axios.post(endpoint, req);
    console.log(resp);
    return resp;
  };

  return [postRequest];
};
