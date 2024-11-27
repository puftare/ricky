import axios from "axios";
import {
  getPageFromQueryParam,
  getSearchFromQueryParam,
} from "../utils/helpers";

export const fetchCharacters = async () => {
  const queryPage = getPageFromQueryParam();
  const querySearch = getSearchFromQueryParam();

  let url = `${process.env.REACT_APP_BASE_URL}/character?page=${queryPage}&name=${querySearch}`;

  const response = await axios.get(url);
  return response.data;
};

export const fetchCharacterById = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/character/${id}`
  );
  return response.data;
};
