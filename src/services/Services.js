import "es6-promise/auto";

const baseUrl = "https://api.hnpwa.com";
const version = "/v0";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json"
  }
};

export const getStoryPage = async (type, page) => {
  const URL = `${baseUrl}${version}/${type}/${page}.json`;

  return await fetch(URL, options).then((response) => {
    return response.json();
  });
};

export const getItem = (id) => {
  const URL = `${baseUrl}${version}/item/${id}.json`;

  return fetch(URL, options).then((response) => {
    return response.json();
  });
};
