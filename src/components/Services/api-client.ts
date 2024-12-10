import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e8012b324dbf4912b2ec80361cfd15d2",
  },
});
