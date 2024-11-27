import axios from "axios";
import {
  getPageFromQueryParam,
  getSearchFromQueryParam,
} from "../utils/helpers";

export const fetchCharacters = async () => {
  const queryPage = getPageFromQueryParam() || 1;
  const querySearch = getSearchFromQueryParam();

  const url = `${process.env.REACT_APP_BASE_URL}/character?page=${queryPage}&name=${querySearch}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (err) {
    if (err.response) {
      const { status, data } = err.response;
      throw new Error(
        `Error fetching characters: ${
          data?.message || "Unknown error"
        } (Status: ${status})`
      );
    } else if (err.request) {
      throw new Error(
        "No response received from the server. Please try again."
      );
    } else {
      throw new Error(`Request failed: ${err.message}`);
    }
  }
};

export const fetchCharacterById = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/character/${id}`
  );
  return response.data;
};
