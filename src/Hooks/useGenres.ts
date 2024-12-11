// import { useQuery } from '@tanstack/react-query';
// import ms from 'ms';
// import genres from '../data/genres';
// import APIClient from '../services/api-client';
// import Genre from '../entities/Genre';

import useData from "./useData";

// const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>("/genres");
// useQuery({
//   queryKey: ['genres'],
//   queryFn: apiClient.getAll,
//   staleTime: ms('24h'),
//   initialData: genres,
// });

export default useGenres;
