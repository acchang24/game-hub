import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "84627acbe22541f6b856021e2d818bf6",
  },
});
