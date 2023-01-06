import axios from "axios";

export const useRequest = () => {
  const postRequest = async (endpoint, req) => {
    const { data } = await axios.post(endpoint, req);
    return data;
  };

  const getRequest = async (endpoint, headers) => {
    const { data } = await axios.get(endpoint, { headers });
    return data;
  };

  return [postRequest, getRequest];
};
