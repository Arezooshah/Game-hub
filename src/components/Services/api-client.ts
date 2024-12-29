// import axios, { AxiosRequestConfig } from "axios";

// export interface FetchResponse<T> {
//   count: number;
//   next: string | null;
//   results: T[];
// }

// const axiosInstance = axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "3ed624d8d88040a2af37c437b36ab4e6",
//   },
// });

// class APIClient<T> {
//   endpoint: string;

//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   getAll = (config: AxiosRequestConfig) => {
//     return axiosInstance
//       .get<FetchResponse<T>>(this.endpoint, config)
//       .then((res) => res.data);
//   };

//   get = (id: number | string) => {
//     return axiosInstance
//       .get<T>(this.endpoint + "/" + id)
//       .then((res) => res.data);
//   };
// }

// export default APIClient;

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3ed624d8d88040a2af37c437b36ab4e6",
  },
});
