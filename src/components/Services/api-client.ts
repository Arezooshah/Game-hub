import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3ed624d8d88040a2af37c437b36ab4e6",
  },
});
