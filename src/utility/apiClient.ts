import axios, { AxiosRequestConfig } from "axios";

// Interface to pass a type in
// when calling .get with axios
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "84627acbe22541f6b856021e2d818bf6",
  },
});

class ApiClient<T> {
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, config)
      .then((response) => response.data);
  };

  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endPoint + "/" + id)
      .then((response) => response.data);
  };

  endPoint: string;
}

export default ApiClient;
