import axios from "axios";

// Interface to pass a type in
// when calling .get with axios
export interface FetchResponse<T> {
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "84627acbe22541f6b856021e2d818bf6",
  },
});
