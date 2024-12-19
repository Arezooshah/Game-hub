import { useQuery } from "@tanstack/react-query";
// import ms from "ms";
import platforms from "../components/data/platforms";
import APIClient from "../components/Services/api-client";
import Platform from "../components/entities/Platform";
import ms from "ms";
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
