import configurations from "../config";

function fetcher(url = "", otherParams = {}) {
  return fetch(configurations.baseUrl + url, {
    ...otherParams,
    credentials: "include",
  }).then((res) => res.json());
}

module.exports = fetcher;
