import axios, { AxiosResponse } from "axios";

const url: string =
  "/v2/incidents?apikey=QYUEE3fEcFD7SGMJ6E7QBCMzdQGqRkAi&polylines=true" +
  "&polylineBounds=true&totals=true";

export const fetchTraffic = async (): Promise<AxiosResponse | null> => {
  const response = await axios.get(url, { withCredentials: false });

  return response;
};
