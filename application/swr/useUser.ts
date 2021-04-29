import useSWR from "swr";
import fetcher from "../utils/fetch";
import _ from "lodash";

export default function useUser() {
  const { data, error } = useSWR("/api/user/self/", fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    isAuthenticated: !error && !_.isEmpty(data),
  };
}
