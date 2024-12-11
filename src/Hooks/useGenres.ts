// import { useQuery } from '@tanstack/react-query';
// import ms from 'ms';
// import genres from '../data/genres';
// import APIClient from '../services/api-client';
// import Genre from '../entities/Genre';
import React, { useEffect, useState } from "react";
import apiClient from "../components/Services/api-client";
import { CancelledError } from "@tanstack/react-query";

// const apiClient = new APIClient<Genre>('/genres');

interface Genre {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres = () =>
  // useQuery({
  //   queryKey: ['genres'],
  //   queryFn: apiClient.getAll,
  //   staleTime: ms('24h'),
  //   initialData: genres,
  // });

  {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState(" ");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CancelledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    }, []);
    return { genres, error, isLoading };
  };
export default useGenres;
