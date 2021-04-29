import configurations from "../config";

export default function fetcher(url = "", otherParams = {}) {
  return fetch(configurations.baseUrl + url, {
    ...otherParams,
    credentials: "include",
  }).then((res) => res.json());
}
