import configurations from "../config";

function sfetch(url = "", otherParams = {}) {
  return fetch(configurations.baseUrl + url, {
    ...otherParams,
    credentials: "same-origin",
  });
}

module.exports = sfetch;
