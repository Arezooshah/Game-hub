// import { useQuery } from '@tanstack/react-query';
// import ms from 'ms';
// import genres from '../data/genres';
// import APIClient from '../services/api-client';
// import Genre from '../entities/Genre';
import React, { useEffect, useState } from "react";
import apiClient from "../components/Services/api-client";
import { CancelledError } from "@tanstack/react-query";

// const apiClient = new APIClient<Genre>('/genres');

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(" ");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CancelledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};
export default useData;
