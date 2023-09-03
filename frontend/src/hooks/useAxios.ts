import axios, { AxiosInstance } from "axios";
import { handleApiError } from "@/utils/handleApiErrors";

interface IUseAxios {
  (): AxiosInstance;
}

const useAxios: IUseAxios = () => {
  const headers = { "content-type": "application/json" };

  const axiosCall = axios.create({
    baseURL: process.env.BASE_URL,
    headers,
  });

  axiosCall.interceptors.response.use(
    (response) => response,
    (error) => {
      const errorMessage = handleApiError(error);
      return Promise.reject(errorMessage);
    },
  );

  return axiosCall;
};

export default useAxios;
