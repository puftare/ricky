import axios from "axios";

export const fetchCharacters = async (page = 1, searchQuery = "") => {
  let url = `${process.env.REACT_APP_BASE_URL}/character?page=${page}`;

  if (searchQuery) {
    url += `&name=${searchQuery}`;
  }

  const response = await axios.get(url);
  return response.data;
};

export const fetchCharacterById = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/character/${id}`
  );
  return response.data;
};
