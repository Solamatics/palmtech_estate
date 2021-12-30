import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "64831b5c74mshb0c77a4ba1b0793p12dbb0jsn8dfa39230b01",
    }
  });

  return data;
};
