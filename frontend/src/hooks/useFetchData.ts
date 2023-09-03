import { useState } from "react";
import { Transformer } from "../../types/types";
import useAxios from "./useAxios";

const useFetchData = () => {
  const [data, setData] = useState<Array<Transformer>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const axios = useAxios();

  const fetchAllData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`transformers`);
      setData(data?.payload?.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, data, isLoading, fetchAllData };
};

export default useFetchData;
