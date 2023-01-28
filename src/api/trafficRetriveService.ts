import axios, { AxiosResponse } from "axios";

const url: string = "api/v1/";

export const fetchLatestTraffic = async (): Promise<AxiosResponse | null> => {
  const response = await axios.get(`${url}events/latest`, {
    withCredentials: false,
  });
  return response;
};

export const fetchSpecificTraffic = async (
  time: number
): Promise<AxiosResponse | null> => {
  const response = await axios.get(`${url}events/specific/${time}`, {
    withCredentials: false,
  });
  return response;
};
